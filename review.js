// 复习和测试功能模块

// 检查是否有需要复习的内容
function hasReviewItems() {
    return userProgress.mistakes.spelling.length > 0 ||
           userProgress.mistakes.grammar.length > 0 ||
           userProgress.mistakes.translation.length > 0;
}

// 显示复习提示
function showReviewPrompt() {
    const app = document.getElementById('app');
    const mistakeCount =
        userProgress.mistakes.spelling.length +
        userProgress.mistakes.grammar.length +
        userProgress.mistakes.translation.length;

    app.innerHTML = `
        <div class="stage-container">
            <h2>📝 复习提示</h2>
            <div class="review-prompt">
                <p>检测到你有 <strong>${mistakeCount}</strong> 个需要复习的内容</p>
                <ul>
                    <li>拼写错误: ${userProgress.mistakes.spelling.length} 个</li>
                    <li>语法错误: ${userProgress.mistakes.grammar.length} 个</li>
                    <li>翻译错误: ${userProgress.mistakes.translation.length} 个</li>
                </ul>
                <p>建议先复习这些内容，巩固学习效果</p>
                <div class="action-buttons">
                    <button class="btn-primary" onclick="startReview()">开始复习</button>
                    <button class="btn-secondary" onclick="skipReview()">跳过复习</button>
                </div>
            </div>
        </div>
    `;
}

// 开始复习
function startReview() {
    isReviewMode = true;
    reviewItems = [];
    reviewBusy = false;

    // 收集所有需要复习的内容
    userProgress.mistakes.spelling.forEach(item => {
        reviewItems.push({ type: 'spelling', data: item });
    });
    userProgress.mistakes.grammar.forEach(item => {
        reviewItems.push({ type: 'grammar', data: item });
    });
    userProgress.mistakes.translation.forEach(item => {
        reviewItems.push({ type: 'translation', data: item });
    });

    // 打乱顺序
    reviewItems.sort(() => Math.random() - 0.5);

    loadStage('review');
}

// 跳过复习
function skipReview() {
    isReviewMode = false;
    loadStage('vocabulary');
}

// 渲染复习界面
function renderReview() {
    if (reviewItems.length === 0) {
        finishReview();
        return;
    }

    const item = reviewItems[0];
    const app = document.getElementById('app');

    if (item.type === 'spelling') {
        const word = item.data.word;
        app.innerHTML = `
            <div class="stage-container">
                <h2>📝 拼写复习</h2>
                <p class="stage-desc">复习之前拼写错误的单词</p>
                <div class="progress-info">剩余 ${reviewItems.length} 个</div>

                <div class="test-card">
                    <p class="hint">提示: 来自 Lesson ${item.data.lesson}</p>
                    <button class="btn-speak-large" onclick="speakWord('${word}')">🔊 听发音</button>
                    <input type="text" id="reviewSpellingInput" class="spelling-input" placeholder="输入单词拼写" autocomplete="off">
                    <button class="btn-primary" onclick="checkReviewSpelling('${word}')">提交</button>
                </div>
            </div>
        `;
        document.getElementById('reviewSpellingInput').focus();
    } else if (item.type === 'grammar') {
        const q = item.data;
        const lessonId = q.lesson;
        app.innerHTML = `
            <div class="stage-container">
                <h2>📖 语法复习</h2>
                <p class="stage-desc">复习之前做错的语法题</p>
                <div class="progress-info">剩余 ${reviewItems.length} 个</div>

                <div class="question-card">
                    <p class="question-text">${q.question}</p>
                    <p class="hint">来自: Lesson ${lessonId}</p>
                    <div class="options">
                        ${q.options.map((opt, i) => `
                            <button class="option-btn" onclick="checkReviewGrammar(${i}, ${q.correct}, this)">${opt}</button>
                        `).join('')}
                    </div>
                    <div class="feedback" id="reviewGrammarFeedback"></div>
                </div>
            </div>
        `;
    } else if (item.type === 'translation') {
        const t = item.data;
        app.innerHTML = `
            <div class="stage-container">
                <h2>🌏 翻译复习</h2>
                <p class="stage-desc">复习之前翻译不准确的句子</p>
                <div class="progress-info">剩余 ${reviewItems.length} 个</div>

                <div class="test-card">
                    <div class="chinese-sentence">
                        <p class="chinese-text">${t.chinese}</p>
                    </div>
                    <p class="hint">来自: Lesson ${t.lesson} | 上次准确率: ${t.score}%</p>
                    <input type="text" id="reviewTranslationInput" class="translation-input" placeholder="输入英文翻译" autocomplete="off">
                    <button class="btn-primary" id="reviewTranslationBtn">提交</button>
                    <div id="reviewTranslationFeedback"></div>
                    <p class="hint">点击下方按钮听标准英文发音</p>
                    <button class="btn-secondary" id="reviewListenBtn" style="width:100%;">🔊 听标准答案</button>
                </div>
            </div>
        `;
        document.getElementById('reviewTranslationBtn').onclick = () => checkReviewTranslation(t.expected, t.chinese);
        document.getElementById('reviewListenBtn').onclick = () => speakWord(t.expected);
        document.getElementById('reviewTranslationInput').focus();
    }
}

