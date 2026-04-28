let currentLesson = 0;
let currentStage = 'vocabulary'; // vocabulary, spelling, translation, sentence, grammar, listening
let currentWordIndex = 0;
let userProgress = JSON.parse(localStorage.getItem('nceProgress')) || {
    currentLesson: 0,
    lessons: lessons.map(() => ({
        vocabulary: false,
        spelling: false,
        translation: false,
        sentence: false,
        grammar: false,
        listening: false
    })),
    mistakes: {
        spelling: [],      // { word, lesson, attempts }
        grammar: [],       // { question, lesson, attempts }
        translation: [],
        sentence: []       // { word, lesson }
    }
};

let spellingResults = [];
let translationResults = [];
let sentenceData = {};
let grammarResults = [];
let listeningResults = [];
let isReviewMode = false;
let reviewItems = [];

document.addEventListener('DOMContentLoaded', () => {
    currentLesson = userProgress.currentLesson;

    // 绑定课程选择按钮事件
    const btnLessonSelect = document.getElementById('btnLessonSelect');
    if (btnLessonSelect) {
        btnLessonSelect.addEventListener('click', showLessonSelector);
    }

    // 绑定模态框关闭按钮事件
    const btnModalClose = document.getElementById('btnModalClose');
    if (btnModalClose) {
        btnModalClose.addEventListener('click', closeLessonSelector);
    }

    // 恢复当前阶段
    const lessonProgress = userProgress.lessons[currentLesson];
    if (lessonProgress.listening) {
        // 本课已完成，检查是否需要复习或进入下一课
        if (hasReviewItems()) {
            loadStage('review');
        } else if (currentLesson < lessons.length - 1) {
            currentLesson++;
            userProgress.currentLesson = currentLesson;
            saveProgress();
            loadStage('vocabulary');
        } else {
            loadStage('vocabulary');
        }
    } else if (lessonProgress.grammar) {
        loadStage('listening');
    } else if (lessonProgress.sentence) {
        loadStage('grammar');
    } else if (lessonProgress.translation) {
        loadStage('sentence');
    } else if (lessonProgress.spelling) {
        loadStage('translation');
    } else if (lessonProgress.vocabulary) {
        loadStage('spelling');
    } else {
        loadStage('vocabulary');
    }
});

function loadStage(stage) {
    currentStage = stage;
    const app = document.getElementById('app');
    updateHeader();
    renderStageNav();

    switch(stage) {
        case 'vocabulary':
            app.innerHTML = renderVocabulary();
            break;
        case 'spelling':
            app.innerHTML = renderSpelling();
            initSpelling();
            break;
        case 'translation':
            app.innerHTML = renderTranslation();
            initTranslation();
            break;
        case 'sentence':
            app.innerHTML = renderSentence();
            initSentence();
            break;
        case 'grammar':
            app.innerHTML = renderGrammar();
            break;
        case 'listening':
            app.innerHTML = renderListening();
            break;
        case 'review':
            renderReview();
            break;
        case 'milestone-test':
            app.innerHTML = renderMilestoneTest();
            break;
    }
}

function updateHeader() {
    const lesson = lessons[currentLesson];
    document.getElementById('currentLessonDisplay').textContent = lesson.title;

    const stages = ['vocabulary', 'spelling', 'translation', 'sentence', 'grammar', 'listening'];
    const stageNames = ['单词学习', '拼写测试', '翻译练习', '造句训练', '语法测试', '听力测试'];
    const currentIndex = stages.indexOf(currentStage);
    const completed = stages.slice(0, currentIndex).filter(s => userProgress.lessons[currentLesson][s]).length;

    document.getElementById('progressText').textContent = `${completed}/6 完成 - ${stageNames[currentIndex]}`;
}

function renderStageNav() {
    const stages = ['vocabulary', 'spelling', 'translation', 'sentence', 'grammar', 'listening'];
    const stageNames = ['📚 单词', '✍️ 拼写', '🌏 翻译', '📝 造句', '📖 语法', '🎧 听力'];
    const progress = userProgress.lessons[currentLesson];

    const nav = document.getElementById('stageNav');
    nav.innerHTML = stages.map((stage, i) => {
        const isActive = stage === currentStage;
        const isCompleted = progress[stage];
        let cls = 'stage-nav-tab';
        if (isActive) cls += ' active';
        else if (isCompleted) cls += ' completed';
        return `<button class="${cls}" data-stage="${stage}">${stageNames[i]}</button>`;
    }).join('');

    nav.querySelectorAll('.stage-nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const stage = tab.dataset.stage;
            switchToStage(stage);
        });
    });
}

