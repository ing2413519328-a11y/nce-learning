let currentLesson = 0;
let currentStage = 'vocabulary'; // vocabulary, spelling, speaking, sentence, grammar, listening
let currentWordIndex = 0;
let userProgress = JSON.parse(localStorage.getItem('nceProgress')) || {
    currentLesson: 0,
    lessons: lessons.map(() => ({
        vocabulary: false,
        spelling: false,
        speaking: false,
        sentence: false,
        grammar: false,
        listening: false
    })),
    mistakes: {
        spelling: [],      // { word, lesson, attempts }
        grammar: [],       // { question, lesson, attempts }
        speaking: [],      // { word, lesson, score }
        sentence: []       // { word, lesson }
    }
};

let spellingResults = [];
let speakingResults = [];
let sentenceData = {};
let grammarResults = [];
let listeningResults = [];
let isReviewMode = false;
let reviewItems = [];

const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let speechRecognizer = null;
let isRecording = false;
let recordingTimeout = null;
if (recognition) {
    speechRecognizer = new recognition();
    speechRecognizer.lang = 'en-US';
    speechRecognizer.continuous = false;
    speechRecognizer.interimResults = false;
}

document.addEventListener('DOMContentLoaded', () => {
    currentLesson = userProgress.currentLesson;

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
    } else if (lessonProgress.speaking) {
        loadStage('sentence');
    } else if (lessonProgress.spelling) {
        loadStage('speaking');
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

    switch(stage) {
        case 'vocabulary':
            app.innerHTML = renderVocabulary();
            break;
        case 'spelling':
            app.innerHTML = renderSpelling();
            initSpelling();
            break;
        case 'speaking':
            app.innerHTML = renderSpeaking();
            initSpeaking();
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

    const stages = ['vocabulary', 'spelling', 'speaking', 'sentence', 'grammar', 'listening'];
    const stageNames = ['单词学习', '拼写测试', '口语训练', '造句训练', '语法测试', '听力测试'];
    const currentIndex = stages.indexOf(currentStage);
    const completed = stages.slice(0, currentIndex).filter(s => userProgress.lessons[currentLesson][s]).length;

    document.getElementById('progressText').textContent = `${completed}/6 完成 - ${stageNames[currentIndex]}`;
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
            <div style="margin-top: 20px; text-align: center;">
                <button class="btn-skip" onclick="skipToNextStage()">⏭️ 跳过此阶段</button>
            </div>
        </div>
    `;
}

function speakWord(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
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
            <div style="margin-top: 20px; text-align: center;">
                <button class="btn-skip" onclick="skipToNextStage()">⏭️ 跳过此阶段</button>
            </div>
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
            loadStage('speaking');
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

function renderSpeaking() {
    const lesson = lessons[currentLesson];
    const totalItems = lesson.vocabulary.length * 2; // 单词 + 例句
    return `
        <div class="stage-container">
            <h2>🎤 口语训练</h2>
            <p class="stage-desc">跟读单词和例句，系统会检测你的发音准确率。必须达到70%以上才能继续。</p>
            <div class="progress-info">${speakingResults.length} / ${totalItems}</div>

            <div id="speakingTest"></div>
            <div style="margin-top: 20px; text-align: center;">
                <button class="btn-skip" onclick="skipToNextStage()">⏭️ 跳过此阶段</button>
            </div>
        </div>
    `;
}

function initSpeaking() {
    if (!speechRecognizer) {
        const userAgent = navigator.userAgent.toLowerCase();
        const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent);
        const isIOS = /iphone|ipad|ipod/.test(userAgent);

        let message = '您的浏览器不支持语音识别功能。\n\n';

        if (isSafari || isIOS) {
            message += '如果您使用的是Safari浏览器：\n';
            message += '• 确保Safari版本 ≥ 14.1 (macOS) 或 iOS ≥ 14.5\n';
            message += '• 在设置中允许网站访问麦克风\n';
            message += '• 尝试刷新页面\n\n';
            message += '如果仍然无法使用，建议使用Chrome浏览器以获得最佳体验。';
        } else {
            message += '建议使用以下浏览器：\n';
            message += '• Chrome (推荐)\n';
            message += '• Edge\n';
            message += '• Safari 14.1+';
        }

        alert(message);

        // 跳过口语训练
        userProgress.lessons[currentLesson].speaking = true;
        saveProgress();
        loadStage('sentence');
        return;
    }
    speakingResults = [];
    showNextSpeaking();
}

function showNextSpeaking() {
    const lesson = lessons[currentLesson];
    const totalItems = lesson.vocabulary.length * 2; // 每个单词有：单词本身 + 例句

    if (speakingResults.length >= totalItems) {
        const avgScore = speakingResults.reduce((sum, r) => sum + r.score, 0) / speakingResults.length;
        if (avgScore >= 70) {
            userProgress.lessons[currentLesson].speaking = true;
            saveProgress();
            loadStage('sentence');
        } else {
            document.getElementById('speakingTest').innerHTML = `
                <div class="result-card error">
                    <h3>平均准确率: ${avgScore.toFixed(1)}%</h3>
                    <p>需要达到70%以上才能继续</p>
                    <button class="btn-primary" onclick="initSpeaking()">重新训练</button>
                </div>
            `;
        }
        return;
    }

    const wordIndex = Math.floor(speakingResults.length / 2);
    const isWord = speakingResults.length % 2 === 0; // 偶数是单词，奇数是例句
    const word = lesson.vocabulary[wordIndex];

    if (isWord) {
        // 跟读单词
        document.getElementById('speakingTest').innerHTML = `
            <div class="test-card">
                <div class="speaking-type">
                    <span class="badge">单词跟读</span>
                </div>
                <div class="word-to-speak">
                    <h3>${word.word}</h3>
                    <p class="phonetic">${word.phonetic}</p>
                    <p class="translation">${word.translation}</p>
                </div>
                <button class="btn-speak-large" onclick="speakWord('${word.word}')">🔊 听发音</button>
                <div class="recording-controls">
                    <button class="btn-record" id="recordBtn" onclick="startRecording('${word.word}', 'word')">🎤 开始录音</button>
                    <button class="btn-stop" id="stopBtn" onclick="stopRecording()" style="display:none;">⏹️ 停止录音</button>
                </div>
                <div id="recordingStatus"></div>
                <p class="hint">提示：点击"开始录音"后，清晰地读出单词，然后点击"停止录音"</p>
            </div>
        `;
    } else {
        // 跟读例句
        document.getElementById('speakingTest').innerHTML = `
            <div class="test-card">
                <div class="speaking-type">
                    <span class="badge badge-sentence">例句跟读</span>
                </div>
                <div class="word-to-speak">
                    <h3>${word.word}</h3>
                    <p class="example-large">"${word.example}"</p>
                    <p class="translation">${word.translation}</p>
                </div>
                <button class="btn-speak-large" onclick="speakWord('${word.example}')">🔊 听例句</button>
                <div class="recording-controls">
                    <button class="btn-record" id="recordBtn" onclick="startRecording('${word.example}', 'sentence')">🎤 开始录音</button>
                    <button class="btn-stop" id="stopBtn" onclick="stopRecording()" style="display:none;">⏹️ 停止录音</button>
                </div>
                <div id="recordingStatus"></div>
                <p class="hint">提示：点击"开始录音"后，清晰地读出例句，然后点击"停止录音"</p>
            </div>
        `;
    }
}

function startRecording(targetText, type) {
    const recordBtn = document.getElementById('recordBtn');
    const stopBtn = document.getElementById('stopBtn');
    const status = document.getElementById('recordingStatus');

    if (isRecording) return;

    isRecording = true;
    recordBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
    status.innerHTML = '<p class="recording">🔴 正在录音... 请开始说话</p>';

    // 设置超时自动停止（10秒）
    recordingTimeout = setTimeout(() => {
        if (isRecording) {
            stopRecording();
            const status = document.getElementById('recordingStatus');
            if (status) {
                status.innerHTML = '<p class="error">❌ 录音超时，请重试</p>';
            }
        }
    }, 10000);

    speechRecognizer.onresult = (event) => {
        if (recordingTimeout) {
            clearTimeout(recordingTimeout);
            recordingTimeout = null;
        }
        const transcript = event.results[0][0].transcript.toLowerCase().trim();
        const target = targetText.toLowerCase().trim();

        // 对于句子，使用更宽松的评分标准
        let score;
        if (type === 'sentence') {
            score = calculateSentenceSimilarity(transcript, target);
        } else {
            score = calculateSimilarity(transcript, target);
        }

        speakingResults.push({ text: targetText, spoken: transcript, score, type });

        // 记录口语错误（分数低于70%）
        if (score < 70) {
            const existingMistake = userProgress.mistakes.speaking.find(
                m => m.word === targetText && m.lesson === lessons[currentLesson].id
            );
            if (!existingMistake) {
                userProgress.mistakes.speaking.push({
                    word: targetText,
                    lesson: lessons[currentLesson].id,
                    score: score
                });
                saveProgress();
            }
        }

        const typeLabel = type === 'word' ? '单词' : '例句';
        status.innerHTML = `
            <div class="result ${score >= 70 ? 'success' : 'error'}">
                <p>${typeLabel}跟读</p>
                <p>你说的: ${transcript}</p>
                <p>目标: ${target}</p>
                <p>准确率: ${score}%</p>
            </div>
        `;

        isRecording = false;
        recordBtn.style.display = 'inline-block';
        stopBtn.style.display = 'none';

        setTimeout(showNextSpeaking, 2000);
    };

    speechRecognizer.onerror = (event) => {
        if (recordingTimeout) {
            clearTimeout(recordingTimeout);
            recordingTimeout = null;
        }
        isRecording = false;
        recordBtn.style.display = 'inline-block';
        stopBtn.style.display = 'none';

        if (event.error === 'no-speech') {
            status.innerHTML = '<p class="error">❌ 没有检测到语音，请重试</p>';
        } else if (event.error === 'aborted') {
            // 用户手动停止，不显示错误
        } else {
            status.innerHTML = `<p class="error">❌ 识别失败: ${event.error}，请重试</p>`;
        }
    };

    speechRecognizer.onend = () => {
        if (recordingTimeout) {
            clearTimeout(recordingTimeout);
            recordingTimeout = null;
        }
        // 只有在没有收到结果时才重置状态
        setTimeout(() => {
            if (isRecording) {
                isRecording = false;
                const recordBtn = document.getElementById('recordBtn');
                const stopBtn = document.getElementById('stopBtn');
                const status = document.getElementById('recordingStatus');
                if (recordBtn) recordBtn.style.display = 'inline-block';
                if (stopBtn) stopBtn.style.display = 'none';
                if (status && status.innerHTML.includes('正在录音')) {
                    status.innerHTML = '<p class="error">❌ 没有检测到语音，请重试</p>';
                }
            }
        }, 100);
    };

    try {
        speechRecognizer.start();
    } catch (e) {
        if (recordingTimeout) {
            clearTimeout(recordingTimeout);
            recordingTimeout = null;
        }
        isRecording = false;
        recordBtn.style.display = 'inline-block';
        stopBtn.style.display = 'none';
        status.innerHTML = '<p class="error">❌ 录音启动失败，请重试</p>';
    }
}

function stopRecording() {
    if (!isRecording) return;

    if (recordingTimeout) {
        clearTimeout(recordingTimeout);
        recordingTimeout = null;
    }

    try {
        speechRecognizer.stop();
    } catch (e) {
        console.error('停止录音失败:', e);
    }

    isRecording = false;
    const recordBtn = document.getElementById('recordBtn');
    const stopBtn = document.getElementById('stopBtn');
    const status = document.getElementById('recordingStatus');

    if (recordBtn) recordBtn.style.display = 'inline-block';
    if (stopBtn) stopBtn.style.display = 'none';
    if (status && !status.querySelector('.result')) {
        status.innerHTML = '<p class="info">⏸️ 录音已停止，正在识别...</p>';
    }
}

function calculateSentenceSimilarity(spoken, target) {
    // 移除标点符号
    const cleanSpoken = spoken.replace(/[.,!?;:'"]/g, '').trim();
    const cleanTarget = target.replace(/[.,!?;:'"]/g, '').trim();

    if (cleanSpoken === cleanTarget) return 100;

    // 分词比较
    const spokenWords = cleanSpoken.split(/\s+/);
    const targetWords = cleanTarget.split(/\s+/);

    // 计算匹配的单词数
    let matchCount = 0;
    const targetSet = new Set(targetWords);

    spokenWords.forEach(word => {
        if (targetSet.has(word)) {
            matchCount++;
        }
    });

    // 基于匹配单词数和总单词数计算分数
    const matchRatio = matchCount / Math.max(spokenWords.length, targetWords.length);
    const lengthPenalty = Math.abs(spokenWords.length - targetWords.length) / targetWords.length;

    let score = matchRatio * 100 - lengthPenalty * 20;

    // 如果包含目标句子的主要部分，给予额外分数
    if (cleanSpoken.includes(cleanTarget) || cleanTarget.includes(cleanSpoken)) {
        score = Math.max(score, 85);
    }

    return Math.max(0, Math.min(100, Math.round(score)));
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
            <div style="margin-top: 20px; text-align: center;">
                <button class="btn-skip" onclick="skipToNextStage()">⏭️ 跳过此阶段</button>
            </div>
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
            <div style="margin-top: 20px; text-align: center;">
                <button class="btn-skip" onclick="skipToNextStage()">⏭️ 跳过此阶段</button>
            </div>
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

    if (allCorrect) {
        userProgress.lessons[currentLesson].grammar = true;
        saveProgress();
        setTimeout(() => loadStage('listening'), 1500);
    } else {
        showFeedback('有错误，请重新作答', 'error');
        grammarResults = [];
        setTimeout(() => loadStage('grammar'), 2000);
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
            <div style="margin-top: 20px; text-align: center;">
                <button class="btn-skip" onclick="skipToNextStage()">⏭️ 跳过此阶段</button>
            </div>
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

function skipToNextStage() {
    const stages = ['vocabulary', 'spelling', 'speaking', 'sentence', 'grammar', 'listening'];
    const currentIndex = stages.indexOf(currentStage);

    if (currentIndex === -1) return;

    // 标记当前阶段为完成
    userProgress.lessons[currentLesson][currentStage] = true;
    saveProgress();

    // 进入下一阶段
    if (currentIndex < stages.length - 1) {
        loadStage(stages[currentIndex + 1]);
    } else {
        // 最后一个阶段，检查是否需要复习或进入下一课
        if (hasReviewItems()) {
            loadStage('review');
        } else if (currentLesson < lessons.length - 1) {
            currentLesson++;
            userProgress.currentLesson = currentLesson;
            saveProgress();
            loadStage('vocabulary');
        } else {
            alert('🎉 恭喜完成所有课程！');
        }
    }
}