// 检查复习拼写
function checkReviewSpelling(correctWord) {
    if (reviewBusy) return;
    reviewBusy = true;
    const input = document.getElementById('reviewSpellingInput').value.trim().toLowerCase();
    const correct = input === correctWord.toLowerCase();

    if (correct) {
        userProgress.mistakes.spelling = userProgress.mistakes.spelling.filter(
            item => item.word !== correctWord
        );
        saveProgress();
        showFeedback('✓ 正确！已掌握', 'success');
        reviewItems.shift();
        setTimeout(() => { reviewBusy = false; renderReview(); }, 1000);
    } else {
        showFeedback(`✗ 错误。正确拼写: ${correctWord}`, 'error');
        const item = reviewItems.shift();
        reviewItems.push(item);
        setTimeout(() => { reviewBusy = false; renderReview(); }, 1500);
    }
}

// 检查复习语法
function checkReviewGrammar(selected, correct, btn) {
    if (reviewBusy) return;
    reviewBusy = true;
    const feedback = document.getElementById('reviewGrammarFeedback');

    if (selected === correct) {
        feedback.innerHTML = `<p class="correct">✓ 正确！</p>`;
        const item = reviewItems[0].data;
        userProgress.mistakes.grammar = userProgress.mistakes.grammar.filter(
            g => g.question !== item.question
        );
        saveProgress();
        reviewItems.shift();
        setTimeout(() => { reviewBusy = false; renderReview(); }, 1500);
    } else {
        const q = reviewItems[0].data;
        feedback.innerHTML = `
            <p class="incorrect">✗ 错误。正确答案: ${q.options[q.correct]}</p>
            <p class="hint">${q.explanation}</p>
        `;
        // 移到末尾稍后重试
        const item = reviewItems.shift();
        reviewItems.push(item);
        setTimeout(() => { reviewBusy = false; renderReview(); }, 2000);
    }
}

// 检查复习翻译
function checkReviewTranslation(correctEnglish, chinese) {
    if (reviewBusy) return;
    reviewBusy = true;
    const input = document.getElementById('reviewTranslationInput');
    const feedback = document.getElementById('reviewTranslationFeedback');
    const userAnswer = input.value.trim().toLowerCase();
    const expected = correctEnglish.toLowerCase();

    if (!userAnswer) { reviewBusy = false; return; }

    const score = calculateSimilarity(userAnswer, expected);
    const isCorrect = score >= 75;

    if (isCorrect) {
        feedback.innerHTML = `<p class="correct">✓ 准确率 ${score}%，正确！已掌握</p>`;
        userProgress.mistakes.translation = userProgress.mistakes.translation.filter(
            m => !(m.chinese === chinese && m.lesson === reviewItems[0].data.lesson)
        );
        saveProgress();
        reviewItems.shift();
        setTimeout(() => { reviewBusy = false; renderReview(); }, 1500);
    } else {
        feedback.innerHTML = `
            <p class="incorrect">✗ 准确率 ${score}%</p>
            <p class="incorrect">标准答案: ${correctEnglish}</p>
        `;
        // 更新分数
        const mistake = userProgress.mistakes.translation.find(
            m => m.chinese === chinese && m.lesson === reviewItems[0].data.lesson
        );
        if (mistake) {
            mistake.attempts++;
            mistake.score = score;
            saveProgress();
        }
        // 移到末尾稍后重试
        const item = reviewItems.shift();
        reviewItems.push(item);
        setTimeout(() => { reviewBusy = false; renderReview(); }, 2000);
    }
}

// 完成复习
function finishReview() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="stage-container">
            <h2>🎉 复习完成！</h2>
            <div class="result-card success">
                <p>太棒了！你已经完成了所有复习内容</p>
                <p>现在可以开始新课程了</p>
                <div class="action-buttons" style="margin-top:20px;">
                    <button class="btn-primary" onclick="startNewLesson()">继续学习</button>
                    <button class="btn-secondary" onclick="closeReview()">关闭</button>
                </div>
            </div>
        </div>
    `;
}

// 开始新课程
function startNewLesson() {
    isReviewMode = false;
    reviewItems = [];
    loadStage('vocabulary');
}

// 关闭复习，回到当前位置
function closeReview() {
    isReviewMode = false;
    reviewItems = [];
    loadStage(currentStage === 'review' ? 'vocabulary' : currentStage);
}

// 显示错题本（从外部入口调用）
function showMistakeBook() {
    isReviewMode = true;
    reviewItems = [];
    reviewBusy = false;

    userProgress.mistakes.spelling.forEach(item => {
        reviewItems.push({ type: 'spelling', data: item });
    });
    userProgress.mistakes.grammar.forEach(item => {
        reviewItems.push({ type: 'grammar', data: item });
    });
    userProgress.mistakes.translation.forEach(item => {
        reviewItems.push({ type: 'translation', data: item });
    });

    if (reviewItems.length === 0) {
        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="stage-container">
                <h2>📖 错题本</h2>
                <div class="result-card success">
                    <p style="font-size:1.3em;">🎉 没有错题！</p>
                    <p>继续保持</p>
                    <button class="btn-primary" style="margin-top:20px;" onclick="switchToStage('vocabulary')">返回</button>
                </div>
            </div>
        `;
        return;
    }

    loadStage('review');
}