function switchToStage(stage) {
    currentStage = stage;
    currentWordIndex = 0;
    spellingResults = [];
    translationResults = [];
    sentenceData = {};
    grammarResults = [];
    listeningResults = [];
    isReviewMode = false;
    reviewItems = [];
    loadStage(stage);
}

function renderVocabulary() {
    const lesson = lessons[currentLesson];
    const word = lesson.vocabulary[currentWordIndex];

    return `
        <div class="stage-container">
            <h2>📚 单词学习</h2>
            <p class="stage-desc">学习本课的所有单词，点击"认识"继续下一个</p>
            <div class="progress-info">${currentWordIndex + 1} / ${lesson.vocabulary.length}</div>

            <div class="flashcard">
                <h3 class="word-display">${word.word}</h3>
                <p class="phonetic">${word.phonetic}</p>
                <p class="translation">${word.translation}</p>
                <p class="example">"${word.example}"</p>
                <button class="btn-speak" onclick="speakWord('${word.word}')">🔊 发音</button>
            </div>

            <div class="action-buttons">
                ${currentWordIndex > 0 ? '<button class="btn-secondary" onclick="previousVocab()">上一个</button>' : ''}
                <button class="btn-primary" onclick="nextVocab()">认识 →</button>
            </div>
        </div>
    `;
}

function speakWord(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // 尝试选择更好的英语语音
    const voices = speechSynthesis.getVoices();
    const preferredVoices = [
        'Google US English',
        'Microsoft David - English (United States)',
        'Samantha',
        'Alex',
        'Karen'
    ];

    // 查找首选语音
    let selectedVoice = null;
    for (const preferred of preferredVoices) {
        selectedVoice = voices.find(voice =>
            voice.name.includes(preferred) ||
            (voice.lang.startsWith('en-US') || voice.lang.startsWith('en_US'))
        );
        if (selectedVoice) break;
    }

    // 如果没找到，使用第一个英语语音
    if (!selectedVoice) {
        selectedVoice = voices.find(voice =>
            voice.lang.startsWith('en-US') ||
            voice.lang.startsWith('en_US') ||
            voice.lang.startsWith('en-GB') ||
            voice.lang.startsWith('en_GB')
        );
    }

    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }

    speechSynthesis.speak(utterance);
}

// 确保语音列表加载完成
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => {
        // 语音列表已加载
    };
}

function previousVocab() {
    if (currentWordIndex > 0) {
        currentWordIndex--;
        loadStage('vocabulary');
    }
}

function nextVocab() {
    const lesson = lessons[currentLesson];
    if (currentWordIndex < lesson.vocabulary.length - 1) {
        currentWordIndex++;
        loadStage('vocabulary');
    } else {
        userProgress.lessons[currentLesson].vocabulary = true;
        saveProgress();
        currentWordIndex = 0;
        loadStage('spelling');
    }
}

function renderSpelling() {
    const lesson = lessons[currentLesson];
    return `
        <div class="stage-container">
            <h2>✍️ 单词拼写测试</h2>
            <p class="stage-desc">听单词发音，输入正确的拼写。必须全部正确才能继续。</p>
            <div class="progress-info">${spellingResults.length} / ${lesson.vocabulary.length}</div>

            <div id="spellingTest"></div>
        </div>
    `;
}

function initSpelling() {
    spellingResults = [];
    showNextSpelling();
}

function showNextSpelling() {
    const lesson = lessons[currentLesson];
    if (spellingResults.length >= lesson.vocabulary.length) {
        const allCorrect = spellingResults.every(r => r.correct);
        if (allCorrect) {
            userProgress.lessons[currentLesson].spelling = true;
            saveProgress();
            loadStage('translation');
        } else {
            document.getElementById('spellingTest').innerHTML = `
                <div class="result-card error">
                    <h3>❌ 有 ${spellingResults.filter(r => !r.correct).length} 个单词拼写错误</h3>
                    <button class="btn-primary" onclick="initSpelling()">重新测试</button>
                </div>
            `;
        }
        return;
    }

    const word = lesson.vocabulary[spellingResults.length];
    document.getElementById('spellingTest').innerHTML = `
        <div class="test-card">
            <button class="btn-speak-large" onclick="speakWord('${word.word}')">🔊 播放单词</button>
            <p class="hint">提示: ${word.translation}</p>
            <input type="text" id="spellingInput" class="spelling-input" placeholder="输入单词拼写" autocomplete="off">
            <button class="btn-primary" onclick="checkSpelling('${word.word}')">提交</button>
        </div>
    `;

    document.getElementById('spellingInput').focus();
    document.getElementById('spellingInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkSpelling(word.word);
    });
}

