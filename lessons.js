const lessons = [
    {
        id: 1,
        title: "Lesson 1 - Excuse me!",
        vocabulary: [
            { word: "excuse", translation: "原谅", phonetic: "/ɪkˈskjuːz/", example: "Excuse me!" },
            { word: "me", translation: "我（宾格）", phonetic: "/miː/", example: "Excuse me!" },
            { word: "yes", translation: "是的", phonetic: "/jes/", example: "Yes, it is." },
            { word: "is", translation: "是", phonetic: "/ɪz/", example: "This is my handbag." },
            { word: "this", translation: "这", phonetic: "/ðɪs/", example: "Is this your handbag?" },
            { word: "your", translation: "你的", phonetic: "/jɔːr/", example: "Is this your handbag?" },
            { word: "handbag", translation: "手提包", phonetic: "/ˈhændbæɡ/", example: "This is my handbag." },
            { word: "pardon", translation: "原谅，请再说一遍", phonetic: "/ˈpɑːrdn/", example: "I beg your pardon?" }
        ],
        grammar: [
            { question: "Excuse ___!", options: ["I", "me", "my", "mine"], correct: 1, explanation: "'Excuse me!' 是固定用法，me 是宾格。" },
            { question: "Is this ___ handbag?", options: ["you", "your", "yours", "you're"], correct: 1, explanation: "your 是形容词性物主代词。" },
            { question: "___ is my umbrella.", options: ["These", "This", "Those", "That"], correct: 1, explanation: "This 指代单数近处物品。" },
            { question: "I ___ your pardon?", options: ["beg", "begs", "begging", "begged"], correct: 0, explanation: "'I beg your pardon' 是固定用语。" },
            { question: "Thank you ___ much.", options: ["so", "very", "too", "many"], correct: 1, explanation: "'Thank you very much' 是固定搭配。" },
            { question: "Yes, it ___.", options: ["am", "is", "are", "be"], correct: 1, explanation: "it 后面用 is。" },
            { question: "___ me!", options: ["Excuses", "Excuse", "Excusing", "Excused"], correct: 1, explanation: "祈使句用动词原形。" },
            { question: "Is ___ your book?", options: ["these", "this", "those", "them"], correct: 1, explanation: "book 是单数，用 this。" },
            { question: "Thank ___.", options: ["you", "your", "yours", "you're"], correct: 0, explanation: "'Thank you' 是固定搭配。" },
            { question: "___ is it?", options: ["Who", "What", "Where", "Whose"], correct: 1, explanation: "询问是什么用 What。" },
            { question: "This is ___ handbag.", options: ["I", "me", "my", "mine"], correct: 2, explanation: "my 是形容词性物主代词，后接名词。" },
            { question: "Is this ___?", options: ["you", "your", "yours", "you're"], correct: 2, explanation: "yours 是名词性物主代词，单独使用。" },
            { question: "___, it is.", options: ["Yes", "No", "Not", "Yes's"], correct: 0, explanation: "肯定回答用 Yes。" },
            { question: "I beg ___ pardon.", options: ["you", "your", "yours", "you're"], correct: 1, explanation: "'I beg your pardon' 中 your 是形容词性物主代词。" },
            { question: "This is not ___ umbrella.", options: ["I", "me", "my", "mine"], correct: 2, explanation: "my 是形容词性物主代词，修饰 umbrella。" }
        ],
        listening: {
            dialogue: "Excuse me! Yes? Is this your handbag? Pardon? Is this your handbag? Yes, it is. Thank you very much.",
            questions: [
                { question: "What does the person say first?", options: ["Hello", "Excuse me", "Thank you", "Pardon"], correct: 1 },
                { question: "What are they talking about?", options: ["A book", "A handbag", "A ticket", "An umbrella"], correct: 1 },
                { question: "Is it the person's handbag?", options: ["Yes", "No", "Maybe", "Not mentioned"], correct: 0 }
            ]
        },
        translation: [
            { chinese: "打扰一下！", english: "Excuse me!" },
            { chinese: "什么事？", english: "Yes?" },
            { chinese: "这是你的手提包吗？", english: "Is this your handbag?" },
            { chinese: "请再说一遍？", english: "Pardon?" },
            { chinese: "这是你的手提包吗？", english: "Is this your handbag?" },
            { chinese: "是的，是我的。", english: "Yes, it is." },
            { chinese: "非常感谢你。", english: "Thank you very much." }
        ]
    },
    {
        id: 3,
        title: "Lesson 3 - Sorry, sir.",
        vocabulary: [
            { word: "umbrella", translation: "伞", phonetic: "/ʌmˈbrelə/", example: "This is my umbrella." },
            { word: "please", translation: "请", phonetic: "/pliːz/", example: "My coat, please." },
            { word: "here", translation: "这里", phonetic: "/hɪər/", example: "Here is my ticket." },
            { word: "my", translation: "我的", phonetic: "/maɪ/", example: "This is my ticket." },
            { word: "ticket", translation: "票", phonetic: "/ˈtɪkɪt/", example: "Here is my ticket." },
            { word: "number", translation: "号码", phonetic: "/ˈnʌmbər/", example: "Number five." },
            { word: "sorry", translation: "对不起的", phonetic: "/ˈsɒri/", example: "Sorry, sir." },
            { word: "sir", translation: "先生", phonetic: "/sɜːr/", example: "Sorry, sir." }
        ],
        grammar: [
            { question: "My coat, ___.", options: ["please", "thanks", "sorry", "pardon"], correct: 0, explanation: "please 用于礼貌地请求。" },
            { question: "Here ___ my ticket.", options: ["am", "is", "are", "be"], correct: 1, explanation: "ticket 是单数，用 is。" },
            { question: "This is ___ umbrella.", options: ["a", "an", "the", "/"], correct: 1, explanation: "umbrella 以元音音素开头，用 an。" },
            { question: "___, sir.", options: ["Thank", "Thanks", "Sorry", "Please"], correct: 2, explanation: "Sorry 用于道歉。" },
            { question: "Number ___.", options: ["five", "fifth", "fives", "the five"], correct: 0, explanation: "基数词 five 表示号码。" },
            { question: "This is not ___ umbrella.", options: ["I", "me", "my", "mine"], correct: 2, explanation: "my 是形容词性物主代词。" },
            { question: "Is this ___ umbrella?", options: ["you", "your", "yours", "you're"], correct: 1, explanation: "your 是形容词性物主代词，后接名词。" },
            { question: "No, it ___.", options: ["is", "isn't", "are", "aren't"], correct: 1, explanation: "否定回答用 isn't。" },
            { question: "Is this ___?", options: ["he", "she", "it", "they"], correct: 2, explanation: "指代物品用 it。" },
            { question: "Here ___ your coat.", options: ["am", "is", "are", "be"], correct: 1, explanation: "coat 是单数，用 is。" },
            { question: "___ you very much.", options: ["Thanks", "Thank", "Thanks to", "Thanking"], correct: 1, explanation: "'Thank you' 是固定搭配。" },
            { question: "My coat ___ my umbrella.", options: ["or", "and", "but", "with"], correct: 1, explanation: "and 连接两个并列的名词。" },
            { question: "Here ___ your umbrella.", options: ["am", "is", "are", "be"], correct: 1, explanation: "umbrella 是单数，用 is。" },
            { question: "___ is my ticket.", options: ["These", "This", "Those", "That"], correct: 1, explanation: "This 指代单数近处物品。" },
            { question: "Is this your ___?", options: ["coat", "coats", "a coat", "the coat"], correct: 0, explanation: "your 后面直接接名词单数。" }
        ],
        listening: {
            dialogue: "My coat and my umbrella please. Here is my ticket. Thank you, sir. Number five. Here is your umbrella and your coat. This is not my umbrella. Sorry sir. Is this your umbrella? No, it isn't. Is this it? Yes, it is. Thank you very much.",
            questions: [
                { question: "What does the person want?", options: ["Coat only", "Umbrella only", "Coat and umbrella", "Ticket"], correct: 2 },
                { question: "What is the ticket number?", options: ["Three", "Four", "Five", "Six"], correct: 2 },
                { question: "Was the first umbrella correct?", options: ["Yes", "No", "Maybe", "Not mentioned"], correct: 1 }
            ]
        },
        translation: [
            { chinese: "请把我的大衣和伞给我。", english: "My coat and my umbrella please." },
            { chinese: "这是我的票。", english: "Here is my ticket." },
            { chinese: "谢谢，先生。", english: "Thank you, sir." },
            { chinese: "五号。", english: "Number five." },
            { chinese: "这是你的伞和大衣。", english: "Here is your umbrella and your coat." },
            { chinese: "这不是我的伞。", english: "This is not my umbrella." },
            { chinese: "对不起，先生。", english: "Sorry sir." },
            { chinese: "这是你的伞吗？", english: "Is this your umbrella?" },
            { chinese: "不，不是。", english: "No, it isn't." },
            { chinese: "是这个吗？", english: "Is this it?" },
            { chinese: "是的，是的。", english: "Yes, it is." },
            { chinese: "非常感谢你。", english: "Thank you very much." }
        ]
    },
    {
        id: 5,
        title: "Lesson 5 - Nice to meet you",
        vocabulary: [
            { word: "Mr.", translation: "先生", phonetic: "/ˈmɪstər/", example: "Mr. Blake." },
            { word: "good", translation: "好", phonetic: "/ɡʊd/", example: "Good morning." },
            { word: "morning", translation: "早晨", phonetic: "/ˈmɔːrnɪŋ/", example: "Good morning." },
            { word: "Miss", translation: "小姐", phonetic: "/mɪs/", example: "Miss Sophie Dupont." },
            { word: "new", translation: "新的", phonetic: "/njuː/", example: "She is a new student." },
            { word: "student", translation: "学生", phonetic: "/ˈstjuːdnt/", example: "I am a student." },
            { word: "French", translation: "法国人", phonetic: "/frentʃ/", example: "She is French." },
            { word: "German", translation: "德国人", phonetic: "/ˈdʒɜːrmən/", example: "He is German." },
            { word: "nice", translation: "美好的", phonetic: "/naɪs/", example: "Nice to meet you." },
            { word: "meet", translation: "遇见", phonetic: "/miːt/", example: "Nice to meet you." },
            { word: "Japanese", translation: "日本人", phonetic: "/ˌdʒæpəˈniːz/", example: "She is Japanese." },
            { word: "Korean", translation: "韩国人", phonetic: "/kəˈriːən/", example: "He is Korean." }
        ],
        grammar: [
            { question: "Good ___.", options: ["morning", "mornings", "a morning", "the morning"], correct: 0, explanation: "'Good morning' 是固定问候语。" },
            { question: "She ___ a new student.", options: ["am", "is", "are", "be"], correct: 1, explanation: "第三人称单数用 is。" },
            { question: "Nice ___ meet you.", options: ["for", "to", "at", "in"], correct: 1, explanation: "'Nice to meet you' 是固定搭配。" },
            { question: "He is ___.", options: ["a French", "French", "the French", "Frenchs"], correct: 1, explanation: "国籍名词作表语时不加冠词。" },
            { question: "___ is Mr. Blake.", options: ["He", "She", "It", "They"], correct: 0, explanation: "Mr. 表示男性，用 He。" },
            { question: "This is ___ Sophie.", options: ["Mr.", "Mrs.", "Miss", "Ms."], correct: 2, explanation: "Miss 用于未婚女性。" },
            { question: "She ___ Japanese.", options: ["am", "is", "are", "be"], correct: 1, explanation: "She 后面用 is。" },
            { question: "He is Chinese, ___.", options: ["to", "too", "two", "also"], correct: 1, explanation: "too 表示'也'，放在句末。" },
            { question: "___ is Hans?", options: ["What", "Who", "Where", "How"], correct: 1, explanation: "询问是谁用 Who。" },
            { question: "Sophie is ___ student.", options: ["a", "an", "the", "/"], correct: 0, explanation: "student 以辅音音素开头，用 a。" },
            { question: "She is ___ new student.", options: ["a", "an", "the", "/"], correct: 0, explanation: "new 以辅音音素开头，用 a。" },
            { question: "They ___ students.", options: ["am", "is", "are", "be"], correct: 2, explanation: "复数用 are。" },
            { question: "This ___ Naoko.", options: ["am", "is", "are", "be"], correct: 1, explanation: "单数用 is。" },
            { question: "He ___ German.", options: ["am", "is", "are", "be"], correct: 1, explanation: "He 后面用 is。" },
            { question: "Nice to ___ you.", options: ["meet", "meets", "meeting", "met"], correct: 0, explanation: "to 后面接动词原形。" }
        ],
        listening: {
            dialogue: "Good morning. Good morning, Mr. Blake. This is Miss Sophie Dupont. Sophie is a new student. She is French. Sophie, this is Hans. He is German. Nice to meet you. And this is Naoko. She's Japanese. Nice to meet you.",
            questions: [
                { question: "What time of day is it?", options: ["Morning", "Afternoon", "Evening", "Night"], correct: 0 },
                { question: "What is Sophie's nationality?", options: ["German", "French", "Japanese", "Korean"], correct: 1 },
                { question: "Who is German?", options: ["Sophie", "Hans", "Naoko", "Chang-woo"], correct: 1 }
            ]
        },
        translation: [
            { chinese: "早上好。", english: "Good morning." },
            { chinese: "早上好，布莱克先生。", english: "Good morning, Mr. Blake." },
            { chinese: "这是苏菲·杜邦小姐。", english: "This is Miss Sophie Dupont." },
            { chinese: "苏菲是个新学生。", english: "Sophie is a new student." },
            { chinese: "她是法国人。", english: "She is French." },
            { chinese: "苏菲，这是汉斯。", english: "Sophie, this is Hans." },
            { chinese: "他是德国人。", english: "He is German." },
            { chinese: "很高兴认识你。", english: "Nice to meet you." },
            { chinese: "这是直子。", english: "And this is Naoko." },
            { chinese: "她是日本人。", english: "She's Japanese." },
            { chinese: "很高兴认识你。", english: "Nice to meet you." }
        ]
    },
    {
        id: 7,
        title: "Lesson 7 - Are you a teacher?",
        vocabulary: [
            { word: "I", translation: "我", phonetic: "/aɪ/", example: "I am a student." },
            { word: "am", translation: "是（第一人称单数）", phonetic: "/æm/", example: "I am Robert." },
            { word: "are", translation: "是（复数）", phonetic: "/ɑːr/", example: "Are you French?" },
            { word: "name", translation: "名字", phonetic: "/neɪm/", example: "My name is Sophie." },
            { word: "what", translation: "什么", phonetic: "/wɒt/", example: "What is your name?" },
            { word: "nationality", translation: "国籍", phonetic: "/ˌnæʃəˈnæləti/", example: "What nationality are you?" },
            { word: "job", translation: "工作", phonetic: "/dʒɒb/", example: "What's your job?" },
            { word: "keyboard", translation: "键盘", phonetic: "/ˈkiːbɔːrd/", example: "This is a keyboard." },
            { word: "operator", translation: "操作员", phonetic: "/ˈɒpəreɪtər/", example: "I'm a keyboard operator." },
            { word: "engineer", translation: "工程师", phonetic: "/ˌendʒɪˈnɪər/", example: "He is an engineer." }
        ],
        grammar: [
            { question: "I ___ a student.", options: ["am", "is", "are", "be"], correct: 0, explanation: "第一人称单数用 am。" },
            { question: "___ you French?", options: ["Am", "Is", "Are", "Be"], correct: 2, explanation: "you 后面用 are。" },
            { question: "What ___ your name?", options: ["am", "is", "are", "be"], correct: 1, explanation: "name 是单数，用 is。" },
            { question: "My name ___ Robert.", options: ["am", "is", "are", "be"], correct: 1, explanation: "name 是单数，用 is。" },
            { question: "What nationality ___ you?", options: ["am", "is", "are", "be"], correct: 2, explanation: "you 后面用 are。" },
            { question: "I'm ___ Italian.", options: ["a", "an", "the", "/"], correct: 1, explanation: "Italian 以元音音素开头，用 an。" },
            { question: "___ you a teacher?", options: ["Am", "Is", "Are", "Be"], correct: 2, explanation: "you 后面用 are。" },
            { question: "No, I'm ___.", options: ["no", "not", "don't", "doesn't"], correct: 1, explanation: "be动词的否定用 not。" },
            { question: "What's ___ job?", options: ["you", "your", "yours", "you're"], correct: 1, explanation: "your 是形容词性物主代词。" },
            { question: "I'm a keyboard ___.", options: ["operate", "operator", "operation", "operating"], correct: 1, explanation: "operator 是名词，表示操作员。" },
            { question: "___ is your job?", options: ["Who", "What", "Where", "How"], correct: 1, explanation: "询问工作用 What。" },
            { question: "I ___ an engineer.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 后面用 am。" },
            { question: "Are you French ___?", options: ["to", "too", "two", "also"], correct: 1, explanation: "too 表示'也'。" },
            { question: "Yes, I ___.", options: ["am", "is", "are", "do"], correct: 0, explanation: "I 后面用 am。" },
            { question: "Nice ___ meet you.", options: ["for", "to", "at", "in"], correct: 1, explanation: "'Nice to meet you' 是固定搭配。" }
        ],
        listening: {
            dialogue: "I am a new student. My name's Robert. Nice to meet you. My name's Sophie. Are you French? Yes, I am. Are you French too? No, I am not. What nationality are you? I'm Italian. Are you a teacher? No, I'm not. What's your job? I'm a keyboard operator. What's your job? I'm an engineer.",
            questions: [
                { question: "What is Robert's nationality?", options: ["French", "Italian", "German", "Chinese"], correct: 1 },
                { question: "What is Sophie's job?", options: ["Teacher", "Engineer", "Keyboard operator", "Student"], correct: 2 },
                { question: "What is Robert's job?", options: ["Teacher", "Engineer", "Keyboard operator", "Student"], correct: 1 }
            ]
        },
        translation: [
            { chinese: "我是个新学生。", english: "I am a new student." },
            { chinese: "我叫罗伯特。", english: "My name's Robert." },
            { chinese: "很高兴认识你。", english: "Nice to meet you." },
            { chinese: "我叫苏菲。", english: "My name's Sophie." },
            { chinese: "你是法国人吗？", english: "Are you French?" },
            { chinese: "是的，我是。", english: "Yes, I am." },
            { chinese: "你也是法国人吗？", english: "Are you French too?" },
            { chinese: "不，我不是。", english: "No, I am not." },
            { chinese: "你是哪国人？", english: "What nationality are you?" },
            { chinese: "我是意大利人。", english: "I'm Italian." },
            { chinese: "你是老师吗？", english: "Are you a teacher?" },
            { chinese: "不，我不是。", english: "No, I'm not." },
            { chinese: "你的工作是什么？", english: "What's your job?" },
            { chinese: "我是键盘操作员。", english: "I'm a keyboard operator." },
            { chinese: "你的工作是什么？", english: "What's your job?" },
            { chinese: "我是工程师。", english: "I'm an engineer." }
        ]
    },
    {
        id: 9,
        title: "Lesson 9 - How are you today?",
        vocabulary: [
            { word: "hello", translation: "喂（问候）", phonetic: "/həˈləʊ/", example: "Hello, Helen." },
            { word: "hi", translation: "嗨", phonetic: "/haɪ/", example: "Hi, Steven." },
            { word: "how", translation: "怎样", phonetic: "/haʊ/", example: "How are you?" },
            { word: "today", translation: "今天", phonetic: "/təˈdeɪ/", example: "How are you today?" },
            { word: "well", translation: "身体好", phonetic: "/wel/", example: "I'm very well." },
            { word: "fine", translation: "美好的", phonetic: "/faɪn/", example: "I'm fine, thanks." },
            { word: "thanks", translation: "谢谢", phonetic: "/θæŋks/", example: "I'm fine, thanks." },
            { word: "goodbye", translation: "再见", phonetic: "/ˌɡʊdˈbaɪ/", example: "Goodbye, Helen." },
            { word: "see", translation: "见", phonetic: "/siː/", example: "Nice to see you." }
        ],
        grammar: [
            { question: "How ___ you?", options: ["am", "is", "are", "be"], correct: 2, explanation: "you 后面用 are。" },
            { question: "I'm very ___, thank you.", options: ["good", "well", "fine", "nice"], correct: 1, explanation: "well 表示身体好。" },
            { question: "How ___ Tony?", options: ["am", "is", "are", "be"], correct: 1, explanation: "Tony 是第三人称单数，用 is。" },
            { question: "He's ___, thanks.", options: ["good", "well", "fine", "nice"], correct: 2, explanation: "fine 表示很好。" },
            { question: "Nice to ___ you.", options: ["see", "sees", "seeing", "saw"], correct: 0, explanation: "to 后面接动词原形。" },
            { question: "___, Helen.", options: ["Hello", "Hi", "Goodbye", "Thanks"], correct: 2, explanation: "Goodbye 表示再见。" },
            { question: "How are you ___?", options: ["yesterday", "today", "tomorrow", "now"], correct: 1, explanation: "today 表示今天。" },
            { question: "I'm fine, ___.", options: ["thank", "thanks", "thank you", "thanking"], correct: 1, explanation: "thanks 是简短的感谢方式。" },
            { question: "___ is Emma?", options: ["What", "Who", "How", "Where"], correct: 2, explanation: "询问身体状况用 How。" },
            { question: "She's very well, ___.", options: ["to", "too", "two", "also"], correct: 1, explanation: "too 表示'也'。" },
            { question: "___, Steven.", options: ["Hello", "Hi", "Hey", "All of above"], correct: 3, explanation: "Hello, Hi, Hey 都可以用来打招呼。" },
            { question: "And ___?", options: ["you", "your", "yours", "you're"], correct: 0, explanation: "And you? 询问对方情况。" },
            { question: "How's ___?", options: ["he", "she", "Emma", "they"], correct: 2, explanation: "How's = How is，后接人名。" },
            { question: "Nice to see you, ___.", options: ["to", "too", "two", "also"], correct: 1, explanation: "too 表示'也'。" },
            { question: "___ you today?", options: ["What", "Who", "How", "Where"], correct: 2, explanation: "How are you today? 询问今天怎么样。" }
        ],
        listening: {
            dialogue: "Hello, Helen. Hi, Steven. How are you today? I'm very well, thank you. And you? I'm fine, thanks. How is Tony? He's fine, thanks. How's Emma? She's very well, too, Helen. Goodbye, Helen. Nice to see you. Nice to see you, too, Steven. Goodbye.",
            questions: [
                { question: "How is Helen today?", options: ["Very well", "Not good", "Tired", "Sick"], correct: 0 },
                { question: "How is Tony?", options: ["Not mentioned", "Fine", "Sick", "Tired"], correct: 1 },
                { question: "How is Emma?", options: ["Not good", "Fine", "Very well", "Sick"], correct: 2 }
            ]
        },
        translation: [
            { chinese: "你好，海伦。", english: "Hello, Helen." },
            { chinese: "嗨，史蒂文。", english: "Hi, Steven." },
            { chinese: "你今天好吗？", english: "How are you today?" },
            { chinese: "我非常好，谢谢你。", english: "I'm very well, thank you." },
            { chinese: "你呢？", english: "And you?" },
            { chinese: "我很好，谢谢。", english: "I'm fine, thanks." },
            { chinese: "托尼好吗？", english: "How is Tony?" },
            { chinese: "他很好，谢谢。", english: "He's fine, thanks." },
            { chinese: "埃玛好吗？", english: "How's Emma?" },
            { chinese: "她也非常好。", english: "She's very well, too." },
            { chinese: "再见，海伦。", english: "Goodbye, Helen." },
            { chinese: "很高兴见到你。", english: "Nice to see you." },
            { chinese: "我也很高兴见到你，史蒂文。", english: "Nice to see you, too, Steven." },
            { chinese: "再见。", english: "Goodbye." }
        ]
    },
    {
        id: 11,
        title: "Lesson 11 - Is this your shirt?",
        vocabulary: [
            { word: "whose", translation: "谁的", phonetic: "/huːz/", example: "Whose shirt is that?" },
            { word: "blue", translation: "蓝色的", phonetic: "/bluː/", example: "My shirt is blue." },
            { word: "perhaps", translation: "大概", phonetic: "/pəˈhæps/", example: "Perhaps it is." },
            { word: "white", translation: "白色的", phonetic: "/waɪt/", example: "Tim's shirt is white." },
            { word: "catch", translation: "抓住", phonetic: "/kætʃ/", example: "Catch!" }
        ],
        grammar: [
            { question: "___ shirt is that?", options: ["Who", "Whose", "What", "Which"], correct: 1, explanation: "Whose 询问所属关系。" },
            { question: "Is this ___ shirt?", options: ["you", "your", "yours", "you're"], correct: 1, explanation: "your 是形容词性物主代词。" },
            { question: "No, it's ___ my shirt.", options: ["no", "not", "don't", "doesn't"], correct: 1, explanation: "be动词的否定用 not。" },
            { question: "My shirt ___ blue.", options: ["am", "is", "are", "be"], correct: 1, explanation: "shirt 是单数，用 is。" },
            { question: "Is this shirt ___?", options: ["Tim", "Tim's", "Tims", "of Tim"], correct: 1, explanation: "Tim's 表示所有格。" },
            { question: "___ it is.", options: ["May", "Maybe", "Perhaps", "Possible"], correct: 2, explanation: "Perhaps 表示'也许'。" },
            { question: "Tim's shirt ___ white.", options: ["am", "is", "are", "be"], correct: 1, explanation: "shirt 是单数，用 is。" },
            { question: "Here you ___.", options: ["am", "is", "are", "be"], correct: 2, explanation: "'Here you are' 是固定搭配。" },
            { question: "___!", options: ["Catch", "Catches", "Catching", "Caught"], correct: 0, explanation: "祈使句用动词原形。" },
            { question: "This is ___ shirt.", options: ["I", "me", "my", "mine"], correct: 2, explanation: "my 是形容词性物主代词。" },
            { question: "Is this your ___?", options: ["shirt", "shirts", "a shirt", "the shirt"], correct: 0, explanation: "your 后面直接接名词。" },
            { question: "___ shirt is blue.", options: ["I", "Me", "My", "Mine"], correct: 2, explanation: "My 是形容词性物主代词。" },
            { question: "Yes, ___?", options: ["sir", "Sir", "SIR", "sirs"], correct: 0, explanation: "sir 用于尊称，小写。" },
            { question: "Thank you, ___.", options: ["sir", "Sir", "SIR", "sirs"], correct: 0, explanation: "sir 用于尊称。" },
            { question: "That is ___ shirt.", options: ["who", "whose", "what", "which"], correct: 1, explanation: "whose 表示'谁的'。" }
        ],
        listening: {
            dialogue: "Whose shirt is that? Is this your shirt, Dave? No, Sir. It's not my shirt. This is my shirt. My shirt's blue. Is this shirt Tim's? Perhaps it is, sir. Tim's shirt's white. Tim! Yes, sir? Is this your shirt? Yes, sir. Here you are. Catch! Thank you, sir.",
            questions: [
                { question: "Whose shirt is blue?", options: ["Tim's", "Dave's", "Teacher's", "Not mentioned"], correct: 1 },
                { question: "Whose shirt is white?", options: ["Tim's", "Dave's", "Teacher's", "Not mentioned"], correct: 0 },
                { question: "Who catches the shirt?", options: ["Dave", "Tim", "Teacher", "Not mentioned"], correct: 1 }
            ]
        },
        translation: [
            { chinese: "那是谁的衬衫？", english: "Whose shirt is that?" },
            { chinese: "这是你的衬衫吗，戴夫？", english: "Is this your shirt, Dave?" },
            { chinese: "不，先生。这不是我的衬衫。", english: "No, Sir. It's not my shirt." },
            { chinese: "这是我的衬衫。我的衬衫是蓝色的。", english: "This is my shirt. My shirt's blue." },
            { chinese: "这件衬衫是蒂姆的吗？", english: "Is this shirt Tim's?" },
            { chinese: "也许是，先生。", english: "Perhaps it is, sir." },
            { chinese: "蒂姆的衬衫是白色的。", english: "Tim's shirt's white." },
            { chinese: "蒂姆！什么事，先生？", english: "Tim! Yes, sir?" },
            { chinese: "这是你的衬衫吗？", english: "Is this your shirt?" },
            { chinese: "是的，先生。给你。", english: "Yes, sir. Here you are." },
            { chinese: "接住！", english: "Catch!" },
            { chinese: "谢谢你，先生。", english: "Thank you, sir." }
        ]
    },
    {
        id: 13,
        title: "Lesson 13 - A new dress",
        vocabulary: [
            { word: "colour", translation: "颜色", phonetic: "/ˈkʌlə/", example: "What colour is your dress?" },
            { word: "green", translation: "绿色", phonetic: "/ɡriːn/", example: "It's green." },
            { word: "come", translation: "来", phonetic: "/kʌm/", example: "Come upstairs." },
            { word: "upstairs", translation: "楼上", phonetic: "/ˌʌpˈsteəz/", example: "Come upstairs and see it." },
            { word: "smart", translation: "时髦的，巧妙的", phonetic: "/smɑːt/", example: "It's very smart." },
            { word: "hat", translation: "帽子", phonetic: "/hæt/", example: "My hat's new, too." },
            { word: "same", translation: "相同的", phonetic: "/seɪm/", example: "It's the same colour." },
            { word: "lovely", translation: "可爱的，秀丽的", phonetic: "/ˈlʌvli/", example: "That is a lovely hat!" }
        ],
        grammar: [
            { question: "What ___ is your new dress?", options: ["color", "colour", "colors", "colours"], correct: 1, explanation: "英式英语拼写为 colour。" },
            { question: "It's ___.", options: ["green", "a green", "the green", "greens"], correct: 0, explanation: "颜色作表语不加冠词。" },
            { question: "Come ___ and see it.", options: ["upstair", "upstairs", "up stair", "up stairs"], correct: 1, explanation: "upstairs 是副词，表示到楼上。" },
            { question: "That's ___ nice dress.", options: ["a", "an", "the", "/"], correct: 0, explanation: "nice 以辅音音素开头，用 a。" },
            { question: "It's very ___.", options: ["smart", "smarts", "smartly", "smartness"], correct: 0, explanation: "smart 是形容词，表示时髦的。" },
            { question: "My hat's new, ___.", options: ["to", "too", "two", "also"], correct: 1, explanation: "too 表示'也'。" },
            { question: "What colour ___ it?", options: ["am", "is", "are", "be"], correct: 1, explanation: "it 后面用 is。" },
            { question: "It's the ___ colour.", options: ["same", "similar", "like", "as"], correct: 0, explanation: "the same 表示相同的。" },
            { question: "It's green, ___.", options: ["to", "too", "two", "also"], correct: 1, explanation: "too 表示'也'。" },
            { question: "That ___ a lovely hat!", options: ["am", "is", "are", "be"], correct: 1, explanation: "That 后面用 is。" },
            { question: "Come upstairs ___ see it.", options: ["to", "and", "for", "with"], correct: 1, explanation: "and 连接两个并列的动词。" },
            { question: "Look! ___ it is!", options: ["There", "Here", "Where", "What"], correct: 1, explanation: "Here it is! 表示在这里。" },
            { question: "What colour's ___ new dress?", options: ["you", "your", "yours", "you're"], correct: 1, explanation: "your 是形容词性物主代词。" },
            { question: "___ a lovely hat!", options: ["What", "How", "That is", "This is"], correct: 2, explanation: "That is 表示那是。" },
            { question: "My hat ___ new.", options: ["am", "is", "are", "be"], correct: 1, explanation: "hat 是单数，用 is。" }
        ],
        listening: {
            dialogue: "What colour's your new dress? It's green. Come upstairs and see it. Thank you. Look! Here it is! That's nice dress. It's very smart. My hat's new, too. What colour is it? It's the same colour. It's green, too. That is a lovely hat!",
            questions: [
                { question: "What colour is Anna's new dress?", options: ["Red", "Blue", "Green", "Yellow"], correct: 2 },
                { question: "Where should Louise go to see the dress?", options: ["Downstairs", "Upstairs", "Outside", "Kitchen"], correct: 1 },
                { question: "What colour is Anna's hat?", options: ["Red", "Blue", "Green", "Yellow"], correct: 2 }
            ]
        },
        translation: [
            { chinese: "你的新裙子是什么颜色的？", english: "What colour's your new dress?" },
            { chinese: "是绿色的。", english: "It's green." },
            { chinese: "上楼来看看吧。", english: "Come upstairs and see it." },
            { chinese: "谢谢你。", english: "Thank you." },
            { chinese: "看！这就是！", english: "Look! Here it is!" },
            { chinese: "这是一条漂亮的裙子。", english: "That's nice dress." },
            { chinese: "它很时髦。", english: "It's very smart." },
            { chinese: "我的帽子也是新的。", english: "My hat's new, too." },
            { chinese: "它是什么颜色的？", english: "What colour is it?" },
            { chinese: "是同样的颜色。", english: "It's the same colour." },
            { chinese: "也是绿色的。", english: "It's green, too." },
            { chinese: "那是个可爱的帽子！", english: "That is a lovely hat!" }
        ]
    }
];
