// 复习和测试功能模块

// 检查是否有需要复习的内容
function hasReviewItems() {
    const mistakes = userProgress.mistakes;
    return mistakes.spelling.length > 0 ||
           mistakes.grammar.length > 0 ||
           mistakes.speaking.length > 0;
}

// 显示复习提示
function showReviewPrompt() {
    const app = document.getElementById('app');
    const mistakeCount =
        userProgress.mistakes.spelling.length +
        userProgress.mistakes.grammar.length +
        userProgress.mistakes.speaking.length;

    app.innerHTML = `
        <div class="stage-container">
            <h2>📝 复习提示</h2>
            <div class="review-prompt">
                <p>检测到你有 <strong>${mistakeCount}</strong> 个需要复习的内容</p>
                <ul>
                    <li>拼写错误: ${userProgress.mistakes.spelling.length} 个</li>
                    <li>语法错误: ${userProgress.mistakes.grammar.length} 个</li>
                    <li>口语待提高: ${userProgress.mistakes.speaking.length} 个</li>
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

    // 收集所有需要复习的内容
    userProgress.mistakes.spelling.forEach(item => {
        reviewItems.push({ type: 'spelling', data: item });
    });
    userProgress.mistakes.grammar.forEach(item => {
        reviewItems.push({ type: 'grammar', data: item });
    });
    userProgress.mistakes.speaking.forEach(item => {
        reviewItems.push({ type: 'speaking', data: item });
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
        // 复习完成
        finishReview();
        return;
    }

    const item = reviewItems[0];
    const app = document.getElementById('app');

    if (item.type === 'spelling') {
        app.innerHTML = `
            <div class="stage-container">
                <h2>📝 拼写复习</h2>
                <p class="stage-desc">复习之前拼写错误的单词</p>
                <div class="progress-info">剩余 ${reviewItems.length} 个</div>

                <div class="test-card">
                    <p class="hint">单词: ${item.data.word}</p>
                    <p class="hint">来自: Lesson ${item.data.lesson}</p>
                    <button class="btn-speak-large" onclick="speakWord('${item.data.word}')">🔊 听发音</button>
                    <input type="text" id="reviewSpellingInput" class="spelling-input" placeholder="输入单词拼写" autocomplete="off">
                    <button class="btn-primary" onclick="checkReviewSpelling('${item.data.word}')">提交</button>
                </div>
            </div>
        `;
        document.getElementById('reviewSpellingInput').focus();
    } else if (item.type === 'grammar') {
        app.innerHTML = `
            <div class="stage-container">
                <h2>📖 语法复习</h2>
                <p class="stage-desc">复习之前做错的语法题</p>
                <div class="progress-info">剩余 ${reviewItems.length} 个</div>

                <div class="question-card">
                    <p class="question-text">${item.data.question}</p>
                    <p class="hint">来自: Lesson ${item.data.lesson}</p>
                    <div class="options">
                        ${item.data.options.map((opt, i) => `
                            <button class="option-btn" onclick="checkReviewGrammar(${i}, ${item.data.correct}, '${item.data.explanation}')">${opt}</button>
                        `).join('')}
                    </div>
                    <div class="feedback" id="reviewFeedback"></div>
                </div>
            </div>
        `;
    } else if (item.type === 'speaking') {
        app.innerHTML = `
            <div class="stage-container">
                <h2>🎤 口语复习</h2>
                <p class="stage-desc">复习之前发音不够准确的单词</p>
                <div class="progress-info">剩余 ${reviewItems.length} 个</div>

                <div class="test-card">
                    <div class="word-to-speak">
                        <h3>${item.data.word}</h3>
                        <p class="hint">来自: Lesson ${item.data.lesson}</p>
                        <p class="hint">上次得分: ${item.data.score}%</p>
                    </div>
                    <button class="btn-speak-large" onclick="speakWord('${item.data.word}')">🔊 听发音</button>
                    <div class="recording-controls">
                        <button class="btn-record" id="recordBtn" onclick="startReviewRecording('${item.data.word}')">🎤 开始录音</button>
                        <button class="btn-stop" id="stopBtn" onclick="stopRecording()" style="display:none;">⏹️ 停止录音</button>
                    </div>
                    <div id="recordingStatus"></div>
                </div>
            </div>
        `;
    }
}

// 检查复习拼写
function checkReviewSpelling(correctWord) {
    const input = document.getElementById('reviewSpellingInput').value.trim().toLowerCase();
    const correct = input === correctWord.toLowerCase();

    if (correct) {
        // 从错误列表中移除
        userProgress.mistakes.spelling = userProgress.mistakes.spelling.filter(
            item => item.word !== correctWord
        );
        saveProgress();
        showFeedback('✓ 正确！已掌握', 'success');
        reviewItems.shift();
        setTimeout(() => renderReview(), 1000);
    } else {
        showFeedback(`✗ 还是错误。正确拼写: ${correctWord}`, 'error');
        setTimeout(() => {
            document.getElementById('reviewSpellingInput').value = '';
            document.getElementById('reviewSpellingInput').focus();
        }, 2000);
    }
}

// 检查复习语法
function checkReviewGrammar(selected, correct, explanation) {
    const feedback = document.getElementById('reviewFeedback');

    if (selected === correct) {
        feedback.innerHTML = `<p class="correct">✓ 正确！${explanation}</p>`;
        // 从错误列表中移除
        const item = reviewItems[0].data;
        userProgress.mistakes.grammar = userProgress.mistakes.grammar.filter(
            g => g.question !== item.question
        );
        saveProgress();
        reviewItems.shift();
        setTimeout(() => renderReview(), 2000);
    } else {
        feedback.innerHTML = `<p class="incorrect">✗ 还是错误。${explanation}</p>`;
    }
}

// 开始复习录音
function startReviewRecording(word) {
    startRecording(word, 'word');

    // 重写onresult来处理复习
    const originalOnResult = speechRecognizer.onresult;
    speechRecognizer.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase().trim();
        const target = word.toLowerCase().trim();
        const score = calculateSimilarity(transcript, target);

        const status = document.getElementById('recordingStatus');
        status.innerHTML = `
            <div class="result ${score >= 70 ? 'success' : 'error'}">
                <p>你说的: ${transcript}</p>
                <p>准确率: ${score}%</p>
            </div>
        `;

        isRecording = false;
        document.getElementById('recordBtn').style.display = 'inline-block';
        document.getElementById('stopBtn').style.display = 'none';

        if (score >= 70) {
            // 从错误列表中移除
            userProgress.mistakes.speaking = userProgress.mistakes.speaking.filter(
                item => item.word !== word
            );
            saveProgress();
            reviewItems.shift();
            setTimeout(() => renderReview(), 2000);
        } else {
            setTimeout(() => {
                status.innerHTML = '<p class="hint">再试一次</p>';
            }, 2000);
        }
    };
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
                <button class="btn-primary" onclick="startNewLesson()">开始新课程</button>
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

// 每10课综合测试
function renderMilestoneTest() {
    const testLesson = currentLesson + 1;
    const startLesson = Math.floor(testLesson / 10) * 10 - 9;
    const endLesson = testLesson - 1;

    return `
        <div class="stage-container">
            <h2>🏆 第${testLesson}课综合测试</h2>
            <div class="milestone-intro">
                <p>恭喜你完成了 Lesson ${startLesson} - ${endLesson}！</p>
                <p>现在进行综合测试，检验学习成果</p>
                <div class="test-info">
                    <h3>测试内容：</h3>
                    <ul>
                        <li>📝 单词拼写 (10题)</li>
                        <li>📖 语法选择 (15题)</li>
                        <li>🎤 口语跟读 (5题)</li>
                        <li>✍️ 造句练习 (3题)</li>
                    </ul>
                    <p class="hint">通过标准: 总分 ≥ 70%</p>
                </div>
                <button class="btn-primary" onclick="startMilestoneTest()">开始测试</button>
            </div>
        </div>
    `;
}

// 开始综合测试
function startMilestoneTest() {
    // TODO: 实现综合测试逻辑
    alert('综合测试功能开发中...');
    loadStage('vocabulary');
}