function checkSpelling(correctWord) {
    const input = document.getElementById('spellingInput').value.trim().toLowerCase();
    const correct = input === correctWord.toLowerCase();

    spellingResults.push({ word: correctWord, input, correct });

    if (correct) {
        showFeedback('✓ 正确！', 'success');
        setTimeout(showNextSpelling, 800);
    } else {
        // 记录错误
        const existingMistake = userProgress.mistakes.spelling.find(m => m.word === correctWord);
        if (existingMistake) {
            existingMistake.attempts++;
        } else {
            userProgress.mistakes.spelling.push({
                word: correctWord,
                lesson: lessons[currentLesson].id,
                attempts: 1
            });
        }
        saveProgress();

        showFeedback(`✗ 错误！正确拼写是: ${correctWord}`, 'error');
        setTimeout(showNextSpelling, 2000);
    }
}

function renderTranslation() {
    const lesson = lessons[currentLesson];
    return `
        <div class="stage-container">
            <h2>🌏 翻译练习</h2>
            <p class="stage-desc">看中文句子，输入对应的英文翻译。全部正确才能继续。</p>
            <div class="progress-info">${translationResults.length} / ${lesson.translation.length}</div>

            <div id="translationTest"></div>
        </div>
    `;
}

function initTranslation() {
    translationResults = [];
    showNextTranslation();
}

function showNextTranslation() {
    const lesson = lessons[currentLesson];

    if (translationResults.length >= lesson.translation.length) {
        const allCorrect = translationResults.every(r => r.correct);
        if (allCorrect) {
            userProgress.lessons[currentLesson].translation = true;
            saveProgress();
            loadStage('sentence');
        } else {
            const wrongCount = translationResults.filter(r => !r.correct).length;
            document.getElementById('translationTest').innerHTML = `
                <div class="result-card error">
                    <h3>❌ 有 ${wrongCount} 句翻译不准确</h3>
                    <button class="btn-primary" onclick="initTranslation()">重新练习</button>
                </div>
            `;
        }
        return;
    }

    const itemIndex = translationResults.length;
    const item = lesson.translation[itemIndex];
    document.getElementById('translationTest').innerHTML = `
        <div class="test-card">
            <div class="chinese-sentence">
                <p class="chinese-text">${item.chinese}</p>
            </div>
            <input type="text" id="translationInput" class="translation-input" placeholder="输入英文翻译" autocomplete="off">
            <button class="btn-primary" id="submitTranslationBtn">提交</button>
            <div id="translationFeedback"></div>
            <p class="hint">点击下方按钮听标准英文发音</p>
            <button class="btn-secondary" id="listenAnswerBtn" style="width:100%;">🔊 听标准答案</button>
        </div>
    `;

    document.getElementById('submitTranslationBtn').onclick = () => submitTranslation(lesson.translation[itemIndex].english);
    document.getElementById('listenAnswerBtn').onclick = () => speakWord(lesson.translation[itemIndex].english);

    const input = document.getElementById('translationInput');
    input.focus();
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') submitTranslation(lesson.translation[itemIndex].english);
    });
}

function submitTranslation(correctEnglish) {
    const input = document.getElementById('translationInput');
    const feedback = document.getElementById('translationFeedback');
    const userAnswer = input.value.trim().toLowerCase();
    const expected = correctEnglish.toLowerCase();

    if (!userAnswer) {
        alert('请输入英文翻译');
        return;
    }

    const score = calculateSimilarity(userAnswer, expected);
    const isCorrect = score >= 75;

    translationResults.push({
        correct: isCorrect,
        userAnswer: input.value.trim(),
        expected: correctEnglish,
        score
    });

    if (isCorrect) {
        feedback.innerHTML = `<p class="correct">✓ 准确率 ${score}%，正确！</p>`;
        setTimeout(showNextTranslation, 1000);
    } else {
        feedback.innerHTML = `
            <p class="incorrect">✗ 准确率 ${score}%</p>
            <p class="incorrect">标准答案: ${correctEnglish}</p>
        `;
        setTimeout(showNextTranslation, 2500);
    }
}
function calculateSimilarity(str1, str2) {
    if (str1 === str2) return 100;
    if (str1.includes(str2) || str2.includes(str1)) return 85;

    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    const editDistance = levenshteinDistance(str1, str2);
    const similarity = ((longer.length - editDistance) / longer.length) * 100;

    return Math.max(0, Math.round(similarity));
}

function levenshteinDistance(str1, str2) {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[str2.length][str1.length];
}

function renderSentence() {
    const lesson = lessons[currentLesson];
    return `
        <div class="stage-container">
            <h2>📝 造句训练</h2>
            <p class="stage-desc">用每个单词造3个句子，提交后继续下一个单词</p>

            <div id="sentenceTest"></div>
        </div>
    `;
}

function initSentence() {
    sentenceData = {};
    showNextSentence();
}

function showNextSentence() {
    const lesson = lessons[currentLesson];
    const completedWords = Object.keys(sentenceData).length;

    if (completedWords >= lesson.vocabulary.length) {
        userProgress.lessons[currentLesson].sentence = true;
        saveProgress();
        loadStage('grammar');
        return;
    }

    const word = lesson.vocabulary[completedWords];
    document.getElementById('sentenceTest').innerHTML = `
        <div class="test-card">
            <div class="word-info">
                <h3>${word.word}</h3>
                <p>${word.translation} - ${word.phonetic}</p>
                <p class="example">例句: ${word.example}</p>
            </div>

            <div class="sentence-inputs">
                <div class="sentence-item">
                    <label>句子 1:</label>
                    <input type="text" id="sentence1" class="sentence-input" placeholder="用 ${word.word} 造句">
                </div>
                <div class="sentence-item">
                    <label>句子 2:</label>
                    <input type="text" id="sentence2" class="sentence-input" placeholder="用 ${word.word} 造句">
                </div>
                <div class="sentence-item">
                    <label>句子 3:</label>
                    <input type="text" id="sentence3" class="sentence-input" placeholder="用 ${word.word} 造句">
                </div>
            </div>

            <button class="btn-primary" onclick="submitSentences('${word.word}')">提交</button>
        </div>
    `;
}

function submitSentences(word) {
    const s1 = document.getElementById('sentence1').value.trim();
    const s2 = document.getElementById('sentence2').value.trim();
    const s3 = document.getElementById('sentence3').value.trim();

    if (!s1 || !s2 || !s3) {
        alert('请完成所有3个句子');
        return;
    }

    const wordLower = word.toLowerCase();
    const allContainWord = [s1, s2, s3].every(s => s.toLowerCase().includes(wordLower));

    if (!allContainWord) {
        alert(`请确保每个句子都包含单词 "${word}"`);
        return;
    }

    sentenceData[word] = [s1, s2, s3];
    showFeedback('✓ 很好！继续下一个单词', 'success');
    setTimeout(showNextSentence, 800);
}

function renderGrammar() {
    const lesson = lessons[currentLesson];
    return `
        <div class="stage-container">
            <h2>📖 语法测试</h2>
            <p class="stage-desc">完成语法选择题，必须全部正确才能继续</p>

            <div id="grammarTest">
                ${lesson.grammar.map((q, i) => `
                    <div class="question-card">
                        <p class="question-text">${i + 1}. ${q.question}</p>
                        <div class="options">
                            ${q.options.map((opt, j) => `
                                <button class="option-btn" onclick="selectGrammar(${i}, ${j})">${opt}</button>
                            `).join('')}
                        </div>
                        <div class="feedback" id="grammar-feedback-${i}"></div>
                    </div>
                `).join('')}
            </div>

            <button class="btn-primary btn-submit" onclick="submitGrammar()">提交答案</button>
        </div>
    `;
}

function selectGrammar(questionIndex, optionIndex) {
    grammarResults[questionIndex] = optionIndex;

    const card = document.querySelectorAll('.question-card')[questionIndex];
    card.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.toggle('selected', i === optionIndex);
    });
}

function submitGrammar() {
    const lesson = lessons[currentLesson];

    if (grammarResults.length < lesson.grammar.length) {
        alert('请完成所有题目');
        return;
    }

    let allCorrect = true;
    lesson.grammar.forEach((q, i) => {
        const feedback = document.getElementById(`grammar-feedback-${i}`);
        if (grammarResults[i] === q.correct) {
            feedback.innerHTML = `<p class="correct">✓ 正确！${q.explanation}</p>`;
        } else {
            feedback.innerHTML = `<p class="incorrect">✗ 错误。${q.explanation}</p>`;
            allCorrect = false;

            // 记录语法错误
            const existingMistake = userProgress.mistakes.grammar.find(
                m => m.question === q.question && m.lesson === lessons[currentLesson].id
            );
            if (!existingMistake) {
                userProgress.mistakes.grammar.push({
                    question: q.question,
                    options: q.options,
                    correct: q.correct,
                    explanation: q.explanation,
                    lesson: lessons[currentLesson].id,
                    attempts: 1
                });
            } else {
                existingMistake.attempts++;
            }
        }
    });

    saveProgress();

    // 禁用选项按钮和提交按钮，显示解析
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    const submitBtn = document.querySelector('.btn-submit');
    if (submitBtn) submitBtn.disabled = true;

    if (allCorrect) {
        userProgress.lessons[currentLesson].grammar = true;
        saveProgress();
        // 添加继续按钮
        const container = document.getElementById('grammarTest');
        container.insertAdjacentHTML('afterend', `
            <div style="text-align: center; margin-top: 20px;">
                <button class="btn-primary" onclick="loadStage('listening')" style="font-size:1.1em; padding:14px 40px;">
                    ✅ 全部正确，继续下一阶段
                </button>
            </div>
        `);
    } else {
        // 添加重新作答按钮
        const container = document.getElementById('grammarTest');
        container.insertAdjacentHTML('afterend', `
            <div style="text-align: center; margin-top: 20px;">
                <p style="color:#991b1b; margin-bottom:12px; font-weight:bold;">有 ${lesson.grammar.length - grammarResults.filter(r => r !== undefined && lesson.grammar[r]?.correct === r).length} 道题错误，请查看解析后重试</p>
                <button class="btn-primary" onclick="loadStage('grammar')" style="background:#ef4444; font-size:1.1em; padding:14px 40px;">
                    重新作答
                </button>
            </div>
        `);
    }
}

function renderListening() {
    const lesson = lessons[currentLesson];
    return `
        <div class="stage-container">
            <h2>🎧 听力测试</h2>
            <p class="stage-desc">听对话，回答问题。必须全部正确才能完成本课。</p>

            <div class="listening-controls">
                <button class="btn-speak-large" onclick="playDialogue()">🔊 播放对话</button>
                <button class="btn-secondary" onclick="toggleTranscript()">显示/隐藏文本</button>
            </div>

            <div class="transcript" id="transcript" style="display:none;">
                <p>${lesson.listening.dialogue}</p>
            </div>

            <div id="listeningTest">
                ${lesson.listening.questions.map((q, i) => `
                    <div class="question-card">
                        <p class="question-text">${i + 1}. ${q.question}</p>
                        <div class="options">
                            ${q.options.map((opt, j) => `
                                <button class="option-btn" onclick="selectListening(${i}, ${j})">${opt}</button>
                            `).join('')}
                        </div>
                        <div class="feedback" id="listening-feedback-${i}"></div>
                    </div>
                `).join('')}
            </div>

            <button class="btn-primary btn-submit" onclick="submitListening()">提交答案</button>
        </div>
    `;
}

function playDialogue() {
    const lesson = lessons[currentLesson];
    const utterance = new SpeechSynthesisUtterance(lesson.listening.dialogue);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
}

function toggleTranscript() {
    const transcript = document.getElementById('transcript');
    transcript.style.display = transcript.style.display === 'none' ? 'block' : 'none';
}

function selectListening(questionIndex, optionIndex) {
    listeningResults[questionIndex] = optionIndex;

    const card = document.querySelectorAll('.question-card')[questionIndex];
    card.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.toggle('selected', i === optionIndex);
    });
}

function submitListening() {
    const lesson = lessons[currentLesson];

    if (listeningResults.length < lesson.listening.questions.length) {
        alert('请完成所有题目');
        return;
    }

    let allCorrect = true;
    lesson.listening.questions.forEach((q, i) => {
        const feedback = document.getElementById(`listening-feedback-${i}`);
        if (listeningResults[i] === q.correct) {
            feedback.innerHTML = `<p class="correct">✓ 正确！</p>`;
        } else {
            feedback.innerHTML = `<p class="incorrect">✗ 错误。正确答案: ${q.options[q.correct]}</p>`;
            allCorrect = false;
        }
    });

    if (allCorrect) {
        userProgress.lessons[currentLesson].listening = true;
        saveProgress();

        if (currentLesson < lessons.length - 1) {
            setTimeout(() => {
                alert('🎉 恭喜完成本课！解锁下一课');
                currentLesson++;
                userProgress.currentLesson = currentLesson;
                saveProgress();
                currentWordIndex = 0;
                loadStage('vocabulary');
            }, 1500);
        } else {
            setTimeout(() => {
                alert('🎉🎉🎉 恭喜完成所有课程！');
            }, 1500);
        }
    } else {
        showFeedback('有错误，请重新作答', 'error');
        listeningResults = [];
        setTimeout(() => loadStage('listening'), 2000);
    }
}

function showFeedback(message, type) {
    const feedback = document.createElement('div');
    feedback.className = `floating-feedback ${type}`;
    feedback.textContent = message;
    document.body.appendChild(feedback);

    setTimeout(() => feedback.remove(), 2000);
}

function saveProgress() {
    localStorage.setItem('nceProgress', JSON.stringify(userProgress));
}

function showLessonSelector() {
    console.log('showLessonSelector called'); // 调试日志
    const modal = document.getElementById('lessonSelectorModal');
    const lessonList = document.getElementById('lessonList');

    if (!modal) {
        console.error('Modal not found!');
        return;
    }

    if (!lessonList) {
        console.error('Lesson list not found!');
        return;
    }

    // 生成课程列表
    lessonList.innerHTML = lessons.map((lesson, index) => {
        const progress = userProgress.lessons[index];
        const completed = Object.values(progress).filter(v => v).length;
        const isCurrentLesson = index === currentLesson;
        const isCompleted = completed === 6;

        return `
            <div class="lesson-item ${isCurrentLesson ? 'current' : ''} ${isCompleted ? 'completed' : ''}"
                 data-lesson-index="${index}">
                <div class="lesson-info">
                    <h3>${lesson.title}</h3>
                    <p class="lesson-desc">${lesson.vocabulary.length} 个单词</p>
                </div>
                <div class="lesson-status">
                    ${isCompleted ? '<span class="badge-success">✓ 已完成</span>' :
                      isCurrentLesson ? '<span class="badge-current">学习中</span>' :
                      `<span class="badge-progress">${completed}/6</span>`}
                </div>
            </div>
        `;
    }).join('');

    // 使用事件委托处理点击
    lessonList.onclick = (e) => {
        const lessonItem = e.target.closest('.lesson-item');
        if (lessonItem) {
            const index = parseInt(lessonItem.dataset.lessonIndex);
            selectLesson(index);
        }
    };

    modal.style.display = 'flex';
    console.log('Modal displayed');
}

function closeLessonSelector() {
    const modal = document.getElementById('lessonSelectorModal');
    modal.style.display = 'none';
}

function selectLesson(lessonIndex) {
    currentLesson = lessonIndex;
    userProgress.currentLesson = lessonIndex;
    saveProgress();

    // 恢复该课程的进度
    const lessonProgress = userProgress.lessons[currentLesson];
    if (lessonProgress.listening) {
        loadStage('vocabulary'); // 已完成，从头开始
    } else if (lessonProgress.grammar) {
        loadStage('listening');
    } else if (lessonProgress.sentence) {
        loadStage('grammar');
    } else if (lessonProgress.translation) {
        loadStage('sentence');
    } else if (lessonProgress.spelling) {
        loadStage('translation');
    } else if (lessonProgress.vocabulary) {
        loadStage('spelling');
    } else {
        loadStage('vocabulary');
    }

    closeLessonSelector();
}

// 点击模态框外部关闭
document.addEventListener('click', (e) => {
    const modal = document.getElementById('lessonSelectorModal');
    if (e.target === modal) {
        closeLessonSelector();
    }
});

// 确保函数在全局作用域可用
window.showLessonSelector = showLessonSelector;
window.closeLessonSelector = closeLessonSelector;
window.selectLesson = selectLesson;

