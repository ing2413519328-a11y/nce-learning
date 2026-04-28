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
    },
    {
        id: 15,
        title: "Lesson 15 - Your passports, please.",
        vocabulary: [
            { word: "customs", translation: "海关", phonetic: "/ˈkʌstəmz/", example: "Customs officer." },
            { word: "officer", translation: "官员", phonetic: "/ˈɒfɪsər/", example: "He is a customs officer." },
            { word: "girl", translation: "女孩", phonetic: "/ɡɜːrl/", example: "She is a girl." },
            { word: "Danish", translation: "丹麦人", phonetic: "/ˈdeɪnɪʃ/", example: "They are Danish." },
            { word: "friend", translation: "朋友", phonetic: "/frend/", example: "They are our friends." },
            { word: "Norwegian", translation: "挪威人", phonetic: "/nɔːrˈwiːdʒən/", example: "They are Norwegian." },
            { word: "passport", translation: "护照", phonetic: "/ˈpɑːspɔːrt/", example: "Your passports, please." },
            { word: "brown", translation: "棕色的", phonetic: "/braʊn/", example: "Your cases are brown." },
            { word: "tourist", translation: "旅游者", phonetic: "/ˈtʊərɪst/", example: "They are tourists." }
        ],
        grammar: [
            { question: "Are you ___ Danish?", options: ["a", "an", "the", "/"], correct: 3, explanation: "国籍形容词前不用冠词。" },
            { question: "Your passports, ___.", options: ["please", "thanks", "sorry", "yes"], correct: 0, explanation: "please 用于礼貌地请求。" },
            { question: "They ___ tourists.", options: ["am", "is", "are", "be"], correct: 2, explanation: "They 后面用 are。" },
            { question: "___ are your friends?", options: ["Who", "What", "Where", "How"], correct: 0, explanation: "询问是谁用 Who。" },
            { question: "These ___ our passports.", options: ["am", "is", "are", "be"], correct: 2, explanation: "These 是复数，用 are。" },
            { question: "Here ___ your cases.", options: ["am", "is", "are", "be"], correct: 2, explanation: "cases 是复数，用 are。" },
            { question: "___ you tourists?", options: ["Am", "Is", "Are", "Be"], correct: 2, explanation: "you 后面用 are。" },
            { question: "We are ___ Danish.", options: ["a", "an", "the", "/"], correct: 3, explanation: "国籍形容词前不用冠词。" },
            { question: "Your cases ___ brown.", options: ["am", "is", "are", "be"], correct: 2, explanation: "cases 是复数，用 are。" },
            { question: "Are you Norwegian? ___, we are.", options: ["No", "Yes", "Not", "Sorry"], correct: 1, explanation: "肯定回答用 Yes。" },
            { question: "Are you ___?", options: ["Denmark", "Danish", "Dane", "Denmarks"], correct: 1, explanation: "Danish 是形容词表示国籍。" },
            { question: "They are our ___.", options: ["friend", "friends", "a friend", "the friend"], correct: 1, explanation: "They 是复数，后面用名词复数。" },
            { question: "___ friends are Danish.", options: ["We", "Our", "Us", "Ours"], correct: 1, explanation: "Our 是形容词性物主代词。" },
            { question: "Are you customs ___?", options: ["officer", "officers", "a officer", "an officer"], correct: 1, explanation: "you 是复数，用名词复数。" },
            { question: "Are they ___?", options: ["tourist", "tourists", "a tourist", "an tourist"], correct: 1, explanation: "they 是复数，用名词复数。" }
        ],
        listening: {
            dialogue: "Are you Swedish? No, we are not. We are Danish. Are your friends Danish, too? No, they are not. They are Norwegian. Your passports, please. Here they are. Are you tourists? Yes, we are. Are your friends tourists too? Yes, they are. That's fine. Thank you very much.",
            questions: [
                { question: "What nationality are the speakers?", options: ["Swedish", "Danish", "Norwegian", "German"], correct: 1 },
                { question: "What nationality are their friends?", options: ["Swedish", "Danish", "Norwegian", "German"], correct: 2 },
                { question: "What do the officers ask for?", options: ["Tickets", "Passports", "Cases", "Money"], correct: 1 }
            ]
        },
        translation: [
            { chinese: "你们是瑞典人吗？", english: "Are you Swedish?" },
            { chinese: "不，我们不是。我们是丹麦人。", english: "No, we are not. We are Danish." },
            { chinese: "你们的朋友也是丹麦人吗？", english: "Are your friends Danish, too?" },
            { chinese: "不，他们不是。他们是挪威人。", english: "No, they are not. They are Norwegian." },
            { chinese: "请出示你们的护照。", english: "Your passports, please." },
            { chinese: "给你。", english: "Here they are." },
            { chinese: "你们是游客吗？", english: "Are you tourists?" },
            { chinese: "是的，我们是。", english: "Yes, we are." },
            { chinese: "好的。非常感谢。", english: "That's fine. Thank you very much." }
        ]
    },
    {
        id: 17,
        title: "Lesson 17 - How do you do?",
        vocabulary: [
            { word: "employee", translation: "雇员", phonetic: "/ɪmˈplɔɪiː/", example: "She is a new employee." },
            { word: "hard-working", translation: "勤劳的", phonetic: "/ˌhɑːrd ˈwɜːrkɪŋ/", example: "They are very hard-working." },
            { word: "sales rep", translation: "推销员", phonetic: "/seɪlz rep/", example: "He is a sales rep." },
            { word: "man", translation: "男人", phonetic: "/mæn/", example: "That man is tall." },
            { word: "office", translation: "办公室", phonetic: "/ˈɒfɪs/", example: "Come to my office." },
            { word: "assistant", translation: "助手", phonetic: "/əˈsɪstənt/", example: "She is an office assistant." }
        ],
        grammar: [
            { question: "How do you ___?", options: ["do", "does", "doing", "done"], correct: 0, explanation: "How do you do? 是固定问候语。" },
            { question: "Come and meet ___ employees.", options: ["we", "our", "us", "ours"], correct: 1, explanation: "our 是形容词性物主代词。" },
            { question: "She is ___ new employee.", options: ["a", "an", "the", "/"], correct: 0, explanation: "new 以辅音音素开头，用 a。" },
            { question: "They are very ___.", options: ["hard-work", "hard-working", "hard working", "hardly work"], correct: 1, explanation: "hard-working 是复合形容词。" },
            { question: "What are their ___?", options: ["job", "jobs", "a job", "the job"], correct: 1, explanation: "their 后面接复数名词。" },
            { question: "He is ___ sales rep.", options: ["a", "an", "the", "/"], correct: 0, explanation: "sales 以辅音音素开头，用 a。" },
            { question: "She is ___ office assistant.", options: ["a", "an", "the", "/"], correct: 1, explanation: "office 以元音音素开头，用 an。" },
            { question: "How ___ you do?", options: ["do", "does", "are", "is"], correct: 0, explanation: "How do you do? 是固定搭配。" },
            { question: "___ are their jobs?", options: ["Who", "What", "Where", "How"], correct: 1, explanation: "询问工作用 What。" },
            { question: "They are very hard-___.", options: ["work", "working", "worked", "works"], correct: 1, explanation: "hard-working 是固定形容词。" },
            { question: "This is Miss ___ Dupont.", options: ["Sophie", "sophie", "SOPHIE", "sophies"], correct: 0, explanation: "名字首字母大写。" },
            { question: "Come and ___ them.", options: ["meet", "meets", "meeting", "met"], correct: 0, explanation: "and 连接两个动词原形。" },
            { question: "How do you do? Nice to ___ you.", options: ["meet", "meets", "meeting", "met"], correct: 0, explanation: "to 后面用动词原形。" },
            { question: "She is a keyboard ___.", options: ["operator", "operate", "operation", "operating"], correct: 0, explanation: "operator 表示操作员。" },
            { question: "That man is ___ office assistant.", options: ["a", "an", "the", "/"], correct: 1, explanation: "office 以元音音素开头，用 an。" }
        ],
        listening: {
            dialogue: "How do you do? Come and meet our employees, Mr. Richards. Thank you, Mr. Jackson. This is Miss Grey, and this is Miss Taylor. How do you do? Those women are very hard-working. What are their jobs? They are keyboard operators. This is Michael Baker, and this is Jeremy Short. How do you do? They are very hard-working, too. What are their jobs? They are sales reps. This man is very lazy. Who is he? He is our office assistant!",
            questions: [
                { question: "What are Miss Grey and Miss Taylor's jobs?", options: ["Sales reps", "Keyboard operators", "Office assistants", "Teachers"], correct: 1 },
                { question: "What are Michael Baker and Jeremy Short's jobs?", options: ["Sales reps", "Keyboard operators", "Office assistants", "Teachers"], correct: 0 },
                { question: "Who is the office assistant?", options: ["Mr. Jackson", "Michael Baker", "The lazy man", "Mr. Richards"], correct: 2 }
            ]
        },
        translation: [
            { chinese: "你好！（初次见面）", english: "How do you do?" },
            { chinese: "来见见我们的员工，理查兹先生。", english: "Come and meet our employees, Mr. Richards." },
            { chinese: "谢谢您，杰克逊先生。", english: "Thank you, Mr. Jackson." },
            { chinese: "这是格雷小姐，这是泰勒小姐。", english: "This is Miss Grey, and this is Miss Taylor." },
            { chinese: "你们好！", english: "How do you do?" },
            { chinese: "那些女士们非常勤劳。", english: "Those women are very hard-working." },
            { chinese: "她们的工作是什么？", english: "What are their jobs?" },
            { chinese: "她们是键盘操作员。", english: "They are keyboard operators." },
            { chinese: "这是迈克尔·贝克，这是杰里米·肖特。", english: "This is Michael Baker, and this is Jeremy Short." },
            { chinese: "他们是推销员。", english: "They are sales reps." },
            { chinese: "这个人很懒。", english: "This man is very lazy." },
            { chinese: "他是谁？", english: "Who is he?" },
            { chinese: "他是我们的办公室助理！", english: "He is our office assistant!" }
        ]
    },
    {
        id: 19,
        title: "Lesson 19 - Tired and thirsty",
        vocabulary: [
            { word: "matter", translation: "事情", phonetic: "/ˈmætər/", example: "What's the matter?" },
            { word: "children", translation: "孩子们", phonetic: "/ˈtʃɪldrən/", example: "The children are tired." },
            { word: "tired", translation: "累的，疲劳的", phonetic: "/ˈtaɪərd/", example: "We are tired." },
            { word: "boy", translation: "男孩", phonetic: "/bɔɪ/", example: "The boy is tall." },
            { word: "thirsty", translation: "渴的", phonetic: "/ˈθɜːrsti/", example: "The boy is thirsty." },
            { word: "mum", translation: "妈妈", phonetic: "/mʌm/", example: "Mum, we are tired!" },
            { word: "sit down", translation: "坐下", phonetic: "/sɪt daʊn/", example: "Sit down here." },
            { word: "right", translation: "好的", phonetic: "/raɪt/", example: "All right." },
            { word: "ice cream", translation: "冰淇淋", phonetic: "/ˌaɪs ˈkriːm/", example: "We want some ice cream." }
        ],
        grammar: [
            { question: "What's the ___?", options: ["matter", "matters", "mattered", "mattering"], correct: 0, explanation: "What's the matter? 是固定用法。" },
            { question: "The children ___ tired.", options: ["am", "is", "are", "be"], correct: 2, explanation: "children 是复数，用 are。" },
            { question: "They are ___.", options: ["thirst", "thirsty", "thirsts", "thirsting"], correct: 1, explanation: "thirsty 是形容词，表示渴的。" },
            { question: "Sit ___ here.", options: ["down", "up", "on", "in"], correct: 0, explanation: "Sit down 是固定短语。" },
            { question: "Are you all ___?", options: ["right", "rights", "righted", "righting"], correct: 0, explanation: "all right 是固定短语，表示好了。" },
            { question: "There's an ice cream ___.", options: ["man", "men", "mans", "mann"], correct: 0, explanation: "an ice cream man 表示卖冰淇淋的人。" },
            { question: "We want ___ ice cream.", options: ["a", "an", "some", "any"], correct: 2, explanation: "ice cream 不可数，用 some。" },
            { question: "Are you ___?", options: ["tire", "tired", "tiring", "tires"], correct: 1, explanation: "tired 是形容词表示累的。" },
            { question: "Are you all right? Yes, I ___.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 后面用 am。" },
            { question: "___ is the matter?", options: ["What", "Who", "Where", "How"], correct: 0, explanation: "What's the matter? 是固定用法。" },
            { question: "The boy is ___.", options: ["thirst", "thirsty", "thirsts", "thirsting"], correct: 1, explanation: "thirsty 是形容词。" },
            { question: "They are tired ___ thirsty.", options: ["or", "and", "but", "with"], correct: 1, explanation: "and 连接两个并列的形容词。" },
            { question: "Mum, we're tired! Sit down ___.", options: ["here", "there", "where", "everywhere"], correct: 0, explanation: "here 表示这里。" },
            { question: "We want some ice ___.", options: ["cream", "creams", "a cream", "the cream"], correct: 0, explanation: "ice cream 不可数。" },
            { question: "Are you ___ right?", options: ["all", "every", "both", "each"], correct: 0, explanation: "all right 是固定短语。" }
        ],
        listening: {
            dialogue: "What's the matter, children? We are tired! Are you tired? Yes, we are. Are you thirsty? Yes, we are. Sit down here. Are you all right now? No, we aren't. Look! There is an ice cream man. Two ice creams, please. Here you are, children. Thanks, Mum. These ice creams are nice. Are you all right now? Yes, we are, thank you.",
            questions: [
                { question: "How are the children feeling?", options: ["Happy", "Tired and thirsty", "Excited", "Sleepy"], correct: 1 },
                { question: "What does the mother buy for them?", options: ["Water", "Ice cream", "Cake", "Juice"], correct: 1 },
                { question: "How do the children feel after eating?", options: ["Still tired", "All right", "Sick", "Sleepy"], correct: 1 }
            ]
        },
        translation: [
            { chinese: "怎么回事，孩子们？", english: "What's the matter, children?" },
            { chinese: "我们累了！", english: "We are tired!" },
            { chinese: "你们累了吗？", english: "Are you tired?" },
            { chinese: "是的，我们累了。", english: "Yes, we are." },
            { chinese: "你们渴吗？", english: "Are you thirsty?" },
            { chinese: "是的，我们渴了。", english: "Yes, we are." },
            { chinese: "在这儿坐下。", english: "Sit down here." },
            { chinese: "现在你们好了吗？", english: "Are you all right now?" },
            { chinese: "不，我们还没有好。", english: "No, we aren't." },
            { chinese: "看！有个卖冰淇淋的人。", english: "Look! There is an ice cream man." },
            { chinese: "请来两份冰淇淋。", english: "Two ice creams, please." },
            { chinese: "给你们，孩子们。", english: "Here you are, children." },
            { chinese: "谢谢，妈妈。", english: "Thanks, Mum." },
            { chinese: "这些冰淇淋很好吃。", english: "These ice creams are nice." },
            { chinese: "是的，我们好了。谢谢你。", english: "Yes, we are, thank you." }
        ]
    },
    {
        id: 21,
        title: "Lesson 21 - Which book?",
        vocabulary: [
            { word: "give", translation: "给", phonetic: "/ɡɪv/", example: "Give me a book." },
            { word: "one", translation: "一个", phonetic: "/wʌn/", example: "Which one?" },
            { word: "which", translation: "哪一个", phonetic: "/wɪtʃ/", example: "Which book?" }
        ],
        grammar: [
            { question: "Give me ___ book.", options: ["a", "an", "the", "/"], correct: 0, explanation: "泛指一本书用 a。" },
            { question: "Which ___?", options: ["one", "ones", "a one", "the one"], correct: 0, explanation: "Which one 指哪一个。" },
            { question: "Give me ___ book, please.", options: ["that", "those", "these", "them"], correct: 0, explanation: "指示代词 that 表示那。" },
            { question: "Not ___ one. The red one.", options: ["a", "an", "that", "/"], correct: 2, explanation: "Not that one 表示不是那一个。" },
            { question: "Which book? The red ___.", options: ["book", "one", "books", "ones"], correct: 1, explanation: "the red one 指代红色的那一本。" },
            { question: "Give me the ___ pen.", options: ["blue", "blue one", "blue ones", "a blue"], correct: 0, explanation: "the blue pen 表示特指的蓝色钢笔。" },
            { question: "Not that one. The ___ one.", options: ["big", "bigger", "biggest", "bigly"], correct: 0, explanation: "形容词修饰 one。" },
            { question: "___ book do you want?", options: ["What", "Which", "Who", "Where"], correct: 1, explanation: "Which 在有限范围内选择。" },
            { question: "Give me ___ please.", options: ["a", "an", "that one", "the"], correct: 2, explanation: "that one 表示那一个。" },
            { question: "This is ___ pen.", options: ["I", "me", "my", "mine"], correct: 2, explanation: "my 是形容词性物主代词。" },
            { question: "Which one? The ___ on the desk.", options: ["one", "ones", "a one", "the one"], correct: 0, explanation: "the one on the desk 表示在桌上的那个。" },
            { question: "Give the book ___ me.", options: ["for", "to", "at", "with"], correct: 1, explanation: "give sth to sb 表示把某物给某人。" },
            { question: "Here ___ are.", options: ["you", "he", "she", "they"], correct: 0, explanation: "Here you are 是固定搭配。" },
            { question: "Which ___ do you want?", options: ["one", "ones", "a one", "/"], correct: 0, explanation: "Which one 询问哪一个。" },
            { question: "Not ___ one, the other one.", options: ["a", "an", "that", "/"], correct: 2, explanation: "Not that one 表示不是那个。" }
        ],
        listening: {
            dialogue: "Give me a book please, Jane. Which book? The red one. This one? No, not that one. The red one. This one? Yes, please. Thank you. Here you are.",
            questions: [
                { question: "Which book does the person want?", options: ["The blue one", "The red one", "The green one", "The yellow one"], correct: 1 },
                { question: "Is the first book the correct one?", options: ["Yes", "No", "Maybe", "Not mentioned"], correct: 1 },
                { question: "What phrase is used when giving the book?", options: ["Thank you", "Here you are", "You're welcome", "All right"], correct: 1 }
            ]
        },
        translation: [
            { chinese: "请给我一本书，简。", english: "Give me a book please, Jane." },
            { chinese: "哪一本？", english: "Which book?" },
            { chinese: "红色的那一本。", english: "The red one." },
            { chinese: "这一本吗？", english: "This one?" },
            { chinese: "不，不是那一本。", english: "No, not that one." },
            { chinese: "红色的那一本。", english: "The red one." },
            { chinese: "这本吗？", english: "This one?" },
            { chinese: "是的，请拿给我。", english: "Yes, please." },
            { chinese: "谢谢你。", english: "Thank you." },
            { chinese: "给你。", english: "Here you are." }
        ]
    },
    {
        id: 23,
        title: "Lesson 23 - Which glasses?",
        vocabulary: [
            { word: "which", translation: "哪些", phonetic: "/wɪtʃ/", example: "Which glasses?" },
            { word: "glasses", translation: "杯子", phonetic: "/ˈɡlɑːsɪz/", example: "These are glasses." },
            { word: "shelf", translation: "架子", phonetic: "/ʃelf/", example: "The glasses are on the shelf." },
            { word: "desk", translation: "书桌", phonetic: "/desk/", example: "The book is on the desk." },
            { word: "on", translation: "在…上", phonetic: "/ɒn/", example: "The pen is on the desk." }
        ],
        grammar: [
            { question: "Give me ___ glasses.", options: ["a", "an", "some", "the"], correct: 2, explanation: "glasses 是复数，用 some。" },
            { question: "Which ___?", options: ["glass", "glasses", "a glass", "the glass"], correct: 1, explanation: "glasses 是复数，用 which glasses。" },
            { question: "The ones on the ___.", options: ["shelf", "shelfs", "shelves", "a shelf"], correct: 0, explanation: "on the shelf 是固定搭配。" },
            { question: "Put them on this ___.", options: ["shelfs", "shelf", "shelves", "a shelf"], correct: 1, explanation: "this 后面用名词单数。" },
            { question: "The glasses ___ on the shelf.", options: ["am", "is", "are", "be"], correct: 2, explanation: "glasses 是复数，用 are。" },
            { question: "Those glasses ___ on the desk.", options: ["am", "is", "are", "be"], correct: 2, explanation: "Those glasses 是复数，用 are。" },
            { question: "Give me ___ please.", options: ["a", "some", "an", "the"], correct: 1, explanation: "some 用于复数可数名词。" },
            { question: "The ones ___ the shelf.", options: ["in", "on", "at", "under"], correct: 1, explanation: "on the shelf 表示在架子上。" },
            { question: "These glasses are on the ___.", options: ["desk", "desks", "a desk", "the desks"], correct: 0, explanation: "the desk 特指某个书桌。" },
            { question: "Put them on ___ shelf.", options: ["this", "these", "those", "them"], correct: 0, explanation: "this 用于单数名词。" },
            { question: "Not that shelf. The ___ one.", options: ["other", "others", "another", "the other"], correct: 0, explanation: "the other one 表示另一个。" },
            { question: "Give me ___ glass.", options: ["a", "some", "an", "/"], correct: 0, explanation: "glass 是可数名词单数，用 a。" },
            { question: "Here ___ are.", options: ["you", "he", "she", "they"], correct: 0, explanation: "Here you are 是固定搭配。" },
            { question: "These glasses ___ on the shelf.", options: ["am", "is", "are", "be"], correct: 2, explanation: "These 是复数，用 are。" },
            { question: "___ shelf? The one on the left.", options: ["What", "Which", "Who", "Where"], correct: 1, explanation: "Which shelf 询问哪个架子。" }
        ],
        listening: {
            dialogue: "Give me some glasses please, Jane. Which glasses? These glasses? No, not those. The ones on the shelf. These? Yes, please. Here you are. Thanks. Put them on this desk. But the glasses are on the desk. No, not those. The ones on the shelf. Is this my glass? No, that's your glass. But your glass is on the shelf, too. Oh! Which glass? This one? Yes, please. Here you are.",
            questions: [
                { question: "Where are the glasses that the person wants?", options: ["On the desk", "On the shelf", "In the cupboard", "On the table"], correct: 1 },
                { question: "Where should the glasses be put?", options: ["On the shelf", "On the desk", "In the box", "In the kitchen"], correct: 1 },
                { question: "Whose glass is on the shelf too?", options: ["Jane's", "The man's", "The woman's", "Not mentioned"], correct: 2 }
            ]
        },
        translation: [
            { chinese: "请给我一些杯子，简。", english: "Give me some glasses please, Jane." },
            { chinese: "哪些杯子？", english: "Which glasses?" },
            { chinese: "这些杯子吗？", english: "These glasses?" },
            { chinese: "不，不是那些。", english: "No, not those." },
            { chinese: "架子上的那些。", english: "The ones on the shelf." },
            { chinese: "这些吗？", english: "These?" },
            { chinese: "好的，请拿给我。", english: "Yes, please." },
            { chinese: "给你。谢谢。", english: "Here you are. Thanks." },
            { chinese: "把它们放在这个书桌上。", english: "Put them on this desk." },
            { chinese: "但是那个杯子在书桌上啊。", english: "But the glasses are on the desk." },
            { chinese: "不，不是那些。架子上的那些。", english: "No, not those. The ones on the shelf." },
            { chinese: "这是我的杯子吗？", english: "Is this my glass?" },
            { chinese: "不，那是你的杯子。", english: "No, that's your glass." },
            { chinese: "你的杯子也在架子上。", english: "Your glass is on the shelf, too." }
        ]
    },
    {
        id: 25,
        title: "Lesson 25 - Mrs. Smith's kitchen",
        vocabulary: [
            { word: "kitchen", translation: "厨房", phonetic: "/ˈkɪtʃɪn/", example: "This is Mrs. Smith's kitchen." },
            { word: "refrigerator", translation: "电冰箱", phonetic: "/rɪˈfrɪdʒəreɪtər/", example: "The refrigerator is white." },
            { word: "right", translation: "右边", phonetic: "/raɪt/", example: "The refrigerator is on the right." },
            { word: "electric", translation: "带电的", phonetic: "/ɪˈlektrɪk/", example: "It is an electric cooker." },
            { word: "left", translation: "左边", phonetic: "/left/", example: "The cooker is on the left." },
            { word: "middle", translation: "中间", phonetic: "/ˈmɪdl/", example: "The table is in the middle." },
            { word: "room", translation: "房间", phonetic: "/ruːm/", example: "There is a table in the room." },
            { word: "cup", translation: "杯子", phonetic: "/kʌp/", example: "There is a cup on the table." }
        ],
        grammar: [
            { question: "___ is Mrs. Smith's kitchen.", options: ["This", "These", "Those", "Them"], correct: 0, explanation: "This 指代近处的单数。" },
            { question: "The refrigerator is white. It's ___ the right.", options: ["in", "on", "at", "under"], correct: 1, explanation: "on the right 表示在右边。" },
            { question: "There ___ a table in the room.", options: ["am", "is", "are", "be"], correct: 1, explanation: "a table 是单数，用 there is。" },
            { question: "There ___ some cups on the table.", options: ["am", "is", "are", "be"], correct: 2, explanation: "some cups 是复数，用 there are。" },
            { question: "The cooker ___ on the left.", options: ["am", "is", "are", "be"], correct: 1, explanation: "cooker 是单数，用 is。" },
            { question: "The refrigerator is ___.", options: ["white", "a white", "the white", "whites"], correct: 0, explanation: "颜色作表语不加冠词。" },
            { question: "The cups ___ on the table.", options: ["am", "is", "are", "be"], correct: 2, explanation: "cups 是复数，用 are。" },
            { question: "The cooker is ___ electric cooker.", options: ["a", "an", "the", "/"], correct: 1, explanation: "electric 以元音音素开头，用 an。" },
            { question: "The table is ___ the middle.", options: ["in", "on", "at", "under"], correct: 0, explanation: "in the middle 表示在中间。" },
            { question: "Mrs. Smith's kitchen is ___.", options: ["small", "a small", "the small", "smalls"], correct: 0, explanation: "small 是形容词，作表语。" },
            { question: "There is an electric ___.", options: ["cooker", "cook", "cooks", "cooking"], correct: 0, explanation: "cooker 表示厨灶。" },
            { question: "The bottle is ___ the table.", options: ["in", "on", "at", "under"], correct: 1, explanation: "on the table 表示在桌子上。" },
            { question: "___ is in the room.", options: ["A table", "Table", "The tables", "Tables"], correct: 0, explanation: "单数可数名词用 a 修饰。" },
            { question: "The refrigerator is on the ___.", options: ["right", "rights", "a right", "the right"], correct: 0, explanation: "on the right 是固定搭配。" },
            { question: "There is a bottle ___ the table.", options: ["in", "on", "at", "under"], correct: 1, explanation: "on the table 表示在桌子上。" }
        ],
        listening: {
            dialogue: "Mrs. Smith's kitchen is small. There is a refrigerator in the kitchen. The refrigerator is white. It is on the right. There is an electric cooker in the kitchen. The cooker is blue. It is on the left. There is a table in the middle of the room. There is a bottle on the table. The bottle is empty. There is a cup on the table, too. The cup is clean.",
            questions: [
                { question: "What colour is the refrigerator?", options: ["Blue", "White", "Green", "Red"], correct: 1 },
                { question: "Where is the cooker?", options: ["On the right", "In the middle", "On the left", "Near the door"], correct: 2 },
                { question: "What is on the table?", options: ["A plate", "A cup", "A bottle and a cup", "A knife"], correct: 2 }
            ]
        },
        translation: [
            { chinese: "史密斯太太的厨房很小。", english: "Mrs. Smith's kitchen is small." },
            { chinese: "厨房里有一个电冰箱。", english: "There is a refrigerator in the kitchen." },
            { chinese: "电冰箱是白色的。", english: "The refrigerator is white." },
            { chinese: "它在右边。", english: "It is on the right." },
            { chinese: "厨房里有一个电灶。", english: "There is an electric cooker in the kitchen." },
            { chinese: "灶是蓝色的。", english: "The cooker is blue." },
            { chinese: "它在左边。", english: "It is on the left." },
            { chinese: "房间中央有一张桌子。", english: "There is a table in the middle of the room." },
            { chinese: "桌子上有一个瓶子。", english: "There is a bottle on the table." },
            { chinese: "瓶子是空的。", english: "The bottle is empty." },
            { chinese: "桌子上也有一个杯子。", english: "There is a cup on the table, too." },
            { chinese: "杯子是干净的。", english: "The cup is clean." }
        ]
    },
    {
        id: 27,
        title: "Lesson 27 - Mrs. Smith's living room",
        vocabulary: [
            { word: "living room", translation: "客厅", phonetic: "/ˈlɪvɪŋ ruːm/", example: "This is Mrs. Smith's living room." },
            { word: "near", translation: "靠近", phonetic: "/nɪər/", example: "The table is near the window." },
            { word: "window", translation: "窗户", phonetic: "/ˈwɪndəʊ/", example: "There is a window in the room." },
            { word: "armchair", translation: "扶手椅", phonetic: "/ˈɑːrmtʃeər/", example: "There are two armchairs." },
            { word: "door", translation: "门", phonetic: "/dɔːr/", example: "The door is white." },
            { word: "picture", translation: "图画", phonetic: "/ˈpɪktʃər/", example: "There is a picture on the wall." },
            { word: "wall", translation: "墙", phonetic: "/wɔːl/", example: "The picture is on the wall." }
        ],
        grammar: [
            { question: "Mrs. Smith's living room is ___.", options: ["large", "a large", "the large", "larges"], correct: 0, explanation: "large 是形容词作表语。" },
            { question: "There ___ a television in the room.", options: ["am", "is", "are", "be"], correct: 1, explanation: "a television 是单数，用 there is。" },
            { question: "The television ___ near the window.", options: ["am", "is", "are", "be"], correct: 1, explanation: "television 是单数，用 is。" },
            { question: "There ___ some pictures on the wall.", options: ["am", "is", "are", "be"], correct: 2, explanation: "pictures 是复数，用 there are。" },
            { question: "The table is ___ the window.", options: ["in", "on", "at", "near"], correct: 3, explanation: "near 表示靠近。" },
            { question: "There ___ two armchairs.", options: ["am", "is", "are", "be"], correct: 2, explanation: "two armchairs 是复数，用 there are。" },
            { question: "The armchairs are ___ the table.", options: ["near", "in", "on", "at"], correct: 0, explanation: "near 表示靠近。" },
            { question: "There is a picture ___ the wall.", options: ["in", "on", "at", "under"], correct: 1, explanation: "on the wall 表示在墙上。" },
            { question: "The television is on a ___.", options: ["table", "desk", "shelf", "wall"], correct: 0, explanation: "on a table 表示在桌子上。" },
            { question: "There ___ a large room.", options: ["am", "is", "are", "be"], correct: 1, explanation: "a large room 是单数，用 there is。" },
            { question: "The door is ___.", options: ["white", "a white", "the white", "whites"], correct: 0, explanation: "颜色作表语不加冠词。" },
            { question: "There are some pictures ___ the wall.", options: ["in", "on", "at", "under"], correct: 1, explanation: "on the wall 表示在墙表面。" },
            { question: "The living room is very ___.", options: ["large", "larger", "largest", "largely"], correct: 0, explanation: "large 是形容词原级。" },
            { question: "Is there a television ___ the room?", options: ["in", "on", "at", "under"], correct: 0, explanation: "in the room 表示在房间里。" },
            { question: "The armchairs are near the ___.", options: ["table", "a table", "tables", "the tables"], correct: 0, explanation: "the table 特指某张桌子。" }
        ],
        listening: {
            dialogue: "Mrs. Smith's living room is large. There is a television in the room. The television is near the window. There are some magazines on the television. There is a table in the room. There are some newspapers on the table. There are two armchairs in the room. The armchairs are near the table. There is a stereo in the room. The stereo is near the door. There are some books on the stereo. There is a picture on the wall. The picture is very beautiful.",
            questions: [
                { question: "Where is the television?", options: ["Near the door", "Near the window", "On the table", "On the wall"], correct: 1 },
                { question: "What is on the table?", options: ["Magazines", "Books", "Newspapers", "Pictures"], correct: 2 },
                { question: "Where is the stereo?", options: ["Near the table", "Near the window", "Near the door", "On the shelf"], correct: 2 }
            ]
        },
        translation: [
            { chinese: "史密斯太太的客厅很大。", english: "Mrs. Smith's living room is large." },
            { chinese: "房间里有一台电视机。", english: "There is a television in the room." },
            { chinese: "电视机靠近窗户。", english: "The television is near the window." },
            { chinese: "电视机上有些杂志。", english: "There are some magazines on the television." },
            { chinese: "房间里有一张桌子。", english: "There is a table in the room." },
            { chinese: "桌子上有些报纸。", english: "There are some newspapers on the table." },
            { chinese: "房间里有两把扶手椅。", english: "There are two armchairs in the room." },
            { chinese: "扶手椅靠近桌子。", english: "The armchairs are near the table." },
            { chinese: "房间里有一台立体声音响。", english: "There is a stereo in the room." },
            { chinese: "音响靠近门。", english: "The stereo is near the door." },
            { chinese: "音响上有几本书。", english: "There are some books on the stereo." },
            { chinese: "墙上有一幅画。", english: "There is a picture on the wall." },
            { chinese: "这幅画非常漂亮。", english: "The picture is very beautiful." }
        ]
    },
    {
        id: 29,
        title: "Lesson 29 - Come in, Amy",
        vocabulary: [
            { word: "shut", translation: "关", phonetic: "/ʃʌt/", example: "Shut the door, please." },
            { word: "bedroom", translation: "卧室", phonetic: "/ˈbedruːm/", example: "This is my bedroom." },
            { word: "untidy", translation: "不整洁的", phonetic: "/ʌnˈtaɪdi/", example: "The bedroom is untidy." },
            { word: "must", translation: "必须", phonetic: "/mʌst/", example: "I must clean the room." },
            { word: "open", translation: "打开", phonetic: "/ˈəʊpən/", example: "Open the window." },
            { word: "air", translation: "空气，通风", phonetic: "/eər/", example: "Air the room." },
            { word: "put", translation: "放", phonetic: "/pʊt/", example: "Put the books on the shelf." },
            { word: "clothes", translation: "衣服", phonetic: "/kləʊðz/", example: "Put the clothes in the wardrobe." },
            { word: "wardrobe", translation: "衣柜", phonetic: "/ˈwɔːrdrəʊb/", example: "The clothes are in the wardrobe." },
            { word: "dust", translation: "掸灰", phonetic: "/dʌst/", example: "Dust the table." },
            { word: "sweep", translation: "扫", phonetic: "/swiːp/", example: "Sweep the floor." }
        ],
        grammar: [
            { question: "Come ___, Amy.", options: ["in", "on", "at", "into"], correct: 0, explanation: "Come in 表示进来。" },
            { question: "Shut the ___, please.", options: ["door", "doors", "a door", "the doors"], correct: 0, explanation: "the door 特指这个门。" },
            { question: "This bedroom is very ___.", options: ["untidy", "untidily", "untidiness", "untidies"], correct: 0, explanation: "untidy 是形容词。" },
            { question: "What ___ I do?", options: ["must", "musts", "musted", "musting"], correct: 0, explanation: "must 是情态动词，无人称变化。" },
            { question: "Open the ___ and air the room.", options: ["window", "windows", "a window", "the windows"], correct: 0, explanation: "the window 特指这个窗户。" },
            { question: "Then put these clothes ___ the wardrobe.", options: ["in", "on", "at", "under"], correct: 0, explanation: "in the wardrobe 表示在衣柜里。" },
            { question: "Then make the ___.", options: ["bed", "beds", "a bed", "the bed"], correct: 0, explanation: "make the bed 是固定短语，铺床。" },
            { question: "Dust the ___.", options: ["table", "a table", "tables", "the tables"], correct: 0, explanation: "the table 特指某张桌子。" },
            { question: "Then ___ the floor.", options: ["sweep", "sweeps", "sweeping", "swept"], correct: 0, explanation: "祈使句用动词原形。" },
            { question: "The bedroom is very untidy. What ___ I do?", options: ["must", "can", "may", "should"], correct: 0, explanation: "must 表示必须。" },
            { question: "Put these clothes in the ___.", options: ["wardrobe", "wardrobes", "a wardrobe", "the wardrobes"], correct: 0, explanation: "the wardrobe 特指衣柜。" },
            { question: "Make the ___ please.", options: ["bed", "beds", "a bed", "the beds"], correct: 0, explanation: "make the bed 是固定短语。" },
            { question: "___ the table.", options: ["Dust", "Dusts", "Dusting", "Dusted"], correct: 0, explanation: "祈使句用动词原形。" },
            { question: "___ the floor.", options: ["Sweep", "Sweeps", "Sweeping", "Swept"], correct: 0, explanation: "祈使句用动词原形。" },
            { question: "Then ___ the room again.", options: ["clean", "cleans", "cleaning", "cleaned"], correct: 0, explanation: "祈使句用动词原形。" }
        ],
        listening: {
            dialogue: "Come in, Amy. Shut the door, please. This bedroom is very untidy. What must I do, Mrs. Jones? Open the window and air the room. Then put these clothes in the wardrobe. Then make the bed. Dust the table. Then sweep the floor. And then put these clothes in the wardrobe. Are you tidy now, Amy? Yes, I am. Good. Then we can go to the park.",
            questions: [
                { question: "What must Amy do with the clothes?", options: ["Wash them", "Put them in the wardrobe", "Fold them", "Give them away"], correct: 1 },
                { question: "What must Amy do with the floor?", options: ["Wash it", "Sweep it", "Paint it", "Cover it"], correct: 1 },
                { question: "What will they do after tidying?", options: ["Watch TV", "Go to the park", "Have dinner", "Read a book"], correct: 1 }
            ]
        },
        translation: [
            { chinese: "进来，艾米。", english: "Come in, Amy." },
            { chinese: "请把门关上。", english: "Shut the door, please." },
            { chinese: "这卧室非常不整洁。", english: "This bedroom is very untidy." },
            { chinese: "我应该做什么，琼斯夫人？", english: "What must I do, Mrs. Jones?" },
            { chinese: "打开窗户，给房间通通风。", english: "Open the window and air the room." },
            { chinese: "然后把这些衣服放进衣柜。", english: "Then put these clothes in the wardrobe." },
            { chinese: "然后整理床铺。", english: "Then make the bed." },
            { chinese: "掸掉桌上的灰尘。", english: "Dust the table." },
            { chinese: "然后扫地。", english: "Then sweep the floor." },
            { chinese: "现在整洁了吗？", english: "Are you tidy now, Amy?" },
            { chinese: "是的，整洁了。", english: "Yes, I am." },
            { chinese: "好的。那么我们可以去公园了。", english: "Good. Then we can go to the park." }
        ]
    },
    {
        id: 31,
        title: "Lesson 31 - Where's Sally?",
        vocabulary: [
            { word: "garden", translation: "花园", phonetic: "/ˈɡɑːrdn/", example: "She is in the garden." },
            { word: "under", translation: "在…下面", phonetic: "/ˈʌndər/", example: "The dog is under the tree." },
            { word: "tree", translation: "树", phonetic: "/triː/", example: "There is a tree in the garden." },
            { word: "climb", translation: "爬", phonetic: "/klaɪm/", example: "She is climbing the tree." },
            { word: "who", translation: "谁", phonetic: "/huː/", example: "Who is that?" },
            { word: "run", translation: "跑", phonetic: "/rʌn/", example: "The dog is running." },
            { word: "grass", translation: "草地", phonetic: "/ɡrɑːs/", example: "The dog is on the grass." },
            { word: "after", translation: "在…之后", phonetic: "/ˈæftər/", example: "The dog is running after the cat." },
            { word: "across", translation: "穿过", phonetic: "/əˈkrɒs/", example: "The cat is running across the grass." },
            { word: "cat", translation: "猫", phonetic: "/kæt/", example: "The cat is climbing the tree." }
        ],
        grammar: [
            { question: "Where ___ Sally?", options: ["am", "is", "are", "be"], correct: 1, explanation: "Sally 是第三人称单数，用 is。" },
            { question: "She's ___ the garden.", options: ["in", "on", "at", "under"], correct: 0, explanation: "in the garden 表示在花园里。" },
            { question: "She's ___ the tree.", options: ["climbing", "climb", "climbs", "climbed"], correct: 0, explanation: "现在进行时用 climbing。" },
            { question: "Who is ___?", options: ["that", "those", "these", "them"], correct: 0, explanation: "Who is that? 询问那是谁。" },
            { question: "What is the dog ___?", options: ["doing", "do", "does", "done"], correct: 0, explanation: "现在进行时用 doing。" },
            { question: "The dog is ___ the grass.", options: ["in", "on", "at", "under"], correct: 1, explanation: "on the grass 表示在草地上。" },
            { question: "It's running ___ a cat.", options: ["after", "before", "in front of", "behind"], correct: 0, explanation: "run after 表示追赶。" },
            { question: "It's running ___ the grass.", options: ["across", "cross", "through", "over"], correct: 0, explanation: "across the grass 表示穿过草地。" },
            { question: "What ___ the children doing?", options: ["am", "is", "are", "be"], correct: 2, explanation: "children 是复数，用 are。" },
            { question: "The children are ___ the tree.", options: ["under", "in", "on", "at"], correct: 0, explanation: "under the tree 表示在树下。" },
            { question: "Sally is ___ the garden.", options: ["in", "on", "at", "under"], correct: 0, explanation: "in the garden 表示在花园里。" },
            { question: "The dog is running after the ___.", options: ["cat", "cats", "a cat", "the cats"], correct: 0, explanation: "the cat 特指那只猫。" },
            { question: "She's climbing the tree. She's ___ the tree.", options: ["in", "on", "at", "under"], correct: 0, explanation: "in the tree 表示在树上（外来物）。" },
            { question: "What is Sally doing? She's ___ the tree.", options: ["climbing", "climb", "climbs", "climbed"], correct: 0, explanation: "现在进行时用 climbing。" },
            { question: "What is the dog doing? It's ___.", options: ["run", "running", "runs", "ran"], correct: 1, explanation: "现在进行时用 running。" }
        ],
        listening: {
            dialogue: "Where is Sally, Jack? She's in the garden, Jean. What is she doing? She's sitting under the tree. Is Tim in the garden, too? Yes, he is. He's climbing the tree. Who is that? That's the dog. What is the dog doing? It's running across the grass. It's running after a cat. There are some children in the garden, too. What are they doing? They are playing near the tree.",
            questions: [
                { question: "Where is Sally?", options: ["In the house", "In the garden", "Under the tree", "Behind the house"], correct: 1 },
                { question: "What is Tim doing?", options: ["Sitting", "Running", "Climbing the tree", "Playing"], correct: 2 },
                { question: "What is the dog doing?", options: ["Sleeping", "Playing", "Running after a cat", "Barking"], correct: 2 }
            ]
        },
        translation: [
            { chinese: "萨利在哪里，杰克？", english: "Where is Sally, Jack?" },
            { chinese: "她在花园里，琼。", english: "She's in the garden, Jean." },
            { chinese: "她在干什么？", english: "What is she doing?" },
            { chinese: "她正坐在树下。", english: "She's sitting under the tree." },
            { chinese: "蒂姆也在花园里吗？", english: "Is Tim in the garden, too?" },
            { chinese: "是的，他在。他正在爬树。", english: "Yes, he is. He's climbing the tree." },
            { chinese: "那是谁？", english: "Who is that?" },
            { chinese: "那是那只狗。", english: "That's the dog." },
            { chinese: "那只狗在干什么？", english: "What is the dog doing?" },
            { chinese: "它正在穿过草地。", english: "It's running across the grass." },
            { chinese: "它正在追一只猫。", english: "It's running after a cat." },
            { chinese: "花园里也有几个孩子。", english: "There are some children in the garden, too." },
            { chinese: "他们在干什么？", english: "What are they doing?" },
            { chinese: "他们正在树附近玩耍。", english: "They are playing near the tree." }
        ]
    },
    {
        id: 33,
        title: "Lesson 33 - A fine day",
        vocabulary: [
            { word: "day", translation: "日子，天", phonetic: "/deɪ/", example: "It is a fine day today." },
            { word: "cloud", translation: "云", phonetic: "/klaʊd/", example: "There are some clouds in the sky." },
            { word: "sky", translation: "天空", phonetic: "/skaɪ/", example: "The sky is blue." },
            { word: "sun", translation: "太阳", phonetic: "/sʌn/", example: "The sun is shining." },
            { word: "shine", translation: "照耀", phonetic: "/ʃaɪn/", example: "The sun is shining." },
            { word: "with", translation: "和…一起", phonetic: "/wɪð/", example: "We are with our family." },
            { word: "family", translation: "家庭", phonetic: "/ˈfæməli/", example: "This is my family." },
            { word: "walk", translation: "走路", phonetic: "/wɔːk/", example: "They are walking over the bridge." },
            { word: "over", translation: "跨越", phonetic: "/ˈəʊvər/", example: "The bridge is over the river." },
            { word: "bridge", translation: "桥", phonetic: "/brɪdʒ/", example: "There is a bridge over the river." },
            { word: "aeroplane", translation: "飞机", phonetic: "/ˈeərəpleɪn/", example: "There is an aeroplane in the sky." },
            { word: "fly", translation: "飞", phonetic: "/flaɪ/", example: "The aeroplane is flying." }
        ],
        grammar: [
            { question: "It is a fine ___ today.", options: ["day", "days", "a day", "the day"], correct: 0, explanation: "a fine day 表示好天气。" },
            { question: "There ___ some clouds in the sky.", options: ["am", "is", "are", "be"], correct: 2, explanation: "clouds 是复数，用 there are。" },
            { question: "The sun is ___.", options: ["shining", "shine", "shines", "shone"], correct: 0, explanation: "现在进行时用 shining。" },
            { question: "Mr. Jones is ___ his family.", options: ["and", "with", "for", "to"], correct: 1, explanation: "with 表示和…一起。" },
            { question: "They are ___ over the bridge.", options: ["walking", "walk", "walks", "walked"], correct: 0, explanation: "现在进行时用 walking。" },
            { question: "There ___ a boat on the river.", options: ["am", "is", "are", "be"], correct: 1, explanation: "a boat 是单数，用 there is。" },
            { question: "The boat is ___ the river.", options: ["in", "on", "at", "under"], correct: 1, explanation: "on the river 表示在河面上。" },
            { question: "There ___ an aeroplane in the sky.", options: ["am", "is", "are", "be"], correct: 1, explanation: "an aeroplane 是单数，用 there is。" },
            { question: "The aeroplane is ___ over the river.", options: ["flying", "fly", "flies", "flew"], correct: 0, explanation: "现在进行时用 flying。" },
            { question: "There are some clouds ___ the sky.", options: ["in", "on", "at", "under"], correct: 0, explanation: "in the sky 表示在空中。" },
            { question: "The Jones family is ___ a walk.", options: ["at", "in", "on", "under"], correct: 2, explanation: "on a walk 表示在散步。" },
            { question: "The sun is shining ___ day.", options: ["this", "these", "that", "those"], correct: 0, explanation: "this day 表示今天。" },
            { question: "The bridge is ___ the river.", options: ["over", "on", "in", "above"], correct: 0, explanation: "over the river 表示横跨河。" },
            { question: "There is a boat ___ the river.", options: ["on", "in", "over", "at"], correct: 0, explanation: "on the river 表示在河面上。" },
            { question: "The aeroplane is flying ___ the river.", options: ["over", "on", "in", "above"], correct: 0, explanation: "over 表示在…上方飞过。" }
        ],
        listening: {
            dialogue: "It is a fine day today. There are some clouds in the sky, but the sun is shining. Mr. Jones is with his family. They are walking over the bridge. There are some boats on the river. Mr. Jones and his wife are looking at the boats. There is an aeroplane in the sky. The aeroplane is flying over the river. There is a ship in the river, too. It is going under the bridge. The children are looking at the ship. It is a very beautiful day.",
            questions: [
                { question: "What is the weather like?", options: ["Rainy", "Cloudy and dark", "Fine with sunshine", "Windy"], correct: 2 },
                { question: "Where is the family walking?", options: ["On the street", "Over the bridge", "In the park", "By the river"], correct: 1 },
                { question: "What is flying in the sky?", options: ["A bird", "A helicopter", "An aeroplane", "A kite"], correct: 2 }
            ]
        },
        translation: [
            { chinese: "今天天气好。", english: "It is a fine day today." },
            { chinese: "天空中有些云，但阳光灿烂。", english: "There are some clouds in the sky, but the sun is shining." },
            { chinese: "琼斯先生和他的家人在一起。", english: "Mr. Jones is with his family." },
            { chinese: "他们正在过桥。", english: "They are walking over the bridge." },
            { chinese: "河上有一些船。", english: "There are some boats on the river." },
            { chinese: "琼斯先生和他的妻子正在看这些船。", english: "Mr. Jones and his wife are looking at the boats." },
            { chinese: "天空中有一架飞机。", english: "There is an aeroplane in the sky." },
            { chinese: "飞机正从河上飞过。", english: "The aeroplane is flying over the river." },
            { chinese: "河里也有一艘轮船。", english: "There is a ship in the river, too." },
            { chinese: "它正从桥下驶过。", english: "It is going under the bridge." },
            { chinese: "孩子们正在看这艘轮船。", english: "The children are looking at the ship." },
            { chinese: "这是非常美好的一天。", english: "It is a very beautiful day." }
        ]
    }
,

{
    id: 35,
    title: "Lesson 35 - Our village",
    vocabulary: [
        { word: "photograph", translation: "照片", phonetic: "/ˈfəʊtəɡrɑːf/", example: "This is a photograph of our village." },
        { word: "village", translation: "村庄", phonetic: "/ˈvɪlɪdʒ/", example: "Our village is in a valley." },
        { word: "valley", translation: "山谷", phonetic: "/ˈvæli/", example: "Our village is in a valley." },
        { word: "hill", translation: "小山", phonetic: "/hɪl/", example: "It is between two hills." },
        { word: "another", translation: "另一个", phonetic: "/əˈnʌðə/", example: "There is another village on the hill." },
        { word: "bank", translation: "河岸", phonetic: "/bæŋk/", example: "The village is on a river." },
        { word: "water", translation: "水", phonetic: "/ˈwɔːtə/", example: "The children are swimming in the water." },
        { word: "swim", translation: "游泳", phonetic: "/swɪm/", example: "The children are swimming in the water." },
        { word: "building", translation: "建筑物", phonetic: "/ˈbɪldɪŋ/", example: "There are some buildings on the bank." },
        { word: "park", translation: "公园", phonetic: "/pɑːk/", example: "There is a park on the bank." },
        { word: "into", translation: "进入", phonetic: "/ˈɪntuː/", example: "The children are going into the park." },
        { word: "wife", translation: "妻子", phonetic: "/waɪf/", example: "My wife and I are walking along the banks of the river." }
    ],
    grammar: [
        { question: "___ is a photograph of our village.", options: ["These", "This", "Those", "That"], correct: 1, explanation: "This 指代单数近处事物，此处指一张照片。" },
        { question: "Our village ___ in a valley.", options: ["am", "are", "is", "be"], correct: 2, explanation: "Our village 是第三人称单数，用 is。" },
        { question: "It is ___ two hills.", options: ["in", "on", "between", "at"], correct: 2, explanation: "between 表示在两者之间，两个小山之间。" },
        { question: "The village is ___ a river.", options: ["in", "on", "at", "by"], correct: 1, explanation: "on a river 表示在河畔，指沿河而建。" },
        { question: "There ___ a park on the bank.", options: ["am", "are", "is", "be"], correct: 2, explanation: "There is + 可数名词单数，表示有一个……。" },
        { question: "The children are ___ in the water.", options: ["swim", "swims", "swimming", "swam"], correct: 2, explanation: "现在进行时：are + 现在分词。" },
        { question: "There are some buildings ___ the bank.", options: ["in", "on", "at", "to"], correct: 1, explanation: "on the bank 表示在河岸上。" },
        { question: "The school building is ___ the park.", options: ["in", "on", "between", "at"], correct: 0, explanation: "in the park 表示在公园里。" },
        { question: "The children are going ___ the park.", options: ["in", "into", "on", "to"], correct: 1, explanation: "into 表示进入，强调动作的方向。" },
        { question: "My wife and I ___ walking along the banks.", options: ["am", "is", "are", "was"], correct: 2, explanation: "My wife and I 是复数主语，用 are。" },
        { question: "There is another village ___ the hill.", options: ["in", "on", "at", "to"], correct: 1, explanation: "on the hill 表示在山丘上。" },
        { question: "The aeroplane is flying ___ the river.", options: ["in", "on", "over", "through"], correct: 2, explanation: "over the river 表示在河上方飞过。" },
        { question: "There is a ship ___ the river.", options: ["in", "on", "over", "under"], correct: 0, explanation: "in the river 表示在河里（水中）。" },
        { question: "The ship is going ___ the bridge.", options: ["over", "under", "on", "in"], correct: 1, explanation: "under the bridge 表示从桥下通过。" },
        { question: "It is a very ___ day.", options: ["beautiful", "beautifully", "more beautiful", "most beautiful"], correct: 0, explanation: "形容词 beautiful 修饰名词 day。" }
    ],
    listening: {
        dialogue: "This is a photograph of our village. Our village is in a valley. It is between two hills. The village is on a river. Here is another photograph of the village. My wife and I are walking along the banks of the river. We are on the left. There is a boy in the water. He is swimming. The boy is swimming across the river. There are some children in the park. They are playing. There is a building on the bank. It is a school. There is a park on the bank, too. The children are going into the park.",
        questions: [
            { question: "Where is the village?", options: ["On a hill", "In a valley between two hills", "By the sea", "On a mountain"], correct: 1, explanation: "村庄位于两座小山之间的山谷中。" },
            { question: "What are the children doing in the park?", options: ["Swimming", "Playing", "Reading", "Sleeping"], correct: 1, explanation: "孩子们在公园里玩耍。" },
            { question: "What is the boy doing in the river?", options: ["Fishing", "Swimming across the river", "Sailing a boat", "Diving"], correct: 1, explanation: "那个男孩正在游过河。" }
        ]
    },
    translation: [
        { chinese: "这是我们村庄的一张照片。", english: "This is a photograph of our village." },
        { chinese: "我们的村庄在一个山谷里。", english: "Our village is in a valley." },
        { chinese: "它位于两座小山之间。", english: "It is between two hills." },
        { chinese: "村庄在一条河边。", english: "The village is on a river." },
        { chinese: "这是我的另一张村庄照片。", english: "Here is another photograph of the village." },
        { chinese: "我和妻子正沿着河岸散步。", english: "My wife and I are walking along the banks of the river." },
        { chinese: "我们在左边。", english: "We are on the left." },
        { chinese: "水里有一个男孩。他正在游泳。", english: "There is a boy in the water. He is swimming." },
        { chinese: "那个男孩正游过河。", english: "The boy is swimming across the river." },
        { chinese: "公园里有一些孩子。他们正在玩耍。", english: "There are some children in the park. They are playing." },
        { chinese: "河岸上有一栋建筑物。那是一所学校。", english: "There is a building on the bank. It is a school." },
        { chinese: "孩子们正走进公园。", english: "The children are going into the park." }
    ]
},
{
    id: 37,
    title: "Lesson 37 - Going to",
    vocabulary: [
        { word: "bookcase", translation: "书柜", phonetic: "/ˈbʊkkeɪs/", example: "I'm going to make a bookcase." },
        { word: "hammer", translation: "锤子", phonetic: "/ˈhæmə/", example: "Give me that hammer." },
        { word: "paint", translation: "油漆", phonetic: "/peɪnt/", example: "I'm going to paint the bookcase." },
        { word: "paintbrush", translation: "油漆刷", phonetic: "/ˈpeɪntbrʌʃ/", example: "Give me a paintbrush." },
        { word: "nail", translation: "钉子", phonetic: "/neɪl/", example: "I need some nails." },
        { word: "tin", translation: "罐头", phonetic: "/tɪn/", example: "There is a tin of paint." },
        { word: "work", translation: "工作", phonetic: "/wɜːk/", example: "You're working hard." },
        { word: "hard", translation: "努力地", phonetic: "/hɑːd/", example: "George is working hard." },
        { word: "make", translation: "做，制作", phonetic: "/meɪk/", example: "I'm going to make a bookcase." },
        { word: "paint", translation: "油漆", phonetic: "/peɪnt/", example: "I'm going to paint it." }
    ],
    grammar: [
        { question: "You're working ___, George.", options: ["hardly", "hard", "harder", "hardest"], correct: 1, explanation: "hard 作副词表示努力地，修饰 working。" },
        { question: "What are you going ___?", options: ["doing", "to do", "do", "does"], correct: 1, explanation: "be going to 后接动词原形。" },
        { question: "I'm going to ___ a bookcase.", options: ["make", "makes", "making", "made"], correct: 0, explanation: "be going to 后接动词原形。" },
        { question: "Give me that hammer, ___.", options: ["please", "pleasing", "pleased", "pleasure"], correct: 0, explanation: "please 是礼貌用语，表示请。" },
        { question: "What are you going to do ___ it?", options: ["to", "for", "with", "at"], correct: 2, explanation: "do with 表示处理，拿某物做什么。" },
        { question: "I'm going to paint it. What colour are you going to paint ___?", options: ["him", "her", "it", "them"], correct: 2, explanation: "it 指代前文提到的 bookcase。" },
        { question: "I ___ it pink.", options: ["paint", "'m going to paint", "painted", "painting"], correct: 1, explanation: "打算做某事，用 be going to 结构。" },
        { question: "Pink is not a nice colour. I don't like ___.", options: ["her", "him", "it", "them"], correct: 2, explanation: "it 指代粉红色这种颜色。" },
        { question: "This bookcase ___ be nice.", options: ["isn't going to", "aren't going to", "not going to", "don't going to"], correct: 0, explanation: "be going to 的否定形式，在 be 后加 not。" },
        { question: "You're working hard. I'm working hard ___.", options: ["too", "either", "neither", "also"], correct: 0, explanation: "肯定句末用 too 表示也。" },
        {
            question: "Give ___ that hammer.", options: ["I", "me", "my", "mine"], correct: 1, explanation: "Give + 间接宾语（人称代词宾格）。" },
        { question: "I'm going to paint the bookcase ___.", options: ["me", "myself", "my", "mine"], correct: 1, explanation: "by myself 表示独自地。" },
        { question: "Is this your bookcase? Yes, it's ___.", options: ["my", "mine", "me", "myself"], correct: 1, explanation: "名词性物主代词 mine 相当于 my bookcase。" },
        { question: "What are you going to do? I'm going to ___ a picture.", options: ["paint", "paints", "painting", "painted"], correct: 0, explanation: "be going to 后接动词原形。" },
        { question: "I need a hammer and some ___.", options: ["nail", "nails", "nailing", "nailed"], correct: 1, explanation: "some 后接可数名词复数。" }
    ],
    listening: {
        dialogue: "A: What are you going to do, George?\nB: I'm going to make a bookcase.\nA: You're working hard. What are you going to do with it?\nB: I'm going to paint it.\nA: What colour are you going to paint it?\nB: I'm going to paint it pink.\nA: Pink! That's not a very nice colour for a bookcase.\nB: Well, I don't like it either. But my wife does. She says pink is her favourite colour.",
        questions: [
            { question: "What is George going to make?", options: ["A table", "A bookcase", "A chair", "A shelf"], correct: 1, explanation: "George 打算做一个书柜。" },
            { question: "What colour is George going to paint the bookcase?", options: ["Blue", "Pink", "White", "Green"], correct: 1, explanation: "George 打算把书柜漆成粉红色。" },
            { question: "Why is George going to paint it pink?", options: ["He likes pink", "His wife likes pink", "Pink paint is cheap", "It's the only colour available"], correct: 1, explanation: "他妻子喜欢粉红色，说是她最喜欢的颜色。" }
        ]
    },
    translation: [
        { chinese: "你打算做什么，乔治？", english: "What are you going to do, George?" },
        { chinese: "我打算做个书柜。", english: "I'm going to make a bookcase." },
        { chinese: "你干得很辛苦。", english: "You're working hard." },
        { chinese: "你打算拿它做什么？", english: "What are you going to do with it?" },
        { chinese: "我打算把它漆一下。", english: "I'm going to paint it." },
        { chinese: "你打算把它漆成什么颜色？", english: "What colour are you going to paint it?" },
        { chinese: "我打算把它漆成粉红色。", english: "I'm going to paint it pink." },
        { chinese: "粉红色对书柜来说不是很好看的颜色。", english: "That's not a very nice colour for a bookcase." },
        { chinese: "我也不喜欢。", english: "I don't like it either." },
        { chinese: "但我妻子喜欢。", english: "But my wife does." },
        { chinese: "她说粉红色是她最喜欢的颜色。", english: "She says pink is her favourite colour." },
        { chinese: "请把那把锤子递给我。", english: "Give me that hammer, please." }
    ]
},
{
    id: 39,
    title: "Lesson 39 - Don't drop it!",
    vocabulary: [
        { word: "front", translation: "前面", phonetic: "/frʌnt/", example: "I'm going to put it in front of the window." },
        { word: "careful", translation: "小心的", phonetic: "/ˈkeəfl/", example: "Be careful!" },
        { word: "drop", translation: "掉下", phonetic: "/drɒp/", example: "Don't drop it!" },
        { word: "vase", translation: "花瓶", phonetic: "/vɑːz/", example: "Don't drop that vase!" },
        { word: "send", translation: "送给", phonetic: "/send/", example: "I'm going to send it to my son." },
        { word: "daughter", translation: "女儿", phonetic: "/ˈdɔːtə/", example: "My daughter is in the living room." },
        { word: "living room", translation: "客厅", phonetic: "/ˈlɪvɪŋ ruːm/", example: "The vase is in the living room." },
        { word: "table", translation: "桌子", phonetic: "/ˈteɪbl/", example: "Put the vase on the table." },
        { word: "plate", translation: "盘子", phonetic: "/pleɪt/", example: "Give me those plates." },
        { word: "cupboard", translation: "碗橱", phonetic: "/ˈkʌbəd/", example: "Put the plates in the cupboard." }
    ],
    grammar: [
        { question: "Don't ___ that vase!", options: ["drop", "drops", "dropping", "dropped"], correct: 0, explanation: "祈使句否定用 Don't + 动词原形。" },
        { question: "Be ___. Don't drop it.", options: ["careful", "carefully", "careless", "caring"], correct: 0, explanation: "Be 后接形容词 careful 构成祈使句。" },
        { question: "Give it to ___.", options: ["I", "me", "my", "mine"], correct: 1, explanation: "介词 to 后接人称代词宾格 me。" },
        { question: "I'm going to put it ___ the window.", options: ["in front of", "between", "next", "on front of"], correct: 0, explanation: "in front of 表示在……前面。" },
        { question: "What are you going to do ___ that vase?", options: ["to", "for", "with", "at"], correct: 2, explanation: "do with 表示拿某物做什么。" },
        { question: "I'm going to send it ___ my son.", options: ["for", "to", "at", "in"], correct: 1, explanation: "send sth. to sb. 表示把某物寄给某人。" },
        { question: "Give me ___ plates.", options: ["that", "this", "those", "it"], correct: 2, explanation: "those 指代那些，复数指示代词。" },
        { question: "These plates are dirty. Put ___ in the cupboard.", options: ["it", "them", "their", "they"], correct: 1, explanation: "them 指代 plates，复数宾格。" },
        { question: "There is a vase ___ the table.", options: ["in", "on", "at", "under"], correct: 1, explanation: "on the table 表示在桌子上。" },
        { question: "The plates are ___ the cupboard.", options: ["on", "in", "at", "to"], correct: 1, explanation: "in the cupboard 表示在碗橱里。" },
        { question: "What ___ you going to do?", options: ["am", "is", "are", "be"], correct: 2, explanation: "主语是 you，be 动词用 are。" },
        { question: "I'm going to put the vase ___ the living room.", options: ["on", "at", "in", "to"], correct: 2, explanation: "in the living room 表示在客厅里。" },
        { question: "Give the book ___.", options: ["I", "me", "my", "mine"], correct: 1, explanation: "give sb. sth. 中 sb. 用宾格。" },
        { question: "Don't ___ the plates! They're hot!", options: ["touch", "touches", "touching", "touched"], correct: 0, explanation: "祈使句否定用 Don't + 动词原形。" },
        { question: "___ is your daughter?", options: ["Who", "What", "Where", "When"], correct: 2, explanation: "Where 询问地点位置。" }
    ],
    listening: {
        dialogue: "A: What are you going to do with that vase, Penny?\nB: I'm going to put it on this table, Sam.\nA: Don't put it there. Give it to me.\nB: What are you going to do with it?\nA: I'm going to put it here, in front of the window.\nB: Be careful! Don't drop it!\nA: Don't worry, Penny. I'll be careful.\nB: What about this vase?\nA: It's my mother's vase. I'm going to send it to my son.\nB: Your son? He lives abroad.\nA: Yes, he'll like it very much.",
        questions: [
            { question: "Where does Sam want to put the vase?", options: ["On the table", "In front of the window", "In the cupboard", "In the kitchen"], correct: 1, explanation: "Sam 想把它放在窗户前面。" },
            { question: "Who is Sam going to send the other vase to?", options: ["His mother", "His daughter", "His son", "His wife"], correct: 2, explanation: "Sam 要把另一个花瓶寄给他儿子。" },
            { question: "Where does Sam's son live?", options: ["In England", "Abroad", "In the same city", "Next door"], correct: 1, explanation: "他儿子住在国外。" }
        ]
    },
    translation: [
        { chinese: "你打算拿那个花瓶做什么，彭妮？", english: "What are you going to do with that vase, Penny?" },
        { chinese: "我打算把它放在这张桌子上。", english: "I'm going to put it on this table." },
        { chinese: "别放在那儿。把它给我。", english: "Don't put it there. Give it to me." },
        { chinese: "你打算拿它做什么？", english: "What are you going to do with it?" },
        { chinese: "我打算把它放在这里，窗户前面。", english: "I'm going to put it here, in front of the window." },
        { chinese: "小心点！别摔了！", english: "Be careful! Don't drop it!" },
        { chinese: "别担心，我会小心的。", english: "Don't worry. I'll be careful." },
        { chinese: "这个花瓶呢？", english: "What about this vase?" },
        { chinese: "那是我母亲的花瓶。我打算把它寄给我儿子。", english: "It's my mother's vase. I'm going to send it to my son." },
        { chinese: "你儿子？他住在国外。", english: "Your son? He lives abroad." },
        { chinese: "是的，他会非常喜欢的。", english: "Yes, he'll like it very much." },
        { chinese: "把那些盘子给我。", english: "Give me those plates." }
    ]
},
{
    id: 41,
    title: "Lesson 41 - Penny's bag",
    vocabulary: [
        { word: "cheese", translation: "乳酪", phonetic: "/tʃiːz/", example: "There's some cheese in the bag." },
        { word: "bread", translation: "面包", phonetic: "/bred/", example: "There's some bread on the table." },
        { word: "soap", translation: "肥皂", phonetic: "/səʊp/", example: "There's a bar of soap in the bag." },
        { word: "chocolate", translation: "巧克力", phonetic: "/ˈtʃɒklət/", example: "There's a bar of chocolate in the bag." },
        { word: "milk", translation: "牛奶", phonetic: "/mɪlk/", example: "There's a bottle of milk in the bag." },
        { word: "sugar", translation: "糖", phonetic: "/ˈʃʊɡə/", example: "There's a pound of sugar in the bag." },
        { word: "coffee", translation: "咖啡", phonetic: "/ˈkɒfi/", example: "There's a quarter of a pound of coffee." },
        { word: "tea", translation: "茶", phonetic: "/tiː/", example: "There's a tin of tea in the bag." },
        { word: "tobacco", translation: "烟草", phonetic: "/təˈbækəʊ/", example: "There's a tin of tobacco." },
        { word: "bag", translation: "包", phonetic: "/bæɡ/", example: "Penny's bag is very heavy." },
        { word: "heavy", translation: "重的", phonetic: "/ˈhevi/", example: "The bag is very heavy." },
        { word: "light", translation: "轻的", phonetic: "/laɪt/", example: "My bag is light." }
    ],
    grammar: [
        { question: "Penny's bag is very ___.", options: ["heavily", "heavy", "heaviest", "more heavy"], correct: 1, explanation: "系动词 is 后接形容词 heavy 作表语。" },
        { question: "There's some cheese ___ the bag.", options: ["on", "in", "at", "to"], correct: 1, explanation: "in the bag 表示在包里。" },
        { question: "Is there ___ bread in the bag?", options: ["a", "some", "any", "an"], correct: 2, explanation: "一般疑问句中用 any 表示一些。" },
        { question: "There's a bar ___ chocolate.", options: ["in", "of", "for", "with"], correct: 1, explanation: "a bar of 表示一条/一块。" },
        { question: "There's a bottle ___ milk.", options: ["in", "of", "for", "with"], correct: 1, explanation: "a bottle of 表示一瓶。" },
        { question: "There's a pound ___ sugar.", options: ["in", "of", "for", "with"], correct: 1, explanation: "a pound of 表示一磅。" },
        { question: "Is there ___ tea in the bag?", options: ["a", "an", "any", "some"], correct: 2, explanation: "一般疑问句中用 any 表示一些。" },
        { question: "There's a quarter ___ a pound of coffee.", options: ["in", "of", "for", "to"], correct: 1, explanation: "a quarter of a pound 表示四分之一磅。" },
        { question: "There's a tin ___ tea.", options: ["in", "of", "for", "with"], correct: 1, explanation: "a tin of 表示一听。" },
        { question: "There's a ___ of soap.", options: ["bar", "tin", "pound", "lot"], correct: 0, explanation: "a bar of soap 表示一块肥皂。" },
        { question: "The bag isn't ___.", options: ["light", "lightness", "lightly", "lighter"], correct: 0, explanation: "isn't 后接形容词作表语。" },
        { question: "Is there any coffee? Yes, ___ is.", options: ["there", "it", "that", "this"], correct: 0, explanation: "简短回答：Yes, there is." },
        { question: "There is some cheese. Cheese is ___ food.", options: ["a", "an", "some", "/"], correct: 3, explanation: "cheese 是不可数名词，不用冠词。" },
        { question: "A: Is there any sugar? B: No, ___ isn't.", options: ["it", "that", "there", "this"], correct: 2, explanation: "否定回答：No, there isn't." },
        { question: "Is there any milk? Yes, there ___.", options: ["is", "isn't", "are", "aren't"], correct: 0, explanation: "milk 不可数，用 is。" }
    ],
    listening: {
        dialogue: "A: Is that bag heavy, Penny?\nB: Not very.\nA: What's in it?\nB: There's some cheese, some bread, a bar of soap, a bar of chocolate, a bottle of milk, a pound of sugar, a quarter of a pound of coffee, a tin of tea, and a tin of tobacco.\nA: Is that all?\nB: Yes, that's all.\nA: Isn't that bag heavy?\nB: No, it isn't. It's quite light.",
        questions: [
            { question: "What is NOT in Penny's bag?", options: ["Cheese", "Bread", "A bottle of milk", "A book"], correct: 3, explanation: "包里没有书。" },
            { question: "How much coffee is in the bag?", options: ["A pound", "Half a pound", "A quarter of a pound", "Two pounds"], correct: 2, explanation: "包里有四分之一磅咖啡。" },
            { question: "Is Penny's bag heavy?", options: ["Yes, very heavy", "Not very heavy", "Extremely heavy", "It's empty"], correct: 1, explanation: "Penny 说不太重，而且最后说很轻。" }
        ]
    },
    translation: [
        { chinese: "那个包重吗，彭妮？", english: "Is that bag heavy, Penny?" },
        { chinese: "不太重。", english: "Not very." },
        { chinese: "里面是什么？", english: "What's in it?" },
        { chinese: "有一些奶酪、一些面包、一块肥皂、一块巧克力。", english: "There's some cheese, some bread, a bar of soap, a bar of chocolate." },
        { chinese: "一瓶牛奶、一磅糖。", english: "A bottle of milk, a pound of sugar." },
        { chinese: "四分之一磅咖啡、一听茶叶和一听烟丝。", english: "A quarter of a pound of coffee, a tin of tea, and a tin of tobacco." },
        { chinese: "就这些吗？", english: "Is that all?" },
        { chinese: "是的，就这些。", english: "Yes, that's all." },
        { chinese: "难道那个包不重吗？", english: "Isn't that bag heavy?" },
        { chinese: "不重，很轻。", english: "No, it isn't. It's quite light." },
        { chinese: "包里有些黄油吗？", english: "Is there any butter in the bag?" },
        { chinese: "不，包里没有黄油。", english: "No, there isn't any butter in the bag." },
        { chinese: "这里有一个面包。", english: "Here is a loaf of bread." }
    ]
},
{
    id: 43,
    title: "Lesson 43 - Hurry up!",
    vocabulary: [
        { word: "kettle", translation: "水壶", phonetic: "/ˈketl/", example: "The kettle's boiling." },
        { word: "teapot", translation: "茶壶", phonetic: "/ˈtiːpɒt/", example: "I can find the teapot." },
        { word: "cupboard", translation: "碗橱", phonetic: "/ˈkʌbəd/", example: "The teapot is in the cupboard." },
        { word: "find", translation: "找到", phonetic: "/faɪnd/", example: "I can't find the teapot." },
        { word: "boil", translation: "沸腾", phonetic: "/bɔɪl/", example: "The kettle's boiling." },
        { word: "make", translation: "沏（茶）", phonetic: "/meɪk/", example: "Can you make the tea?" },
        { word: "behind", translation: "在……后面", phonetic: "/bɪˈhaɪnd/", example: "The kettle is behind you." },
        { word: "turn", translation: "转动", phonetic: "/tɜːn/", example: "Turn around!" },
        { word: "cup", translation: "杯子", phonetic: "/kʌp/", example: "There are some cups on the table." },
        { word: "glass", translation: "玻璃杯", phonetic: "/ɡlɑːs/", example: "There are some glasses on the shelf." }
    ],
    grammar: [
        { question: "___ you make the tea, Penny?", options: ["Can", "Are", "Do", "Have"], correct: 0, explanation: "can 情态动词，表示能，可以。" },
        { question: "The kettle's ___ you.", options: ["on front of", "behind", "between", "next"], correct: 1, explanation: "behind 表示在……后面。" },
        { question: "I ___ find the teapot.", options: ["can't", "don't", "am not", "not"], correct: 0, explanation: "can't 是 can 的否定形式，表示不能。" },
        { question: "The teapot is ___ the cupboard.", options: ["on", "at", "in", "to"], correct: 2, explanation: "in the cupboard 表示在碗橱里。" },
        { question: "Is there any water ___ the kettle?", options: ["on", "at", "in", "to"], correct: 2, explanation: "in the kettle 表示在水壶里。" },
        { question: "Can you ___ the teapot?", options: ["look", "see", "watch", "read"], correct: 1, explanation: "see 表示看见，强调看到的结果。" },
        { question: "___ you see the kettle?", options: ["Can", "Are", "Do", "Does"], correct: 0, explanation: "Can you see...? 表示你能看见……吗？" },
        { question: "The kettle is ___ you. Turn around!", options: ["on front of", "behind", "in front of", "next"], correct: 1, explanation: "behind you 表示在你身后。" },
        { question: "I can make the tea. I ___ find the teapot.", options: ["can't", "can", "may", "must"], correct: 1, explanation: "can 表示能够，此处我能找到茶壶。" },
        { question: "There are some cups ___ the table.", options: ["on", "in", "at", "under"], correct: 0, explanation: "on the table 表示在桌子上。" },
        { question: "There are some glasses ___ the shelf.", options: ["on", "in", "at", "under"], correct: 0, explanation: "on the shelf 表示在架子上。" },
        { question: "The kettle's ___.", options: ["boil", "boils", "boiled", "boiling"], correct: 3, explanation: "现在进行时：is + boiling（水开了）。" },
        { question: "Hurry ___, Sam!", options: ["in", "on", "up", "off"], correct: 2, explanation: "hurry up 表示赶快。" },
        { question: "There ___ some water in the kettle.", options: ["am", "is", "are", "be"], correct: 1, explanation: "water 不可数，用 there is。" },
        { question: "Can you make the ___?", options: ["teas", "teapot", "tea", "teacup"], correct: 2, explanation: "make the tea 表示沏茶。" }
    ],
    listening: {
        dialogue: "A: Can you make the tea, Penny?\nB: Yes, of course I can, Sam.\nA: Is there any water in the kettle?\nB: Yes, there is.\nA: Where's the teapot? I can't find it.\nB: It's behind you. Can you see it?\nA: Yes, I can see it. Now, where's the tea?\nB: It's in the cupboard.\nA: There are some cups on the table. And there are some glasses on the shelf.\nB: Hurry up, Sam! The kettle's boiling!",
        questions: [
            { question: "What is Sam trying to do?", options: ["Boil water", "Make the tea", "Find cups", "Clean the kitchen"], correct: 1, explanation: "Sam 正在试图沏茶。" },
            { question: "Where is the teapot?", options: ["In the cupboard", "On the table", "Behind Sam", "On the shelf"], correct: 2, explanation: "茶壶在 Sam 身后。" },
            { question: "What is happening to the kettle?", options: ["It's broken", "It's boiling", "It's empty", "It's cold"], correct: 1, explanation: "水壶里的水开了。" }
        ]
    },
    translation: [
        { chinese: "你会沏茶吗，彭妮？", english: "Can you make the tea, Penny?" },
        { chinese: "是的，我当然会。", english: "Yes, of course I can." },
        { chinese: "水壶里有水吗？", english: "Is there any water in the kettle?" },
        { chinese: "有的。", english: "Yes, there is." },
        { chinese: "茶壶在哪儿？我找不到。", english: "Where's the teapot? I can't find it." },
        { chinese: "在你身后。你看见了吗？", english: "It's behind you. Can you see it?" },
        { chinese: "是的，我看见了。茶叶在哪儿？", english: "Yes, I can see it. Now, where's the tea?" },
        { chinese: "在碗橱里。", english: "It's in the cupboard." },
        { chinese: "桌子上有一些杯子。", english: "There are some cups on the table." },
        { chinese: "架子上有一些玻璃杯。", english: "And there are some glasses on the shelf." },
        { chinese: "快点儿，萨姆！水开了！", english: "Hurry up, Sam! The kettle's boiling!" },
        { chinese: "请转过身来。", english: "Turn around, please." }
    ]
},
{
    id: 45,
    title: "Lesson 45 - The boss's letter",
    vocabulary: [
        { word: "boss", translation: "老板", phonetic: "/bɒs/", example: "The boss is in his office." },
        { word: "minute", translation: "一会儿", phonetic: "/ˈmɪnɪt/", example: "Can you come here a minute?" },
        { word: "type", translation: "打字", phonetic: "/taɪp/", example: "Can you type this letter?" },
        { word: "letter", translation: "信", phonetic: "/ˈletə/", example: "This is the boss's letter." },
        { word: "ask", translation: "问", phonetic: "/ɑːsk/", example: "He asked me to type the letter." },
        { word: "desk", translation: "书桌", phonetic: "/desk/", example: "The boss is at his desk." },
        { word: "office", translation: "办公室", phonetic: "/ˈɒfɪs/", example: "Can you come into my office?" },
        { word: "book", translation: "书", phonetic: "/bʊk/", example: "There is a book on the desk." },
        { word: "magazine", translation: "杂志", phonetic: "/ˌmæɡəˈziːn/", example: "There is a magazine on the desk." },
        { word: "newspaper", translation: "报纸", phonetic: "/ˈnjuːzpeɪpə/", example: "There is a newspaper on the desk." }
    ],
    grammar: [
        { question: "Can you come here a ___ please, Bob?", options: ["minute", "minutes", "minuting", "minutely"], correct: 0, explanation: "a minute 表示一会儿，固定用法。" },
        { question: "I ___ type this letter.", options: ["can't", "don't", "am not", "not"], correct: 0, explanation: "can't 表示不能，能力不足。" },
        { question: "Can you type this letter ___ the boss?", options: ["for", "to", "with", "at"], correct: 0, explanation: "for the boss 表示为老板，介词 for 表示目的。" },
        { question: "The boss's letter is ___ the desk.", options: ["on", "in", "at", "to"], correct: 0, explanation: "on the desk 表示在桌子上。" },
        { question: "The boss is ___ his desk.", options: ["on", "at", "in", "to"], correct: 1, explanation: "at his desk 表示在办公桌前。" },
        { question: "He asked me ___ the letter.", options: ["type", "typing", "to type", "typed"], correct: 2, explanation: "ask sb. to do sth. 表示让某人做某事。" },
        { question: "I can type the letter ___ you.", options: ["to", "for", "at", "with"], correct: 1, explanation: "for you 表示为你（做某事）。" },
        { question: "Can you ___ the boss's letter?", options: ["to read", "reading", "read", "reads"], correct: 2, explanation: "Can 后接动词原形。" },
        { question: "The boss wants to ___ the letter.", options: ["see", "sees", "seeing", "saw"], correct: 0, explanation: "want to 后接动词原形。" },
        { question: "There is a book ___ the desk.", options: ["on", "in", "at", "under"], correct: 0, explanation: "on the desk 表示在书桌上。" },
        { question: "Bob works in an ___.", options: ["officer", "office", "official", "officially"], correct: 1, explanation: "office 表示办公室。" },
        { question: "___ is the magazine?", options: ["What", "Who", "Where", "When"], correct: 2, explanation: "Where 询问地方位置。" },
        { question: "What's on the desk? ___ a book.", options: ["It is", "There is", "That is", "This is"], correct: 1, explanation: "There is 表示某处有某物。" },
        { question: "The boss is in ___ office.", options: ["him", "her", "his", "he"], correct: 2, explanation: "his 形容词性物主代词，修饰 office。" },
        { question: "Bob ___ type the letter.", options: ["can", "is", "does", "has"], correct: 0, explanation: "can 表示能够，此处 Bob 能够打字。" }
    ],
    listening: {
        dialogue: "A: Bob! Can you come here a minute, please?\nB: Yes, sir?\nA: Where's the boss's letter?\nB: The boss's letter? I typed it for you. It's on your desk.\nA: I'm afraid I can't read it. The boss's handwriting is terrible!\nB: I know. He asked me to type it for him.\nA: Did you type it?\nB: Yes, I did. It's on your desk.\nA: Thank you, Bob.",
        questions: [
            { question: "Why can't the boss read the letter?", options: ["It's too dark", "His handwriting is terrible", "The letter is lost", "He needs glasses"], correct: 1, explanation: "老板的书写太潦草了。" },
            { question: "Who typed the letter?", options: ["The boss", "Bob", "A secretary", "The boss's wife"], correct: 1, explanation: "Bob 替老板打了这封信。" },
            { question: "Where is the letter now?", options: ["In the drawer", "On the boss's desk", "In the post", "In Bob's office"], correct: 1, explanation: "信在老板的办公桌上。" }
        ]
    },
    translation: [
        { chinese: "鲍勃！请你来一下好吗？", english: "Bob! Can you come here a minute, please?" },
        { chinese: "老板的信在哪儿？", english: "Where's the boss's letter?" },
        { chinese: "老板的信？我替你打好了。", english: "The boss's letter? I typed it for you." },
        { chinese: "就在你的办公桌上。", english: "It's on your desk." },
        { chinese: "恐怕我读不了。老板的字写得真糟糕！", english: "I'm afraid I can't read it. The boss's handwriting is terrible!" },
        { chinese: "我知道。他让我替他打的。", english: "I know. He asked me to type it for him." },
        { chinese: "你打了吗？", english: "Did you type it?" },
        { chinese: "是的，我打了。就在你的桌上。", english: "Yes, I did. It's on your desk." },
        { chinese: "谢谢你，鲍勃。", english: "Thank you, Bob." },
        { chinese: "桌子上有一本书。", english: "There is a book on the desk." },
        { chinese: "杂志在哪儿？", english: "Where is the magazine?" },
        { chinese: "你能帮我读这封信吗？", english: "Can you read the letter for me?" }
    ]
},
{
    id: 47,
    title: "Lesson 47 - A cup of coffee",
    vocabulary: [
        { word: "like", translation: "喜欢", phonetic: "/laɪk/", example: "I like coffee." },
        { word: "want", translation: "想要", phonetic: "/wɒnt/", example: "Do you want any milk?" },
        { word: "black coffee", translation: "清咖啡", phonetic: "/blæk ˈkɒfi/", example: "I like black coffee." },
        { word: "biscuit", translation: "饼干", phonetic: "/ˈbɪskɪt/", example: "Do you want any biscuits?" },
        { word: "pure", translation: "纯净的", phonetic: "/pjʊə/", example: "The milk is pure." },
        { word: "fresh", translation: "新鲜的", phonetic: "/freʃ/", example: "The milk is fresh." },
        { word: "sweet", translation: "甜的", phonetic: "/swiːt/", example: "The coffee isn't sweet." },
        { word: "sugar", translation: "糖", phonetic: "/ˈʃʊɡə/", example: "Do you want any sugar?" },
        { word: "milk", translation: "牛奶", phonetic: "/mɪlk/", example: "Do you like milk in your coffee?" },
        { word: "honey", translation: "蜂蜜", phonetic: "/ˈhʌni/", example: "Do you want any honey?" }
    ],
    grammar: [
        { question: "Do you like black coffee? Yes, ___ do.", options: ["I", "you", "we", "they"], correct: 0, explanation: "简短肯定回答：Yes, I do." },
        { question: "Do you want any milk? No, ___.", options: ["I do", "I don't", "I'm not", "I can't"], correct: 1, explanation: "简短否定回答：No, I don't." },
        { question: "I like ___ coffee.", options: ["a", "an", "the", "/"], correct: 3, explanation: "coffee 不可数，泛指时不用冠词。" },
        { question: "Do you like milk ___ your coffee?", options: ["in", "on", "at", "to"], correct: 0, explanation: "in your coffee 表示在你的咖啡里。" },
        { question: "I don't like milk ___ my coffee.", options: ["on", "at", "in", "to"], correct: 2, explanation: "in my coffee 表示在我的咖啡里。" },
        { question: "Do you want ___ biscuits?", options: ["a", "an", "some", "any"], correct: 3, explanation: "疑问句中表示一些用 any。" },
        { question: "The milk is pure and ___.", options: ["freshly", "fresh", "fresher", "freshest"], correct: 1, explanation: "and 连接并列形容词 pure 和 fresh。" },
        { question: "The coffee isn't ___.", options: ["sweetly", "sweet", "sweeter", "sweetest"], correct: 1, explanation: "系动词 isn't 后接形容词作表语。" },
        { question: "Do you want any sugar? ___, please.", options: ["Yes", "No", "Not", "None"], correct: 0, explanation: "Yes 后接 please 表示肯定的礼貌回答。" },
        { question: "I like black coffee. I don't want ___.", options: ["some milk", "any milk", "a milk", "milks"], correct: 1, explanation: "否定句中用 any，milk 不可数。" },
        { question: "Do you like ___ honey?", options: ["a", "an", "some", "any"], correct: 2, explanation: "some 用于疑问句中表示委婉请求或建议。" },
        { question: "What about some ___?", options: ["chicken", "chickens", "a chicken", "chickening"], correct: 0, explanation: "chicken 在此作不可数名词，表示鸡肉。" },
        { question: "A: Do you want any milk? B: ___, thank you.", options: ["Yes", "No", "Not", "None"], correct: 1, explanation: "No, thank you 是礼貌拒绝。" },
        { question: "I like sugar ___ my coffee.", options: ["on", "at", "in", "to"], correct: 2, explanation: "in my coffee 表示在我的咖啡里。" },
        { question: "Do you ___ any biscuits?", options: ["like", "want", "have", "eat"], correct: 1, explanation: "want 表示想要。" }
    ],
    listening: {
        dialogue: "A: Do you like coffee, Ann?\nB: Yes, I do.\nA: Do you want a cup?\nB: Yes, please, Christine.\nA: Do you want any milk?\nB: No, thank you. I like black coffee.\nA: Do you like any sugar?\nB: Yes, please. I like two lumps of sugar in my coffee.\nA: What about some biscuits?\nB: Yes, please. I'd like one.\nA: Here you are.\nB: Thank you.",
        questions: [
            { question: "What kind of coffee does Ann like?", options: ["Coffee with milk", "Black coffee", "Coffee with honey", "Iced coffee"], correct: 1, explanation: "Ann 喜欢清咖啡，不加牛奶。" },
            { question: "How many lumps of sugar does Ann want?", options: ["One", "Two", "Three", "None"], correct: 1, explanation: "Ann 要在咖啡里加两块糖。" },
            { question: "Does Ann want a biscuit?", options: ["Yes, she does", "No, she doesn't", "She wants two", "She doesn't like biscuits"], correct: 0, explanation: "Ann 想要一块饼干。" }
        ]
    },
    translation: [
        { chinese: "你喜欢咖啡吗，安？", english: "Do you like coffee, Ann?" },
        { chinese: "是的，我喜欢。", english: "Yes, I do." },
        { chinese: "你想要一杯吗？", english: "Do you want a cup?" },
        { chinese: "好的，谢谢。", english: "Yes, please." },
        { chinese: "你要加点牛奶吗？", english: "Do you want any milk?" },
        { chinese: "不，谢谢。我喜欢清咖啡。", english: "No, thank you. I like black coffee." },
        { chinese: "你要加糖吗？", english: "Do you like any sugar?" },
        { chinese: "好的，请加两块。", english: "Yes, please. I like two lumps of sugar in my coffee." },
        { chinese: "来点饼干怎么样？", english: "What about some biscuits?" },
        { chinese: "好的，我要一块。", english: "Yes, please. I'd like one." },
        { chinese: "给你。", english: "Here you are." },
        { chinese: "谢谢。", english: "Thank you." },
        { chinese: "我想要一些咖啡。", english: "I want some coffee." }
    ]
},
{
    id: 49,
    title: "Lesson 49 - At the butcher's",
    vocabulary: [
        { word: "butcher", translation: "屠夫", phonetic: "/ˈbʊtʃə/", example: "At the butcher's." },
        { word: "meat", translation: "肉", phonetic: "/miːt/", example: "Do you want any meat today?" },
        { word: "beef", translation: "牛肉", phonetic: "/biːf/", example: "Do you want beef or lamb?" },
        { word: "lamb", translation: "羔羊肉", phonetic: "/læm/", example: "Do you want beef or lamb?" },
        { word: "chicken", translation: "鸡", phonetic: "/ˈtʃɪkɪn/", example: "What about some chicken?" },
        { word: "husband", translation: "丈夫", phonetic: "/ˈhʌzbənd/", example: "My husband likes steak." },
        { word: "steak", translation: "牛排", phonetic: "/steɪk/", example: "My husband likes steak." },
        { word: "mince", translation: "肉馅", phonetic: "/mɪns/", example: "Do you want any mince?" },
        { word: "truth", translation: "实话", phonetic: "/truːθ/", example: "To tell you the truth, I don't like chicken." },
        { word: "either", translation: "也（不）", phonetic: "/ˈaɪðə/", example: "I don't like chicken either." },
        { word: "tell", translation: "告诉", phonetic: "/tel/", example: "To tell you the truth." }
    ],
    grammar: [
        { question: "Do you want any meat today? Yes, ___.", options: ["I want", "I do", "I don't", "I am"], correct: 1, explanation: "简短肯定回答：Yes, I do." },
        { question: "Do you want beef ___ lamb?", options: ["and", "or", "but", "nor"], correct: 1, explanation: "or 用于选择疑问句，表示或者。" },
        { question: "Beef, ___.", options: ["please", "pleasing", "pleased", "pleasure"], correct: 0, explanation: "please 用于礼貌地提出请求。" },
        { question: "My husband ___ steak.", options: ["like", "likes", "liking", "liked"], correct: 1, explanation: "主语是第三人称单数，一般现在时加 s。" },
        { question: "Do you want ___ mince?", options: ["a", "an", "some", "any"], correct: 3, explanation: "疑问句中表示一些用 any。" },
        { question: "I don't like mince. My husband doesn't like mince ___.", options: ["too", "either", "neither", "also"], correct: 1, explanation: "否定句末用 either 表示也不。" },
        { question: "What about ___ chicken?", options: ["a", "an", "some", "any"], correct: 2, explanation: "What about 后接 some 表示提议。" },
        { question: "To tell you the ___, I don't like chicken.", options: ["true", "truth", "truly", "truthful"], correct: 1, explanation: "to tell you the truth 是固定短语，表示说实话。" },
        { question: "I don't like chicken ___.", options: ["too", "either", "neither", "also"], correct: 1, explanation: "否定句末用 either 表示也。" },
        { question: "My husband ___ chicken.", options: ["likes", "doesn't like", "like", "liked"], correct: 1, explanation: "从上下文看，丈夫也不喜欢鸡肉。" },
        { question: "Do you like ___ ?", options: ["steaks", "steak", "a steak", "the steaks"], correct: 1, explanation: "steak 在此泛指牛排，不可数。" },
        { question: "A: Thank you. B: You're ___.", options: ["welcome", "welcomed", "welcoming", "welcomes"], correct: 0, explanation: "You're welcome. 是不用谢的固定回答。" },
        { question: "Mrs. Bird is at the ___.", options: ["butcher", "butcher's", "butchers", "butchery"], correct: 1, explanation: "at the butcher's 表示在肉铺。" },
        { question: "Do you want ___ ?", options: ["some milk", "a milk", "milks", "the milk"], correct: 0, explanation: "some 用于疑问句表示请求或建议。" },
        { question: "My husband doesn't like chicken. I don't like it ___.", options: ["too", "either", "neither", "also"], correct: 1, explanation: "否定句中用 either 表示也。" }
    ],
    listening: {
        dialogue: "A: Do you want any meat today, Mrs. Bird?\nB: Yes, please.\nA: Do you want beef or lamb?\nB: Beef, please.\nA: My husband likes steak.\nB: Do you want any mince?\nA: No, thank you. My husband doesn't like mince.\nB: What about some chicken? It's very good.\nA: To tell you the truth, I don't like chicken either.\nB: Well, I'll give you a nice steak.\nA: Thank you. How much is that?\nB: That's five pounds.",
        questions: [
            { question: "Where is Mrs. Bird?", options: ["At the grocer's", "At the butcher's", "At the baker's", "At the greengrocer's"], correct: 1, explanation: "Mrs. Bird 在肉铺。" },
            { question: "What does Mrs. Bird buy?", options: ["Lamb", "Mince", "Chicken", "Steak"], correct: 3, explanation: "Mrs. Bird 最终买了牛排。" },
            { question: "How much does Mrs. Bird pay?", options: ["Three pounds", "Four pounds", "Five pounds", "Six pounds"], correct: 2, explanation: "牛排五英镑。" }
        ]
    },
    translation: [
        { chinese: "你今天要买点肉吗，伯德夫人？", english: "Do you want any meat today, Mrs. Bird?" },
        { chinese: "你要牛肉还是羔羊肉？", english: "Do you want beef or lamb?" },
        { chinese: "请给我牛肉。", english: "Beef, please." },
        { chinese: "我丈夫喜欢牛排。", english: "My husband likes steak." },
        { chinese: "你要点肉馅吗？", english: "Do you want any mince?" },
        { chinese: "不，谢谢。", english: "No, thank you." },
        { chinese: "我丈夫不喜欢肉馅。", english: "My husband doesn't like mince." },
        { chinese: "来点鸡怎么样？", english: "What about some chicken?" },
        { chinese: "说实话，我也不喜欢鸡。", english: "To tell you the truth, I don't like chicken either." },
        { chinese: "你喜欢牛排吗？", english: "Do you like steak?" },
        { chinese: "多少钱？", english: "How much is that?" },
        { chinese: "五英镑。", english: "That's five pounds." }
    ]
}

,
{
    id: 51,
    title: "Lesson 51 - A pleasant climate",
    vocabulary: [
        { word: "Greece", translation: "希腊", phonetic: "/ɡriːs/", example: "He comes from Greece." },
        { word: "climate", translation: "气候", phonetic: "/ˈklaɪmət/", example: "What's the climate like in your country?" },
        { word: "country", translation: "国家", phonetic: "/ˈkʌntri/", example: "Which country are you from?" },
        { word: "pleasant", translation: "宜人的", phonetic: "/ˈpleznt/", example: "It's a pleasant climate." },
        { word: "weather", translation: "天气", phonetic: "/ˈweðər/", example: "What's the weather like in spring?" },
        { word: "spring", translation: "春天", phonetic: "/sprɪŋ/", example: "It's very pleasant in spring." },
        { word: "windy", translation: "有风的", phonetic: "/ˈwɪndi/", example: "It's often windy in spring in England." },
        { word: "warm", translation: "温暖的", phonetic: "/wɔːrm/", example: "It's always warm in April." },
        { word: "rain", translation: "下雨", phonetic: "/reɪn/", example: "It rains sometimes." },
        { word: "sometimes", translation: "有时", phonetic: "/ˈsʌmtaɪmz/", example: "It rains sometimes." }
    ],
    grammar: [
        { question: "Where ___ you come from?", options: ["are", "do", "does", "is"], correct: 1, explanation: "特殊疑问句借用助动词 do。" },
        { question: "I come ___ Greece.", options: ["from", "in", "at", "to"], correct: 0, explanation: "come from 表示来自某地。" },
        { question: "What's the climate ___ in your country?", options: ["like", "look like", "as", "for"], correct: 0, explanation: "What's...like? 是固定句型，询问特征。" },
        { question: "It's very ___.", options: ["pleasant", "please", "pleased", "pleasure"], correct: 0, explanation: "pleasant 是形容词，表示宜人的。" },
        { question: "What's the weather ___ in spring?", options: ["like", "look like", "as", "for"], correct: 0, explanation: "询问天气也用 What's...like? 句型。" },
        { question: "It's often windy ___ March.", options: ["in", "on", "at", "during"], correct: 0, explanation: "月份前用 in。" },
        { question: "It's always warm ___ April.", options: ["in", "on", "at", "by"], correct: 0, explanation: "月份前用 in。" },
        { question: "___ it very cold in winter?", options: ["Is", "Does", "Do", "Are"], correct: 0, explanation: "be动词的一般疑问句，Is it...?" },
        { question: "It's cold in ___.", options: ["winter", "spring", "summer", "autumn"], correct: 0, explanation: "winter 是冬天。" },
        { question: "It ___ a pleasant climate.", options: ["is", "are", "am", "be"], correct: 0, explanation: "it 是单数，用 is。" },
        { question: "___ you from Greece?", options: ["Are", "Do", "Is", "Am"], correct: 0, explanation: "you 和 are 搭配。" },
        { question: "Yes, I ___.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 后面用 am。" },
        { question: "What nationality ___ you?", options: ["am", "is", "are", "be"], correct: 2, explanation: "you 后面用 are。" },
        { question: "I ___ Greek.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 后面用 am。" },
        { question: "The climate in Greece is ___.", options: ["pleasant", "pleased", "pleasing", "pleasure"], correct: 0, explanation: "pleasant 是形容词，修饰气候。" }
    ],
    listening: {
        dialogue: "Where do you come from? I come from Greece. What's the climate like in your country? It's very pleasant. What's the weather like in spring? It's often windy in March. It's always warm in April and May, but it rains sometimes. What's it like in summer? It's always hot in June, July and August. Does it ever snow in winter? It's often cold in December, January and February. It snows sometimes.",
        questions: [
            { question: "Where does the person come from?", options: ["England", "Greece", "Germany", "France"], correct: 1 },
            { question: "What is the weather like in April?", options: ["Windy", "Rainy", "Warm", "Cold"], correct: 2 },
            { question: "Does it ever snow in winter in Greece?", options: ["Always", "Yes, sometimes", "Never", "Often"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "你来自哪里？", english: "Where do you come from?" },
        { chinese: "我来自希腊。", english: "I come from Greece." },
        { chinese: "你们国家的气候怎么样？", english: "What's the climate like in your country?" },
        { chinese: "非常宜人。", english: "It's very pleasant." },
        { chinese: "春天的天气怎么样？", english: "What's the weather like in spring?" },
        { chinese: "三月份常常刮风。", english: "It's often windy in March." },
        { chinese: "四五月总是温暖，但有时下雨。", english: "It's always warm in April and May, but it rains sometimes." },
        { chinese: "夏天天气怎么样？", english: "What's it like in summer?" },
        { chinese: "六七八月总是炎热。", english: "It's always hot in June, July and August." },
        { chinese: "冬天经常下雪吗？", english: "Does it ever snow in winter?" },
        { chinese: "十二、一、二月常常寒冷，有时下雪。", english: "It's often cold in December, January and February. It snows sometimes." }
    ]
},
{
    id: 53,
    title: "Lesson 53 - An interesting climate",
    vocabulary: [
        { word: "mild", translation: "温和的", phonetic: "/maɪld/", example: "The climate is mild." },
        { word: "always", translation: "总是", phonetic: "/ˈɔːlweɪz/", example: "It's always warm." },
        { word: "north", translation: "北方", phonetic: "/nɔːrθ/", example: "It's cold in the north." },
        { word: "east", translation: "东方", phonetic: "/iːst/", example: "The wind comes from the east." },
        { word: "west", translation: "西方", phonetic: "/west/", example: "It's wet in the west." },
        { word: "wet", translation: "潮湿的", phonetic: "/wet/", example: "It's often wet in the west." },
        { word: "interesting", translation: "有趣的", phonetic: "/ˈɪntrəstɪŋ/", example: "It's an interesting climate." },
        { word: "subject", translation: "话题", phonetic: "/ˈsʌbdʒɪkt/", example: "It's an interesting subject." },
        { word: "conversation", translation: "谈话", phonetic: "/ˌkɒnvəˈseɪʃn/", example: "It's a good topic for conversation." }
    ],
    grammar: [
        { question: "The climate is ___.", options: ["mild", "mildly", "mildness", "milds"], correct: 0, explanation: "mild 是形容词，作表语。" },
        { question: "It's always ___ in the north.", options: ["cold", "coldly", "coldness", "colds"], correct: 0, explanation: "cold 是形容词作表语。" },
        { question: "It's often ___ in the east.", options: ["wet", "wetly", "wetness", "wets"], correct: 0, explanation: "wet 是形容词表示潮湿的。" },
        { question: "It's never ___ in the west.", options: ["cold", "coldly", "coldness", "colds"], correct: 0, explanation: "cold 是形容词。" },
        { question: "What's the climate ___ in England?", options: ["like", "look like", "as", "for"], correct: 0, explanation: "What's ... like? 询问特征。" },
        { question: "It's a very interesting ___.", options: ["subject", "subjects", "a subject", "the subject"], correct: 0, explanation: "subject 是可数名词单数。" },
        { question: "Is it cold or warm ___ winter?", options: ["in", "on", "at", "until"], correct: 0, explanation: "季节前用 in。" },
        { question: "It's cold in winter. It's warm in ___.", options: ["summer", "winter", "autumn", "spring"], correct: 0, explanation: "summer 夏天，与 winter 冬季对应。" },
        { question: "The sun ___ every day.", options: ["shines", "shine", "shining", "shone"], correct: 0, explanation: "一般现在时第三人称单数加 s。" },
        { question: "It's never wet ___ summer.", options: ["in", "on", "at", "by"], correct: 0, explanation: "季节前用 in。" },
        { question: "It's an interesting subject ___ conversation.", options: ["for", "of", "to", "in"], correct: 1, explanation: "subject of conversation 谈话的话题。" },
        { question: "Which season do you like ___, spring or summer?", options: ["best", "better", "good", "well"], correct: 0, explanation: "like best 表示最喜欢。" },
        { question: "The wind comes from the ___.", options: ["east", "eastern", "eastward", "eastly"], correct: 0, explanation: "the east 表示东方。" },
        { question: "Is it cold ___ warm in winter?", options: ["and", "or", "but", "nor"], correct: 1, explanation: "选择疑问句用 or。" },
        { question: "What's your favourite ___, spring or autumn?", options: ["season", "seasons", "a season", "the season"], correct: 0, explanation: "season 表示季节。" }
    ],
    listening: {
        dialogue: "What's the climate like in England? It's mild, but it's not always pleasant. Is it cold in winter? It's not very cold in winter. Is it warm in summer? It's often warm, but it's not always pleasant. Is it cold in the north? Yes, it's colder in the north. And it's often wet in the west. Is it windy in the east? Yes, it's often windy in the east.",
        questions: [
            { question: "What is the climate like in England?", options: ["Very cold", "Mild but not always pleasant", "Very hot", "Always dry"], correct: 1 },
            { question: "Is it very cold in winter in England?", options: ["Yes", "Not very cold", "Very cold", "Freezing"], correct: 1 },
            { question: "What is the weather like in the west of England?", options: ["Hot", "Dry", "Often wet", "Cold"], correct: 2 }
        ]
    },
    translation: [
        { chinese: "英格兰的气候怎么样？", english: "What's the climate like in England?" },
        { chinese: "是温和的，但并不总是宜人的。", english: "It's mild, but it's not always pleasant." },
        { chinese: "冬天冷吗？", english: "Is it cold in winter?" },
        { chinese: "冬天不很冷。", english: "It's not very cold in winter." },
        { chinese: "夏天暖和吗？", english: "Is it warm in summer?" },
        { chinese: "经常暖和，但并不总是宜人的。", english: "It's often warm, but it's not always pleasant." },
        { chinese: "北方冷吗？", english: "Is it cold in the north?" },
        { chinese: "是的，北方更冷。", english: "Yes, it's colder in the north." },
        { chinese: "西部经常潮湿。", english: "And it's often wet in the west." },
        { chinese: "东部经常刮风吗？", english: "Is it windy in the east?" },
        { chinese: "是的，东部经常刮风。", english: "Yes, it's often windy in the east." }
    ]
},
{
    id: 55,
    title: "Lesson 55 - The Sawyer family",
    vocabulary: [
        { word: "live", translation: "居住", phonetic: "/lɪv/", example: "The Sawyers live at 87 King Street." },
        { word: "stay", translation: "停留", phonetic: "/steɪ/", example: "The children stay at home." },
        { word: "home", translation: "家", phonetic: "/həʊm/", example: "They go home early." },
        { word: "housework", translation: "家务", phonetic: "/ˈhaʊswɜːrk/", example: "Mrs. Sawyer does the housework." },
        { word: "lunch", translation: "午餐", phonetic: "/lʌntʃ/", example: "She has lunch at noon." },
        { word: "afternoon", translation: "下午", phonetic: "/ˌæftərˈnuːn/", example: "She goes to the shops in the afternoon." },
        { word: "usually", translation: "通常地", phonetic: "/ˈjuːʒuəli/", example: "She usually goes to the shops." },
        { word: "together", translation: "一起", phonetic: "/təˈɡeðər/", example: "They have dinner together." },
        { word: "evening", translation: "晚上", phonetic: "/ˈiːvnɪŋ/", example: "In the evening, they watch TV." },
        { word: "arrive", translation: "到达", phonetic: "/əˈraɪv/", example: "Mr. Sawyer arrives home late." },
        { word: "night", translation: "夜晚", phonetic: "/naɪt/", example: "They go to bed at night." }
    ],
    grammar: [
        { question: "The Sawyers ___ at 87 King Street.", options: ["live", "lives", "living", "lived"], correct: 0, explanation: "一般现在时复数主语用 live。" },
        { question: "Mr. Sawyer ___ to work every day.", options: ["go", "goes", "going", "went"], correct: 1, explanation: "第三人称单数用 goes。" },
        { question: "Mrs. Sawyer ___ the housework.", options: ["do", "does", "doing", "did"], correct: 1, explanation: "第三人称单数用 does。" },
        { question: "She usually ___ lunch at noon.", options: ["have", "has", "having", "had"], correct: 1, explanation: "第三人称单数用 has。" },
        { question: "They ___ dinner together.", options: ["have", "has", "having", "had"], correct: 0, explanation: "复数主语用 have。" },
        { question: "In the evening, they ___ TV.", options: ["watch", "watches", "watching", "watched"], correct: 0, explanation: "复数主语用 watch。" },
        { question: "The children ___ to school every day.", options: ["go", "goes", "going", "went"], correct: 0, explanation: "children 是复数，用 go。" },
        { question: "She ___ to the shops in the afternoon.", options: ["go", "goes", "going", "went"], correct: 1, explanation: "第三人称单数用 goes。" },
        { question: "Mr. Sawyer ___ home late.", options: ["arrive", "arrives", "arriving", "arrived"], correct: 1, explanation: "第三人称单数用 arrives。" },
        { question: "They ___ to bed at ten o'clock.", options: ["go", "goes", "going", "went"], correct: 0, explanation: "复数主语用 go。" },
        { question: "Mrs. Sawyer ___ at home.", options: ["stay", "stays", "staying", "stayed"], correct: 1, explanation: "第三人称单数用 stays。" },
        { question: "The children ___ their homework.", options: ["do", "does", "doing", "did"], correct: 0, explanation: "children 是复数，用 do。" },
        { question: "They ___ at their school.", options: ["are", "is", "am", "be"], correct: 0, explanation: "they 用 are。" },
        { question: "Mr. Sawyer ___ to work at 8 o'clock.", options: ["go", "goes", "going", "went"], correct: 1, explanation: "第三人称单数用 goes。" },
        { question: "They ___ dinner at 7 o'clock.", options: ["have", "has", "having", "had"], correct: 0, explanation: "they 是复数，用 have。" }
    ],
    listening: {
        dialogue: "The Sawyer family usually lives at 87 King Street. Mr. Sawyer goes to work every day. The children usually go to school. Mrs. Sawyer stays at home and does the housework. She usually has lunch at noon. In the afternoon, she usually goes to the shops. In the evening, the children usually come home from school. They arrive home early. Mr. Sawyer arrives home late. At night, the children usually do their homework. Then they go to bed. Mr. Sawyer usually reads his newspaper. Sometimes he and his wife watch television.",
        questions: [
            { question: "Where do the Sawyers live?", options: ["At 85 King Street", "At 87 King Street", "At 87 Queen Street", "At 85 Queen Street"], correct: 1 },
            { question: "What does Mrs. Sawyer do in the afternoon?", options: ["Stays at home", "Does the housework", "Goes to the shops", "Has lunch"], correct: 2 },
            { question: "When do the children arrive home?", options: ["Late", "Early", "At 10 o'clock", "At midnight"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "索耶一家住在国王街87号。", english: "The Sawyers live at 87 King Street." },
        { chinese: "索耶先生每天去上班。", english: "Mr. Sawyer goes to work every day." },
        { chinese: "孩子们每天去上学。", english: "The children go to school every day." },
        { chinese: "索耶太太待在家里做家务。", english: "Mrs. Sawyer stays at home and does the housework." },
        { chinese: "她通常中午吃午饭。", english: "She usually has lunch at noon." },
        { chinese: "下午她通常去商店。", english: "In the afternoon, she usually goes to the shops." },
        { chinese: "傍晚孩子们放学回家。", english: "In the evening, the children come home from school." },
        { chinese: "他们到得很早。", english: "They arrive home early." },
        { chinese: "索耶先生到家很晚。", english: "Mr. Sawyer arrives home late." },
        { chinese: "晚上索耶先生通常看报纸。", english: "At night, Mr. Sawyer usually reads his newspaper." },
        { chinese: "有时他和妻子一起看电视。", english: "Sometimes he and his wife watch television." },
        { chinese: "然后孩子们上床睡觉。", english: "Then the children go to bed." }
    ]
},
{
    id: 57,
    title: "Lesson 57 - An unusual day",
    vocabulary: [
        { word: "unusual", translation: "不寻常的", phonetic: "/ʌnˈjuːʒuəl/", example: "It is an unusual day." },
        { word: "o'clock", translation: "点钟", phonetic: "/əˈklɒk/", example: "It is eight o'clock." },
        { word: "shop", translation: "商店", phonetic: "/ʃɒp/", example: "She is going to the shop." },
        { word: "moment", translation: "片刻", phonetic: "/ˈməʊmənt/", example: "At the moment, he is reading." },
        { word: "drink", translation: "喝", phonetic: "/drɪŋk/", example: "He is drinking tea." },
        { word: "walk", translation: "走", phonetic: "/wɔːk/", example: "She is walking to school." },
        { word: "children", translation: "孩子们", phonetic: "/ˈtʃɪldrən/", example: "The children are playing." }
    ],
    grammar: [
        { question: "It is an ___ day.", options: ["usual", "unusual", "usually", "unusually"], correct: 1, explanation: "unusual 表示不寻常的。" },
        { question: "At the moment, she ___ to the shop.", options: ["go", "goes", "is going", "went"], correct: 2, explanation: "at the moment 暗示现在进行时。" },
        { question: "He ___ tea at the moment.", options: ["drinks", "is drinking", "drank", "drink"], correct: 1, explanation: "at the moment 用现在进行时。" },
        { question: "She usually ___ to school.", options: ["walk", "walks", "is walking", "walked"], correct: 1, explanation: "usually 用一般现在时。" },
        { question: "But today she ___ to school.", options: ["walks", "walked", "is walking", "will walk"], correct: 2, explanation: "today 搭配现在进行时，强调今天的不同。" },
        { question: "What ___ you doing?", options: ["am", "is", "are", "be"], correct: 2, explanation: "you 后接 are。" },
        { question: "I ___ reading a book.", options: ["am", "is", "are", "be"], correct: 0, explanation: "I 后面用 am。" },
        { question: "The children ___ playing.", options: ["am", "is", "are", "be"], correct: 2, explanation: "children 是复数，用 are。" },
        { question: "What ___ she doing?", options: ["am", "is", "are", "be"], correct: 1, explanation: "she 用 is。" },
        { question: "He ___ reading a newspaper.", options: ["am", "is", "are", "be"], correct: 1, explanation: "he 用 is。" },
        { question: "She is ___ to the shop.", options: ["go", "goes", "going", "went"], correct: 2, explanation: "现在进行时用 going。" },
        { question: "At the ___, he is drinking tea.", options: ["moment", "moments", "a moment", "the moments"], correct: 0, explanation: "at the moment 是固定短语。" },
        { question: "She usually walks to school, but today she is ___ a bicycle.", options: ["riding", "ride", "rides", "rode"], correct: 0, explanation: "现在进行时用 riding。" },
        { question: "It is eight ___.", options: ["o'clock", "clock", "a clock", "clocks"], correct: 0, explanation: "o'clock 表示整点。" },
        { question: "What are you doing ___ the moment?", options: ["in", "on", "at", "for"], correct: 2, explanation: "at the moment 是固定短语。" }
    ],
    listening: {
        dialogue: "It is eight o'clock. The children usually go to school by car every day, but today they are going to school on foot. It is ten o'clock. Mrs. Sawyer usually stays at home in the morning, but this morning she is going to the shops. It is four o'clock. In the afternoon, Mrs. Sawyer usually drinks tea in the living room, but this afternoon she is drinking tea in the garden. It is six o'clock. In the evening, the children usually do their homework, but this evening they are not doing their homework. They are playing in the garden.",
        questions: [
            { question: "How are the children going to school today?", options: ["By car", "On foot", "By bus", "By bike"], correct: 1 },
            { question: "Where is Mrs. Sawyer drinking tea this afternoon?", options: ["In the living room", "In the garden", "In the kitchen", "In the bedroom"], correct: 1 },
            { question: "What are the children doing this evening?", options: ["Doing homework", "Reading", "Playing in the garden", "Watching TV"], correct: 2 }
        ]
    },
    translation: [
        { chinese: "现在是八点钟。", english: "It is eight o'clock." },
        { chinese: "孩子们每天通常坐小汽车去上学。", english: "The children usually go to school by car every day." },
        { chinese: "但今天他们正步行去上学。", english: "But today they are going to school on foot." },
        { chinese: "现在是十点钟。", english: "It is ten o'clock." },
        { chinese: "索耶太太通常上午待在家里。", english: "Mrs. Sawyer usually stays at home in the morning." },
        { chinese: "但今天上午她正去商店。", english: "But this morning she is going to the shops." },
        { chinese: "现在是四点钟。", english: "It is four o'clock." },
        { chinese: "索耶太太通常下午在客厅喝茶。", english: "Mrs. Sawyer usually drinks tea in the living room in the afternoon." },
        { chinese: "但今天下午她正在花园里喝茶。", english: "But this afternoon she is drinking tea in the garden." },
        { chinese: "现在是六点钟。", english: "It is six o'clock." },
        { chinese: "孩子们通常在晚上做作业。", english: "In the evening, the children usually do their homework." },
        { chinese: "但今天晚上他们没做作业。", english: "But this evening they are not doing their homework." },
        { chinese: "他们正在花园里玩。", english: "They are playing in the garden." }
    ]
},
{
    id: 59,
    title: "Lesson 59 - Is that all?",
    vocabulary: [
        { word: "envelope", translation: "信封", phonetic: "/ˈenvələʊp/", example: "I want some envelopes." },
        { word: "writing paper", translation: "信纸", phonetic: "/ˈraɪtɪŋ peɪpər/", example: "Have you any writing paper?" },
        { word: "shop assistant", translation: "售货员", phonetic: "/ʃɒp əˈsɪstənt/", example: "The shop assistant is busy." },
        { word: "size", translation: "尺寸", phonetic: "/saɪz/", example: "What size do you want?" },
        { word: "pad", translation: "便签簿", phonetic: "/pæd/", example: "I want a writing pad." },
        { word: "glue", translation: "胶水", phonetic: "/ɡluː/", example: "I want a bottle of glue." },
        { word: "chalk", translation: "粉笔", phonetic: "/tʃɔːk/", example: "Do you have any chalk?" },
        { word: "change", translation: "零钱", phonetic: "/tʃeɪndʒ/", example: "I want some change." }
    ],
    grammar: [
        { question: "I want some ___.", options: ["envelopes", "envelope", "a envelope", "an envelope"], correct: 0, explanation: "some 后面接可数名词复数。" },
        { question: "Have you ___ writing paper?", options: ["a", "an", "some", "any"], correct: 3, explanation: "一般疑问句和否定句用 any。" },
        { question: "I don't have ___ small pads.", options: ["some", "any", "a", "an"], correct: 1, explanation: "否定句用 any。" },
        { question: "Do you want ___ glue?", options: ["some", "any", "a", "an"], correct: 0, explanation: "徵求意见时用 some。" },
        { question: "I want a bottle ___ glue.", options: ["of", "for", "with", "in"], correct: 0, explanation: "a bottle of 表示一瓶。" },
        { question: "Is that ___?", options: ["all", "every", "each", "whole"], correct: 0, explanation: "Is that all? 是固定表达，询问是否还需要别的。" },
        { question: "What ___ do you want?", options: ["else", "other", "others", "another"], correct: 0, explanation: "What else? 表示还要什么。" },
        { question: "I want some ___.", options: ["change", "changes", "a change", "the change"], correct: 0, explanation: "change 不可数。" },
        { question: "I want a large box ___ chalk.", options: ["of", "for", "with", "in"], correct: 0, explanation: "a box of 表示一盒。" },
        { question: "Do you have ___ ink?", options: ["some", "any", "a", "an"], correct: 1, explanation: "疑问句用 any。" },
        { question: "I don't have ___ small envelopes.", options: ["some", "any", "a", "an"], correct: 1, explanation: "否定句用 any。" },
        { question: "Here you ___.", options: ["am", "is", "are", "be"], correct: 2, explanation: "Here you are 是固定短语。" },
        { question: "Thank you, ___", options: ["sir", "Sir", "madam", "lad"], correct: 0, explanation: "sir 表示先生，礼貌称呼。" },
        { question: "Is that all? Yes, ___.", options: ["that's", "that is", "it's", "it is"], correct: 0, explanation: "that's all 表示只有这些。" },
        { question: "Have you any small ___?", options: ["pads", "pad", "a pad", "the pad"], correct: 0, explanation: "any 后面可数名词用复数。" }
    ],
    listening: {
        dialogue: "Good morning. I want some envelopes, please. Do you want any writing paper? Yes, please. I want some writing paper. How much? I don't know. How much is a writing pad? A large pad is 50p. I want a large pad, please. Is that all? No, I want a bottle of glue. And I want a large box of chalk. Is that all? No, I want some change. Here you are. Thank you, sir.",
        questions: [
            { question: "What does the customer want first?", options: ["Writing paper", "Envelopes", "Glue", "Chalk"], correct: 1 },
            { question: "How much is a large writing pad?", options: ["30p", "40p", "50p", "60p"], correct: 2 },
            { question: "Does the customer want anything else besides stationery?", options: ["Yes, some change", "No, that's all", "Yes, a book", "No, nothing"], correct: 0 }
        ]
    },
    translation: [
        { chinese: "早上好。我想买些信封。", english: "Good morning. I want some envelopes, please." },
        { chinese: "你需要信纸吗？", english: "Do you want any writing paper?" },
        { chinese: "是的，请拿一些。", english: "Yes, please. I want some writing paper." },
        { chinese: "多少钱？我不知道。", english: "How much? I don't know." },
        { chinese: "一本信纸多少钱？", english: "How much is a writing pad?" },
        { chinese: "大信纸是50便士。", english: "A large pad is 50p." },
        { chinese: "请给我拿一本大的信纸。", english: "I want a large pad, please." },
        { chinese: "就这些吗？", english: "Is that all?" },
        { chinese: "不，我还要一瓶胶水。", english: "No, I want a bottle of glue." },
        { chinese: "我还要一大盒粉笔。", english: "And I want a large box of chalk." },
        { chinese: "不，我还要一些零钱。", english: "No, I want some change." },
        { chinese: "给你。谢谢，先生。", english: "Here you are. Thank you, sir." }
    ]
},
{
    id: 61,
    title: "Lesson 61 - A bad cold",
    vocabulary: [
        { word: "feel", translation: "感觉", phonetic: "/fiːl/", example: "I feel ill." },
        { word: "ill", translation: "生病的", phonetic: "/ɪl/", example: "He looks ill." },
        { word: "remember", translation: "记住", phonetic: "/rɪˈmembər/", example: "Remember to take the medicine." },
        { word: "telephone", translation: "电话", phonetic: "/ˈtelɪfəʊn/", example: "Answer the telephone." },
        { word: "mouth", translation: "嘴", phonetic: "/maʊθ/", example: "Open your mouth." },
        { word: "tongue", translation: "舌头", phonetic: "/tʌŋ/", example: "Show me your tongue." },
        { word: "bad", translation: "坏的", phonetic: "/bæd/", example: "He has a bad cold." },
        { word: "cold", translation: "感冒", phonetic: "/kəʊld/", example: "I have a cold." },
        { word: "dentist", translation: "牙医", phonetic: "/ˈdentɪst/", example: "He is a dentist." }
    ],
    grammar: [
        { question: "I feel ___.", options: ["ill", "illness", "illnessing", "ills"], correct: 0, explanation: "feel 后接形容词 ill。" },
        { question: "He ___ a bad cold.", options: ["has", "have", "having", "had"], correct: 0, explanation: "第三人称单数用 has。" },
        { question: "She must ___ the medicine.", options: ["take", "takes", "taking", "took"], correct: 0, explanation: "情态动词 must 后接动词原形。" },
        { question: "Open your ___.", options: ["mouth", "mouths", "a mouth", "the mouth"], correct: 0, explanation: "your 后接名词单数。" },
        { question: "Show me your ___.", options: ["tongue", "tongues", "a tongue", "the tongue"], correct: 0, explanation: "your 后接名词单数。" },
        { question: "The doctor ___ the telephone.", options: ["answer", "answers", "answering", "answered"], correct: 1, explanation: "第三人称单数用 answers。" },
        { question: "He looks ___.", options: ["ill", "illness", "illnessing", "ills"], correct: 0, explanation: "look 后接形容词。" },
        { question: "I have a ___ cold.", options: ["bad", "badly", "worse", "worst"], correct: 0, explanation: "bad 是形容词修饰 cold。" },
        { question: "What's the matter ___ him?", options: ["with", "of", "for", "to"], correct: 0, explanation: "What's the matter with...? 固定句型。" },
        { question: "He ___ a temperature.", options: ["has", "have", "having", "had"], correct: 0, explanation: "第三人称单数用 has。" },
        { question: "She ___ stay in bed.", options: ["must", "musts", "musted", "musting"], correct: 0, explanation: "must 是情态动词无变化。" },
        { question: "Take this medicine three ___ a day.", options: ["times", "time", "a time", "the times"], correct: 0, explanation: "three times a day 表示一天三次。" },
        { question: "Mr. Williams is a ___.", options: ["dentist", "dentists", "a dentist", "the dentist"], correct: 0, explanation: "a dentist 表示牙医职业。" },
        { question: "Remember ___ take the medicine.", options: ["to", "for", "of", "in"], correct: 0, explanation: "remember to do sth 表示记得做某事。" },
        { question: "I have ___ telephone call from my boss.", options: ["a", "an", "the", "/"], correct: 0, explanation: "a telephone call 表示一个电话。" }
    ],
    listening: {
        dialogue: "Mr. Williams: What's the matter with Jimmy? Mrs. Williams: He looks ill. Mr. Williams: He has a bad cold, Mr. Williams. Mr. Williams: He must stay in bed. Mrs. Williams: That's good. Jimmy, take this medicine three times a day. Mr. Williams: Open your mouth, Jimmy. Show me your tongue. Yes, he has a bad cold. He must stay in bed for a week. He must take the medicine. Mrs. Williams: Remember to take the medicine, Jimmy.",
        questions: [
            { question: "What's wrong with Jimmy?", options: ["He has a headache", "He has a bad cold", "He has a fever", "He has a cough"], correct: 1 },
            { question: "How many times a day should Jimmy take the medicine?", options: ["Once", "Twice", "Three times", "Four times"], correct: 2 },
            { question: "How long must Jimmy stay in bed?", options: ["Three days", "Five days", "A week", "Two weeks"], correct: 2 }
        ]
    },
    translation: [
        { chinese: "吉米怎么了？", english: "What's the matter with Jimmy?" },
        { chinese: "他看起来病了。", english: "He looks ill." },
        { chinese: "他得了重感冒。", english: "He has a bad cold." },
        { chinese: "他必须躺在床上休息。", english: "He must stay in bed." },
        { chinese: "这药一天吃三次。", english: "Take this medicine three times a day." },
        { chinese: "张开嘴，吉米。", english: "Open your mouth, Jimmy." },
        { chinese: "给我看看你的舌头。", english: "Show me your tongue." },
        { chinese: "他必须卧床一周。", english: "He must stay in bed for a week." },
        { chinese: "记住吃药，吉米。", english: "Remember to take the medicine, Jimmy." }
    ]
},
{
    id: 63,
    title: "Lesson 63 - Thank you, doctor.",
    vocabulary: [
        { word: "better", translation: "好一些", phonetic: "/ˈbetər/", example: "He is better today." },
        { word: "certainly", translation: "当然", phonetic: "/ˈsɜːrtnli/", example: "Certainly, doctor." },
        { word: "get up", translation: "起床", phonetic: "/ɡet ʌp/", example: "He must get up." },
        { word: "yet", translation: "还", phonetic: "/jet/", example: "He is not very well yet." },
        { word: "rich", translation: "油腻的", phonetic: "/rɪtʃ/", example: "He mustn't eat rich food." },
        { word: "food", translation: "食物", phonetic: "/fuːd/", example: "He can eat some food." },
        { word: "remain", translation: "保持", phonetic: "/rɪˈmeɪn/", example: "He must remain in bed." },
        { word: "play", translation: "玩", phonetic: "/pleɪ/", example: "He can play in the garden." }
    ],
    grammar: [
        { question: "The boy is ___ today.", options: ["better", "good", "well", "best"], correct: 0, explanation: "better 是 good/well 的比较级。" },
        { question: "He is not very well ___.", options: ["yet", "already", "still", "even"], correct: 0, explanation: "否定句中用 yet，表示还没。" },
        { question: "He must ___ in bed.", options: ["remain", "remains", "remaining", "remained"], correct: 0, explanation: "must 后接动词原形。" },
        { question: "He can ___ up.", options: ["get", "gets", "getting", "got"], correct: 0, explanation: "情态动词 can 后接动词原形。" },
        { question: "He must ___ get up.", options: ["not", "don't", "doesn't", "no"], correct: 0, explanation: "mustn't 表示禁止。" },
        { question: "He ___ eat rich food.", options: ["mustn't", "don't", "doesn't", "needn't"], correct: 0, explanation: "mustn't 表示一定不要。" },
        { question: "He can ___ some food.", options: ["eat", "eats", "eating", "ate"], correct: 0, explanation: "can 后接动词原形。" },
        { question: "He can play in the ___.", options: ["garden", "gardens", "a garden", "the gardens"], correct: 0, explanation: "the garden 表示花园。" },
        { question: "Thank you, ___.", options: ["doctor", "Doctor", "a doctor", "doctors"], correct: 0, explanation: "doctor 前不加冠词，称呼语。" },
        { question: "He can have a bath ___ the morning.", options: ["in", "on", "at", "during"], correct: 0, explanation: "in the morning 固定搭配。" },
        { question: "He must ___ take the medicine.", options: ["still", "yet", "already", "again"], correct: 0, explanation: "仍然要吃药用 still。" },
        { question: "He can get up ___ an hour.", options: ["for", "in", "after", "until"], correct: 1, explanation: "in an hour 表示一小时后。" },
        { question: "Can he ___ a bath?", options: ["have", "has", "had", "having"], correct: 0, explanation: "can 后接动词原形。" },
        { question: "He is much ___ today.", options: ["better", "good", "well", "best"], correct: 0, explanation: "much 修饰比较级 better。" },
        { question: "He must remain ___ bed.", options: ["in", "on", "at", "into"], correct: 0, explanation: "in bed 是固定短语。" }
    ],
    listening: {
        dialogue: "Doctor: Well, Mrs. Williams. How's Jimmy today? Mrs. Williams: He's better today, thank you, doctor. Doctor: Can I see him? Mrs. Williams: Certainly, doctor. Doctor: Hello, Jimmy. You're better today. Jimmy: Yes, thank you, doctor. Doctor: You must remain in bed for another two days. Jimmy: Must I? Doctor: Yes, you must. And you mustn't get up yet. You mustn't eat rich food. But you can have a bath. Jimmy: Can I? Doctor: Yes, you can. You can play in the garden, too. Mrs. Williams: Thank you, doctor.",
        questions: [
            { question: "How is Jimmy today?", options: ["Worse", "Better", "The same", "Very ill"], correct: 1 },
            { question: "How long must Jimmy remain in bed?", options: ["One more day", "Another two days", "Three more days", "A week"], correct: 1 },
            { question: "What can Jimmy do?", options: ["Get up", "Eat rich food", "Have a bath and play", "Go to school"], correct: 2 }
        ]
    },
    translation: [
        { chinese: "您好，威廉姆斯太太。吉米今天怎么样？", english: "Well, Mrs. Williams. How's Jimmy today?" },
        { chinese: "他今天好些了，谢谢你，医生。", english: "He's better today, thank you, doctor." },
        { chinese: "我可以看看他吗？", english: "Can I see him?" },
        { chinese: "当然可以，医生。", english: "Certainly, doctor." },
        { chinese: "你好，吉米。你今天好些了。", english: "Hello, Jimmy. You're better today." },
        { chinese: "你必须再卧床两天。", english: "You must remain in bed for another two days." },
        { chinese: "你还不能起床。", english: "You mustn't get up yet." },
        { chinese: "你不能吃油腻的食物。", english: "You mustn't eat rich food." },
        { chinese: "但你可以洗澡。", english: "But you can have a bath." },
        { chinese: "你也可以在花园里玩。", english: "You can play in the garden, too." },
        { chinese: "谢谢你，医生。", english: "Thank you, doctor." }
    ]
},
{
    id: 65,
    title: "Lesson 65 - Not a baby",
    vocabulary: [
        { word: "baby", translation: "婴儿", phonetic: "/ˈbeɪbi/", example: "You are not a baby." },
        { word: "Dad", translation: "爸爸", phonetic: "/dæd/", example: "Dad, I want to go out." },
        { word: "key", translation: "钥匙", phonetic: "/kiː/", example: "Give me the key." },
        { word: "babysitter", translation: "保姆", phonetic: "/ˈbeɪbisɪtər/", example: "We don't need a babysitter." },
        { word: "herself", translation: "她自己", phonetic: "/hɜːrˈself/", example: "She can look after herself." },
        { word: "himself", translation: "他自己", phonetic: "/hɪmˈself/", example: "He can look after himself." },
        { word: "ourselves", translation: "我们自己", phonetic: "/ˌaʊərˈselvz/", example: "We can look after ourselves." },
        { word: "enjoy", translation: "享受", phonetic: "/ɪnˈdʒɔɪ/", example: "Enjoy yourself!" }
    ],
    grammar: [
        { question: "You are not ___ baby.", options: ["a", "an", "the", "/"], correct: 0, explanation: "baby 是可数名词单数，用 a。" },
        { question: "She can look after ___.", options: ["her", "herself", "hers", "her own"], correct: 1, explanation: "look after oneself 表示照顾自己。" },
        { question: "He can look after ___.", options: ["him", "himself", "his", "his own"], correct: 1, explanation: "himself 是反身代词。" },
        { question: "We can look after ___.", options: ["us", "ourselves", "our", "ours"], correct: 1, explanation: "ourselves 是反身代词。" },
        { question: "Enjoy ___!", options: ["you", "yourself", "yours", "your"], correct: 1, explanation: "Enjoy yourself! 是固定短语，祝玩得开心。" },
        { question: "I can look after ___.", options: ["I", "myself", "my", "mine"], correct: 1, explanation: "myself 是反身代词。" },
        { question: "They can look after ___.", options: ["them", "themselves", "their", "theirs"], correct: 1, explanation: "themselves 是反身代词。" },
        { question: "Give me the ___.", options: ["key", "keys", "a key", "the keys"], correct: 0, explanation: "the key 特指那把钥匙。" },
        { question: "We don't need a ___.", options: ["babysitter", "babysit", "babysitting", "babysits"], correct: 0, explanation: "babysitter 是名词，保姆。" },
        { question: "___ are you going?", options: ["What", "Where", "How", "Who"], correct: 1, explanation: "询问地点用 Where。" },
        { question: "We're going to the ___.", options: ["cinema", "cinemas", "a cinema", "the cinemas"], correct: 0, explanation: "the cinema 表示电影院。" },
        { question: "You must ___ back before midnight.", options: ["come", "comes", "coming", "came"], correct: 0, explanation: "must 后接动词原形。" },
        { question: "Can you look ___ yourself?", options: ["after", "for", "at", "into"], correct: 0, explanation: "look after 表示照顾。" },
        { question: "I can look after ___.", options: ["I", "myself", "my", "mine"], correct: 1, explanation: "反身代词 myself。" },
        { question: "Enjoy ___ at the party!", options: ["you", "yourself", "yours", "you're"], correct: 1, explanation: "Enjoy yourself! 固定表达。" }
    ],
    listening: {
        dialogue: "Dad: What are you going to do tonight, Betty? Betty: I'm going to the cinema. Dad: Who with? Betty: With Susan and Mary. Dad: You must come back before midnight. Betty: I know, Dad. Dad: Can you look after yourself? Betty: Yes, I can. I'm not a baby. Dad: Enjoy yourself! Betty: Thanks, Dad. Mum: The baby is sleeping. We must be quiet. Dad: We can look after ourselves. We're not babies.",
        questions: [
            { question: "Where is Betty going tonight?", options: ["To a party", "To the cinema", "To a restaurant", "To a friend's house"], correct: 1 },
            { question: "What time must Betty come back?", options: ["Before 10 pm", "Before midnight", "Before 11 pm", "Before 9 pm"], correct: 1 },
            { question: "What does Betty say she is not?", options: ["A child", "A baby", "A student", "A girl"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "你今晚打算做什么，贝蒂？", english: "What are you going to do tonight, Betty?" },
        { chinese: "我打算去看电影。", english: "I'm going to the cinema." },
        { chinese: "和谁一起去？", english: "Who with?" },
        { chinese: "和苏珊和玛丽。", english: "With Susan and Mary." },
        { chinese: "你必须在午夜前回来。", english: "You must come back before midnight." },
        { chinese: "我知道，爸爸。", english: "I know, Dad." },
        { chinese: "你能照顾自己吗？", english: "Can you look after yourself?" },
        { chinese: "是的，我能。我不是婴儿了。", english: "Yes, I can. I'm not a baby." },
        { chinese: "玩得开心！", english: "Enjoy yourself!" },
        { chinese: "谢谢，爸爸。", english: "Thanks, Dad." }
    ]
},
{
    id: 67,
    title: "Lesson 67 - The weekend",
    vocabulary: [
        { word: "weekend", translation: "周末", phonetic: "/ˌwiːkˈend/", example: "What are you going to do at the weekend?" },
        { word: "absent", translation: "缺席的", phonetic: "/ˈæbsənt/", example: "She is absent today." },
        { word: "Monday", translation: "星期一", phonetic: "/ˈmʌndeɪ/", example: "Monday is the first day." },
        { word: "Tuesday", translation: "星期二", phonetic: "/ˈtjuːzdeɪ/", example: "Today is Tuesday." },
        { word: "Wednesday", translation: "星期三", phonetic: "/ˈwenzdeɪ/", example: "Wednesday comes after Tuesday." },
        { word: "Thursday", translation: "星期四", phonetic: "/ˈθɜːrzdeɪ/", example: "Thursday is the fourth day." },
        { word: "Friday", translation: "星期五", phonetic: "/ˈfraɪdeɪ/", example: "Friday is the last working day." },
        { word: "Saturday", translation: "星期六", phonetic: "/ˈsætərdeɪ/", example: "I play football on Saturday." },
        { word: "Sunday", translation: "星期天", phonetic: "/ˈsʌndeɪ/", example: "Sunday is a day of rest." },
        { word: "country", translation: "乡村", phonetic: "/ˈkʌntri/", example: "We are going to the country." },
        { word: "milk", translation: "挤牛奶", phonetic: "/mɪlk/", example: "They are going to milk the cows." },
        { word: "lucky", translation: "幸运的", phonetic: "/ˈlʌki/", example: "You are lucky." }
    ],
    grammar: [
        { question: "What ___ you going to do at the weekend?", options: ["am", "is", "are", "be"], correct: 2, explanation: "you 和 are 搭配。" },
        { question: "I'm going to ___ in the country.", options: ["stay", "stays", "staying", "stayed"], correct: 0, explanation: "be going to 后接动词原形。" },
        { question: "She's going to ___ the cows.", options: ["milk", "milks", "milking", "milked"], correct: 0, explanation: "be going to 后接动词原形。" },
        { question: "We're going to have ___ good time.", options: ["a", "an", "the", "/"], correct: 0, explanation: "have a good time 是固定短语。" },
        { question: "I'm going to help ___ the housework.", options: ["to", "with", "for", "of"], correct: 1, explanation: "help with 表示帮忙做某事。" },
        { question: "She's ___ to the park.", options: ["go", "going", "goes", "went"], correct: 1, explanation: "be going to 后接 going。" },
        { question: "What are you going to do ___ the weekend?", options: ["at", "in", "on", "for"], correct: 0, explanation: "at the weekend 表示在周末。" },
        { question: "I'm going to stay ___ the country.", options: ["at", "in", "on", "to"], correct: 1, explanation: "in the country 表示在乡下。" },
        { question: "You're very ___!", options: ["lucky", "luckily", "luck", "lucks"], correct: 0, explanation: "lucky 是形容词作表语。" },
        { question: "They're going to have ___ party.", options: ["a", "an", "the", "/"], correct: 0, explanation: "a party 表示一个聚会。" },
        { question: "He's going to ___ his homework.", options: ["do", "does", "doing", "did"], correct: 0, explanation: "be going to 后接动词原形。" },
        { question: "We're going to play football ___ Saturday.", options: ["in", "on", "at", "during"], correct: 1, explanation: "星期几前用 on。" },
        { question: "I'm going to stay ___ home.", options: ["in", "at", "on", "to"], correct: 1, explanation: "at home 是固定短语。" },
        { question: "Are you going to ___ to school?", options: ["go", "goes", "going", "went"], correct: 0, explanation: "be going to 后接动词原形。" },
        { question: "What is she going to ___?", options: ["do", "does", "doing", "did"], correct: 0, explanation: "be going to 后接动词原形。" }
    ],
    listening: {
        dialogue: "Mrs. Williams: What are you going to do at the weekend, Mrs. Jones? Mrs. Jones: I'm going to stay at home. Mrs. Williams: What are you going to do? Mrs. Jones: I'm going to do some housework. And you? Mrs. Williams: My husband and I are going to stay in the country. Mrs. Jones: That's a good idea. Are you going to milk the cows? Mrs. Williams: Yes, we are. The children are going to help with the farm work. Mrs. Jones: They're very lucky. Enjoy your weekend! Mrs. Williams: Thank you. You too!",
        questions: [
            { question: "What is Mrs. Jones going to do?", options: ["Go to the country", "Stay at home", "Milk the cows", "Visit friends"], correct: 1 },
            { question: "Where are Mrs. Williams and her husband going?", options: ["To the city", "To the country", "To the beach", "To the park"], correct: 1 },
            { question: "What are the children going to do?", options: ["Stay home", "Do homework", "Help with the farm work", "Play football"], correct: 2 }
        ]
    },
    translation: [
        { chinese: "你周末打算做什么，琼斯太太？", english: "What are you going to do at the weekend, Mrs. Jones?" },
        { chinese: "我打算待在家里。", english: "I'm going to stay at home." },
        { chinese: "我打算做些家务。", english: "I'm going to do some housework." },
        { chinese: "你和谁一起去？", english: "And you?" },
        { chinese: "我丈夫和我打算去乡下。", english: "My husband and I are going to stay in the country." },
        { chinese: "好主意。", english: "That's a good idea." },
        { chinese: "你们打算挤牛奶吗？", english: "Are you going to milk the cows?" },
        { chinese: "是的。孩子们打算帮忙干农活。", english: "Yes, we are. The children are going to help with the farm work." },
        { chinese: "他们真幸运。", english: "They're very lucky." },
        { chinese: "周末愉快！", english: "Enjoy your weekend!" },
        { chinese: "谢谢你，你也一样！", english: "Thank you. You too!" }
    ]
},
{
    id: 69,
    title: "Lesson 69 - The car race",
    vocabulary: [
        { word: "year", translation: "年", phonetic: "/jɪər/", example: "There is a car race near our town every year." },
        { word: "race", translation: "比赛", phonetic: "/reɪs/", example: "The car race is exciting." },
        { word: "town", translation: "城镇", phonetic: "/taʊn/", example: "Our town is small." },
        { word: "crowd", translation: "人群", phonetic: "/kraʊd/", example: "There is a crowd of people." },
        { word: "stand", translation: "站立", phonetic: "/stænd/", example: "They are standing on the left." },
        { word: "exciting", translation: "激动人心的", phonetic: "/ɪkˈsaɪtɪŋ/", example: "The race is very exciting." },
        { word: "just", translation: "正好", phonetic: "/dʒʌst/", example: "Just then, the car stopped." },
        { word: "finish", translation: "结束", phonetic: "/ˈfɪnɪʃ/", example: "The race finished." },
        { word: "winner", translation: "获胜者", phonetic: "/ˈwɪnər/", example: "He is the winner." },
        { word: "way", translation: "路", phonetic: "/weɪ/", example: "On the way, we saw the car." }
    ],
    grammar: [
        { question: "There ___ a car race near our town every year.", options: ["am", "is", "are", "be"], correct: 1, explanation: "a car race 是单数，用 there is。" },
        { question: "There ___ a crowd of people.", options: ["am", "is", "are", "be"], correct: 1, explanation: "a crowd 是单数，用 there is。" },
        { question: "They are standing ___ the left.", options: ["in", "on", "at", "to"], correct: 1, explanation: "on the left 是固定短语。" },
        { question: "The race is very ___.", options: ["exciting", "excited", "excite", "excitement"], correct: 0, explanation: "exciting 物作主语，令人激动的。" },
        { question: "He was ___ the way home.", options: ["in", "on", "at", "by"], correct: 1, explanation: "on the way home 表示在回家路上。" },
        { question: "___ then, the car stopped.", options: ["Just", "Only", "Even", "Also"], correct: 0, explanation: "Just then 表示就在这时。" },
        { question: "There were fifteen cars ___ the race.", options: ["in", "on", "at", "of"], correct: 0, explanation: "in the race 表示在比赛中。" },
        { question: "He was number ___.", options: ["fifteen", "fifteenth", "the fifteen", "fifteenths"], correct: 0, explanation: "号码用基数词。" },
        { question: "He is the ___.", options: ["winner", "win", "won", "winning"], correct: 0, explanation: "winner 是名词，表示获胜者。" },
        { question: "The car ___ near the end.", options: ["stopped", "stop", "stops", "stopping"], correct: 0, explanation: "过去时用 stopped。" },
        { question: "Billy Stewart was the ___ of the race.", options: ["winner", "win", "won", "winning"], correct: 0, explanation: "the winner of the race 比赛获胜者。" },
        { question: "What ___ exciting race!", options: ["a", "an", "the", "/"], correct: 1, explanation: "exciting 以元音音素开头，用 an。" },
        { question: "The crowd ___ standing.", options: ["was", "were", "am", "is"], correct: 0, explanation: "crowd 是集合名词，视为单数用 was。" },
        { question: "There ___ many cars in the race.", options: ["was", "were", "am", "is"], correct: 1, explanation: "many cars 是复数，用 there were。" },
        { question: "He was at the ___ of the race.", options: ["finish", "finishes", "finished", "finishing"], correct: 0, explanation: "at the finish 表示在终点。" }
    ],
    listening: {
        dialogue: "There is a car race near our town every year. In 1995, there was a very big car race. There were hundreds of people there. My wife and I were at the race. Our friends, Julie and Jack, were there, too. You can see us in the crowd. We are standing on the left. There were twenty cars in the race. The cars were very fast. The race was very exciting. Just then, a car stopped near the end. The driver got out. The other cars went past him. The winner was Billy Stewart. He was number fifteen. He was very happy.",
        questions: [
            { question: "How many cars were in the race?", options: ["Fifteen", "Twenty", "Twenty-five", "Ten"], correct: 1 },
            { question: "What happened just then?", options: ["A car crashed", "A car stopped near the end", "The race started", "The crowd cheered"], correct: 1 },
            { question: "Who was the winner?", options: ["Julie", "Jack", "Billy Stewart", "The driver"], correct: 2 }
        ]
    },
    translation: [
        { chinese: "我们城镇附近每年都有一场汽车比赛。", english: "There is a car race near our town every year." },
        { chinese: "1995年，有一场盛大的汽车比赛。", english: "In 1995, there was a very big car race." },
        { chinese: "那里有数百人。", english: "There were hundreds of people there." },
        { chinese: "我和我妻子都在赛场。", english: "My wife and I were at the race." },
        { chinese: "你可以看到我们在人群中。", english: "You can see us in the crowd." },
        { chinese: "我们站在左边。", english: "We are standing on the left." },
        { chinese: "有20辆赛车参加比赛。", english: "There were twenty cars in the race." },
        { chinese: "比赛非常激动人心。", english: "The race was very exciting." },
        { chinese: "就在那时，一辆车在终点附近停了下来。", english: "Just then, a car stopped near the end." },
        { chinese: "获胜者是比利·斯图尔特。", english: "The winner was Billy Stewart." },
        { chinese: "他是15号。", english: "He was number fifteen." }
    ]
}

,
{
    id: 71,
    title: "Lesson 71 - He's awful!",
    vocabulary: [
        { word: "awful", translation: "糟糕的", phonetic: "/ˈɔːfl/", example: "He's awful!" },
        { word: "telephone", translation: "打电话", phonetic: "/ˈtelɪfəʊn/", example: "He telephoned me yesterday." },
        { word: "answer", translation: "接电话", phonetic: "/ˈɑːnsər/", example: "She answered the telephone." },
        { word: "last", translation: "上一个", phonetic: "/lɑːst/", example: "He answered the phone last night." },
        { word: "again", translation: "再次", phonetic: "/əˈɡen/", example: "He telephoned again." },
        { word: "say", translation: "说", phonetic: "/seɪ/", example: "What did he say?" }
    ],
    grammar: [
        { question: "He telephoned me ___.", options: ["yesterday", "today", "tomorrow", "now"], correct: 0, explanation: "yesterday 表示昨天，用过去时。" },
        { question: "He ___ awful!", options: ["is", "are", "am", "be"], correct: 0, explanation: "he 是第三人称单数，用 is。" },
        { question: "She answered the ___.", options: ["telephone", "telegraph", "television", "telegram"], correct: 0, explanation: "answer the telephone 表示接电话。" },
        { question: "He answered the phone ___ night.", options: ["last", "yesterday", "previous", "past"], correct: 0, explanation: "last night 是固定搭配。" },
        { question: "What ___ he say?", options: ["did", "does", "do", "is"], correct: 0, explanation: "一般过去时的疑问句用 did。" },
        { question: "He ___ only a few words.", options: ["said", "says", "say", "saying"], correct: 0, explanation: "过去时用 said。" },
        { question: "He telephoned ___.", options: ["again", "again and again", "once again", "all again"], correct: 0, explanation: "again 表示再一次。" },
        { question: "Jane ___ not answer the phone.", options: ["did", "does", "do", "is"], correct: 0, explanation: "过去式否定用 did not。" },
        { question: "He's ___.", options: ["awful", "awfully", "awfulness", "awfuls"], correct: 0, explanation: "awful 是形容词作表语。" },
        { question: "Did he telephone ___?", options: ["you", "your", "yours", "yourself"], correct: 0, explanation: "动词后接人称代词宾格。" },
        { question: "No, he ___.", options: ["didn't", "doesn't", "don't", "isn't"], correct: 0, explanation: "一般过去时否定回答用 didn't。" },
        { question: "What time did he ___?", options: ["call", "calls", "called", "calling"], correct: 0, explanation: "did 后接动词原形。" },
        { question: "He ___ the phone at 6 o'clock.", options: ["answered", "answers", "answer", "answering"], correct: 0, explanation: "过去时用 answered。" },
        { question: "He ___ me three times.", options: ["telephoned", "telephones", "telephone", "telephoning"], correct: 0, explanation: "过去时用 telephoned。" },
        { question: "What ___ he say to you?", options: ["did", "does", "do", "was"], correct: 0, explanation: "一般过去时疑问用 did。" }
    ],
    listening: {
        dialogue: "Jane: What did he say? Paul: He said, 'I'm tired.' Jane: I'm tired, too. Paul: He telephoned again at 6 o'clock. Jane: Did he telephone again? Paul: Yes, he did. Jane: What did he say? Paul: He said, 'I'm going to bed.' Jane: He's awful!",
        questions: [
            { question: "How many times did the man telephone?", options: ["Once", "Twice", "Three times", "Not mentioned"], correct: 1 },
            { question: "What did he say the first time?", options: ["I'm going to bed", "I'm tired", "Goodbye", "Hello"], correct: 1 },
            { question: "What did he say the second time?", options: ["I'm tired", "I'm going to bed", "Good night", "See you"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "他说什么？", english: "What did he say?" },
        { chinese: "他说：'我累了。'", english: "He said, 'I'm tired.'" },
        { chinese: "我也累了。", english: "I'm tired, too." },
        { chinese: "他6点钟又打电话来了。", english: "He telephoned again at 6 o'clock." },
        { chinese: "他又打电话了吗？", english: "Did he telephone again?" },
        { chinese: "他太糟糕了！", english: "He's awful!" }
    ]
},
{
    id: 73,
    title: "Lesson 73 - The way to King Street",
    vocabulary: [
        { word: "way", translation: "路", phonetic: "/weɪ/", example: "I asked the way to King Street." },
        { word: "understand", translation: "理解", phonetic: "/ˌʌndərˈstænd/", example: "I did not understand him." },
        { word: "speak", translation: "说", phonetic: "/spiːk/", example: "He spoke very slowly." },
        { word: "hand", translation: "手", phonetic: "/hænd/", example: "He put his hand in his pocket." },
        { word: "pocket", translation: "口袋", phonetic: "/ˈpɒkɪt/", example: "He took a phrase book out of his pocket." },
        { word: "phrase book", translation: "短语手册", phonetic: "/freɪz bʊk/", example: "He looked for a phrase book." },
        { word: "phrase", translation: "短语", phonetic: "/freɪz/", example: "I read the phrase slowly." },
        { word: "slowly", translation: "缓慢地", phonetic: "/ˈsləʊli/", example: "He spoke slowly." },
        { word: "hurry", translation: "匆忙", phonetic: "/ˈhʌri/", example: "He hurried to the station." },
        { word: "cut", translation: "切，割", phonetic: "/kʌt/", example: "He cut himself." }
    ],
    grammar: [
        { question: "I asked the ___ to King Street.", options: ["way", "ways", "a way", "the way"], correct: 0, explanation: "the way to... 表示去...的路。" },
        { question: "I ___ not understand him.", options: ["did", "does", "do", "was"], correct: 0, explanation: "过去式否定用 did not。" },
        { question: "He spoke very ___.", options: ["slowly", "slow", "slowness", "slower"], correct: 0, explanation: "修饰动词 spoke 用副词 slowly。" },
        { question: "He put his hand ___ his pocket.", options: ["in", "on", "at", "into"], correct: 3, explanation: "into his pocket 表示进入口袋。" },
        { question: "He took a phrase book ___ of his pocket.", options: ["out", "in", "from", "off"], correct: 0, explanation: "out of 表示从...出来。" },
        { question: "I read the phrase ___.", options: ["slowly", "slow", "slowness", "slower"], correct: 0, explanation: "修饰动词 read 用副词 slowly。" },
        { question: "He ___ to the station.", options: ["hurried", "hurry", "hurries", "hurrying"], correct: 0, explanation: "过去时用 hurried。" },
        { question: "He cut ___.", options: ["himself", "him", "his", "he"], correct: 0, explanation: "cut oneself 割伤自己。" },
        { question: "He ___ English.", options: ["spoke", "speaks", "speak", "speaking"], correct: 0, explanation: "过去时用 spoke。" },
        { question: "I looked ___ a phrase book.", options: ["for", "at", "after", "into"], correct: 0, explanation: "look for 表示寻找。" },
        { question: "I ___ not speak English.", options: ["could", "can", "am", "was"], correct: 0, explanation: "过去时用 could not。" },
        { question: "He understood ___.", options: ["me", "I", "my", "mine"], correct: 0, explanation: "动词后接宾格 me。" },
        { question: "He gave me a ___.", options: ["phrase book", "phrase books", "a phrase book", "the phrase books"], correct: 0, explanation: "a phrase book 表示一本短语手册。" },
        { question: "I ___ London last week.", options: ["visited", "visit", "visits", "visiting"], correct: 0, explanation: "last week 用过去时。" },
        { question: "He did ___ understand.", options: ["not", "no", "don't", "doesn't"], correct: 0, explanation: "did not 后接动词原形。" }
    ],
    listening: {
        dialogue: "I went to London last week. I do not know London very well. I lost my way. I asked a man the way to King Street. He spoke very slowly, but I did not understand him. I looked for a phrase book. I read the phrase slowly. The man understood me. He gave me a phrase book. I thanked him. I hurried to the station. A woman asked me the way to King Street. I gave her the phrase book. She read the phrase. Then she went to King Street. She did not understand English either.",
        questions: [
            { question: "Why did the narrator need a phrase book?", options: ["He forgot the way", "He couldn't understand the man's English", "He wanted to buy one", "He lost his own"], correct: 1 },
            { question: "What did the man give to the narrator?", options: ["A map", "A phrase book", "Directions", "Money"], correct: 1 },
            { question: "Who asked the narrator for directions?", options: ["A man", "A woman", "A child", "A policeman"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "上星期我去伦敦了。", english: "I went to London last week." },
        { chinese: "我不太了解伦敦。", english: "I do not know London very well." },
        { chinese: "我迷路了。", english: "I lost my way." },
        { chinese: "我问一个人去国王街的路。", english: "I asked a man the way to King Street." },
        { chinese: "他说得很慢，但我不明白。", english: "He spoke very slowly, but I did not understand him." },
        { chinese: "我找一本短语手册。", english: "I looked for a phrase book." },
        { chinese: "我慢慢地读了那个短语。", english: "I read the phrase slowly." },
        { chinese: "那个男人明白了我的意思。", english: "The man understood me." },
        { chinese: "他给了我一本书。", english: "He gave me a phrase book." },
        { chinese: "我向车站赶去。", english: "I hurried to the station." },
        { chinese: "一位女士问我到国王街的路。", english: "A woman asked me the way to King Street." }
    ]
},
{
    id: 75,
    title: "Lesson 75 - Uncomfortable shoes",
    vocabulary: [
        { word: "uncomfortable", translation: "不舒适的", phonetic: "/ʌnˈkʌmftəbl/", example: "These shoes are uncomfortable." },
        { word: "wear", translation: "穿", phonetic: "/weər/", example: "I wore them yesterday." },
        { word: "size", translation: "尺寸", phonetic: "/saɪz/", example: "What size do you wear?" },
        { word: "pair", translation: "双", phonetic: "/peər/", example: "I bought a pair of shoes." },
        { word: "fashion", translation: "流行款式", phonetic: "/ˈfæʃn/", example: "They are in fashion now." },
        { word: "asleep", translation: "睡着的", phonetic: "/əˈsliːp/", example: "The child is asleep." },
        { word: "ugly", translation: "丑陋的", phonetic: "/ˈʌɡli/", example: "They are very ugly." }
    ],
    grammar: [
        { question: "These shoes are ___.", options: ["uncomfortable", "uncomfortably", "uncomfort", "uncomforting"], correct: 0, explanation: "uncomfortable 是形容词作表语。" },
        { question: "I ___ them yesterday.", options: ["wore", "wear", "wears", "wearing"], correct: 0, explanation: "yesterday 用过去时 wore。" },
        { question: "Do you have any ___ shoes?", options: ["other", "others", "another", "the other"], correct: 0, explanation: "other shoes 表示其他鞋子。" },
        { question: "They are in ___ now.", options: ["fashion", "fashions", "a fashion", "the fashion"], correct: 0, explanation: "in fashion 表示流行。" },
        { question: "They are very ___.", options: ["ugly", "uglily", "ugliness", "uglies"], correct: 0, explanation: "ugly 是形容词作表语。" },
        { question: "I bought a ___ of shoes.", options: ["pair", "pairs", "a pair", "the pair"], correct: 0, explanation: "a pair of shoes 表示一双鞋。" },
        { question: "What ___ do you wear?", options: ["size", "sizes", "a size", "the size"], correct: 0, explanation: "What size 询问尺寸。" },
        { question: "The child is ___.", options: ["asleep", "sleep", "sleeping", "slept"], correct: 0, explanation: "asleep 是形容词，睡着的。" },
        { question: "I have ___ pair of shoes.", options: ["a", "an", "the", "/"], correct: 0, explanation: "a pair of 是固定短语。" },
        { question: "I ___ a dress yesterday.", options: ["bought", "buy", "buys", "buying"], correct: 0, explanation: "yesterday 用过去时 bought。" },
        { question: "They are very ___ in fashion.", options: ["comfortable", "uncomfortable", "comfort", "uncomfort"], correct: 1, explanation: "uncomfortable 表示不舒适的。" },
        { question: "I wore them ___ the morning.", options: ["in", "on", "at", "during"], correct: 0, explanation: "in the morning 固定搭配。" },
        { question: "Do you have ___ shoes like these?", options: ["any", "some", "a", "an"], correct: 0, explanation: "疑问句中用 any。" },
        { question: "We have ___ shoes of that size.", options: ["no", "not", "none", "nothing"], correct: 0, explanation: "no shoes 表示没有这种鞋。" },
        { question: "They are not in ___.", options: ["fashion", "fashions", "a fashion", "the fashion"], correct: 0, explanation: "in fashion 流行，out of fashion 不流行。" }
    ],
    listening: {
        dialogue: "Woman: I bought a pair of shoes yesterday. Do you like them? Man: They look very uncomfortable. Woman: They are uncomfortable. But they are in fashion now. Man: Did you wear them yesterday? Woman: Yes, I wore them in the morning. They hurt my feet. Man: They are very ugly, too. Woman: I know. I'm going to take them back to the shop. Man: Do you have any other shoes? Woman: Yes, I have a new pair of comfortable shoes. They are not in fashion, but they are very comfortable.",
        questions: [
            { question: "Why did the woman buy the shoes?", options: ["They were cheap", "They are in fashion", "They are comfortable", "They were red"], correct: 1 },
            { question: "How did the shoes feel when she wore them?", options: ["Comfortable", "They hurt her feet", "Very nice", "Warm"], correct: 1 },
            { question: "What is the woman going to do with the shoes?", options: ["Keep them", "Take them back to the shop", "Give them away", "Throw them away"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "我昨天买了一双鞋。", english: "I bought a pair of shoes yesterday." },
        { chinese: "它们看起来很舒适。", english: "They look very uncomfortable." },
        { chinese: "它们不舒适，但很流行。", english: "They are uncomfortable, but they are in fashion now." },
        { chinese: "你昨天穿了吗？", english: "Did you wear them yesterday?" },
        { chinese: "是的，我上午穿了。它们弄疼我的脚了。", english: "Yes, I wore them in the morning. They hurt my feet." },
        { chinese: "它们也很丑。", english: "They are very ugly, too." },
        { chinese: "我知道。我打算把它们退回商店。", english: "I know. I'm going to take them back to the shop." }
    ]
},
{
    id: 77,
    title: "Lesson 77 - Terrible toothache",
    vocabulary: [
        { word: "terrible", translation: "可怕的", phonetic: "/ˈterəbl/", example: "I have a terrible toothache." },
        { word: "toothache", translation: "牙疼", phonetic: "/ˈtuːθeɪk/", example: "I have a terrible toothache." },
        { word: "have to", translation: "必须", phonetic: "/hæv tuː/", example: "You have to see the dentist." },
        { word: "dentist", translation: "牙医", phonetic: "/ˈdentɪst/", example: "I went to the dentist." },
        { word: "when", translation: "什么时候", phonetic: "/wen/", example: "When did you see the dentist?" },
        { word: "appointment", translation: "预约", phonetic: "/əˈpɔɪntmənt/", example: "I have an appointment." },
        { word: "urgent", translation: "紧急的", phonetic: "/ˈɜːrdʒənt/", example: "It is urgent." },
        { word: "take out", translation: "拔出", phonetic: "/teɪk aʊt/", example: "The dentist took out my tooth." }
    ],
    grammar: [
        { question: "I have a ___ toothache.", options: ["terrible", "terribly", "terribleness", "terribles"], correct: 0, explanation: "terrible 是形容词修饰 toothache。" },
        { question: "I have to ___ the dentist.", options: ["see", "sees", "seeing", "saw"], correct: 0, explanation: "have to 后接动词原形。" },
        { question: "When did you ___ the dentist?", options: ["see", "saw", "seen", "seeing"], correct: 0, explanation: "did 后接动词原形。" },
        { question: "I have an ___ at 3 o'clock.", options: ["appointment", "appoint", "appointed", "appointing"], correct: 0, explanation: "an appointment 表示预约。" },
        { question: "The dentist took ___ my tooth.", options: ["out", "off", "away", "from"], correct: 0, explanation: "take out 表示拔出。" },
        { question: "What's the ___ with you?", options: ["matter", "matters", "mattered", "mattering"], correct: 0, explanation: "What's the matter? 固定句型。" },
        { question: "I have a terrible ___.", options: ["toothache", "tooth", "teeth", "toothaches"], correct: 0, explanation: "a toothache 表示牙疼。" },
        { question: "It's ___.", options: ["urgent", "urgently", "urge", "urgency"], correct: 0, explanation: "urgent 是形容词，紧急的。" },
        { question: "Do I have to ___ the dentist now?", options: ["see", "saw", "seen", "seeing"], correct: 0, explanation: "have to 后接动词原形。" },
        { question: "You must ___ to the dentist.", options: ["go", "goes", "going", "went"], correct: 0, explanation: "must 后接动词原形。" },
        { question: "I ___ the dentist yesterday.", options: ["saw", "see", "sees", "seeing"], correct: 0, explanation: "yesterday 用过去时 saw。" },
        { question: "The tooth ___ out easily.", options: ["came", "comes", "come", "coming"], correct: 0, explanation: "过去时用 came。" },
        { question: "My tooth ___ terrible.", options: ["was", "were", "am", "is"], correct: 0, explanation: "过去时，单数用 was。" },
        { question: "I ___ a tooth taken out yesterday.", options: ["had", "have", "has", "having"], correct: 0, explanation: "had 表示使役，had sth done。" },
        { question: "You have to ___ the medicine.", options: ["take", "takes", "taking", "took"], correct: 0, explanation: "have to 后接动词原形。" }
    ],
    listening: {
        dialogue: "Nurse: Good morning. Mrs. Croft: Good morning. I have a terrible toothache. Nurse: You have to see the dentist. Do you have an appointment? Mrs. Croft: No, I don't. Nurse: Is it urgent? Mrs. Croft: Yes, it is. Nurse: Please sit down. The dentist will see you in a moment. Dentist: What's the matter with you? Mrs. Croft: I have a terrible toothache. Dentist: Open your mouth. Let me see. Yes, this tooth has to be taken out. Mrs. Croft: Can you take it out now? Dentist: Yes. It came out easily. Mrs. Croft: Thank you, dentist.",
        questions: [
            { question: "Why does Mrs. Croft come to the dentist?", options: ["For a check-up", "She has a terrible toothache", "To clean her teeth", "To get an appointment"], correct: 1 },
            { question: "Does Mrs. Croft have an appointment?", options: ["Yes", "No", "Not mentioned", "Maybe"], correct: 1 },
            { question: "What did the dentist do?", options: ["Filled the tooth", "Cleaned the tooth", "Took out the tooth", "Gave medicine"], correct: 2 }
        ]
    },
    translation: [
        { chinese: "早上好。", english: "Good morning." },
        { chinese: "我牙疼得厉害。", english: "I have a terrible toothache." },
        { chinese: "你必须看牙医。", english: "You have to see the dentist." },
        { chinese: "你有预约吗？", english: "Do you have an appointment?" },
        { chinese: "不，我没有。", english: "No, I don't." },
        { chinese: "急吗？", english: "Is it urgent?" },
        { chinese: "是的，很急。", english: "Yes, it is." },
        { chinese: "请坐下。牙医一会儿就来看你。", english: "Please sit down. The dentist will see you in a moment." },
        { chinese: "这颗牙必须拔掉。", english: "This tooth has to be taken out." },
        { chinese: "它很容易就拔出来了。", english: "It came out easily." }
    ]
},
{
    id: 79,
    title: "Lesson 79 - Carol's shopping list",
    vocabulary: [
        { word: "shopping list", translation: "购物清单", phonetic: "/ˈʃɒpɪŋ lɪst/", example: "I have a shopping list." },
        { word: "need", translation: "需要", phonetic: "/niːd/", example: "We need some milk." },
        { word: "thing", translation: "东西", phonetic: "/θɪŋ/", example: "I have a lot of things to do." },
        { word: "money", translation: "钱", phonetic: "/ˈmʌni/", example: "I don't have much money." },
        { word: "hope", translation: "希望", phonetic: "/həʊp/", example: "I hope that you have some money." },
        { word: "list", translation: "清单", phonetic: "/lɪst/", example: "Make a shopping list." },
        { word: "vegetable", translation: "蔬菜", phonetic: "/ˈvedʒtəbl/", example: "We need vegetables." },
        { word: "stationery", translation: "文具", phonetic: "/ˈsteɪʃənəri/", example: "We need stationery." },
        { word: "chemist", translation: "药房", phonetic: "/ˈkemɪst/", example: "Go to the chemist's." },
        { word: "stuff", translation: "东西", phonetic: "/stʌf/", example: "We need a lot of stuff." }
    ],
    grammar: [
        { question: "We ___ some milk.", options: ["need", "needs", "needing", "needed"], correct: 0, explanation: "一般现在时，we 用 need。" },
        { question: "I have ___ money.", options: ["no", "not", "none", "nothing"], correct: 0, explanation: "no money 表示没有钱。" },
        { question: "I don't have ___ money.", options: ["much", "many", "some", "a lot"], correct: 0, explanation: "money 不可数，用 much。" },
        { question: "I ___ that you have some money.", options: ["hope", "hopes", "hoping", "hoped"], correct: 0, explanation: "I hope 表示我希望。" },
        { question: "We don't need ___ vegetables.", options: ["any", "some", "a", "an"], correct: 0, explanation: "否定句用 any。" },
        { question: "We need a lot of ___.", options: ["things", "thing", "a thing", "the thing"], correct: 0, explanation: "a lot of 后接复数名词。" },
        { question: "I'm going to ___ a shopping list.", options: ["make", "makes", "making", "made"], correct: 0, explanation: "be going to 后接动词原形。" },
        { question: "What ___ we need?", options: ["do", "does", "are", "is"], correct: 0, explanation: "we 是复数，疑问借用 do。" },
        { question: "We need some ___.", options: ["stationery", "stationeries", "a stationery", "the stationery"], correct: 0, explanation: "stationery 不可数。" },
        { question: "I have a ___ of things to do.", options: ["lot", "lots", "a lot", "many"], correct: 0, explanation: "a lot of 是固定短语。" },
        { question: "Do we need ___ milk?", options: ["any", "some", "a", "an"], correct: 0, explanation: "疑问句用 any。" },
        { question: "We need a ___ of fruit.", options: ["lot", "lots", "many", "much"], correct: 0, explanation: "a lot of 修饰可数或不可数名词。" },
        { question: "I ___ any money.", options: ["don't have", "doesn't have", "haven't", "hasn't"], correct: 0, explanation: "I 是复数，否定用 don't have。" },
        { question: "We need to go to the ___.", options: ["chemist's", "chemist", "chemists", "the chemist"], correct: 0, explanation: "the chemist's 表示药店。" },
        { question: "We ___ a lot of stuff.", options: ["need", "needs", "needing", "needed"], correct: 0, explanation: "we 用 need。" }
    ],
    listening: {
        dialogue: "Tom: What are you doing, Carol? Carol: I'm making a shopping list, Tom. Tom: What do we need? Carol: We need a lot of things this week. Tom: What do we need? Carol: I'll read the list. We need some milk, some butter, some meat and some vegetables. Tom: Do we need any fruit? Carol: Yes, we need some apples and oranges. Tom: What about stationery? Carol: We don't need any stationery. Tom: What about the chemist's? Carol: We don't need anything from the chemist's. Tom: I hope you have enough money. Carol: I don't have much money. Tom: Well, I don't have any money either.",
        questions: [
            { question: "What is Carol doing?", options: ["Cooking", "Making a shopping list", "Reading", "Cleaning"], correct: 1 },
            { question: "Do they need any stationery?", options: ["Yes", "No", "Not mentioned", "Maybe"], correct: 1 },
            { question: "Does Tom have any money?", options: ["Yes, a lot", "No, he doesn't have any", "Some", "Not mentioned"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "你在做什么，卡罗尔？", english: "What are you doing, Carol?" },
        { chinese: "我在列购物清单，汤姆。", english: "I'm making a shopping list, Tom." },
        { chinese: "我们需要什么？", english: "What do we need?" },
        { chinese: "这周我们需要很多东西。", english: "We need a lot of things this week." },
        { chinese: "我们需要一些牛奶、黄油、肉和蔬菜。", english: "We need some milk, some butter, some meat and some vegetables." },
        { chinese: "我们需要水果吗？", english: "Do we need any fruit?" },
        { chinese: "是的，我们需要一些苹果和橙子。", english: "Yes, we need some apples and oranges." },
        { chinese: "文具呢？", english: "What about stationery?" },
        { chinese: "我们不需要文具。", english: "We don't need any stationery." },
        { chinese: "我希望你有足够的钱。", english: "I hope you have enough money." },
        { chinese: "我的钱不多。", english: "I don't have much money." },
        { chinese: "哦，我也没钱了。", english: "Well, I don't have any money either." }
    ]
},
{
    id: 81,
    title: "Lesson 81 - Roast beef and potatoes",
    vocabulary: [
        { word: "bath", translation: "洗澡", phonetic: "/bɑːθ/", example: "I'm going to have a bath." },
        { word: "nearly", translation: "几乎", phonetic: "/ˈnɪəli/", example: "Dinner is nearly ready." },
        { word: "ready", translation: "准备好的", phonetic: "/ˈredi/", example: "Dinner is ready." },
        { word: "dinner", translation: "正餐", phonetic: "/ˈdɪnər/", example: "Dinner is at seven o'clock." },
        { word: "roast", translation: "烤的", phonetic: "/rəʊst/", example: "We have roast beef." },
        { word: "potato", translation: "土豆", phonetic: "/pəˈteɪtəʊ/", example: "We have roast potatoes." },
        { word: "beer", translation: "啤酒", phonetic: "/bɪər/", example: "I want some beer." },
        { word: "glass", translation: "玻璃杯", phonetic: "/ɡlɑːs/", example: "Give me a glass." }
    ],
    grammar: [
        { question: "I'm going to have a ___.", options: ["bath", "bathe", "bathing", "bathed"], correct: 0, explanation: "have a bath 是固定短语。" },
        { question: "Dinner is ___ ready.", options: ["nearly", "near", "nearer", "nearest"], correct: 0, explanation: "nearly 是副词，修饰 ready。" },
        { question: "Dinner is ___.", options: ["ready", "readily", "readiness", "readies"], correct: 0, explanation: "ready 是形容词作表语。" },
        { question: "We have roast ___.", options: ["beef", "beefs", "a beef", "the beef"], correct: 0, explanation: "beef 不可数。" },
        { question: "We have roast ___.", options: ["potatoes", "potatos", "potato", "a potato"], correct: 0, explanation: "potato 的复数是 potatoes。" },
        { question: "What's the ___ of that dress?", options: ["like", "look", "style", "color"], correct: 0, explanation: "What's...like? 询问特征。" },
        { question: "We ___ beef and potatoes.", options: ["have", "has", "having", "had"], correct: 0, explanation: "一般现在时 we 用 have。" },
        { question: "I want some ___.", options: ["beer", "beers", "a beer", "the beer"], correct: 0, explanation: "beer 一般不可数。" },
        { question: "Give me a ___.", options: ["glass", "glasses", "a glass", "the glass"], correct: 0, explanation: "a glass 表示一个玻璃杯。" },
        { question: "We have roast beef ___ dinner.", options: ["for", "in", "at", "with"], correct: 0, explanation: "for dinner 作为正餐。" },
        { question: "Dinner is at ___ o'clock.", options: ["seven", "seventh", "the seven", "seven's"], correct: 0, explanation: "整点用基数词。" },
        { question: "I'm ___ a bath.", options: ["having", "have", "has", "had"], correct: 0, explanation: "现在进行时用 having。" },
        { question: "Hurry ___, dinner is ready.", options: ["up", "on", "in", "over"], correct: 0, explanation: "Hurry up! 是固定短语。" },
        { question: "We have roast potatoes and ___.", options: ["carrots", "carrot", "a carrot", "the carrot"], correct: 0, explanation: "一般用复数 carrots。" },
        { question: "Dinner is nearly ready. What ___ it like?", options: ["is", "are", "am", "be"], correct: 0, explanation: "it 用 is。" }
    ],
    listening: {
        dialogue: "Tom: What's the time, Carol? Carol: It's seven o'clock. Tom: I'm going to have a bath. Carol: Dinner is nearly ready. Tom: What are we having for dinner? Carol: We're having roast beef and potatoes. Tom: Oh, good. I like roast beef. Carol: Hurry up! Tom: Dinner is ready. Carol: What's it like? Tom: It's very good. I want some beer. Carol: Give me a glass. Tom: Here you are.",
        questions: [
            { question: "What time is it?", options: ["6 o'clock", "7 o'clock", "8 o'clock", "9 o'clock"], correct: 1 },
            { question: "What is for dinner?", options: ["Fish and chips", "Roast beef and potatoes", "Chicken and rice", "Soup and salad"], correct: 1 },
            { question: "What does Tom want to drink?", options: ["Water", "Wine", "Beer", "Juice"], correct: 2 }
        ]
    },
    translation: [
        { chinese: "几点了，卡罗尔？", english: "What's the time, Carol?" },
        { chinese: "七点钟了。", english: "It's seven o'clock." },
        { chinese: "我准备洗个澡。", english: "I'm going to have a bath." },
        { chinese: "晚饭快准备好了。", english: "Dinner is nearly ready." },
        { chinese: "我们晚饭吃什么？", english: "What are we having for dinner?" },
        { chinese: "我们吃烤牛肉和土豆。", english: "We're having roast beef and potatoes." },
        { chinese: "哦，太好了。我喜欢烤牛肉。", english: "Oh, good. I like roast beef." },
        { chinese: "赶快！", english: "Hurry up!" },
        { chinese: "晚饭准备好了。", english: "Dinner is ready." },
        { chinese: "味道怎么样？", english: "What's it like?" },
        { chinese: "很好吃。", english: "It's very good." },
        { chinese: "我想要些啤酒。", english: "I want some beer." }
    ]
},
{
    id: 83,
    title: "Lesson 83 - Going on holiday",
    vocabulary: [
        { word: "mess", translation: "杂乱", phonetic: "/mes/", example: "The room is a mess." },
        { word: "pack", translation: "打包", phonetic: "/pæk/", example: "I'm packing my suitcase." },
        { word: "suitcase", translation: "手提箱", phonetic: "/ˈsuːtkeɪs/", example: "Put your clothes in the suitcase." },
        { word: "leave", translation: "离开", phonetic: "/liːv/", example: "We are going to leave tomorrow." },
        { word: "already", translation: "已经", phonetic: "/ɔːlˈredi/", example: "I've already had lunch." },
        { word: "holiday", translation: "假日", phonetic: "/ˈhɒlədeɪ/", example: "We're going on holiday." },
        { word: "forget", translation: "忘记", phonetic: "/fərˈɡet/", example: "Don't forget to pack." },
        { word: "travel", translation: "旅行", phonetic: "/ˈtrævl/", example: "We are going to travel by train." }
    ],
    grammar: [
        { question: "The room is a ___.", options: ["mess", "messes", "a mess", "the mess"], correct: 0, explanation: "a mess 表示一团糟。" },
        { question: "I'm ___ my suitcase.", options: ["packing", "pack", "packs", "packed"], correct: 0, explanation: "现在进行时用 packing。" },
        { question: "We are going to ___ tomorrow.", options: ["leave", "leaves", "leaving", "left"], correct: 0, explanation: "be going to 后接动词原形。" },
        { question: "I've ___ had lunch.", options: ["already", "yet", "still", "ever"], correct: 0, explanation: "already 用于肯定句，表示已经。" },
        { question: "Have you ___ your suitcase?", options: ["packed", "pack", "packs", "packing"], correct: 0, explanation: "现在完成时用 packed。" },
        { question: "We're going on ___.", options: ["holiday", "holidays", "a holiday", "the holiday"], correct: 0, explanation: "on holiday 是固定短语。" },
        { question: "___ forget to pack.", options: ["Don't", "Doesn't", "Didn't", "Not"], correct: 0, explanation: "祈使句否定用 don't。" },
        { question: "I've ___ all my clothes.", options: ["packed", "pack", "packs", "packing"], correct: 0, explanation: "现在完成时用 packed。" },
        { question: "Have you had ___?", options: ["lunch", "a lunch", "the lunch", "lunches"], correct: 0, explanation: "have lunch 是固定搭配。" },
        { question: "I haven't had ___ yet.", options: ["mine", "my", "me", "I"], correct: 0, explanation: "mine 是名词性物主代词，指代 my lunch。" },
        { question: "We are going to travel ___ train.", options: ["by", "on", "in", "with"], correct: 0, explanation: "by train 表示乘坐火车。" },
        { question: "I've ___ had breakfast.", options: ["just", "yet", "still", "ever"], correct: 0, explanation: "just 表示刚刚，用于现在完成时。" },
        { question: "___ you ever been to Paris?", options: ["Have", "Has", "Had", "Having"], correct: 0, explanation: "you 用 have 构成完成时。" },
        { question: "I've never ___ there.", options: ["been", "be", "am", "being"], correct: 0, explanation: "have been to 表示去过某地。" },
        { question: "Have you ___ your lunch?", options: ["finished", "finish", "finishes", "finishing"], correct: 0, explanation: "现在完成时用 finished。" }
    ],
    listening: {
        dialogue: "Carol: Tom, the room is a mess. Tom: I'm packing my suitcase. Carol: Have you finished? Tom: No, I haven't. Carol: When are you going to finish? Tom: I don't know. Carol: We are going to leave tomorrow. I've already had lunch. Have you had yours? Tom: I haven't had mine yet. Carol: Hurry up! We have to catch the train. Tom: Don't worry. We have plenty of time. Carol: Have you packed all your clothes? Tom: No, I haven't. But I've packed my suitcase. Carol: That's not true. Your suitcase is empty.",
        questions: [
            { question: "Why is the room a mess?", options: ["They just moved in", "Tom is packing", "Carol is cleaning", "They had a party"], correct: 1 },
            { question: "Has Tom had his lunch yet?", options: ["Yes", "No", "Not mentioned", "Maybe"], correct: 1 },
            { question: "Is Tom's suitcase full?", options: ["Yes, it's full", "No, it's empty", "Half full", "Not mentioned"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "汤姆，房间乱极了。", english: "Tom, the room is a mess." },
        { chinese: "我正在收拾手提箱。", english: "I'm packing my suitcase." },
        { chinese: "你收拾好了吗？", english: "Have you finished?" },
        { chinese: "不，还没有。", english: "No, I haven't." },
        { chinese: "我们明天就要离开了。", english: "We are going to leave tomorrow." },
        { chinese: "我已经吃过午饭了。", english: "I've already had lunch." },
        { chinese: "你吃了吗？", english: "Have you had yours?" },
        { chinese: "我还没吃呢。", english: "I haven't had mine yet." },
        { chinese: "你收拾好所有衣服了吗？", english: "Have you packed all your clothes?" },
        { chinese: "你的手提箱是空的。", english: "Your suitcase is empty." }
    ]
},
{
    id: 85,
    title: "Lesson 85 - Paris in the spring",
    vocabulary: [
        { word: "Paris", translation: "巴黎", phonetic: "/ˈpærɪs/", example: "I've just been to Paris." },
        { word: "cinema", translation: "电影院", phonetic: "/ˈsɪnəmə/", example: "We went to the cinema." },
        { word: "film", translation: "电影", phonetic: "/fɪlm/", example: "The film was very good." },
        { word: "beautiful", translation: "美丽的", phonetic: "/ˈbjuːtɪfl/", example: "Paris is beautiful in spring." },
        { word: "city", translation: "城市", phonetic: "/ˈsɪti/", example: "It's a beautiful city." },
        { word: "ever", translation: "曾经", phonetic: "/ˈevər/", example: "Have you ever been there?" },
        { word: "never", translation: "从未", phonetic: "/ˈnevər/", example: "I've never been there." },
        { word: "spring", translation: "春天", phonetic: "/sprɪŋ/", example: "Paris in the spring." }
    ],
    grammar: [
        { question: "I've just ___ to Paris.", options: ["been", "be", "am", "being"], correct: 0, explanation: "have been to 表示去过某地。" },
        { question: "We went to the ___.", options: ["cinema", "cinemas", "a cinema", "the cinemas"], correct: 0, explanation: "the cinema 表示电影院。" },
        { question: "The film was very ___.", options: ["good", "well", "better", "best"], correct: 0, explanation: "good 是形容词作表语。" },
        { question: "Paris is a beautiful ___.", options: ["city", "cities", "a city", "the city"], correct: 0, explanation: "city 是可数名词单数。" },
        { question: "Have you ever ___ there?", options: ["been", "be", "am", "being"], correct: 0, explanation: "have been 表示去过。" },
        { question: "I've never ___ there.", options: ["been", "be", "am", "being"], correct: 0, explanation: "have never been 表示从没去过。" },
        { question: "Paris is beautiful ___ spring.", options: ["in", "on", "at", "during"], correct: 0, explanation: "季节前用 in。" },
        { question: "I ___ a very good film last night.", options: ["saw", "see", "sees", "seeing"], correct: 0, explanation: "last night 用过去时 saw。" },
        { question: "Have you ___ seen that film?", options: ["ever", "never", "yet", "already"], correct: 0, explanation: "ever 用于疑问句，表示曾经。" },
        { question: "I've ___ seen it.", options: ["already", "yet", "ever", "never"], correct: 0, explanation: "already 用于肯定句。" },
        { question: "What's Paris ___?", options: ["like", "look like", "as", "for"], correct: 0, explanation: "What's...like? 询问特征。" },
        { question: "It's a very ___ city.", options: ["beautiful", "beauty", "beautify", "beautifully"], correct: 0, explanation: "beautiful 是形容词修饰 city。" },
        { question: "I've never been to ___.", options: ["Paris", "the Paris", "a Paris", "Parises"], correct: 0, explanation: "城市名用专有名词。" },
        { question: "Have you ever ___ to London?", options: ["been", "be", "am", "being"], correct: 0, explanation: "完成时用 been。" },
        { question: "The film was very interesting, ___.", options: ["too", "to", "two", "also"], correct: 0, explanation: "too 表示也，放在句末。" }
    ],
    listening: {
        dialogue: "George: Hello, Ken. I've just been to Paris. Ken: Paris! Have you ever been there before? George: No, I've never been there. It's a beautiful city. Ken: What's it like? George: It's very exciting. The buildings are very beautiful. The weather was very nice. Ken: What did you do there? George: I went to the cinema and saw a very good film. Ken: Was the film in English? George: No, it was in French. But I understood it! Ken: You are lucky. I've never been to Paris. I'd like to go one day.",
        questions: [
            { question: "How many times has George been to Paris before?", options: ["Once", "Never before", "Twice", "Several times"], correct: 1 },
            { question: "What did George do in Paris?", options: ["Went shopping", "Went to the cinema", "Visited museums", "Climbed the Eiffel Tower"], correct: 1 },
            { question: "What language was the film in?", options: ["English", "French", "German", "Spanish"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "你好，肯。我刚去过巴黎。", english: "Hello, Ken. I've just been to Paris." },
        { chinese: "巴黎！你以前去过那里吗？", english: "Paris! Have you ever been there before?" },
        { chinese: "不，我从没去过。那是个美丽的城市。", english: "No, I've never been there. It's a beautiful city." },
        { chinese: "它是什么样子的？", english: "What's it like?" },
        { chinese: "非常令人兴奋。建筑很美。", english: "It's very exciting. The buildings are very beautiful." },
        { chinese: "你在那里做什么了？", english: "What did you do there?" },
        { chinese: "我去电影院看了一部好电影。", english: "I went to the cinema and saw a very good film." },
        { chinese: "电影是英语的吗？", english: "Was the film in English?" },
        { chinese: "不，是法语的。但我听懂了！", english: "No, it was in French. But I understood it!" }
    ]
},
{
    id: 87,
    title: "Lesson 87 - A car crash",
    vocabulary: [
        { word: "crash", translation: "碰撞", phonetic: "/kræʃ/", example: "I had a car crash." },
        { word: "repair", translation: "修理", phonetic: "/rɪˈpeər/", example: "My car is being repaired." },
        { word: "bring", translation: "带来", phonetic: "/brɪŋ/", example: "Bring it to the garage." },
        { word: "garage", translation: "修车厂", phonetic: "/ˈɡærɑːʒ/", example: "The car is at the garage." },
        { word: "lamp post", translation: "灯柱", phonetic: "/læmp pəʊst/", example: "The car hit a lamp post." },
        { word: "mechanic", translation: "机修工", phonetic: "/məˈkænɪk/", example: "The mechanic is repairing the car." },
        { word: "since", translation: "自从", phonetic: "/sɪns/", example: "I've been here since 8 o'clock." },
        { word: "still", translation: "仍然", phonetic: "/stɪl/", example: "It's still being repaired." }
    ],
    grammar: [
        { question: "My car ___ being repaired.", options: ["is", "am", "are", "be"], correct: 0, explanation: "car 是单数，用 is being repaired。" },
        { question: "I had a car ___.", options: ["crash", "crashing", "crashed", "crashes"], correct: 0, explanation: "a car crash 是名词短语。" },
        { question: "Bring it ___ the garage.", options: ["to", "in", "at", "into"], correct: 0, explanation: "bring to 表示带到某处。" },
        { question: "Have you ___ it to the garage?", options: ["brought", "bring", "brings", "bringing"], correct: 0, explanation: "现在完成时用 brought。" },
        { question: "The car hit a lamp ___.", options: ["post", "posts", "a post", "the post"], correct: 0, explanation: "a lamp post 表示一个灯柱。" },
        { question: "I've been here ___ 8 o'clock.", options: ["since", "for", "from", "at"], correct: 0, explanation: "since 接时间点。" },
        { question: "It's ___ being repaired.", options: ["still", "yet", "already", "ever"], correct: 0, explanation: "still 表示仍然，用于肯定句。" },
        { question: "I've been here ___ three hours.", options: ["for", "since", "from", "in"], correct: 0, explanation: "for 接时间段。" },
        { question: "My car ___ repaired yet.", options: ["hasn't been", "haven't been", "hasn't", "haven't"], correct: 0, explanation: "现在完成时被动 hasn't been repaired。" },
        { question: "When did you ___ the crash?", options: ["have", "has", "had", "having"], correct: 0, explanation: "did 后接动词原形。" },
        { question: "I had the crash ___ night.", options: ["last", "yesterday", "this", "that"], correct: 0, explanation: "last night 表示昨晚。" },
        { question: "Is the car ___ repaired?", options: ["being", "be", "been", "am"], correct: 0, explanation: "正在进行时的被动语态 being repaired。" },
        { question: "The mechanic is working ___ the car.", options: ["on", "in", "at", "to"], correct: 0, explanation: "work on 表示从事某项工作。" },
        { question: "I've been waiting ___ a long time.", options: ["for", "since", "from", "in"], correct: 0, explanation: "for a long time 表示很长时间。" },
        { question: "It's not ___ yet.", options: ["ready", "readily", "readiness", "readies"], correct: 0, explanation: "ready 是形容词作表语。" }
    ],
    listening: {
        dialogue: "Mr. Wood: Is my car ready yet? Mechanic: I don't know. I've been here since 8 o'clock. Let me ask the boss. Boss: The car is being repaired. Mr. Wood: When did you have the crash? Boss: I had the crash last night. Mr. Wood: Did you bring it to the garage? Boss: Yes, I did. Mr. Wood: Has the mechanic finished? Boss: No, he hasn't. The car is still being repaired. Mr. Wood: Can you repair it? Boss: We're trying to. The car hit a lamp post. It's badly damaged. Mr. Wood: How long will it take? Boss: I'm not sure. It's not ready yet.",
        questions: [
            { question: "When did the crash happen?", options: ["This morning", "Last night", "Yesterday afternoon", "This afternoon"], correct: 1 },
            { question: "Where has the car been taken?", options: ["To the mechanic's house", "To the garage", "To the car wash", "To the shop"], correct: 1 },
            { question: "Is the car ready yet?", options: ["Yes", "No, it's still being repaired", "Almost ready", "Not mentioned"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "我的车修好了吗？", english: "Is my car ready yet?" },
        { chinese: "我不知道。我从8点就一直在这儿了。", english: "I don't know. I've been here since 8 o'clock." },
        { chinese: "我的车正在修理。", english: "The car is being repaired." },
        { chinese: "你什么时候出的事故？", english: "When did you have the crash?" },
        { chinese: "我昨晚出的车祸。", english: "I had the crash last night." },
        { chinese: "你把它送进修车厂了吗？", english: "Did you bring it to the garage?" },
        { chinese: "是的。修理工修好了吗？", english: "Yes, I did. Has the mechanic finished?" },
        { chinese: "没有。车还在修理中。", english: "No, he hasn't. The car is still being repaired." },
        { chinese: "车撞上了路灯柱。损坏很严重。", english: "The car hit a lamp post. It's badly damaged." },
        { chinese: "需要多长时间？", english: "How long will it take?" },
        { chinese: "我不确定。还没有修好。", english: "I'm not sure. It's not ready yet." }
    ]
},
{
    id: 89,
    title: "Lesson 89 - For sale",
    vocabulary: [
        { word: "believe", translation: "相信", phonetic: "/bɪˈliːv/", example: "I don't believe it." },
        { word: "may", translation: "可能", phonetic: "/meɪ/", example: "I may sell it." },
        { word: "how long", translation: "多长时间", phonetic: "/haʊ lɒŋ/", example: "How long have you lived here?" },
        { word: "since", translation: "自从", phonetic: "/sɪns/", example: "I've lived here since 1976." },
        { word: "why", translation: "为什么", phonetic: "/waɪ/", example: "Why do you want to sell it?" },
        { word: "sell", translation: "卖", phonetic: "/sel/", example: "I'm going to sell my house." },
        { word: "because", translation: "因为", phonetic: "/bɪˈkɒz/", example: "Because I've just retired." },
        { word: "retire", translation: "退休", phonetic: "/rɪˈtaɪər/", example: "I've just retired." },
        { word: "expensive", translation: "昂贵的", phonetic: "/ɪkˈspensɪv/", example: "It's too expensive." },
        { word: "worth", translation: "值得", phonetic: "/wɜːrθ/", example: "How much is it worth?" }
    ],
    grammar: [
        { question: "I'm going to ___ my house.", options: ["sell", "sells", "selling", "sold"], correct: 0, explanation: "be going to 后接动词原形。" },
        { question: "How long have you ___ here?", options: ["lived", "live", "lives", "living"], correct: 0, explanation: "现在完成时用 lived。" },
        { question: "I've lived here ___ 1976.", options: ["since", "for", "from", "in"], correct: 0, explanation: "since 接具体年份。" },
        { question: "I've lived here ___ twenty years.", options: ["for", "since", "from", "in"], correct: 0, explanation: "for 接一段时间。" },
        { question: "Why do you want to ___ it?", options: ["sell", "sells", "selling", "sold"], correct: 0, explanation: "want to 后接动词原形。" },
        { question: "I've just ___.", options: ["retired", "retire", "retires", "retiring"], correct: 0, explanation: "现在完成时用 retired。" },
        { question: "I may ___ it.", options: ["sell", "sells", "selling", "sold"], correct: 0, explanation: "情态动词 may 后接动词原形。" },
        { question: "It's too ___.", options: ["expensive", "expensively", "expensiveness", "expense"], correct: 0, explanation: "expensive 是形容词。" },
        { question: "How much is it ___?", options: ["worth", "worthy", "worthwhile", "worthless"], correct: 0, explanation: "be worth 表示价值。" },
        { question: "I don't ___ it.", options: ["believe", "believes", "believing", "believed"], correct: 0, explanation: "don't 后接动词原形。" },
        { question: "The house is ___ sale.", options: ["for", "on", "in", "at"], correct: 0, explanation: "for sale 是固定短语，待售。" },
        { question: "How ___ have you lived here?", options: ["long", "much", "many", "often"], correct: 0, explanation: "How long 询问多长时间。" },
        { question: "I've been here ___ 1988.", options: ["since", "for", "from", "in"], correct: 0, explanation: "since 接时间点。" },
        { question: "___ do you want to sell it?", options: ["Why", "What", "Where", "When"], correct: 0, explanation: "Why 询问原因。" },
        { question: "Has the house ___ sold?", options: ["been", "be", "am", "being"], correct: 0, explanation: "现在完成时被动语态 been sold。" }
    ],
    listening: {
        dialogue: "Nigel: I'm going to sell my house. Peter: Why do you want to sell it? Nigel: Because I've just retired. I don't need such a big house. Peter: How much is it worth? Nigel: I'm not sure. I may sell it for £150,000. Peter: How long have you lived here? Nigel: I've lived here since 1976. Peter: Have you lived here for twenty years? Nigel: Yes, I have. Peter: That's a long time. Nigel: Yes, it is. I've been here for a long time. Peter: I don't believe it. You will miss it. Nigel: Yes, but I need a smaller house. Peter: Good luck with the sale.",
        questions: [
            { question: "Why is Nigel selling his house?", options: ["He needs money", "He's just retired", "He's moving to London", "The house is old"], correct: 1 },
            { question: "How much might the house sell for?", options: ["£100,000", "£150,000", "£200,000", "£250,000"], correct: 1 },
            { question: "How long has Nigel lived in the house?", options: ["Since 1976", "Since 1986", "Since 1996", "Since 1966"], correct: 0 }
        ]
    },
    translation: [
        { chinese: "我打算卖掉我的房子。", english: "I'm going to sell my house." },
        { chinese: "你为什么要卖？", english: "Why do you want to sell it?" },
        { chinese: "因为我刚退休了。我不需要这么大的房子了。", english: "Because I've just retired. I don't need such a big house." },
        { chinese: "它值多少钱？", english: "How much is it worth?" },
        { chinese: "我不确定。我可能卖15万英镑。", english: "I'm not sure. I may sell it for £150,000." },
        { chinese: "你住在这里多久了？", english: "How long have you lived here?" },
        { chinese: "我从1976年就住在这里了。", english: "I've lived here since 1976." },
        { chinese: "你已经在这里住了20年了？", english: "Have you lived here for twenty years?" },
        { chinese: "是的。我在这里住了很长一段时了。", english: "Yes, I have. I've been here for a long time." },
        { chinese: "我真不敢相信。", english: "I don't believe it." }
    ]
},
{
    id: 91,
    title: "Lesson 91 - Poor Ian!",
    vocabulary: [
        { word: "poor", translation: "可怜的", phonetic: "/pʊər/", example: "Poor Ian!" },
        { word: "move", translation: "移动", phonetic: "/muːv/", example: "Ian has moved to another house." },
        { word: "miss", translation: "怀念", phonetic: "/mɪs/", example: "I'll miss him." },
        { word: "neighbour", translation: "邻居", phonetic: "/ˈneɪbər/", example: "He is a good neighbour." },
        { word: "person", translation: "人", phonetic: "/ˈpɜːrsn/", example: "He's a nice person." },
        { word: "people", translation: "人们", phonetic: "/ˈpiːpl/", example: "The people in this street are friendly." },
        { word: "regret", translation: "后悔", phonetic: "/rɪˈɡret/", example: "I regret to say I'm leaving." },
        { word: "certainly", translation: "当然", phonetic: "/ˈsɜːrtnli/", example: "I will certainly miss him." }
    ],
    grammar: [
        { question: "Poor ___.", options: ["Ian", "Ian's", "Ians", "the Ian"], correct: 0, explanation: "称呼用名字本身。" },
        { question: "Ian has ___ to another house.", options: ["moved", "move", "moves", "moving"], correct: 0, explanation: "现在完成时用 moved。" },
        { question: "He is a good ___.", options: ["neighbour", "neighbours", "neighbouring", "neighbourhood"], correct: 0, explanation: "good neighbour 好邻居。" },
        { question: "He's a nice ___.", options: ["person", "persons", "a person", "the person"], correct: 0, explanation: "person 是可数名词单数。" },
        { question: "The people in this street are ___.", options: ["friendly", "friend", "friends", "friendlily"], correct: 0, explanation: "friendly 是形容词，友好的。" },
        { question: "I'll ___ him.", options: ["miss", "misses", "missing", "missed"], correct: 0, explanation: "will 后接动词原形。" },
        { question: "I will certainly ___ him.", options: ["miss", "misses", "missing", "missed"], correct: 0, explanation: "will 后接动词原形。" },
        { question: "He has gone ___ a trip.", options: ["on", "in", "to", "for"], correct: 0, explanation: "go on a trip 是固定短语。" },
        { question: "He'll be back ___ two weeks.", options: ["in", "for", "since", "after"], correct: 0, explanation: "in two weeks 表示两周后。" },
        { question: "Has he moved ___ his new house?", options: ["into", "in", "to", "onto"], correct: 0, explanation: "move into 表示搬入。" },
        { question: "Has Ian ___?", options: ["left", "leave", "leaves", "leaving"], correct: 0, explanation: "现在完成时用 left。" },
        { question: "No, he ___.", options: ["hasn't", "haven't", "hadn't", "didn't"], correct: 0, explanation: "第三人称单数否定回答用 hasn't。" },
        { question: "I regret ___ say I'm leaving.", options: ["to", "for", "of", "in"], correct: 0, explanation: "regret to say 遗憾地说。" },
        { question: "He's a very nice ___.", options: ["person", "people", "persons", "a people"], correct: 0, explanation: "a nice person 一个好人。" },
        { question: "We'll all ___ him.", options: ["miss", "misses", "missing", "missed"], correct: 0, explanation: "will 后接动词原形。" }
    ],
    listening: {
        dialogue: "Roy: Has Ian moved into his new house yet? Tom: Yes, he has. Roy: When did he move? Tom: He moved last week. Roy: Has he left the old house? Tom: Yes, he has. Roy: Is his new house nice? Tom: Yes, it is. He's a very nice person. We'll all miss him. Roy: Poor Ian! He was a good neighbour. Tom: Yes, he was. The people in this street are all friendly. I'll certainly miss him. Roy: Has he gone on a trip? Tom: Yes, he has. He'll be back in two weeks. Roy: I'm glad to hear that. He is a very nice person.",
        questions: [
            { question: "When did Ian move into the new house?", options: ["Last month", "Last week", "Two weeks ago", "Yesterday"], correct: 1 },
            { question: "How do the neighbours feel about Ian leaving?", options: ["Happy", "They will miss him", "Angry", "Indifferent"], correct: 1 },
            { question: "When will Ian be back?", options: ["In a week", "In two weeks", "In a month", "Not mentioned"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "伊恩搬进新家了吗？", english: "Has Ian moved into his new house yet?" },
        { chinese: "是的，搬了。", english: "Yes, he has." },
        { chinese: "他什么时候搬的？", english: "When did he move?" },
        { chinese: "他上周搬的。", english: "He moved last week." },
        { chinese: "他离开原来的房子了吗？", english: "Has he left the old house?" },
        { chinese: "他是个非常好的人。我们都会想念他的。", english: "He's a very nice person. We'll all miss him." },
        { chinese: "可怜的伊恩！他是个好邻居。", english: "Poor Ian! He was a good neighbour." },
        { chinese: "他外出旅行了吗？", english: "Has he gone on a trip?" },
        { chinese: "他两周后会回来。", english: "He'll be back in two weeks." },
        { chinese: "听到这我很高兴。", english: "I'm glad to hear that." }
    ]
}

,
{
    id: 93,
    title: "Lesson 93 - Our new neighbour",
    vocabulary: [
        { word: "neighbour", translation: "邻居", phonetic: "/ˈneɪbər/", example: "He is our new neighbour." },
        { word: "flew", translation: "飞（fly过去式）", phonetic: "/fluː/", example: "He flew to New York." },
        { word: "return", translation: "返回", phonetic: "/rɪˈtɜːrn/", example: "He returned to London." },
        { word: "pilot", translation: "飞行员", phonetic: "/ˈpaɪlət/", example: "He is a pilot." },
        { word: "fly", translation: "驾驶飞机", phonetic: "/flaɪ/", example: "He flies to many countries." },
        { word: "country", translation: "国家", phonetic: "/ˈkʌntri/", example: "He has been to many countries." },
        { word: "Moscow", translation: "莫斯科", phonetic: "/ˈmɒskəʊ/", example: "He flew to Moscow." },
        { word: "Madrid", translation: "马德里", phonetic: "/məˈdrɪd/", example: "He flew to Madrid." },
        { word: "Berlin", translation: "柏林", phonetic: "/bɜːrˈlɪn/", example: "He flew to Berlin." }
    ],
    grammar: [
        { question: "He is our new ___.", options: ["neighbour", "neighbours", "neighbouring", "neighbourhood"], correct: 0, explanation: "neighbour 是可数名词。" },
        { question: "He ___ to New York last week.", options: ["flew", "fly", "flies", "flying"], correct: 0, explanation: "last week 用过去时 flew。" },
        { question: "He has ___ to many countries.", options: ["been", "be", "am", "being"], correct: 0, explanation: "现在完成时 have been to。" },
        { question: "He ___ to many countries.", options: ["flies", "fly", "flying", "flew"], correct: 0, explanation: "一般现在时第三人称单数用 flies。" },
        { question: "He is a ___.", options: ["pilot", "pilots", "the pilot", "a pilot"], correct: 0, explanation: "a pilot 表示飞行员。" },
        { question: "He ___ to Berlin this morning.", options: ["went", "go", "goes", "going"], correct: 0, explanation: "过去时用 went。" },
        { question: "He ___ back to London.", options: ["returned", "return", "returns", "returning"], correct: 0, explanation: "过去时用 returned。" },
        { question: "He's a pilot. He ___ a plane.", options: ["flies", "fly", "flying", "flew"], correct: 0, explanation: "第三人称单数用 flies。" },
        { question: "He has ___ to many different places.", options: ["been", "be", "am", "being"], correct: 0, explanation: "have been to 表示去过。" },
        { question: "He ___ in Spain last year.", options: ["was", "were", "is", "are"], correct: 0, explanation: "last year 用过去时 was。" },
        { question: "He ___ in Berlin this morning.", options: ["was", "were", "is", "are"], correct: 0, explanation: "this morning 过去时用 was。" },
        { question: "He is forty-one years ___.", options: ["old", "older", "oldest", "age"], correct: 0, explanation: "years old 表示多少岁。" },
        { question: "He has ___ a pilot for ten years.", options: ["been", "be", "am", "being"], correct: 0, explanation: "现在完成时 has been。" },
        { question: "He has been a pilot ___ ten years.", options: ["for", "since", "from", "in"], correct: 0, explanation: "for 接一段时间。" },
        { question: "He ___ to New York last week and returned yesterday.", options: ["flew", "flies", "fly", "flying"], correct: 0, explanation: "last week 用过去时 flew。" }
    ],
    listening: {
        dialogue: "Nigel is our new next-door neighbour. He's a pilot. He was in the air force. He flew to New York last week. He returned to London yesterday. He is forty-one years old. He has been to nearly every country in the world. He flies to many different countries. He was in Spain last year. He flew to Madrid. He was in Berlin this morning. He flew to Moscow next. He is a very busy man. People are very glad to have him as a neighbour.",
        questions: [
            { question: "What is Nigel's job?", options: ["Teacher", "Pilot", "Doctor", "Engineer"], correct: 1 },
            { question: "Where did Nigel fly to last week?", options: ["London", "New York", "Madrid", "Berlin"], correct: 1 },
            { question: "How old is Nigel?", options: ["31", "41", "51", "61"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "奈杰尔是我们新搬来的邻居。", english: "Nigel is our new next-door neighbour." },
        { chinese: "他是个飞行员。", english: "He's a pilot." },
        { chinese: "他上星期飞往纽约。", english: "He flew to New York last week." },
        { chinese: "他昨天返回伦敦。", english: "He returned to London yesterday." },
        { chinese: "他41岁。", english: "He is forty-one years old." },
        { chinese: "他几乎去过世界上每一个国家。", english: "He has been to nearly every country in the world." },
        { chinese: "他飞往许多不同的国家。", english: "He flies to many different countries." },
        { chinese: "他去年在西班牙。", english: "He was in Spain last year." },
        { chinese: "他飞往马德里。", english: "He flew to Madrid." },
        { chinese: "他今天早上在柏林。", english: "He was in Berlin this morning." }
    ]
},
{
    id: 95,
    title: "Lesson 95 - Tickets, please.",
    vocabulary: [
        { word: "return", translation: "往返", phonetic: "/rɪˈtɜːrn/", example: "I want two return tickets." },
        { word: "platform", translation: "站台", phonetic: "/ˈplætfɔːrm/", example: "The train leaves from platform 5." },
        { word: "plenty", translation: "大量", phonetic: "/ˈplenti/", example: "We have plenty of time." },
        { word: "bar", translation: "酒吧", phonetic: "/bɑːr/", example: "Let's go to the bar." },
        { word: "station", translation: "车站", phonetic: "/ˈsteɪʃn/", example: "We are at the station." },
        { word: "catch", translation: "赶上", phonetic: "/kætʃ/", example: "We have to catch the train." },
        { word: "miss", translation: "错过", phonetic: "/mɪs/", example: "We mustn't miss the train." },
        { word: "single", translation: "单程的", phonetic: "/ˈsɪŋɡl/", example: "I want a single ticket." }
    ],
    grammar: [
        { question: "I want two ___ tickets.", options: ["return", "returns", "returning", "returned"], correct: 0, explanation: "return ticket 往返票。" },
        { question: "We have ___ of time.", options: ["plenty", "plentiful", "plentily", "plenties"], correct: 0, explanation: "plenty of 是固定短语。" },
        { question: "Let's go ___ the bar.", options: ["to", "in", "at", "into"], correct: 0, explanation: "go to 表示去某处。" },
        { question: "We ___ miss the train.", options: ["mustn't", "don't", "aren't", "needn't"], correct: 0, explanation: "mustn't 表示一定不要。" },
        { question: "The train ___ at 4 o'clock.", options: ["leaves", "leave", "leaving", "left"], correct: 0, explanation: "第三人称单数用 leaves。" },
        { question: "We have to ___ the train.", options: ["catch", "catches", "catching", "caught"], correct: 0, explanation: "have to 后接动词原形。" },
        { question: "Which ___ does the train leave from?", options: ["platform", "platforms", "a platform", "the platform"], correct: 0, explanation: "platform 表示站台。" },
        { question: "We are at the ___.", options: ["station", "stations", "a station", "the station"], correct: 0, explanation: "the station 表示火车站。" },
        { question: "There's a bar ___ the station.", options: ["near", "in", "on", "at"], correct: 0, explanation: "near the station 在车站附近。" },
        { question: "We can ___ a drink there.", options: ["have", "has", "had", "having"], correct: 0, explanation: "can 后接动词原形。" },
        { question: "I want two ___ and one single.", options: ["returns", "return", "returned", "returning"], correct: 0, explanation: "名词复数 returns。" },
        { question: "How ___ is a single ticket?", options: ["much", "many", "far", "long"], correct: 0, explanation: "询问价格用 How much。" },
        { question: "Here you ___.", options: ["are", "am", "is", "be"], correct: 0, explanation: "Here you are 固定短语。" },
        { question: "We have plenty of ___.", options: ["time", "times", "a time", "the time"], correct: 0, explanation: "time 不可数。" },
        { question: "Tickets, ___!", options: ["please", "thanks", "sir", "madam"], correct: 0, explanation: "please 用于礼貌地请求。" }
    ],
    listening: {
        dialogue: "Ticket Inspector: Tickets, please! George: I want two return tickets to London, please. Ticket Inspector: That's £5.50. George: Here you are. Ticket Inspector: Thank you. Which platform does the train leave from? George: Platform 5. Ticket Inspector: What time does it leave? George: It leaves at 4 o'clock. Ticket Inspector: We have plenty of time. Let's go to the bar. George: Good idea. We can have a drink there. Ticket Inspector: We mustn't miss the train. George: Don't worry. We have plenty of time.",
        questions: [
            { question: "Where do the two passengers want to go?", options: ["Manchester", "London", "Liverpool", "Oxford"], correct: 1 },
            { question: "How much are the two return tickets?", options: ["£4.50", "£5.00", "£5.50", "£6.00"], correct: 2 },
            { question: "Which platform does the train leave from?", options: ["Platform 3", "Platform 4", "Platform 5", "Platform 6"], correct: 2 }
        ]
    },
    translation: [
        { chinese: "请把票拿出来！", english: "Tickets, please!" },
        { chinese: "我要两张去伦敦的往返票。", english: "I want two return tickets to London, please." },
        { chinese: "一共5.50英镑。", english: "That's £5.50." },
        { chinese: "给你。谢谢。", english: "Here you are. Thank you." },
        { chinese: "火车从哪个站台开出？", english: "Which platform does the train leave from?" },
        { chinese: "5号站台。", english: "Platform 5." },
        { chinese: "它什么时候开出？", english: "What time does it leave?" },
        { chinese: "4点钟。", english: "It leaves at 4 o'clock." },
        { chinese: "我们有足够的时间。我们去酒吧吧。", english: "We have plenty of time. Let's go to the bar." },
        { chinese: "好主意。我们可以去那儿喝一杯。", english: "Good idea. We can have a drink there." },
        { chinese: "我们绝不能错过火车。", english: "We mustn't miss the train." }
    ]
},
{
    id: 97,
    title: "Lesson 97 - A small blue case",
    vocabulary: [
        { word: "leave", translation: "遗留", phonetic: "/liːv/", example: "I left a case on the train." },
        { word: "describe", translation: "描述", phonetic: "/dɪˈskraɪb/", example: "Can you describe it?" },
        { word: "handle", translation: "把手", phonetic: "/ˈhændl/", example: "The case has a handle." },
        { word: "label", translation: "标签", phonetic: "/ˈleɪbl/", example: "There is a label on the handle." },
        { word: "belong", translation: "属于", phonetic: "/bɪˈlɒŋ/", example: "This case belongs to me." },
        { word: "mine", translation: "我的", phonetic: "/maɪn/", example: "It's mine." },
        { word: "yours", translation: "你的", phonetic: "/jɔːrz/", example: "Is it yours?" },
        { word: "address", translation: "地址", phonetic: "/əˈdres/", example: "What's your address?" },
        { word: "name", translation: "名字", phonetic: "/neɪm/", example: "My name is on the label." }
    ],
    grammar: [
        { question: "I ___ a case on the train.", options: ["left", "leave", "leaves", "leaving"], correct: 0, explanation: "过去时用 left。" },
        { question: "Can you ___ it?", options: ["describe", "describes", "describing", "described"], correct: 0, explanation: "can 后接动词原形。" },
        { question: "Is this case ___?", options: ["yours", "your", "you", "you're"], correct: 0, explanation: "yours 是名词性物主代词。" },
        { question: "It's ___.", options: ["mine", "my", "I", "me"], correct: 0, explanation: "mine 是名词性物主代词。" },
        { question: "It's a small blue ___.", options: ["case", "cases", "a case", "the case"], correct: 0, explanation: "a small blue case 表示一个蓝色小箱子。" },
        { question: "It ___ to me.", options: ["belongs", "belong", "belonging", "belonged"], correct: 0, explanation: "第三人称单数用 belongs。" },
        { question: "There's a ___ on the handle.", options: ["label", "labels", "a label", "the label"], correct: 0, explanation: "a label 表示一个标签。" },
        { question: "What's your ___?", options: ["address", "addresses", "a address", "an address"], correct: 0, explanation: "address 是名词表示地址。" },
        { question: "This case doesn't ___ to me.", options: ["belong", "belongs", "belonging", "belonged"], correct: 0, explanation: "doesn't 后接动词原形。" },
        { question: "Is this ___?", options: ["mine", "my", "I", "me"], correct: 0, explanation: "mine 是名词性物主代词作表语。" },
        { question: "What does it look ___?", options: ["like", "look", "as", "for"], correct: 0, explanation: "What does it look like? 询问外貌。" },
        { question: "It's a blue case ___ a handle.", options: ["with", "has", "and", "having"], correct: 0, explanation: "with a handle 表示带有把手。" },
        { question: "The case ___ a zip.", options: ["has", "have", "having", "had"], correct: 0, explanation: "第三人称单数用 has。" },
        { question: "Is this case yours ___ his?", options: ["or", "and", "but", "nor"], correct: 0, explanation: "选择疑问句用 or。" },
        { question: "This case is not ___.", options: ["mine", "my", "I", "me"], correct: 0, explanation: "mine 是名词性物主代词。" }
    ],
    listening: {
        dialogue: "Clerk: Can I help you? Man: I left a case on the train. Clerk: Can you describe it? Man: It's a small blue case. It has a zip. There is a label on the handle. Clerk: Is this case yours? Man: No, it's not mine. Mine is smaller. Clerk: Is this yours? Man: Yes, it is! Thank you. Clerk: What's your name and address? Man: My name is John Smith. My address is 25 Bridge Street. Clerk: This case belongs to you. Take it. Man: Thank you very much.",
        questions: [
            { question: "What colour is the man's case?", options: ["Black", "Blue", "Brown", "Red"], correct: 1 },
            { question: "What is on the handle of the case?", options: ["A key", "A label", "A ribbon", "A lock"], correct: 1 },
            { question: "Was the first case the man's?", options: ["Yes", "No, it was too big", "No, it was too small", "Not mentioned"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "我能帮你吗？", english: "Can I help you?" },
        { chinese: "我把一个箱子忘在火车上了。", english: "I left a case on the train." },
        { chinese: "你能描述一下吗？", english: "Can you describe it?" },
        { chinese: "是一个蓝色的小箱子。", english: "It's a small blue case." },
        { chinese: "上面有拉链。", english: "It has a zip." },
        { chinese: "把手上有一个标签。", english: "There is a label on the handle." },
        { chinese: "这是你的箱子吗？", english: "Is this case yours?" },
        { chinese: "不，不是我的。我的更小。", english: "No, it's not mine. Mine is smaller." },
        { chinese: "这个箱子属于你。拿走它吧。", english: "This case belongs to you. Take it." },
        { chinese: "非常感谢你。", english: "Thank you very much." }
    ]
},
{
    id: 99,
    title: "Lesson 99 - Ow!",
    vocabulary: [
        { word: "slip", translation: "滑倒", phonetic: "/slɪp/", example: "I slipped and fell." },
        { word: "fall", translation: "跌倒", phonetic: "/fɔːl/", example: "I fell downstairs." },
        { word: "downstairs", translation: "楼下", phonetic: "/ˌdaʊnˈsteəz/", example: "He fell downstairs." },
        { word: "hurt", translation: "伤害", phonetic: "/hɜːrt/", example: "I've hurt my back." },
        { word: "back", translation: "背", phonetic: "/bæk/", example: "My back hurts." },
        { word: "help", translation: "帮助", phonetic: "/help/", example: "Help me up." },
        { word: "stand up", translation: "站起来", phonetic: "/stænd ʌp/", example: "I can't stand up." },
        { word: "sure", translation: "确信的", phonetic: "/ʃʊər/", example: "I'm sure it's broken." },
        { word: "x-ray", translation: "X光", phonetic: "/ˈeks reɪ/", example: "We need an X-ray." },
        { word: "hurt", translation: "疼痛", phonetic: "/hɜːrt/", example: "Does it hurt?" }
    ],
    grammar: [
        { question: "I ___ and fell downstairs.", options: ["slipped", "slip", "slips", "slipping"], correct: 0, explanation: "过去时用 slipped。" },
        { question: "I ___ downstairs.", options: ["fell", "fall", "falls", "falling"], correct: 0, explanation: "过去时用 fell。" },
        { question: "I've hurt my ___.", options: ["back", "backs", "a back", "the back"], correct: 0, explanation: "my back 我的背。" },
        { question: "Help me ___.", options: ["up", "down", "out", "in"], correct: 0, explanation: "Help me up 扶我起来。" },
        { question: "I can't ___ up.", options: ["stand", "stands", "standing", "stood"], correct: 0, explanation: "can't 后接动词原形。" },
        { question: "I'm sure it's ___.", options: ["broken", "break", "breaks", "breaking"], correct: 0, explanation: "broken 是形容词，表示骨折的。" },
        { question: "Does it ___?", options: ["hurt", "hurts", "hurting", "hurted"], correct: 0, explanation: "Does 后接动词原形。" },
        { question: "We need an ___.", options: ["X-ray", "X-rays", "X-raying", "X-rayed"], correct: 0, explanation: "an X-ray 表示一次X光检查。" },
        { question: "Can you ___ up?", options: ["stand", "stands", "standing", "stood"], correct: 0, explanation: "can 后接动词原形。" },
        { question: "I can ___ stand up.", options: ["hardly", "hard", "harder", "hardest"], correct: 0, explanation: "hardly 表示几乎不。" },
        { question: "What's the ___?", options: ["matter", "matters", "mattered", "mattering"], correct: 0, explanation: "What's the matter? 固定句型。" },
        { question: "I ___ downstairs just now.", options: ["fell", "fall", "falls", "falling"], correct: 0, explanation: "just now 用过去时 fell。" },
        { question: "Let me ___ you up.", options: ["help", "helps", "helping", "helped"], correct: 0, explanation: "let 后接动词原形。" },
        { question: "I think I've ___ my arm.", options: ["broken", "break", "breaks", "breaking"], correct: 0, explanation: "现在完成时 have broken。" },
        { question: "Will you ___ an X-ray?", options: ["need", "needs", "needing", "needed"], correct: 0, explanation: "will 后接动词原形。" }
    ],
    listening: {
        dialogue: "Pat: Ow! Bob: What's the matter? Pat: I slipped and fell downstairs. Bob: Have you hurt yourself? Pat: Yes, I have. I've hurt my back. Bob: Try to stand up. Can you stand up? Pat: No, I can't. Bob: Let me help you up. Pat: Ouch! That hurts. Bob: I think you need an X-ray. Let's go to the hospital. Pat: Do you think my back is broken? Bob: I'm not sure. But we need to see a doctor. Pat: I hope it's not broken. Bob: Don't worry. We'll take care of it.",
        questions: [
            { question: "What happened to Pat?", options: ["She bumped her head", "She slipped and fell downstairs", "She hurt her arm", "She fell off a chair"], correct: 1 },
            { question: "Which part of her body is hurt?", options: ["Her arm", "Her leg", "Her back", "Her head"], correct: 2 },
            { question: "Where does Bob suggest they go?", options: ["Home", "The hospital", "The pharmacy", "The clinic"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "哎哟！怎么了？", english: "Ow! What's the matter?" },
        { chinese: "我滑倒了，从楼梯上摔了下来。", english: "I slipped and fell downstairs." },
        { chinese: "你伤到了吗？", english: "Have you hurt yourself?" },
        { chinese: "是的，我伤到了背。", english: "Yes, I have. I've hurt my back." },
        { chinese: "试着站起来。你能站起来吗？", english: "Try to stand up. Can you stand up?" },
        { chinese: "不，我不能。", english: "No, I can't." },
        { chinese: "让我扶你起来。", english: "Let me help you up." },
        { chinese: "哎哟！好疼。", english: "Ouch! That hurts." },
        { chinese: "我想你需要拍X光片。", english: "I think you need an X-ray." },
        { chinese: "我们去医院吧。", english: "Let's go to the hospital." },
        { chinese: "你觉得我的背骨折了吗？", english: "Do you think my back is broken?" }
    ]
},
{
    id: 101,
    title: "Lesson 101 - A card from Jimmy",
    vocabulary: [
        { word: "Scotland", translation: "苏格兰", phonetic: "/ˈskɒtlənd/", example: "Jimmy is in Scotland." },
        { word: "card", translation: "明信片", phonetic: "/kɑːrd/", example: "He sent a card." },
        { word: "youth hostel", translation: "青年旅舍", phonetic: "/juːθ ˈhɒstl/", example: "He stayed at a youth hostel." },
        { word: "member", translation: "会员", phonetic: "/ˈmembər/", example: "He is a member of the Youth Hostels Association." },
        { word: "association", translation: "协会", phonetic: "/əˌsəʊsiˈeɪʃn/", example: "He joined the association." },
        { word: "soon", translation: "不久", phonetic: "/suːn/", example: "He'll write soon." },
        { word: "write", translation: "写信", phonetic: "/raɪt/", example: "Write to me soon." },
        { word: "say", translation: "说", phonetic: "/seɪ/", example: "He says he'll write." }
    ],
    grammar: [
        { question: "He sent a ___.", options: ["card", "cards", "a card", "the card"], correct: 0, explanation: "a card 表示一张明信片。" },
        { question: "He stayed ___ a youth hostel.", options: ["at", "in", "on", "to"], correct: 0, explanation: "at a youth hostel 表示在青年旅舍。" },
        { question: "He is a member of the ___.", options: ["association", "associate", "associated", "associating"], correct: 0, explanation: "association 是名词，协会。" },
        { question: "He'll ___ soon.", options: ["write", "writes", "writing", "wrote"], correct: 0, explanation: "will 后接动词原形。" },
        { question: "He says he ___ write soon.", options: ["will", "shall", "would", "should"], correct: 0, explanation: "will 表示将来。" },
        { question: "Is Jimmy ___?", options: ["there", "here", "where", "everywhere"], correct: 0, explanation: "there 表示在那里。" },
        { question: "He says he's ___ a good time.", options: ["having", "have", "has", "had"], correct: 0, explanation: "have a good time 表示玩得开心，进行时用 having。" },
        { question: "He's staying at a youth ___.", options: ["hostel", "hotel", "host", "hosting"], correct: 0, explanation: "youth hostel 青年旅舍。" },
        { question: "He says he'll write a ___.", options: ["letter", "letters", "a letter", "the letter"], correct: 0, explanation: "a letter 表示一封信。" },
        { question: "What does Jimmy ___?", options: ["say", "says", "saying", "said"], correct: 0, explanation: "does 后接动词原形。" },
        { question: "He says he's ___ Scotland.", options: ["in", "on", "at", "to"], correct: 0, explanation: "in Scotland 表示在苏格兰。" },
        { question: "He says he'll ___ a card.", options: ["send", "sends", "sending", "sent"], correct: 0, explanation: "will 后接动词原形。" },
        { question: "He's a ___ of the Y.H.A.", options: ["member", "members", "a member", "the member"], correct: 0, explanation: "a member 表示一个会员。" },
        { question: "He's having a wonderful ___.", options: ["time", "times", "a time", "the time"], correct: 0, explanation: "have a wonderful time 玩得很开心。" },
        { question: "He says he's having a good time ___ Scotland.", options: ["in", "on", "at", "to"], correct: 0, explanation: "in Scotland 在苏格兰。" }
    ],
    listening: {
        dialogue: "Mother: Has Jimmy written? Father: Yes, he has. Mother: What does he say? Father: He says he's in Scotland. Mother: Is he? What does he say about Scotland? Father: He says the scenery is very beautiful. Mother: Where is he staying? Father: He's staying at a youth hostel. Mother: Is he a member of the Y.H.A.? Father: Yes, he is. Mother: What else does he say? Father: He says he's having a wonderful time and he'll write a letter soon. Mother: That's good. I'm glad he's having a good time.",
        questions: [
            { question: "Where is Jimmy now?", options: ["England", "Scotland", "Wales", "Ireland"], correct: 1 },
            { question: "Where is Jimmy staying?", options: ["At a hotel", "At a youth hostel", "At a friend's house", "In a tent"], correct: 1 },
            { question: "What does Jimmy say about his trip?", options: ["He's bored", "He's having a wonderful time", "He's coming home soon", "He's sick"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "吉米写信了吗？", english: "Has Jimmy written?" },
        { chinese: "是的，他写了。", english: "Yes, he has." },
        { chinese: "他说什么？", english: "What does he say?" },
        { chinese: "他说他在苏格兰。", english: "He says he's in Scotland." },
        { chinese: "他住在哪里？", english: "Where is he staying?" },
        { chinese: "他住在一家青年旅舍。", english: "He's staying at a youth hostel." },
        { chinese: "他是青年旅舍协会的会员吗？", english: "Is he a member of the Y.H.A.?" },
        { chinese: "他说他玩得很开心。", english: "He says he's having a wonderful time." },
        { chinese: "他很快会写信来。", english: "He'll write a letter soon." },
        { chinese: "我很高兴他玩得很开心。", english: "I'm glad he's having a good time." }
    ]
},
{
    id: 103,
    title: "Lesson 103 - The French test",
    vocabulary: [
        { word: "exam", translation: "考试", phonetic: "/ɪɡˈzæm/", example: "The French exam is very difficult." },
        { word: "pass", translation: "通过", phonetic: "/pɑːs/", example: "I hope I've passed." },
        { word: "enough", translation: "足够", phonetic: "/ɪˈnʌf/", example: "The exam was easy enough." },
        { word: "fail", translation: "不及格", phonetic: "/feɪl/", example: "I hope I haven't failed." },
        { word: "answer", translation: "答案", phonetic: "/ˈɑːnsər/", example: "I wrote my answers carefully." },
        { word: "mark", translation: "分数", phonetic: "/mɑːrk/", example: "The teacher will mark the papers." },
        { word: "rest", translation: "休息", phonetic: "/rest/", example: "You need a rest." },
        { word: "question", translation: "问题", phonetic: "/ˈkwestʃən/", example: "The questions were very easy." },
        { word: "difficult", translation: "困难的", phonetic: "/ˈdɪfɪkəlt/", example: "The exam was very difficult." },
        { word: "cheer", translation: "欢呼", phonetic: "/tʃɪər/", example: "Cheer up!" }
    ],
    grammar: [
        { question: "The French exam is very ___.", options: ["difficult", "difficulty", "difficultly", "difficulties"], correct: 0, explanation: "difficult 是形容词。" },
        { question: "I hope I've ___.", options: ["passed", "pass", "passes", "passing"], correct: 0, explanation: "现在完成时用 passed。" },
        { question: "The exam was easy ___.", options: ["enough", "too", "very", "much"], correct: 0, explanation: "easy enough 表示足够简单。" },
        { question: "I hope I haven't ___.", options: ["failed", "fail", "fails", "failing"], correct: 0, explanation: "现在完成时用 failed。" },
        { question: "The questions were very ___.", options: ["easy", "easily", "ease", "easier"], correct: 0, explanation: "easy 是形容词作表语。" },
        { question: "I wrote my answers ___.", options: ["carefully", "careful", "care", "caring"], correct: 0, explanation: "修饰动词 wrote 用副词 carefully。" },
        { question: "We'll get the ___ tomorrow.", options: ["results", "result", "a result", "the result"], correct: 0, explanation: "results 表示考试结果。" },
        { question: "You need a ___.", options: ["rest", "rests", "a rest", "the rest"], correct: 0, explanation: "a rest 表示休息一下。" },
        { question: "How was the French ___?", options: ["exam", "exams", "a exam", "an exam"], correct: 0, explanation: "exam 表示考试。" },
        { question: "I'm sure I've ___ the exam.", options: ["passed", "pass", "passes", "passing"], correct: 0, explanation: "现在完成时用 passed。" },
        { question: "The English exam wasn't ___ enough.", options: ["easy", "easily", "ease", "easier"], correct: 0, explanation: "easy enough 足够简单。" },
        { question: "I think I've ___.", options: ["failed", "fail", "fails", "failing"], correct: 0, explanation: "现在完成时用 failed。" },
        { question: "Cheer ___!", options: ["up", "on", "out", "in"], correct: 0, explanation: "Cheer up! 是固定短语，振作起来。" },
        { question: "I'm so ___ about my exam.", options: ["worried", "worry", "worries", "worrying"], correct: 0, explanation: "worried 是形容词，担心的。" },
        { question: "We'll get the exam results ___ a week.", options: ["in", "for", "since", "after"], correct: 0, explanation: "in a week 表示一周后。" }
    ],
    listening: {
        dialogue: "Gary: How was the French exam, Richard? Richard: It was very difficult. I think I've failed. Gary: Don't worry. I'm sure you've passed. Richard: The questions were easy enough. But I didn't answer them carefully. Gary: How about the English exam? Richard: It wasn't easy enough for me. Gary: I'm sorry to hear that. Cheer up! We'll get the exam results in a week. Richard: I'm so worried. Gary: You need a rest. Let's go to the cinema. Richard: OK. That's a good idea.",
        questions: [
            { question: "How was Richard's French exam?", options: ["Very easy", "Very difficult", "OK", "Not mentioned"], correct: 1 },
            { question: "Why is Richard worried about his answers?", options: ["He didn't finish", "He didn't answer carefully", "He left early", "He couldn't read the questions"], correct: 1 },
            { question: "When will they get the exam results?", options: ["Tomorrow", "In a week", "In a month", "Next year"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "法语考试怎么样，理查德？", english: "How was the French exam, Richard?" },
        { chinese: "非常难。我想我考砸了。", english: "It was very difficult. I think I've failed." },
        { chinese: "别担心。我肯定你过了。", english: "Don't worry. I'm sure you've passed." },
        { chinese: "题目很容易。但我没有仔细回答。", english: "The questions were easy enough. But I didn't answer them carefully." },
        { chinese: "振作起来！", english: "Cheer up!" },
        { chinese: "我们一周后就能得到考试成绩。", english: "We'll get the exam results in a week." },
        { chinese: "我很担心。", english: "I'm so worried." },
        { chinese: "你需要休息一下。", english: "You need a rest." },
        { chinese: "我们去看电影吧。", english: "Let's go to the cinema." }
    ]
},
{
    id: 105,
    title: "Lesson 105 - Full of mistakes",
    vocabulary: [
        { word: "spell", translation: "拼写", phonetic: "/spel/", example: "How do you spell 'intelligent'?" },
        { word: "intelligent", translation: "有才智的", phonetic: "/ɪnˈtelɪdʒənt/", example: "You are very intelligent." },
        { word: "mistake", translation: "错误", phonetic: "/mɪˈsteɪk/", example: "This exercise is full of mistakes." },
        { word: "present", translation: "礼物", phonetic: "/ˈpreznt/", example: "I want to give you a present." },
        { word: "dictionary", translation: "词典", phonetic: "/ˈdɪkʃənəri/", example: "Use a dictionary." },
        { word: "spell", translation: "拼写", phonetic: "/spel/", example: "How do you spell it?" },
        { word: "letter", translation: "字母", phonetic: "/ˈletər/", example: "Write the correct letters." },
        { word: "correct", translation: "正确的", phonetic: "/kəˈrekt/", example: "It's not correct." },
        { word: "excuse", translation: "借口", phonetic: "/ɪkˈskjuːs/", example: "That's no excuse!" }
    ],
    grammar: [
        { question: "This exercise is ___ of mistakes.", options: ["full", "filled", "filling", "fulling"], correct: 0, explanation: "full of 表示充满。" },
        { question: "How do you ___ 'intelligent'?", options: ["spell", "spells", "spelling", "spelled"], correct: 0, explanation: "do 后接动词原形。" },
        { question: "You are very ___.", options: ["intelligent", "intelligently", "intelligence", "intellect"], correct: 0, explanation: "intelligent 是形容词。" },
        { question: "I want to give you a ___.", options: ["present", "presents", "a present", "the present"], correct: 0, explanation: "a present 表示一份礼物。" },
        { question: "Use a ___.", options: ["dictionary", "dictionaries", "a dictionary", "the dictionary"], correct: 0, explanation: "a dictionary 表示一本词典。" },
        { question: "That's no ___!", options: ["excuse", "excuses", "excused", "excusing"], correct: 0, explanation: "excuse 是名词，借口。" },
        { question: "I'm going to give you a ___.", options: ["present", "presents", "a present", "the present"], correct: 0, explanation: "a present 一份礼物。" },
        { question: "It's a ___.", options: ["dictionary", "dictionaries", "a dictionary", "the dictionary"], correct: 0, explanation: "a dictionary 一本词典。" },
        { question: "How do you ___ it?", options: ["spell", "spells", "spelling", "spelled"], correct: 0, explanation: "do you spell 如何拼写。" },
        { question: "Full ___ mistakes.", options: ["of", "with", "in", "by"], correct: 0, explanation: "full of mistakes 充满错误。" },
        { question: "I want you ___ spell it correctly.", options: ["to", "for", "of", "in"], correct: 0, explanation: "want sb to do sth 固定句型。" },
        { question: "You must spell it ___.", options: ["correctly", "correct", "correction", "correcting"], correct: 0, explanation: "副词 correctly 修饰动词 spell。" },
        { question: "There are ___ mistakes.", options: ["a lot of", "a lot", "lots", "lot of"], correct: 0, explanation: "a lot of 表示许多。" },
        { question: "I've ___ your exercises.", options: ["corrected", "correct", "corrects", "correcting"], correct: 0, explanation: "现在完成时用 corrected。" },
        { question: "That's not a ___ mistake.", options: ["good", "well", "better", "best"], correct: 0, explanation: "a good mistake 没有意义，实际上想说 a mistake。" }
    ],
    listening: {
        dialogue: "Teacher: What's the matter, Sandra? Sandra: I've got a lot of mistakes in my exercise. Teacher: Let me see. Yes, this exercise is full of mistakes. Sandra: I'm sorry. Teacher: That's no excuse! You must be more careful. How do you spell 'intelligent'? Sandra: I-N-T-E-L-L-I-G-E-N-T. Teacher: No, you've missed a letter. It's 'intelligent', not 'inteligent'. Sandra: Oh, I see. Teacher: You're an intelligent girl. You can do better. I'm going to give you a present. Here is a dictionary. Use it!",
        questions: [
            { question: "What is Sandra worried about?", options: ["Her spelling", "Her exam", "Her mistakes in the exercise", "Her pronunciation"], correct: 2 },
            { question: "What word did she spell wrong?", options: ["Intelligent", "Dictionary", "Mistake", "Exercise"], correct: 0 },
            { question: "What present did the teacher give Sandra?", options: ["A book", "A pen", "A dictionary", "A notebook"], correct: 2 }
        ]
    },
    translation: [
        { chinese: "怎么了，桑德拉？", english: "What's the matter, Sandra?" },
        { chinese: "我的练习里有很多错误。", english: "I've got a lot of mistakes in my exercise." },
        { chinese: "这个练习充满了错误。", english: "This exercise is full of mistakes." },
        { chinese: "那不是借口！", english: "That's no excuse!" },
        { chinese: "你必须更加仔细。", english: "You must be more careful." },
        { chinese: "你怎样拼写'intelligent'？", english: "How do you spell 'intelligent'?" },
        { chinese: "你漏了一个字母。", english: "You've missed a letter." },
        { chinese: "你是个聪明的女孩。你可以做得更好。", english: "You're an intelligent girl. You can do better." },
        { chinese: "我要送你一件礼物。这是一本词典。", english: "I'm going to give you a present. Here is a dictionary." },
        { chinese: "使用它！", english: "Use it!" }
    ]
},
{
    id: 107,
    title: "Lesson 107 - It's too small.",
    vocabulary: [
        { word: "madam", translation: "夫人", phonetic: "/ˈmædəm/", example: "Can I help you, madam?" },
        { word: "smart", translation: "漂亮的", phonetic: "/smɑːt/", example: "That's a smart dress." },
        { word: "suit", translation: "适合", phonetic: "/suːt/", example: "The dress doesn't suit me." },
        { word: "pretty", translation: "漂亮的", phonetic: "/ˈprɪti/", example: "It's a pretty dress." },
        { word: "colour", translation: "颜色", phonetic: "/ˈkʌlər/", example: "The colour is too dark." },
        { word: "size", translation: "尺码", phonetic: "/saɪz/", example: "I want a bigger size." },
        { word: "large", translation: "大的", phonetic: "/lɑːrdʒ/", example: "Do you have a larger size?" },
        { word: "suit", translation: "适合", phonetic: "/suːt/", example: "Does it suit me?" }
    ],
    grammar: [
        { question: "Can I help you, ___?", options: ["madam", "madams", "a madam", "the madam"], correct: 0, explanation: "madam 是尊称，表示女士。" },
        { question: "That's a ___ dress.", options: ["smart", "smartly", "smartness", "smarts"], correct: 0, explanation: "smart 是形容词，漂亮的。" },
        { question: "The dress doesn't ___ me.", options: ["suit", "suits", "suiting", "suited"], correct: 0, explanation: "doesn't 后接动词原形。" },
        { question: "It's too ___.", options: ["small", "smallly", "smallness", "smalls"], correct: 0, explanation: "too small 太小了。" },
        { question: "The colour is too ___.", options: ["dark", "darkly", "darkness", "darks"], correct: 0, explanation: "dark 是形容词，表示深色。" },
        { question: "Do you have a ___ size?", options: ["larger", "large", "largest", "largely"], correct: 0, explanation: "比较级 larger 表示更大的。" },
        { question: "Does it ___ me?", options: ["suit", "suits", "suiting", "suited"], correct: 0, explanation: "Does 后接动词原形。" },
        { question: "It's a ___ dress.", options: ["pretty", "prettily", "prettiness", "prettier"], correct: 0, explanation: "pretty 是形容词，漂亮的。" },
        { question: "It's too small ___ me.", options: ["for", "to", "of", "with"], correct: 0, explanation: "too...for sb 对某人来说太..." },
        { question: "I want to ___ it.", options: ["try", "tries", "trying", "tried"], correct: 0, explanation: "want to 后接动词原形。" },
        { question: "I want to try it ___.", options: ["on", "out", "in", "up"], correct: 0, explanation: "try on 表示试穿。" },
        { question: "I like the ___ but not the size.", options: ["colour", "colors", "colourful", "colouring"], correct: 0, explanation: "colour 表示颜色。" },
        { question: "It looks good ___ me.", options: ["on", "in", "at", "for"], correct: 0, explanation: "look good on sb 某人穿起来好看。" },
        { question: "This is the ___ size.", options: ["largest", "large", "larger", "largely"], correct: 0, explanation: "最高级 largest 表示最大的。" },
        { question: "I'm afraid it's too ___ for me.", options: ["small", "smallly", "smallness", "smalls"], correct: 0, explanation: "too small 太小了。" }
    ],
    listening: {
        dialogue: "Shop Assistant: Can I help you, madam? Customer: Yes, please. I like that dress. Shop Assistant: Which one? The blue one? Customer: No, the red one. Shop Assistant: That's a smart dress. What size do you want? Customer: Size 10. Shop Assistant: Here you are. Customer: It's too small. Do you have a larger size? Shop Assistant: I'm sorry. We don't have a larger one. Customer: That's a pity. I like the colour. But the dress is too small for me. Shop Assistant: What about this green dress? It's bigger. Customer: That's a nice colour. But it doesn't suit me. I'll look around. Thank you.",
        questions: [
            { question: "Which dress does the customer like?", options: ["The blue one", "The red one", "The green one", "The yellow one"], correct: 1 },
            { question: "What size does the customer want?", options: ["Size 8", "Size 10", "Size 12", "Size 14"], correct: 1 },
            { question: "Why doesn't the customer buy the dress?", options: ["It's too expensive", "It's too small and no larger size", "She doesn't like the colour", "It's too big"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "需要我帮忙吗，夫人？", english: "Can I help you, madam?" },
        { chinese: "是的。我喜欢那件连衣裙。", english: "Yes, please. I like that dress." },
        { chinese: "哪一件？蓝色的那件吗？", english: "Which one? The blue one?" },
        { chinese: "不，红色的那件。", english: "No, the red one." },
        { chinese: "那是一件漂亮的连衣裙。", english: "That's a smart dress." },
        { chinese: "你想要什么尺码？", english: "What size do you want?" },
        { chinese: "10号。", english: "Size 10." },
        { chinese: "给你。", english: "Here you are." },
        { chinese: "太小了。你有大一点的吗？", english: "It's too small. Do you have a larger size?" },
        { chinese: "对不起。我们没有更大的了。", english: "I'm sorry. We don't have a larger one." },
        { chinese: "我喜欢这颜色，但对我来说太小了。", english: "I like the colour. But the dress is too small for me." }
    ]
},
{
    id: 109,
    title: "Lesson 109 - A good idea",
    vocabulary: [
        { word: "idea", translation: "主意", phonetic: "/aɪˈdɪə/", example: "That's a good idea." },
        { word: "less", translation: "较少", phonetic: "/les/", example: "A little less." },
        { word: "fewer", translation: "较少的", phonetic: "/ˈfjuːər/", example: "I want fewer biscuits." },
        { word: "smoke", translation: "吸烟", phonetic: "/sməʊk/", example: "Do you smoke?" },
        { word: "biscuit", translation: "饼干", phonetic: "/ˈbɪskɪt/", example: "I want some biscuits." },
        { word: "wine", translation: "葡萄酒", phonetic: "/waɪn/", example: "A little more wine." },
        { word: "cheese", translation: "奶酪", phonetic: "/tʃiːz/", example: "I want some cheese." },
        { word: "piece", translation: "块", phonetic: "/piːs/", example: "A piece of cheese." },
        { word: "more", translation: "更多", phonetic: "/mɔːr/", example: "A little more." },
        { word: "a few", translation: "几个", phonetic: "/ə fjuː/", example: "A few biscuits." },
        { word: "a little", translation: "少量", phonetic: "/ə ˈlɪtl/", example: "A little wine." }
    ],
    grammar: [
        { question: "That's a good ___.", options: ["idea", "ideas", "a idea", "an idea"], correct: 0, explanation: "idea 是可数名词。" },
        { question: "I want ___ biscuits.", options: ["fewer", "less", "little", "much"], correct: 0, explanation: "biscuits 可数复数用 fewer。" },
        { question: "I want ___ wine.", options: ["less", "fewer", "few", "little"], correct: 0, explanation: "wine 不可数用 less。" },
        { question: "A little ___, please.", options: ["more", "many", "much", "most"], correct: 0, explanation: "a little more 再多一点。" },
        { question: "A ___ of cheese, please.", options: ["piece", "pieces", "a piece", "the piece"], correct: 0, explanation: "a piece of 表示一块。" },
        { question: "Do you ___?", options: ["smoke", "smokes", "smoking", "smoked"], correct: 0, explanation: "Do you smoke? 你抽烟吗？" },
        { question: "I want some ___.", options: ["biscuits", "biscuit", "a biscuit", "an biscuit"], correct: 0, explanation: "some 后接可数名词复数。" },
        { question: "I want ___ cheese.", options: ["some", "any", "a", "an"], correct: 0, explanation: "some cheese 表示一些奶酪。" },
        { question: "I'd like ___ more wine.", options: ["a little", "a few", "few", "little"], correct: 0, explanation: "wine 不可数用 a little。" },
        { question: "I'd like ___ fewer biscuits.", options: ["a few", "a little", "few", "little"], correct: 0, explanation: "biscuits 可数用 a few。" },
        { question: "That's not a good ___.", options: ["idea", "ideas", "a idea", "an idea"], correct: 0, explanation: "not a good idea 不是好主意。" },
        { question: "I'd like ___ more.", options: ["some", "any", "a", "an"], correct: 0, explanation: "some more 再多一些。" },
        { question: "Smoking is bad ___ you.", options: ["for", "to", "of", "with"], correct: 0, explanation: "bad for you 对你有害。" },
        { question: "You should smoke ___.", options: ["less", "fewer", "little", "few"], correct: 0, explanation: "smoke 当作量词时表达'抽烟'不可数，用 less。" },
        { question: "I want a ___ of cheese.", options: ["piece", "pieces", "a piece", "the piece"], correct: 0, explanation: "a piece of cheese 一块奶酪。" }
    ],
    listening: {
        dialogue: "Mary: Would you like some more coffee? Peter: Yes, please. Mary: Do you want any more? Peter: Just a little, please. Mary: Would you like some more biscuits? Peter: Yes, please. A few, please. Mary: Would you like a piece of cheese? Peter: No, thank you. I've had enough. Mary: Do you smoke? Peter: Yes, I do. Mary: You should smoke less. It's bad for your health. Peter: I know. I'll try. Mary: And you should eat fewer biscuits. Peter: That's a good idea. Thank you for the advice.",
        questions: [
            { question: "How much more coffee does Peter want?", options: ["A lot", "A little", "None", "A cup"], correct: 1 },
            { question: "How many more biscuits does Peter want?", options: ["A few", "A lot", "None", "One"], correct: 0 },
            { question: "What advice does Mary give Peter?", options: ["Eat more", "Smoke less and eat fewer biscuits", "Drink less coffee", "Exercise more"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "你还要再来点咖啡吗？", english: "Would you like some more coffee?" },
        { chinese: "好的，谢谢。", english: "Yes, please." },
        { chinese: "你还要再要些吗？", english: "Do you want any more?" },
        { chinese: "只要一点点。", english: "Just a little, please." },
        { chinese: "你要再吃些饼干吗？", english: "Would you like some more biscuits?" },
        { chinese: "好的，来几块。", english: "Yes, please. A few, please." },
        { chinese: "你要来一块奶酪吗？", english: "Would you like a piece of cheese?" },
        { chinese: "不，谢谢。我已经够了。", english: "No, thank you. I've had enough." },
        { chinese: "你抽烟吗？", english: "Do you smoke?" },
        { chinese: "你应该少抽烟。", english: "You should smoke less." },
        { chinese: "你也应该少吃饼干。", english: "And you should eat fewer biscuits." },
        { chinese: "好主意。", english: "That's a good idea." }
    ]
},
{
    id: 111,
    title: "Lesson 111 - The most expensive model",
    vocabulary: [
        { word: "model", translation: "型号", phonetic: "/ˈmɒdl/", example: "This model is very good." },
        { word: "afford", translation: "买得起", phonetic: "/əˈfɔːrd/", example: "I can't afford it." },
        { word: "deposit", translation: "首付", phonetic: "/dɪˈpɒzɪt/", example: "I can pay a deposit." },
        { word: "instalment", translation: "分期付款", phonetic: "/ɪnˈstɔːlmənt/", example: "I'll pay by instalments." },
        { word: "millionaire", translation: "百万富翁", phonetic: "/ˌmɪljəˈneər/", example: "He's a millionaire." },
        { word: "television", translation: "电视机", phonetic: "/ˈtelɪvɪʒn/", example: "I want a new television." },
        { word: "cheap", translation: "便宜的", phonetic: "/tʃiːp/", example: "It's very cheap." },
        { word: "expensive", translation: "昂贵的", phonetic: "/ɪkˈspensɪv/", example: "It's too expensive." },
        { word: "price", translation: "价格", phonetic: "/praɪs/", example: "Can you afford the price?" }
    ],
    grammar: [
        { question: "This model is very ___.", options: ["good", "well", "better", "best"], correct: 0, explanation: "good 是形容词作表语。" },
        { question: "I can't ___ it.", options: ["afford", "affords", "affording", "afforded"], correct: 0, explanation: "can't 后接动词原形。" },
        { question: "I can pay a ___.", options: ["deposit", "deposits", "a deposit", "the deposit"], correct: 0, explanation: "a deposit 表示一笔首付。" },
        { question: "I'll pay by ___.", options: ["instalments", "instalment", "a instalment", "an instalment"], correct: 0, explanation: "by instalments 通过分期付款。" },
        { question: "He's a ___.", options: ["millionaire", "millionaires", "a millionaire", "the millionaire"], correct: 0, explanation: "a millionaire 表示百万富翁。" },
        { question: "The most ___ model in the shop.", options: ["expensive", "expensively", "expensiveness", "expense"], correct: 0, explanation: "expensive 是形容词。" },
        { question: "It's too ___.", options: ["expensive", "expensively", "expensiveness", "expense"], correct: 0, explanation: "too expensive 太贵了。" },
        { question: "It's ___ cheaper.", options: ["much", "more", "many", "most"], correct: 0, explanation: "much 修饰比较级 cheaper。" },
        { question: "Can you afford the ___?", options: ["price", "prices", "a price", "the price"], correct: 0, explanation: "the price 表示价格。" },
        { question: "It's the most ___ model.", options: ["expensive", "expensively", "expensiveness", "expense"], correct: 0, explanation: "最高级 the most expensive。" },
        { question: "It's the ___ expensive in the shop.", options: ["least", "less", "more", "most"], correct: 0, explanation: "the least expensive 最便宜的。" },
        { question: "This model is ___ than that one.", options: ["cheaper", "cheap", "cheapest", "cheaply"], correct: 0, explanation: "比较级 cheaper than。" },
        { question: "How ___ does it cost?", options: ["much", "many", "more", "most"], correct: 0, explanation: "询问价格用 How much。" },
        { question: "That's too ___ for me.", options: ["expensive", "expensively", "expensiveness", "expense"], correct: 0, explanation: "too expensive 表示太贵。" },
        { question: "I like this model ___.", options: ["best", "better", "good", "well"], correct: 0, explanation: "like best 表示最喜欢。" }
    ],
    listening: {
        dialogue: "Mr. Frith: I like this television. It's a very good model. Mrs. Frith: How much does it cost? Mr. Frith: It's £500. Mrs. Frith: That's too expensive for us. We can't afford it. Mr. Frith: But this is the most expensive model in the shop. There is a cheaper model. Mrs. Frith: How much is that? Mr. Frith: It's £300. Mrs. Frith: We can't afford that either. Mr. Frith: What about this one? It's the least expensive. Mrs. Frith: How much? Mr. Frith: Only £200. Mrs. Frith: We can afford that. Can we pay by instalments? Mr. Frith: Yes. We can pay a deposit of £50 and then 14 monthly instalments.",
        questions: [
            { question: "How much is the most expensive model?", options: ["£200", "£300", "£400", "£500"], correct: 3 },
            { question: "How much is the least expensive model?", options: ["£100", "£200", "£300", "£400"], correct: 1 },
            { question: "How do they decide to pay?", options: ["Cash", "By credit card", "By instalments", "By cheque"], correct: 2 }
        ]
    },
    translation: [
        { chinese: "我喜欢这台电视机。它是个很好的型号。", english: "I like this television. It's a very good model." },
        { chinese: "它多少钱？", english: "How much does it cost?" },
        { chinese: "500英镑。", english: "It's £500." },
        { chinese: "那对我们来说太贵了。我们买不起。", english: "That's too expensive for us. We can't afford it." },
        { chinese: "但这是店里最贵的型号。", english: "But this is the most expensive model in the shop." },
        { chinese: "有更便宜的型号。", english: "There is a cheaper model." },
        { chinese: "那个多少钱？300英镑。", english: "How much is that? It's £300." },
        { chinese: "那我们也买不起。", english: "We can't afford that either." },
        { chinese: "这台怎么样？这是最便宜的。", english: "What about this one? It's the least expensive." },
        { chinese: "我们可以分期付款吗？", english: "Can we pay by instalments?" },
        { chinese: "我们可以付50英镑首付，然后每个月付14次分期付款。", english: "We can pay a deposit of £50 and then 14 monthly instalments." }
    ]
},
{
    id: 113,
    title: "Lesson 113 - Small change",
    vocabulary: [
        { word: "conductor", translation: "售票员", phonetic: "/kənˈdʌktər/", example: "The bus conductor came." },
        { word: "fare", translation: "车票", phonetic: "/feər/", example: "Fares, please!" },
        { word: "change", translation: "零钱", phonetic: "/tʃeɪndʒ/", example: "I have no small change." },
        { word: "note", translation: "纸币", phonetic: "/nəʊt/", example: "I can only give you a note." },
        { word: "passenger", translation: "乘客", phonetic: "/ˈpæsɪndʒər/", example: "The passengers are on the bus." },
        { word: "none", translation: "没有一个", phonetic: "/nʌn/", example: "I have none." },
        { word: "tramp", translation: "流浪汉", phonetic: "/træmp/", example: "The tramp has some small change." },
        { word: "except", translation: "除了", phonetic: "/ɪkˈsept/", example: "Everyone gave the conductor a pound note except me." }
    ],
    grammar: [
        { question: "Fares, ___!", options: ["please", "pls", "thank", "thanks"], correct: 0, explanation: "Fares, please! 买票了！" },
        { question: "I have no small ___.", options: ["change", "changes", "a change", "the change"], correct: 0, explanation: "change 不可数，零钱。" },
        { question: "I can only give you a ___.", options: ["note", "notes", "a note", "the note"], correct: 0, explanation: "a note 表示一张纸币。" },
        { question: "Conductor: Fares, please! Passengers: Here is my ___.", options: ["fare", "fares", "a fare", "the fare"], correct: 0, explanation: "fare 表示车费。" },
        { question: "I've got no small ___.", options: ["change", "changes", "a change", "the change"], correct: 0, explanation: "no small change 没有零钱。" },
        { question: "___ gave a pound note.", options: ["Everyone", "Every one", "Anyone", "Someone"], correct: 0, explanation: "everyone 表示每个人。" },
        { question: "I can't change a ___ note.", options: ["ten-pound", "ten pounds", "ten pound", "ten-pounds"], correct: 0, explanation: "复合形容词 ten-pound。" },
        { question: "I haven't got any small ___.", options: ["change", "changes", "a change", "the change"], correct: 0, explanation: "any small change 任何零钱。" },
        { question: "None of us has any ___.", options: ["change", "changes", "a change", "the change"], correct: 0, explanation: "no change 没有零钱。" },
        { question: "So have ___!", options: ["I", "me", "my", "mine"], correct: 0, explanation: "So have I! 我也是的。" },
        { question: "I can't change that ___.", options: ["note", "notes", "a note", "the note"], correct: 0, explanation: "that note 那张钞票。" },
        { question: "Can you ___ a ten-pound note?", options: ["change", "changes", "changing", "changed"], correct: 0, explanation: "can 后接动词原形。" },
        { question: "The tramp had some small ___.", options: ["change", "changes", "a change", "the change"], correct: 0, explanation: "change 不可数。" },
        { question: "I'm very sorry. I've got ___.", options: ["none", "no", "not", "nothing"], correct: 0, explanation: " none 代词，表示一个也没有。" },
        { question: "Fares, please! Here is my ___.", options: ["fare", "fares", "a fare", "the fare"], correct: 0, explanation: "my fare 我的车费。" }
    ],
    listening: {
        dialogue: "Conductor: Fares, please! Man: Trafalgar Square, please. Conductor: I'm sorry. I can't change a ten-pound note. Haven't you got any small change? Man: I've got no small change. Conductor: I'm very sorry. I've got none. Man: I'll ask some of the passengers. Passengers: Here is my fare. I've got some small change. Conductor: Have you any small change? Passenger 2: I've got some. Conductor: So have I! Thank you. Everyone gave me their fares. Except the tramp at the back. He has some small change but he doesn't want to pay!",
        questions: [
            { question: "Why can't the man pay for the fare?", options: ["He has no money", "He only has a ten-pound note", "He lost his wallet", "He forgot his money"], correct: 1 },
            { question: "Does the conductor have small change?", options: ["Yes", "No, he has none", "A little", "Not mentioned"], correct: 1 },
            { question: "Who finally has small change?", options: ["The conductor", "The man's friend", "Other passengers and the conductor", "No one"], correct: 2 }
        ]
    },
    translation: [
        { chinese: "买票了，请买票！", english: "Fares, please!" },
        { chinese: "请买到特拉法加广场。", english: "Trafalgar Square, please." },
        { chinese: "对不起，我找不开一张十英镑的钞票。", english: "I'm sorry. I can't change a ten-pound note." },
        { chinese: "你没有零钱吗？", english: "Haven't you got any small change?" },
        { chinese: "我没有零钱。", english: "I've got no small change." },
        { chinese: "我很抱歉。我也没有零钱。", english: "I'm very sorry. I've got none." },
        { chinese: "我去问一些乘客。", english: "I'll ask some of the passengers." },
        { chinese: "这是我付的车费。", english: "Here is my fare." },
        { chinese: "我有些零钱。", english: "I've got some small change." },
        { chinese: "我也有了！谢谢你。", english: "So have I! Thank you." },
        { chinese: "除了坐在后面的那个流浪汉，每个人都付了车费。", english: "Everyone gave me their fares. Except the tramp at the back." }
    ]
},
{
    id: 115,
    title: "Lesson 115 - Knock, knock!",
    vocabulary: [
        { word: "knock", translation: "敲", phonetic: "/nɒk/", example: "Knock at the door." },
        { word: "anyone", translation: "任何人", phonetic: "/ˈeniwʌn/", example: "Is there anyone at home?" },
        { word: "everything", translation: "一切事物", phonetic: "/ˈevriθɪŋ/", example: "Is everything OK?" },
        { word: "quiet", translation: "安静的", phonetic: "/ˈkwaɪət/", example: "Be quiet!" },
        { word: "impossible", translation: "不可能的", phonetic: "/ɪmˈpɒsəbl/", example: "It's impossible." },
        { word: "invite", translation: "邀请", phonetic: "/ɪnˈvaɪt/", example: "I invited them." },
        { word: "joke", translation: "玩笑", phonetic: "/dʒəʊk/", example: "It's just a joke." },
        { word: "lemonade", translation: "柠檬水", phonetic: "/ˌleməˈneɪd/", example: "I'm making some lemonade." }
    ],
    grammar: [
        { question: "Knock at the ___.", options: ["door", "doors", "a door", "the door"], correct: 0, explanation: "the door 指门。" },
        { question: "Is there ___ at home?", options: ["anyone", "someone", "everyone", "no one"], correct: 0, explanation: "疑问句用 anyone。" },
        { question: "Is ___ OK?", options: ["everything", "something", "anything", "nothing"], correct: 0, explanation: "everything 表示一切。" },
        { question: "Be ___!", options: ["quiet", "quietly", "quietness", "quieter"], correct: 0, explanation: "be quiet 是祈使句，安静。" },
        { question: "It's ___.", options: ["impossible", "possibly", "possible", "impossibly"], correct: 0, explanation: "impossible 是形容词，不可能的。" },
        { question: "I ___ them.", options: ["invited", "invite", "invites", "inviting"], correct: 0, explanation: "过去时用 invited。" },
        { question: "It's just a ___.", options: ["joke", "jokes", "a joke", "the joke"], correct: 0, explanation: "a joke 表示一个玩笑。" },
        { question: "I'm making some ___.", options: ["lemonade", "lemonades", "a lemonade", "an lemonade"], correct: 0, explanation: "lemonade 不可数。" },
        { question: "Everything is very ___.", options: ["quiet", "quietly", "quietness", "quieter"], correct: 0, explanation: "quiet 是形容词作表语。" },
        { question: "Is there anyone ___?", options: ["in", "at home", "inside", "out"], correct: 1, explanation: "at home 表示在家。" },
        { question: "There is ___ at home.", options: ["no one", "anyone", "someone", "everyone"], correct: 0, explanation: "no one 表示没有人。" },
        { question: "It's ___ joke.", options: ["just a", "a just", "just the", "just an"], correct: 0, explanation: "just a joke 只是一个玩笑。" },
        { question: "I've ___ some lemonade.", options: ["made", "make", "makes", "making"], correct: 0, explanation: "现在完成时用 made。" },
        { question: "Can you ___ the door?", options: ["knock at", "knock", "knocking at", "knocked at"], correct: 0, explanation: "knock at the door 敲门。" },
        { question: "___ quiet, please!", options: ["Be", "Is", "Are", "Am"], correct: 0, explanation: "祈使句用动词原形 Be。" }
    ],
    listening: {
        dialogue: "Knock, knock! Is there anyone at home? I'm making some lemonade. Let's have a drink. Everything is very quiet. Is there anyone at home? I've knocked at the door. I've invited my friends. There is no one at home. It's a joke! They've all gone out. Be quiet! I can hear someone. It's impossible. I've looked everywhere. There is no one at home. Let's go in and have a lemonade. OK. It's just a joke. Everyone is hiding inside! Surprise!",
        questions: [
            { question: "What is the person making?", options: ["Tea", "Coffee", "Lemonade", "Juice"], correct: 2 },
            { question: "Is there anyone at home?", options: ["Yes", "No, it seems empty", "Not sure", "Maybe"], correct: 1 },
            { question: "What is the joke?", options: ["Everyone is hiding inside", "No one came", "The door is locked", "The lemonade is gone"], correct: 0 }
        ]
    },
    translation: [
        { chinese: "咚咚咚！有人在家吗？", english: "Knock, knock! Is there anyone at home?" },
        { chinese: "我正在做些柠檬水。", english: "I'm making some lemonade." },
        { chinese: "我们喝一杯吧。", english: "Let's have a drink." },
        { chinese: "一切都很安静。", english: "Everything is very quiet." },
        { chinese: "我敲门了。", english: "I've knocked at the door." },
        { chinese: "我邀请了朋友们。", english: "I've invited my friends." },
        { chinese: "家里没有人。", english: "There is no one at home." },
        { chinese: "只是个玩笑。大家都在里面藏着！", english: "It's just a joke. Everyone is hiding inside!" }
    ]
},
{
    id: 117,
    title: "Lesson 117 - Tommy's breakfast",
    vocabulary: [
        { word: "dining room", translation: "餐厅", phonetic: "/ˈdaɪnɪŋ ruːm/", example: "We were in the dining room." },
        { word: "coin", translation: "硬币", phonetic: "/kɔɪn/", example: "He swallowed a coin." },
        { word: "swallow", translation: "吞下", phonetic: "/ˈswɒləʊ/", example: "He swallowed a coin." },
        { word: "later", translation: "后来", phonetic: "/ˈleɪtər/", example: "Later that morning." },
        { word: "toilet", translation: "厕所", phonetic: "/ˈtɔɪlət/", example: "He went to the toilet." },
        { word: "ring", translation: "打电话", phonetic: "/rɪŋ/", example: "I rang the doctor." },
        { word: "surprise", translation: "惊讶", phonetic: "/sərˈpraɪz/", example: "What a surprise!" },
        { word: "change", translation: "变化", phonetic: "/tʃeɪndʒ/", example: "We didn't have any change." }
    ],
    grammar: [
        { question: "We were ___ the dining room.", options: ["in", "on", "at", "into"], correct: 0, explanation: "in the dining room 在餐厅。" },
        { question: "He ___ a coin.", options: ["swallowed", "swallow", "swallows", "swallowing"], correct: 0, explanation: "过去时用 swallowed。" },
        { question: "Later ___ morning.", options: ["that", "this", "the", "a"], correct: 0, explanation: "that morning 那天早上。" },
        { question: "I ___ the doctor.", options: ["rang", "ring", "rings", "ringing"], correct: 0, explanation: "过去时用 rang。" },
        { question: "What a ___!", options: ["surprise", "surprised", "surprising", "surprises"], correct: 0, explanation: "What a surprise! 真让人惊讶。" },
        { question: "We didn't have any ___.", options: ["change", "changes", "a change", "the change"], correct: 0, explanation: "change 不可数。" },
        { question: "When my husband ___ home.", options: ["was", "were", "is", "are"], correct: 0, explanation: "过去时 was home 在家。" },
        { question: "Tommy was ___ breakfast.", options: ["at", "in", "on", "having"], correct: 0, explanation: "at breakfast 在吃早餐。" },
        { question: "He was eating a ___ of bread.", options: ["piece", "pieces", "a piece", "the piece"], correct: 0, explanation: "a piece of bread 一片面包。" },
        { question: "He ___ it up.", options: ["picked", "pick", "picks", "picking"], correct: 0, explanation: "过去时 picked up 捡起。" },
        { question: "He put it ___ his mouth.", options: ["into", "in", "on", "at"], correct: 0, explanation: "into his mouth 放进嘴里。" },
        { question: "He gave it ___ me.", options: ["back", "to", "in", "out"], correct: 0, explanation: "gave it back to me 把它还给我。" },
        { question: "I looked ___ it carefully.", options: ["at", "in", "on", "for"], correct: 0, explanation: "look at 看着。" },
        { question: "It was a ___ coin!", options: ["German", "Germany", "German's", "Germans"], correct: 0, explanation: "German 德国的。" },
        { question: "We rang the ___.", options: ["doctor", "doctors", "a doctor", "the doctors"], correct: 0, explanation: "the doctor 表示医生。" }
    ],
    listening: {
        dialogue: "Mrs. Richards: When my husband was at home, Tommy was at breakfast. He was eating a piece of bread. He swallowed a coin! Mr. Richards: What coin did he swallow? Mrs. Richards: A German coin. It was very old. Mr. Richards: Did he have any change? Mrs. Richards: Yes, he had some. Later that morning, Tommy went to the toilet. He picked up the coin and put it into his mouth. He swallowed it. I rang the doctor. The doctor said, 'Don't worry. He'll be fine.' What a surprise! Later, Tommy gave me the coin back. I looked at it carefully. It was a German coin. It was very old and valuable.",
        questions: [
            { question: "What did Tommy swallow?", options: ["A piece of bread", "A coin", "A button", "A key"], correct: 1 },
            { question: "What nationality was the coin?", options: ["British", "French", "German", "American"], correct: 2 },
            { question: "What did Tommy do with the coin later?", options: ["He kept it", "He gave it back", "He lost it", "He spent it"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "汤米正在吃早餐。", english: "Tommy was at breakfast." },
        { chinese: "他正在吃一片面包。", english: "He was eating a piece of bread." },
        { chinese: "他吞下了一枚硬币！", english: "He swallowed a coin!" },
        { chinese: "他吞下了一枚什么硬币？", english: "What coin did he swallow?" },
        { chinese: "一枚德国硬币。它很旧了。", english: "A German coin. It was very old." },
        { chinese: "那天上午晚些时候，汤米去了厕所。", english: "Later that morning, Tommy went to the toilet." },
        { chinese: "他捡起硬币放进了嘴里。", english: "He picked up the coin and put it into his mouth." },
        { chinese: "他把它吞了下去。", english: "He swallowed it." },
        { chinese: "我给医生打了电话。", english: "I rang the doctor." },
        { chinese: "后来汤米把硬币还给了我。", english: "Later, Tommy gave me the coin back." },
        { chinese: "我仔细看了看。那是一枚德国硬币。很古老很珍贵。", english: "I looked at it carefully. It was a German coin. It was very old and valuable." }
    ]
},
{
    id: 119,
    title: "Lesson 119 - A true story",
    vocabulary: [
        { word: "story", translation: "故事", phonetic: "/ˈstɔːri/", example: "Let me tell you a story." },
        { word: "true", translation: "真实的", phonetic: "/truː/", example: "It's a true story." },
        { word: "thief", translation: "贼", phonetic: "/θiːf/", example: "The thief got into the house." },
        { word: "enter", translation: "进入", phonetic: "/ˈentər/", example: "The thief entered the house." },
        { word: "torch", translation: "手电筒", phonetic: "/tɔːrtʃ/", example: "He took a torch." },
        { word: "dark", translation: "黑暗的", phonetic: "/dɑːrk/", example: "It was very dark." },
        { word: "voice", translation: "声音", phonetic: "/vɔɪs/", example: "I heard a voice." },
        { word: "parrot", translation: "鹦鹉", phonetic: "/ˈpærət/", example: "The parrot said, 'What's up?'" },
        { word: "fur", translation: "毛皮", phonetic: "/fɜːr/", example: "The dog has thick fur." },
        { word: "upstairs", translation: "楼上", phonetic: "/ˌʌpˈsteəz/", example: "He went upstairs." }
    ],
    grammar: [
        { question: "Let me tell you a ___.", options: ["story", "stories", "a story", "the story"], correct: 0, explanation: "a story 表示一个故事。" },
        { question: "It's a ___ story.", options: ["true", "truly", "truth", "trueness"], correct: 0, explanation: "true 是形容词，真实的。" },
        { question: "The thief ___ into the house.", options: ["got", "get", "gets", "getting"], correct: 0, explanation: "过去时用 got。" },
        { question: "He took a ___.", options: ["torch", "torches", "a torch", "the torch"], correct: 0, explanation: "a torch 表示一个手电筒。" },
        { question: "It was very ___.", options: ["dark", "darkly", "darkness", "darks"], correct: 0, explanation: "dark 是形容词。" },
        { question: "I heard a ___.", options: ["voice", "voices", "a voice", "the voice"], correct: 0, explanation: "a voice 表示一个声音。" },
        { question: "The parrot ___ something.", options: ["said", "say", "says", "saying"], correct: 0, explanation: "过去时用 said。" },
        { question: "He ___ the dog.", options: ["called", "call", "calls", "calling"], correct: 0, explanation: "过去时用 called。" },
        { question: "He went ___.", options: ["upstairs", "upstair", "up stair", "up stairs"], correct: 0, explanation: "upstairs 副词，到楼上。" },
        { question: "The parrot ___ 'What's up?'", options: ["said", "says", "say", "saying"], correct: 0, explanation: "过去时用 said。" },
        { question: "It was a ___ story.", options: ["funny", "fun", "funnily", "funniness"], correct: 0, explanation: "funny 是形容词。" },
        { question: "The thief got into the house ___ a ladder.", options: ["with", "through", "by", "on"], correct: 0, explanation: "with a ladder 用梯子。" },
        { question: "The dog ___ the thief.", options: ["saw", "see", "sees", "seeing"], correct: 0, explanation: "过去时用 saw。" },
        { question: "The thief thought it was the ___.", options: ["owner", "owner's", "owners", "a owner"], correct: 0, explanation: "the owner 房主。" },
        { question: "The parrot was very ___.", options: ["clever", "cleverly", "cleverness", "cleverer"], correct: 0, explanation: "clever 是形容词。" }
    ],
    listening: {
        dialogue: "Do you like stories? I'm going to tell you a true story. It happened to a friend of mine. One night, a thief got into his house. He went upstairs. It was very dark. He took a torch. He entered the bedroom. My friend's dog saw the thief. The dog started to bark. The thief was afraid. He called the dog by name. The dog stopped barking. Then a voice said, 'What's up?' The thief thought it was my friend. But it was only the parrot! The parrot had learned to say, 'What's up?' The thief ran away. It's a true story.",
        questions: [
            { question: "How did the thief enter the house?", options: ["Through the window", "By a ladder", "Through the back door", "Not mentioned"], correct: 1 },
            { question: "Who said 'What's up?'", options: ["The owner", "The dog", "The parrot", "The thief himself"], correct: 2 },
            { question: "What did the thief do after hearing the voice?", options: ["He hid", "He ran away", "He continued stealing", "He called the police"], correct: 1 }
        ]
    },
    translation: [
        { chinese: "你喜欢故事吗？我来讲个真实的故事。", english: "Do you like stories? I'm going to tell you a true story." },
        { chinese: "它发生在我朋友身上。", english: "It happened to a friend of mine." },
        { chinese: "一天晚上，一个小偷进了他的房子。", english: "One night, a thief got into his house." },
        { chinese: "他上了楼。", english: "He went upstairs." },
        { chinese: "天很黑。他拿了一个手电筒。", english: "It was very dark. He took a torch." },
        { chinese: "他走进了卧室。", english: "He entered the bedroom." },
        { chinese: "我朋友的狗看到了小偷，开始叫起来。", english: "My friend's dog saw the thief. The dog started to bark." },
        { chinese: "一个声音说：'怎么了？'", english: "Then a voice said, 'What's up?'" },
        { chinese: "小偷以为是我朋友。但那只是鹦鹉！", english: "The thief thought it was my friend. But it was only the parrot!" },
        { chinese: "小偷逃走了。", english: "The thief ran away." }
    ]
}

,
{
    id: 121,
    title: "Lesson 121 - The man in a hat",
    vocabulary: [
        { word: "customer", translation: "顾客", phonetic: "/ˈkʌstəmə/", example: "The customer is carrying a big bag." },
        { word: "forget", translation: "忘记", phonetic: "/fəˈɡet/", example: "Don't forget to take the medicine." },
        { word: "manager", translation: "经理", phonetic: "/ˈmænɪdʒə/", example: "The manager is standing behind the counter." },
        { word: "serve", translation: "服务，招待", phonetic: "/sɜːv/", example: "The shop assistant is serving a customer." },
        { word: "counter", translation: "柜台", phonetic: "/ˈkaʊntə/", example: "The woman is standing at the counter." },
        { word: "recognize", translation: "认出", phonetic: "/ˈrekəɡnaɪz/", example: "I recognize that man." },
        { word: "gentleman", translation: "先生，绅士", phonetic: "/ˈdʒentlmən/", example: "The gentleman is wearing a suit." },
        { word: "suit", translation: "西装", phonetic: "/suːt/", example: "He is wearing a blue suit." },
        { word: "wear", translation: "穿着", phonetic: "/weə/", example: "The gentleman is wearing a hat." },
        { word: "hat", translation: "帽子", phonetic: "/hæt/", example: "The man in a hat is carrying a suitcase." }
    ],
    grammar: [
        { question: "The customer ___ a big bag.", options: ["is carrying", "carry", "are carrying", "carries"], correct: 0, explanation: "现在进行时，主语是第三人称单数。" },
        { question: "I can't ___ the man's face.", options: ["looking", "see", "seeing", "to see"], correct: 1, explanation: "can't 后接动词原形。" },
        { question: "The man ___ a hat is my uncle.", options: ["in", "on", "with", "wear"], correct: 0, explanation: "in a hat 表示'戴帽子的'，介词短语作定语。" },
        { question: "Who is the man ___ the counter?", options: ["in", "on", "behind", "under"], correct: 2, explanation: "behind the counter 表示'在柜台后面'。" },
        { question: "I don't ___ him.", options: ["knows", "knowing", "know", "known"], correct: 2, explanation: "don't 后接动词原形。" },
        { question: "The shop assistant is ___ a customer.", options: ["serves", "served", "serving", "serve"], correct: 2, explanation: "现在进行时：is + 现在分词。" },
        { question: "He ___ a blue suit yesterday.", options: ["wears", "is wearing", "wore", "was wearing"], correct: 2, explanation: "yesterday 表示过去时间，用一般过去时。" },
        { question: "Please ___ the medicine three times a day.", options: ["take", "takes", "taking", "took"], correct: 0, explanation: "祈使句用动词原形。" },
        { question: "The gentleman ___ a suit is my boss.", options: ["in", "on", "with", "wearing"], correct: 3, explanation: "wearing a suit 是现在分词短语作定语。" },
        { question: "I ___ you before.", options: ["don't see", "didn't see", "haven't seen", "am not seeing"], correct: 2, explanation: "before 常与现在完成时连用。" },
        { question: "The customer ___ his credit card at home.", options: ["forget", "forgets", "forgot", "forgetting"], correct: 2, explanation: "描述过去发生的事，用一般过去时。" },
        { question: "I'm sorry, sir. Please ___ us.", options: ["excuse", "to excuse", "excusing", "excused"], correct: 0, explanation: "Please 后接动词原形表示请求。" },
        { question: "Who is the woman ___ a red dress?", options: ["in", "on", "at", "by"], correct: 0, explanation: "in a red dress 表示'穿着红裙子的'。" },
        { question: "Can you ___ the man?", options: ["recognizes", "recognizing", "recognize", "recognized"], correct: 2, explanation: "Can 后接动词原形。" },
        { question: "The shop ___ at 9 a.m. every day.", options: ["opens", "is opening", "opened", "was opening"], correct: 0, explanation: "every day 表示经常性动作，用一般现在时。" }
    ],
    listening: {
        dialogue: "A: I bought two expensive dictionaries here half an hour ago, but I forgot to take them with me.\nB: Who served you, sir?\nA: The lady who is standing behind the counter.\nB: Which books did you buy?\nA: The books which are on the counter.\nB: Did you serve this gentleman half an hour ago, Caroline? He says he's the man who bought these books.\nC: I can't remember. The man who I served was wearing a hat.\nA: Well, I'm the man who bought these books. And I wasn't wearing a hat!",
        questions: [
            { question: "What did the man buy?", options: ["Two cheap dictionaries", "Two expensive dictionaries", "Three books", "A hat"], correct: 1, explanation: "男士半小时前买了两本昂贵的词典。" },
            { question: "Who served the customer?", options: ["The shop assistant behind the counter", "The manager", "A gentleman", "Caroline"], correct: 3, explanation: "那位女士就是Caroline，她接待了这位顾客。" },
            { question: "Why couldn't Caroline remember the customer?", options: ["She was too busy", "The man was wearing a hat", "She didn't see his face clearly", "The shop was crowded"], correct: 2, explanation: "Caroline说'我接待的那个人戴了顶帽子'，所以她记不清了。" }
        ]
    },
    translation: [
        { chinese: "半小时前我在这里买了两个昂贵的词典。", english: "I bought two expensive dictionaries here half an hour ago." },
        { chinese: "但是我忘了拿走。", english: "But I forgot to take them with me." },
        { chinese: "先生，是谁接待您的？", english: "Who served you, sir?" },
        { chinese: "就是站在柜台后面的那位女士。", english: "The lady who is standing behind the counter." },
        { chinese: "您买了哪些书？", english: "Which books did you buy?" },
        { chinese: "就是柜台上的那些书。", english: "The books which are on the counter." },
        { chinese: "卡洛琳，半小时前你接待过这位先生吗？", english: "Did you serve this gentleman half an hour ago, Caroline?" },
        { chinese: "他说他就是买这些书的人。", english: "He says he's the man who bought these books." },
        { chinese: "我记不清了。", english: "I can't remember." },
        { chinese: "我接待的那个人当时戴着帽子。", english: "The man who I served was wearing a hat." },
        { chinese: "我就是买这些书的人。", english: "I'm the man who bought these books." },
        { chinese: "我当时没戴帽子！", english: "And I wasn't wearing a hat!" },
        { chinese: "你认识那个穿西装的男人吗？", english: "Do you know the man who is wearing a suit?" }
    ]
},
{
    id: 123,
    title: "Lesson 123 - A trip to Australia",
    vocabulary: [
        { word: "trip", translation: "旅行", phonetic: "/trɪp/", example: "I'm going on a trip to Australia." },
        { word: "travel", translation: "旅行", phonetic: "/ˈtrævl/", example: "I like to travel by plane." },
        { word: "offer", translation: "提供", phonetic: "/ˈɒfə/", example: "He offered me a cup of tea." },
        { word: "job", translation: "工作", phonetic: "/dʒɒb/", example: "I got a new job." },
        { word: "guess", translation: "猜", phonetic: "/ɡes/", example: "Can you guess who it is?" },
        { word: "grow", translation: "生长，种植", phonetic: "/ɡrəʊ/", example: "Trees grow very fast." },
        { word: "beard", translation: "胡须", phonetic: "/bɪəd/", example: "The man has a beard." },
        { word: "shave", translation: "刮胡子", phonetic: "/ʃeɪv/", example: "He shaves every morning." },
        { word: "during", translation: "在……期间", phonetic: "/ˈdjʊərɪŋ/", example: "During my trip, I took many photos." },
        { word: "offer", translation: "提供", phonetic: "/ˈɒfə/", example: "She offered to help me." }
    ],
    grammar: [
        { question: "This is a photograph ___ our village.", options: ["in", "of", "from", "at"], correct: 1, explanation: "a photograph of... 表示'……的照片'。" },
        { question: "I'm going on a trip ___ Australia.", options: ["in", "to", "at", "for"], correct: 1, explanation: "a trip to 表示'去……的旅行'。" },
        { question: "He offered me a cup ___ tea.", options: ["from", "in", "with", "of"], correct: 3, explanation: "a cup of tea 表示'一杯茶'。" },
        { question: "The man ___ is standing over there is my brother.", options: ["who", "which", "what", "where"], correct: 0, explanation: "who 引导定语从句，指代人。" },
        { question: "The book ___ I bought yesterday is very interesting.", options: ["who", "which", "what", "where"], correct: 1, explanation: "which 引导定语从句，指代物。" },
        { question: "I ___ my trip to Australia very much.", options: ["enjoy", "am enjoying", "enjoyed", "was enjoying"], correct: 2, explanation: "从语境看，旅行已经是过去的事，用一般过去时。" },
        { question: "Can you ___ who the man is?", options: ["to guess", "guessing", "guess", "guessed"], correct: 2, explanation: "Can 后接动词原形。" },
        { question: "While I was on holiday, I ___ many photos.", options: ["take", "takes", "took", "was taking"], correct: 2, explanation: "while I was on holiday 是过去的时间，用一般过去时。" },
        { question: "This is the man ___ I met in Australia.", options: ["which", "what", "who", "where"], correct: 2, explanation: "who 引导定语从句，在从句中作宾语。" },
        { question: "He ___ a beard when I saw him.", options: ["has", "is having", "had", "having"], correct: 2, explanation: "when I saw him 是过去的时间，用一般过去时。" },
        { question: "He doesn't look like his photo. He ___ a beard now.", options: ["has", "doesn't have", "had", "having"], correct: 1, explanation: "now 表示现在，描述当前状态用一般现在时。" },
        { question: "I ___ to Australia three times.", options: ["go", "went", "have been", "am going"], correct: 2, explanation: "three times 常与现在完成时连用，表示经历。" },
        { question: "Do you like ___ by plane?", options: ["travel", "travels", "travelling", "travelled"], correct: 2, explanation: "like doing 表示'喜欢做某事'。" },
        { question: "The trees ___ very tall now.", options: ["grow", "grew", "have grown", "are growing"], correct: 2, explanation: "现在完成时表示已经长高了，强调现状。" },
        { question: "He shaves ___ every morning.", options: ["him", "his", "himself", "he"], correct: 2, explanation: "shave oneself 表示'给自己刮胡子'，这里用反身代词。" }
    ],
    listening: {
        dialogue: "A: Look, this is a photograph I took during my trip to Australia.\nB: Let me see it. Who's this?\nA: That's the man I met during the trip.\nB: What does he do?\nA: He offered me a job.\nB: Really?\nA: Yes. He owns a travel company.\nB: What does he look like?\nA: He has a beard.\nB: Oh, I think I've seen him. He's the man who grew a beard during his trip around the world.\nA: That's right! He travelled around the world. And he grew a beard during the trip.",
        questions: [
            { question: "Where did the man go on a trip?", options: ["Europe", "Australia", "America", "Africa"], correct: 1, explanation: "对话中是去澳大利亚的旅行。" },
            { question: "What did the man with a beard offer?", options: ["A gift", "A job", "A car", "Money"], correct: 1, explanation: "这位留胡须的男士提供了一份工作。" },
            { question: "What does the man with a beard own?", options: ["A hotel", "A restaurant", "A travel company", "A shop"], correct: 2, explanation: "他拥有一家旅游公司。" }
        ]
    },
    translation: [
        { chinese: "这是我在澳大利亚旅行时拍的一张照片。", english: "This is a photograph I took during my trip to Australia." },
        { chinese: "这是我旅途中遇到的那个人。", english: "That's the man I met during the trip." },
        { chinese: "他给我提供了一份工作。", english: "He offered me a job." },
        { chinese: "他拥有一家旅游公司。", english: "He owns a travel company." },
        { chinese: "他长什么样？", english: "What does he look like?" },
        { chinese: "他留着胡须。", english: "He has a beard." },
        { chinese: "我好像见过他。", english: "I think I've seen him." },
        { chinese: "他就是那个环游世界时长出胡须的人。", english: "He's the man who grew a beard during his trip around the world." },
        { chinese: "他在旅途中长出了胡须。", english: "He grew a beard during the trip." },
        { chinese: "你猜猜他是谁？", english: "Can you guess who he is?" },
        { chinese: "他每天早上都刮胡子。", english: "He shaves every morning." },
        { chinese: "这张照片是去年拍的。", english: "This photograph was taken last year." }
    ]
},
{
    id: 125,
    title: "Lesson 125 - Tea for two",
    vocabulary: [
        { word: "water", translation: "浇水", phonetic: "/ˈwɔːtə/", example: "I need to water the garden." },
        { word: "terribly", translation: "非常", phonetic: "/ˈterəbli/", example: "I'm terribly sorry." },
        { word: "dry", translation: "干燥的", phonetic: "/draɪ/", example: "The weather is very dry." },
        { word: "mean", translation: "意思是；意味着", phonetic: "/miːn/", example: "What do you mean?" },
        { word: "surprise", translation: "惊奇，诧异", phonetic: "/səˈpraɪz/", example: "What a surprise!" },
        { word: "immediately", translation: "立即", phonetic: "/ɪˈmiːdiətli/", example: "I'll come immediately." },
        { word: "because", translation: "因为", phonetic: "/bɪˈkɒz/", example: "I'm thirsty because it's hot." },
        { word: "waste", translation: "浪费", phonetic: "/weɪst/", example: "Don't waste water." },
        { word: "pleasant", translation: "令人愉快的", phonetic: "/ˈpleznt/", example: "It's a pleasant day." }
    ],
    grammar: [
        { question: "It's ___ hot today.", options: ["terrible", "terribly", "more terrible", "most terrible"], correct: 1, explanation: "修饰形容词 hot 用副词 terribly。" },
        { question: "Can't you do it ___?", options: ["quick", "quickly", "more quick", "most quick"], correct: 1, explanation: "修饰动词 do 用副词 quickly。" },
        { question: "The weather is ___ dry.", options: ["terrible", "more terrible", "terribly", "most terrible"], correct: 2, explanation: "修饰形容词 dry 用副词 terribly。" },
        { question: "I'm going to ___ the garden.", options: ["water", "watering", "watered", "waters"], correct: 0, explanation: "be going to 后接动词原形。" },
        { question: "What a ___!", options: ["surprising", "surprised", "surprise", "surprises"], correct: 2, explanation: "What a surprise! 是感叹句，surprise 为名词。" },
        { question: "I'll come ___.", options: ["immediate", "more immediate", "immediately", "most immediate"], correct: 2, explanation: "修饰动词 come 用副词 immediately。" },
        { question: "It's dry. It ___ for months.", options: ["didn't rain", "doesn't rain", "hasn't rained", "isn't raining"], correct: 2, explanation: "for months 表示一段时间，用现在完成时。" },
        { question: "Don't ___ water.", options: ["waste", "wasting", "wasted", "to waste"], correct: 0, explanation: "祈使句否定式用 Don't + 动词原形。" },
        { question: "I'm thirsty ___ it's hot.", options: ["so", "because", "but", "and"], correct: 1, explanation: "because 表示原因，引导原因状语从句。" },
        { question: "Can you come ___?", options: ["immediate", "immediately", "more immediate", "most immediate"], correct: 1, explanation: "修饰动词 come 用副词。" },
        { question: "This is a ___ day.", options: ["pleasantly", "pleased", "pleasant", "pleasing"], correct: 2, explanation: "修饰名词 day 用形容词 pleasant。" },
        { question: "He sings very ___.", options: ["good", "well", "better", "best"], correct: 1, explanation: "修饰动词 sings 用副词 well。" },
        { question: "It's a ___ hot day.", options: ["terrible", "terribly", "more terrible", "most terrible"], correct: 1, explanation: "修饰形容词 hot 用副词。" },
        { question: "I ___ some tea yet.", options: ["don't have", "didn't have", "haven't had", "am not having"], correct: 2, explanation: "yet 常用于现在完成时的否定句中。" },
        { question: "What does this word ___?", options: ["meaning", "means", "mean", "meant"], correct: 2, explanation: "does 后接动词原形。" }
    ],
    listening: {
        dialogue: "A: Can you come in and have tea now, Peter?\nB: Not yet. I must water the garden first.\nA: Do you have to water it now?\nB: I'm afraid I must. Look at it! It's terribly dry.\nA: What a nuisance!\nB: Last summer it was very dry, too. Don't you remember?\nA: Yes, I remember. But you watered the garden every day.\nB: Well, this year it's very dry again.\nA: What about me? Can I help you?\nB: Yes, you can. You can have tea by yourself!",
        questions: [
            { question: "What is Peter doing?", options: ["Having tea", "Watering the garden", "Sleeping", "Cooking"], correct: 1, explanation: "Peter 正在给花园浇水。" },
            { question: "Why must Peter water the garden?", options: ["It's going to rain", "It's terribly dry", "He likes gardening", "The plants are new"], correct: 1, explanation: "因为天气非常干燥。" },
            { question: "What does Peter suggest the woman do?", options: ["Help him water", "Have tea by herself", "Wait for him", "Go inside"], correct: 1, explanation: "Peter 说'你自己喝茶吧'。" }
        ]
    },
    translation: [
        { chinese: "彼得，你现在能进来喝茶吗？", english: "Can you come in and have tea now, Peter?" },
        { chinese: "我得先给花园浇水。", english: "I must water the garden first." },
        { chinese: "你现在非得浇水吗？", english: "Do you have to water it now?" },
        { chinese: "恐怕非浇不可。", english: "I'm afraid I must." },
        { chinese: "你看，干得厉害。", english: "Look at it! It's terribly dry." },
        { chinese: "真讨厌！", english: "What a nuisance!" },
        { chinese: "去年夏天也很干，你不记得了？", english: "Last summer it was very dry, too. Don't you remember?" },
        { chinese: "去年你每天都给花园浇水。", english: "But you watered the garden every day." },
        { chinese: "今年又很干了。", english: "Well, this year it's very dry again." },
        { chinese: "我能帮你吗？", english: "Can I help you?" },
        { chinese: "你可以自己喝茶。", english: "You can have tea by yourself." },
        { chinese: "别浪费水。", english: "Don't waste water." }
    ]
},
{
    id: 127,
    title: "Lesson 127 - A famous actress",
    vocabulary: [
        { word: "famous", translation: "著名的", phonetic: "/ˈfeɪməs/", example: "She is a famous actress." },
        { word: "actress", translation: "女演员", phonetic: "/ˈæktrəs/", example: "The actress is very beautiful." },
        { word: "actor", translation: "演员", phonetic: "/ˈæktə/", example: "He is a famous actor." },
        { word: "at least", translation: "至少", phonetic: "/æt liːst/", example: "She is at least forty years old." },
        { word: "read", translation: "阅读", phonetic: "/riːd/", example: "I read a book every week." },
        { word: "newspaper", translation: "报纸", phonetic: "/ˈnjuːzpeɪpə/", example: "He is reading a newspaper." },
        { word: "again", translation: "再次", phonetic: "/əˈɡen/", example: "Can you say it again?" },
        { word: "recognize", translation: "认出", phonetic: "/ˈrekəɡnaɪz/", example: "I recognized her immediately." },
        { word: "lovely", translation: "可爱的", phonetic: "/ˈlʌvli/", example: "She looks lovely." },
        { word: "really", translation: "真正地", phonetic: "/ˈrɪəli/", example: "Is she really that old?" }
    ],
    grammar: [
        { question: "She is a famous ___.", options: ["actor", "actress", "acting", "acted"], correct: 1, explanation: "actress 是女演员。" },
        { question: "She is at ___ forty years old.", options: ["less", "least", "last", "lost"], correct: 1, explanation: "at least 表示'至少'。" },
        { question: "Can you ___ me who she is?", options: ["telling", "tells", "tell", "told"], correct: 2, explanation: "Can 后接动词原形。" },
        { question: "I ___ her immediately.", options: ["recognize", "recognized", "recognizing", "am recognizing"], correct: 1, explanation: "描述过去发生的事，用一般过去时。" },
        { question: "She ___ in a film when I took this photo.", options: ["acts", "acted", "was acting", "is acting"], correct: 2, explanation: "when I took this photo 表示过去的时间点，用一般过去时。" },
        { question: "This is a photograph ___ our village.", options: ["in", "on", "of", "at"], correct: 2, explanation: "a photograph of 表示'……的照片'。" },
        { question: "She looks ___.", options: ["lovely", "lovelier", "loveliest", "more lovely"], correct: 0, explanation: "look 是系动词，后接形容词作表语。" },
        { question: "Is she really that old? I can't ___ it.", options: ["believing", "believes", "believe", "believed"], correct: 2, explanation: "can't 后接动词原形。" },
        { question: "He ___ a newspaper now.", options: ["reads", "is reading", "read", "has read"], correct: 1, explanation: "now 表示此刻正在进行的动作，用现在进行时。" },
        { question: "I ___ you before, haven't I?", options: ["see", "saw", "have seen", "am seeing"], correct: 2, explanation: "before 常与现在完成时连用。" },
        { question: "That's ___ I can't agree with you.", options: ["what", "why", "where", "when"], correct: 1, explanation: "That's why... 表示'这就是为什么……'。" },
        { question: "She is at least forty. I ___ she is older.", options: ["think", "don't think", "thought", "am thinking"], correct: 1, explanation: "I don't think 表示'我认为不……'，否定转移。" },
        { question: "My mother ___ a film last week.", options: ["sees", "saw", "has seen", "was seeing"], correct: 1, explanation: "last week 表示过去时间，用一般过去时。" },
        { question: "She is famous ___ her beautiful voice.", options: ["as", "for", "with", "in"], correct: 1, explanation: "be famous for 表示'因……而著名'。" },
        { question: "I read a book ___ week.", options: ["every", "each", "all", "both"], correct: 0, explanation: "every week 表示'每周'。" }
    ],
    listening: {
        dialogue: "A: Can you recognize that woman, Liz?\nB: I think I can, Kate. It must be Karen Marsh, the actress.\nA: I think so. She's at least forty.\nB: No, she isn't. She's only twenty-nine.\nA: But she was in a film when I took this photo. That was thirty years ago.\nB: So she must be at least fifty now.\nA: I don't think so. She's still young and beautiful.\nB: Yes, she is. And she looks lovely.",
        questions: [
            { question: "Who is the woman in the photograph?", options: ["A singer", "A famous actress", "A teacher", "A doctor"], correct: 1, explanation: "她一定是 Karen Marsh，那位女演员。" },
            { question: "How old was Karen Marsh when the photo was taken?", options: ["Twenty-nine", "Thirty", "Forty", "Twenty"], correct: 0, explanation: "照片拍摄时她29岁。" },
            { question: "How old must Karen Marsh be now?", options: ["At least forty", "At least fifty", "At least sixty", "Twenty-nine"], correct: 1, explanation: "照片是30年前拍的，当时29岁，现在至少50岁了。" }
        ]
    },
    translation: [
        { chinese: "莉兹，你能认出那个女人吗？", english: "Can you recognize that woman, Liz?" },
        { chinese: "我想我能。一定是凯伦·马什，那位女演员。", english: "I think I can. It must be Karen Marsh, the actress." },
        { chinese: "她至少40岁了。", english: "She's at least forty." },
        { chinese: "不，她只有29岁。", english: "No, she isn't. She's only twenty-nine." },
        { chinese: "但我拍这张照片时她在拍电影。", english: "But she was in a film when I took this photo." },
        { chinese: "那是30年前了。", english: "That was thirty years ago." },
        { chinese: "所以她现在至少50岁了。", english: "So she must be at least fifty now." },
        { chinese: "我可不这么认为。", english: "I don't think so." },
        { chinese: "她依然年轻漂亮。", english: "She's still young and beautiful." },
        { chinese: "她看起来很可爱。", english: "And she looks lovely." },
        { chinese: "我好像在哪儿见过你。", english: "I've seen you before, haven't I?" },
        { chinese: "她以她优美的嗓音而闻名。", english: "She is famous for her beautiful voice." }
    ]
},
{
    id: 129,
    title: "Lesson 129 - Seventy miles an hour",
    vocabulary: [
        { word: "wave", translation: "招手", phonetic: "/weɪv/", example: "He waved to me from the window." },
        { word: "track", translation: "跑道；轨迹", phonetic: "/træk/", example: "The car is on the racing track." },
        { word: "mile", translation: "英里", phonetic: "/maɪl/", example: "The speed limit is 70 miles per hour." },
        { word: "overtake", translation: "超车", phonetic: "/ˌəʊvəˈteɪk/", example: "Don't overtake on a bend." },
        { word: "speed", translation: "速度", phonetic: "/spiːd/", example: "What speed were you doing?" },
        { word: "limit", translation: "限制", phonetic: "/ˈlɪmɪt/", example: "There is a speed limit on this road." },
        { word: "dream", translation: "梦；做梦", phonetic: "/driːm/", example: "I had a strange dream last night." },
        { word: "sign", translation: "标志；符号", phonetic: "/saɪn/", example: "Can you see that road sign?" },
        { word: "driving licence", translation: "驾驶执照", phonetic: "/ˈdraɪvɪŋ ˈlaɪsns/", example: "Show me your driving licence." },
        { word: "charge", translation: "罚款；收费", phonetic: "/tʃɑːdʒ/", example: "I'll have to charge you." }
    ],
    grammar: [
        { question: "He waved ___ me from the window.", options: ["in", "on", "to", "at"], correct: 2, explanation: "wave to 表示'向……招手'。" },
        { question: "What speed ___ you doing?", options: ["are", "were", "have", "had"], correct: 1, explanation: "What speed were you doing? 是过去进行时。" },
        { question: "I must ___ you a ticket.", options: ["giving", "gives", "give", "gave"], correct: 2, explanation: "must 后接动词原形。" },
        { question: "You'd better ___ more carefully.", options: ["drive", "driving", "drives", "drove"], correct: 0, explanation: "had better 后接动词原形。" },
        { question: "He was doing 90 miles ___ hour.", options: ["a", "an", "the", "/"], correct: 1, explanation: "an hour，hour 以元音音素开头。" },
        { question: "That's ___ the speed limit.", options: ["on", "under", "over", "with"], correct: 2, explanation: "over the speed limit 表示'超过限速'。" },
        { question: "Weren't you ___ with that car?", options: ["drove", "driving", "drive", "driven"], correct: 1, explanation: "过去进行时：weren't you driving..." },
        { question: "I ___ that I was driving at 70 miles an hour.", options: ["don't realize", "didn't realize", "haven't realized", "am not realizing"], correct: 1, explanation: "描述过去的想法，用一般过去时。" },
        { question: "Let me ___ your driving licence.", options: ["seeing", "sees", "see", "saw"], correct: 2, explanation: "let me 后接动词原形。" },
        { question: "He often ___ at high speed.", options: ["drive", "drives", "driving", "drove"], correct: 1, explanation: "often 表示经常性动作，主语是第三人称单数。" },
        { question: "I'll have to ___ you.", options: ["charging", "charges", "charge", "charged"], correct: 2, explanation: "have to 后接动词原形。" },
        { question: "You were driving ___ 90 miles an hour.", options: ["in", "on", "at", "with"], correct: 2, explanation: "at ... miles an hour 表示'以……英里的时速'。" },
        { question: "That car ___ me just now.", options: ["overtake", "overtook", "overtakes", "overtaking"], correct: 1, explanation: "just now 表示刚才，用一般过去时。" },
        { question: "I can't see the road ___.", options: ["sign", "signal", "symbol", "mark"], correct: 0, explanation: "road sign 表示'路标'。" },
        { question: "I always drive ___.", options: ["careful", "carefully", "more careful", "most careful"], correct: 1, explanation: "修饰动词 drive 用副词。" }
    ],
    listening: {
        dialogue: "A: Hello. I'm a police officer. I'll have to charge you. You were speeding.\nB: Was I?\nA: You were driving at 90 miles an hour.\nB: I can't have been.\nA: I was following you. You were doing 90.\nB: But I was driving at 70 miles an hour. I'm sure of it.\nA: I was doing 90 when I overtook you. I'm a police officer. My speedometer must be right.\nB: Well, I didn't realize I was speeding.\nA: That's no excuse. I'll have to give you a ticket. Let me see your driving licence.\nB: Here it is. But I was only doing 70. I'm sure of it.",
        questions: [
            { question: "Why was the driver stopped?", options: ["He was driving too slowly", "He was speeding", "He had no licence", "He crashed"], correct: 1, explanation: "警察说他超速了，时速达到了90英里。" },
            { question: "What speed did the driver think he was doing?", options: ["70 miles an hour", "80 miles an hour", "90 miles an hour", "60 miles an hour"], correct: 0, explanation: "司机坚持认为自己只开了70英里每小时。" },
            { question: "What will the police officer do?", options: ["Let him go", "Give him a ticket", "Take him to the station", "Call a tow truck"], correct: 1, explanation: "警察说'我得给你开张罚单'。" }
        ]
    },
    translation: [
        { chinese: "你好，我是警察。我得给你罚款。", english: "Hello. I'm a police officer. I'll have to charge you." },
        { chinese: "你超速了。", english: "You were speeding." },
        { chinese: "你刚才的时速是90英里。", english: "You were driving at 90 miles an hour." },
        { chinese: "我怎么可能呢？", english: "I can't have been." },
        { chinese: "我一直跟在你后面。", english: "I was following you." },
        { chinese: "你的速度是90。", english: "You were doing 90." },
        { chinese: "但我开的是70英里每小时，我很确定。", english: "But I was driving at 70 miles an hour. I'm sure of it." },
        { chinese: "我超过你的时候时速是90。", english: "I was doing 90 when I overtook you." },
        { chinese: "我的速度计一定是对的。", english: "My speedometer must be right." },
        { chinese: "我没有意识到我在超速。", english: "I didn't realize I was speeding." },
        { chinese: "那不是借口。", english: "That's no excuse." },
        { chinese: "我得给你开张罚单。", english: "I'll have to give you a ticket." },
        { chinese: "让我看看你的驾照。", english: "Let me see your driving licence." }
    ]
},
{
    id: 131,
    title: "Lesson 131 - Don't be so sure",
    vocabulary: [
        { word: "Egypt", translation: "埃及", phonetic: "/ˈiːdʒɪpt/", example: "They are going to Egypt." },
        { word: "abroad", translation: "国外", phonetic: "/əˈbrɔːd/", example: "He wants to go abroad." },
        { word: "worry", translation: "担忧", phonetic: "/ˈwʌri/", example: "Don't worry about me." },
        { word: "look after", translation: "照顾", phonetic: "/lʊk ˈɑːftə/", example: "I'll look after the dog." },
        { word: "certainly", translation: "当然", phonetic: "/ˈsɜːtnli/", example: "Certainly, you can go." },
        { word: "expensive", translation: "昂贵的", phonetic: "/ɪkˈspensɪv/", example: "The ticket is very expensive." },
        { word: "cheap", translation: "便宜的", phonetic: "/tʃiːp/", example: "This is a cheap hotel." },
        { word: "spend", translation: "花费", phonetic: "/spend/", example: "I spend a lot of money on books." },
        { word: "sure", translation: "确信的", phonetic: "/ʃʊə/", example: "I'm sure he will come." },
        { word: "pack", translation: "打包", phonetic: "/pæk/", example: "I need to pack my suitcase." }
    ],
    grammar: [
        { question: "Don't be so ___.", options: ["surely", "sure", "more sure", "most sure"], correct: 1, explanation: "形容词 sure 作表语。" },
        { question: "He wants to go ___.", options: ["abroad", "abroadly", "abroaded", "abroaden"], correct: 0, explanation: "abroad 是副词，go abroad 表示'出国'。" },
        { question: "We're going to ___ our holidays in Egypt.", options: ["take", "spend", "cost", "pay"], correct: 1, explanation: "spend holidays 表示'度假'。" },
        { question: "Don't ___ about me.", options: ["worried", "worry", "worrying", "worries"], correct: 1, explanation: "Don't 后接动词原形。" },
        { question: "I'll ___ after the baby.", options: ["look", "looking", "looked", "looks"], correct: 0, explanation: "will 后接动词原形，look after 是固定短语。" },
        { question: "The sea is ___.", options: ["warm and sun", "warm and sunny", "warmly and sunny", "warm and sunnily"], correct: 1, explanation: "is 后接形容词作表语，warm and sunny 并列形容词。" },
        { question: "We'll ___ in a hotel.", options: ["staying", "stayed", "stay", "stays"], correct: 2, explanation: "will 后接动词原形。" },
        { question: "My wife and I are going to Egypt ___ our holidays.", options: ["in", "on", "at", "for"], correct: 3, explanation: "for our holidays 表示'为了度假'。" },
        { question: "The hotels there are very ___.", options: ["cheaply", "cheap", "cheapest", "cheaper"], correct: 1, explanation: "系动词 are 后接形容词 cheap 作表语。" },
        { question: "She always packs her suitcase ___.", options: ["careful", "carefully", "more careful", "most careful"], correct: 1, explanation: "修饰动词 packs 用副词 carefully。" },
        { question: "I ___ a lot of money on this dress.", options: ["cost", "paid", "spent", "took"], correct: 2, explanation: "spend money on 表示'在……上花钱'。" },
        { question: "Are you ___ he will come?", options: ["surely", "sure", "more sure", "most sure"], correct: 1, explanation: "be sure + 从句表示'确信……'。" },
        { question: "The ticket was very ___.", options: ["expensively", "expensive", "more expensive", "most expensive"], correct: 1, explanation: "系动词 was 后接形容词 expensive。" },
        { question: "My wife is going to ___ her sister.", options: ["visit", "visits", "visiting", "visited"], correct: 0, explanation: "be going to 后接动词原形。" },
        { question: "We'll look ___ the dogs while you are away.", options: ["for", "at", "after", "up"], correct: 2, explanation: "look after 表示'照顾'。" }
    ],
    listening: {
        dialogue: "A: We're going to spend our holidays abroad this year.\nB: Where are you going?\nA: We're going to Egypt.\nB: Are you? How exciting!\nA: The hotels there are very cheap.\nB: And the weather is always warm and sunny.\nA: Yes, the sea is warm, too.\nB: Are you going to travel by ship?\nA: No, we're going by air. My wife is going to visit her sister in Cairo.\nB: Who's going to look after the dogs while you're away?\nA: My son is going to look after them.\nB: Are you sure he will?\nA: Don't be so sure! I'm not sure myself.",
        questions: [
            { question: "Where are they going for their holidays?", options: ["Europe", "Egypt", "America", "Japan"], correct: 1, explanation: "他们要去埃及度假。" },
            { question: "How will they travel?", options: ["By ship", "By train", "By air", "By car"], correct: 2, explanation: "他们选择乘飞机去。" },
            { question: "Who will look after the dogs?", options: ["The wife's sister", "A neighbor", "Their son", "A friend"], correct: 2, explanation: "他们的儿子会照顾狗。" }
        ]
    },
    translation: [
        { chinese: "今年我们要去国外度假。", english: "We're going to spend our holidays abroad this year." },
        { chinese: "我们要去埃及。", english: "We're going to Egypt." },
        { chinese: "那里的旅馆很便宜。", english: "The hotels there are very cheap." },
        { chinese: "天气总是温暖晴朗。", english: "And the weather is always warm and sunny." },
        { chinese: "海水也很温暖。", english: "Yes, the sea is warm, too." },
        { chinese: "你们打算乘船去吗？", english: "Are you going to travel by ship?" },
        { chinese: "我们要乘飞机去。", english: "No, we're going by air." },
        { chinese: "我妻子要去开罗看望她妹妹。", english: "My wife is going to visit her sister in Cairo." },
        { chinese: "你们不在的时候谁来照顾狗？", english: "Who's going to look after the dogs while you're away?" },
        { chinese: "我儿子会照顾它们。", english: "My son is going to look after them." },
        { chinese: "你确定他会吗？", english: "Are you sure he will?" },
        { chinese: "别那么确定！我自己都不确定。", english: "Don't be so sure! I'm not sure myself." }
    ]
},
{
    id: 133,
    title: "Lesson 133 - Sensational news!",
    vocabulary: [
        { word: "sensational", translation: "轰动的", phonetic: "/senˈseɪʃənl/", example: "This is sensational news!" },
        { word: "reporter", translation: "记者", phonetic: "/rɪˈpɔːtə/", example: "The reporter is interviewing the actress." },
        { word: "hotel", translation: "旅馆", phonetic: "/həʊˈtel/", example: "We stayed at a luxury hotel." },
        { word: "latest", translation: "最新的", phonetic: "/ˈleɪtɪst/", example: "Have you heard the latest news?" },
        { word: "make", translation: "拍摄（电影）", phonetic: "/meɪk/", example: "She is making a new film." },
        { word: "news", translation: "新闻", phonetic: "/njuːz/", example: "The news is very exciting." },
        { word: "interview", translation: "采访", phonetic: "/ˈɪntəvjuː/", example: "The reporter wants to interview you." },
        { word: "wonderful", translation: "精彩的", phonetic: "/ˈwʌndəfl/", example: "It's a wonderful film." },
        { word: "mink", translation: "貂皮", phonetic: "/mɪŋk/", example: "She is wearing a mink coat." },
        { word: "future", translation: "未来", phonetic: "/ˈfjuːtʃə/", example: "What are your future plans?" }
    ],
    grammar: [
        { question: "Have you heard the ___ news?", options: ["late", "later", "latest", "lately"], correct: 2, explanation: "the latest news 表示'最新消息'。" },
        { question: "She is going to ___ a new film.", options: ["make", "makes", "making", "made"], correct: 0, explanation: "be going to 后接动词原形。" },
        { question: "He is a famous ___.", options: ["report", "reporter", "reporting", "reported"], correct: 1, explanation: "reporter 意为'记者'。" },
        { question: "She told me ___ she was going to make a new film.", options: ["what", "which", "that", "when"], correct: 2, explanation: "that 引导宾语从句。" },
        { question: "I've ___ been to the United States.", options: ["never", "ever", "always", "sometimes"], correct: 0, explanation: "never 表示'从未'，常用于现在完成时。" },
        { question: "He said he ___ in a hotel.", options: ["stay", "stays", "was staying", "is staying"], correct: 2, explanation: "间接引语中，时态要与主句一致，主句是过去时。" },
        { question: "The reporter is ___ the actress.", options: ["interview", "interviews", "interviewing", "interviewed"], correct: 2, explanation: "现在进行时：is + 现在分词。" },
        { question: "What are your ___ plans?", options: ["futuring", "futured", "future", "futures"], correct: 2, explanation: "形容词 future 修饰名词 plans。" },
        { question: "She said she felt very ___.", options: ["tiredly", "tiring", "tired", "tire"], correct: 2, explanation: "felt 是系动词，后接形容词 tired 作表语。" },
        { question: "Do you think she will ___ the United States?", options: ["go", "goes", "went", "going"], correct: 0, explanation: "will 后接动词原形。" },
        { question: "She is wearing a ___ coat.", options: ["mink", "minking", "minked", "minks"], correct: 0, explanation: "mink 作形容词表示'貂皮的'。" },
        { question: "He said that he ___ a reporter.", options: ["am", "is", "was", "were"], correct: 2, explanation: "间接引语中，时态要回退，am→was。" },
        { question: "That's wonderful ___!", options: ["news", "new", "newses", "a news"], correct: 0, explanation: "news 是不可数名词。" },
        { question: "The news ___ very exciting.", options: ["am", "is", "are", "be"], correct: 1, explanation: "news 是不可数名词，作单数用。" },
        { question: "She said she was going to make ___ new film.", options: ["the", "a", "an", "/"], correct: 1, explanation: "a new film 表示'一部新电影'。" }
    ],
    listening: {
        dialogue: "A: Have you just made a new film, Miss Marsh?\nB: Yes, I have.\nA: Are you going to make another film?\nB: No, I'm not. I'm going to retire. I feel very tired. I don't want to make another film for a long time.\nA: What are you going to do then?\nB: I'm going to have a long holiday.\nA: Where are you going to go?\nB: I'm going to go to the United States.\nA: Are you going to travel by ship?\nB: No, I'm not. I'm going to travel by air.\nA: Who is going to accompany you?\nB: My future husband.\nA: Are you going to get married, Miss Marsh?\nB: Yes, I am. And I'm going to wear a beautiful mink coat!",
        questions: [
            { question: "What does Miss Marsh plan to do?", options: ["Make another film", "Get married and retire", "Travel by ship", "Buy a new house"], correct: 1, explanation: "马什小姐要退休结婚。" },
            { question: "Where is Miss Marsh going for her holiday?", options: ["Europe", "Egypt", "The United States", "Australia"], correct: 2, explanation: "她要去美国度假。" },
            { question: "What is Miss Marsh going to wear at her wedding?", options: ["A silk dress", "A diamond ring", "A mink coat", "A red hat"], correct: 2, explanation: "她说'我要穿一件漂亮的貂皮大衣'。" }
        ]
    },
    translation: [
        { chinese: "你听到那个轰动的消息了吗？", english: "Have you heard the sensational news?" },
        { chinese: "马什小姐刚拍完一部新电影。", english: "Miss Marsh has just made a new film." },
        { chinese: "她打算退休了。", english: "She is going to retire." },
        { chinese: "她觉得很累。", english: "She feels very tired." },
        { chinese: "她很长时间内不想再拍电影了。", english: "She doesn't want to make another film for a long time." },
        { chinese: "她打算度一个长假。", english: "She's going to have a long holiday." },
        { chinese: "她打算去美国。", english: "She's going to go to the United States." },
        { chinese: "她要乘飞机去。", english: "She is going to travel by air." },
        { chinese: "她未来的丈夫会陪她去。", english: "Her future husband is going to accompany her." },
        { chinese: "马什小姐，您要结婚了吗？", english: "Are you going to get married, Miss Marsh?" },
        { chinese: "我打算穿一件漂亮的貂皮大衣。", english: "I'm going to wear a beautiful mink coat!" },
        { chinese: "这消息太精彩了！", english: "That's wonderful news!" }
    ]
},
{
    id: 135,
    title: "Lesson 135 - The latest report",
    vocabulary: [
        { word: "introduce", translation: "介绍", phonetic: "/ˌɪntrəˈdjuːs/", example: "Let me introduce myself." },
        { word: "future", translation: "未来的", phonetic: "/ˈfjuːtʃə/", example: "This is my future wife." },
        { word: "hotel", translation: "旅馆", phonetic: "/həʊˈtel/", example: "We're going to stay at a hotel." },
        { word: "get married", translation: "结婚", phonetic: "/ɡet ˈmærid/", example: "They are going to get married." },
        { word: "retire", translation: "退休", phonetic: "/rɪˈtaɪə/", example: "She is going to retire soon." },
        { word: "report", translation: "报道", phonetic: "/rɪˈpɔːt/", example: "This is the latest report." },
        { word: "marry", translation: "结婚；嫁；娶", phonetic: "/ˈmæri/", example: "He is going to marry Jane." },
        { word: "decide", translation: "决定", phonetic: "/dɪˈsaɪd/", example: "I decided not to go." },
        { word: "husband", translation: "丈夫", phonetic: "/ˈhʌzbənd/", example: "My husband is a doctor." },
        { word: "wife", translation: "妻子", phonetic: "/waɪf/", example: "My wife is a teacher." }
    ],
    grammar: [
        { question: "Let me ___ myself.", options: ["introduce", "introduces", "introducing", "introduced"], correct: 0, explanation: "Let me 后接动词原形。" },
        { question: "This is my ___ wife.", options: ["futuring", "futured", "future", "futures"], correct: 2, explanation: "形容词 future 修饰名词 wife。" },
        { question: "She said she was going to ___.", options: ["retire", "retires", "retiring", "retired"], correct: 0, explanation: "be going to 后接动词原形。" },
        { question: "He said he ___ a reporter.", options: ["am", "is", "was", "were"], correct: 2, explanation: "间接引语中，时态要回退。" },
        { question: "Miss Marsh told me she ___ get married.", options: ["will", "would", "shall", "is going"], correct: 1, explanation: "间接引语中，will 变为 would。" },
        { question: "I can't ___ it!", options: ["believing", "believes", "believe", "believed"], correct: 2, explanation: "can't 后接动词原形。" },
        { question: "He said he ___ going to the United States.", options: ["am", "is", "was", "were"], correct: 2, explanation: "间接引语中，am/is 变为 was。" },
        { question: "She introduced me ___ her future husband.", options: ["in", "on", "to", "at"], correct: 2, explanation: "introduce...to... 表示'把……介绍给……'。" },
        { question: "They are going to get ___ next month.", options: ["marry", "married", "marrying", "marries"], correct: 1, explanation: "get married 表示'结婚'。" },
        { question: "She ___ she was going to make a new film.", options: ["say", "says", "said", "saying"], correct: 2, explanation: "间接引语的主句时态用过去时。" },
        { question: "I ___ not to go.", options: ["decided", "decide", "am deciding", "have decided"], correct: 0, explanation: "描述过去做的决定，用一般过去时。" },
        { question: "He ___ Jane last year.", options: ["marry", "marries", "married", "marrying"], correct: 2, explanation: "last year 是过去时间，用一般过去时。" },
        { question: "She is a very nice ___.", options: ["personally", "person", "persons", "personage"], correct: 1, explanation: "名词 person 表示'人'。" },
        { question: "This is the ___ report.", options: ["late", "later", "latest", "lately"], correct: 2, explanation: "the latest report 表示'最新报道'。" },
        { question: "My wife is a ___.", options: ["teaching", "teacher", "taught", "teaches"], correct: 1, explanation: "teacher 表示'教师'。" }
    ],
    listening: {
        dialogue: "A: This is the latest report on Karen Marsh. Miss Marsh has just made another new film. She told me she was going to retire. She said she felt very tired and didn't want to make another film for a long time. But now she has changed her mind.\nB: What are you going to do, Miss Marsh?\nC: I'm going to make another film.\nA: What are you going to call it?\nC: I'm going to call it 'Sensational News'.\nB: And are you still going to get married?\nC: Yes, I am. And I'm still going to wear a beautiful mink coat!",
        questions: [
            { question: "What has Miss Marsh decided to do?", options: ["Retire immediately", "Make another film", "Travel abroad", "Buy a house"], correct: 1, explanation: "马什小姐改变主意，决定再拍一部电影。" },
            { question: "What is the new film called?", options: ["A Long Holiday", "Sensational News", "My Future", "The Latest Report"], correct: 1, explanation: "新片名叫《轰动新闻》。" },
            { question: "Is Miss Marsh still going to get married?", options: ["Yes", "No", "Not sure", "She changed her mind"], correct: 0, explanation: "她仍然要结婚，并且还要穿貂皮大衣。" }
        ]
    },
    translation: [
        { chinese: "这是关于凯伦·马什的最新报道。", english: "This is the latest report on Karen Marsh." },
        { chinese: "马什小姐刚又拍了一部新电影。", english: "Miss Marsh has just made another new film." },
        { chinese: "她告诉我她打算退休。", english: "She told me she was going to retire." },
        { chinese: "她说她觉得很累。", english: "She said she felt very tired." },
        { chinese: "但现在她改变主意了。", english: "But now she has changed her mind." },
        { chinese: "我打算再拍一部电影。", english: "I'm going to make another film." },
        { chinese: "你打算叫什么片名？", english: "What are you going to call it?" },
        { chinese: "我打算叫它《轰动新闻》。", english: "I'm going to call it 'Sensational News'." },
        { chinese: "你还打算结婚吗？", english: "And are you still going to get married?" },
        { chinese: "是的，我仍然要结婚。", english: "Yes, I am. And I'm still going to get married." },
        { chinese: "让我自我介绍一下。", english: "Let me introduce myself." },
        { chinese: "这是我未来的丈夫。", english: "This is my future husband." }
    ]
},
{
    id: 137,
    title: "Lesson 137 - A pleasant dream",
    vocabulary: [
        { word: "football", translation: "足球", phonetic: "/ˈfʊtbɔːl/", example: "He likes playing football." },
        { word: "pool", translation: "赌注", phonetic: "/puːl/", example: "He always wins on the football pools." },
        { word: "win", translation: "赢", phonetic: "/wɪn/", example: "I hope we will win the game." },
        { word: "world", translation: "世界", phonetic: "/wɜːld/", example: "I want to travel around the world." },
        { word: "poor", translation: "贫穷的", phonetic: "/pʊə/", example: "He is a poor man." },
        { word: "depend", translation: "依靠；取决于", phonetic: "/dɪˈpend/", example: "It depends on the weather." },
        { word: "miss", translation: "错过", phonetic: "/mɪs/", example: "I don't want to miss the game." },
        { word: "hope", translation: "希望", phonetic: "/həʊp/", example: "I hope you will succeed." },
        { word: "dream", translation: "梦想", phonetic: "/driːm/", example: "It's a pleasant dream." },
        { word: "lottery", translation: "彩票", phonetic: "/ˈlɒtəri/", example: "He won the lottery." }
    ],
    grammar: [
        { question: "He is a ___ man.", options: ["poorly", "poor", "poverty", "poorest"], correct: 1, explanation: "形容词 poor 修饰名词 man。" },
        { question: "I hope we will ___ the game.", options: ["win", "wins", "winning", "won"], correct: 0, explanation: "will 后接动词原形。" },
        { question: "What would you do if you ___ a lot of money?", options: ["win", "won", "winning", "wins"], correct: 1, explanation: "if 引导的虚拟条件句，用一般过去时表示与现在事实相反。" },
        { question: "If I won a lot of money, I ___ travel around the world.", options: ["will", "would", "can", "shall"], correct: 1, explanation: "虚拟条件句的主句用 would + 动词原形。" },
        { question: "It all ___ on the weather.", options: ["depends", "depend", "depending", "depended"], correct: 0, explanation: "主语是 it，用第三人称单数形式。" },
        { question: "I don't want to ___ the train.", options: ["miss", "misses", "missing", "missed"], correct: 0, explanation: "want to 后接动词原形。" },
        { question: "He always ___ on the football pools.", options: ["win", "wins", "winning", "won"], correct: 1, explanation: "always 表示经常性动作，主语是第三人称单数。" },
        { question: "I wish I ___ a millionaire.", options: ["am", "was", "were", "have been"], correct: 2, explanation: "wish 后面的从句用虚拟语气，were 用于所有主语。" },
        { question: "If I ___ you, I would accept the offer.", options: ["am", "was", "were", "be"], correct: 2, explanation: "if I were you 是虚拟语气的固定表达。" },
        { question: "That's a pleasant ___.", options: ["dreaming", "dreamy", "dream", "dreamed"], correct: 2, explanation: "dream 是可数名词，a pleasant dream '一个美好的梦'。" },
        { question: "My brother ___ his wife next month.", options: ["marry", "marries", "is going to marry", "married"], correct: 2, explanation: "next month 是将来的时间，用 be going to。" },
        { question: "He wants to ___ a new car.", options: ["buy", "buys", "buying", "bought"], correct: 0, explanation: "want to 后接动词原形。" },
        { question: "He always ___ a lot of money.", options: ["spend", "spends", "spending", "spent"], correct: 1, explanation: "always 表示经常性动作，主语是第三人称单数。" },
        { question: "I don't like football. It's ___.", options: ["excited", "exciting", "boring", "bored"], correct: 2, explanation: "boring 表示'令人厌烦的'。" },
        { question: "What would you do if you ___ me?", options: ["are", "was", "were", "be"], correct: 2, explanation: "if 引导的虚拟条件句，用 were。" }
    ],
    listening: {
        dialogue: "A: Do you like football, Tom?\nB: No, I don't. I think it's boring.\nA: My brother loves it. He always plays football on Saturday afternoon.\nB: Does he ever win?\nA: He doesn't play football. He just watches it. But he does the football pools every week.\nB: Does he ever win anything?\nA: Last year he won a car. But he's never won a lot of money.\nB: What would you do if you won a lot of money?\nA: If I won a lot of money, I'd buy you a drink.\nB: What a pleasant dream!",
        questions: [
            { question: "What does the woman's brother do every week?", options: ["Plays football", "Watches football on TV", "Does the football pools", "Goes to the stadium"], correct: 2, explanation: "她哥哥每周都赌足球彩票。" },
            { question: "What did the woman's brother win last year?", options: ["A lot of money", "A car", "A house", "A trip"], correct: 1, explanation: "去年他赢了一辆车。" },
            { question: "What would the woman do if she won a lot of money?", options: ["Travel around the world", "Buy a new house", "Buy the man a drink", "Buy a car"], correct: 2, explanation: "女士说如果赢了大钱，会请对方喝一杯。" }
        ]
    },
    translation: [
        { chinese: "你喜欢足球吗，汤姆？", english: "Do you like football, Tom?" },
        { chinese: "不，我不喜欢。我觉得它很无聊。", english: "No, I don't. I think it's boring." },
        { chinese: "我哥哥特别喜欢足球。", english: "My brother loves it." },
        { chinese: "他每周六下午都踢足球。", english: "He always plays football on Saturday afternoon." },
        { chinese: "他只是看球赛。", english: "He doesn't play football. He just watches it." },
        { chinese: "他每周都赌足球彩票。", english: "But he does the football pools every week." },
        { chinese: "他赢过什么东西吗？", english: "Does he ever win anything?" },
        { chinese: "去年他赢了一辆车。", english: "Last year he won a car." },
        { chinese: "但他从没赢过大钱。", english: "But he's never won a lot of money." },
        { chinese: "如果你赢了一大笔钱，你会做什么？", english: "What would you do if you won a lot of money?" },
        { chinese: "我请你喝一杯。", english: "I'd buy you a drink." },
        { chinese: "多美的梦啊！", english: "What a pleasant dream!" },
        { chinese: "这全得看天气。", english: "It all depends on the weather." }
    ]
},
{
    id: 139,
    title: "Lesson 139 - Is that you, John?",
    vocabulary: [
        { word: "engineer", translation: "工程师", phonetic: "/ˌendʒɪˈnɪə/", example: "John is an engineer." },
        { word: "company", translation: "公司", phonetic: "/ˈkʌmpəni/", example: "He works for a big company." },
        { word: "line", translation: "线路；电话线", phonetic: "/laɪn/", example: "The line is very bad." },
        { word: "phone", translation: "电话", phonetic: "/fəʊn/", example: "I'll phone you tomorrow." },
        { word: "overseas", translation: "海外的", phonetic: "/ˌəʊvəˈsiːz/", example: "He works overseas." },
        { word: "another", translation: "另一个", phonetic: "/əˈnʌðə/", example: "Let's have another try." },
        { word: "company", translation: "公司", phonetic: "/ˈkʌmpəni/", example: "He runs a small company." },
        { word: "receive", translation: "收到", phonetic: "/rɪˈsiːv/", example: "I received a letter from him." },
        { word: "invitation", translation: "邀请", phonetic: "/ˌɪnvɪˈteɪʃn/", example: "Thank you for your invitation." },
        { word: "exciting", translation: "令人兴奋的", phonetic: "/ɪkˈsaɪtɪŋ/", example: "The news is very exciting." }
    ],
    grammar: [
        { question: "Is that you, John? Yes, ___ is John.", options: ["that", "this", "it", "he"], correct: 2, explanation: "打电话时用 it 指代人。" },
        { question: "The ___ is very bad.", options: ["light", "line", "line", "link"], correct: 1, explanation: "line 表示'电话线路'。" },
        { question: "I'm an ___.", options: ["engineer", "engine", "enginery", "engineering"], correct: 0, explanation: "engineer 表示'工程师'。" },
        { question: "He works in a big ___.", options: ["companion", "company", "compass", "compare"], correct: 1, explanation: "company 表示'公司'。" },
        { question: "I'll ___ you tomorrow.", options: ["phone", "phones", "phoning", "phoned"], correct: 0, explanation: "will 后接动词原形。" },
        { question: "He works ___.", options: ["oversea", "overseas", "overseason", "over sea"], correct: 1, explanation: "overseas 是副词，表示'在海外'。" },
        { question: "I ___ your invitation.", options: ["receive", "receives", "received", "receiving"], correct: 2, explanation: "描述过去发生的事，用一般过去时。" },
        { question: "The news is very ___.", options: ["excited", "exciting", "excite", "excitement"], correct: 1, explanation: "exciting 表示'令人兴奋的'。" },
        { question: "Let's have ___ try.", options: ["other", "another", "others", "the other"], correct: 1, explanation: "another 表示'另一个'。" },
        { question: "He ___ from Canada.", options: ["come", "comes", "coming", "came"], correct: 1, explanation: "主语是第三人称单数，一般现在时。" },
        { question: "I invited him ___ dinner.", options: ["in", "on", "at", "to"], correct: 3, explanation: "invite...to dinner 表示'邀请……吃饭'。" },
        { question: "Do you work ___ an engineer?", options: ["like", "as", "for", "with"], correct: 1, explanation: "work as 表示'担任……职务'。" },
        { question: "Thank you ___ your invitation.", options: ["in", "on", "for", "at"], correct: 2, explanation: "thank you for... 表示'因……感谢您'。" },
        { question: "Is that you ___?", options: ["call", "calls", "calling", "called"], correct: 2, explanation: "Is that you calling? 是现在进行时，表示'是你在打电话吗？'" },
        { question: "He works ___ a big company.", options: ["in", "on", "for", "at"], correct: 2, explanation: "work for 表示'为……工作'。" }
    ],
    listening: {
        dialogue: "A: Is that you, John?\nB: Yes, it is. Who's that?\nA: It's Mary. I'm calling from my office. The line is very bad. Can you hear me?\nB: Yes, I can hear you. What are you calling about?\nA: I'm calling about my brother. He's come back from Canada. He's an engineer. He works for a big company. And he's going to visit us.\nB: That's exciting! When is he coming?\nA: He's coming next week. I've booked a table at a restaurant for Friday evening. Can you come?\nB: Yes, I'd love to.\nA: Great! I'll see you on Friday.",
        questions: [
            { question: "Who is calling?", options: ["John", "Mary", "An engineer", "A friend"], correct: 1, explanation: "打电话的是玛丽。" },
            { question: "Where has Mary's brother come back from?", options: ["America", "England", "Canada", "Australia"], correct: 2, explanation: "玛丽的哥哥从加拿大回来了。" },
            { question: "What has Mary done for Friday evening?", options: ["Booked a hotel", "Booked a restaurant table", "Bought tickets", "Arranged a party"], correct: 1, explanation: "玛丽已经订好了周五晚上的餐厅。" }
        ]
    },
    translation: [
        { chinese: "是你吗，约翰？", english: "Is that you, John?" },
        { chinese: "是的，是我。你是哪位？", english: "Yes, it is. Who's that?" },
        { chinese: "我是玛丽。我从办公室打来的。", english: "It's Mary. I'm calling from my office." },
        { chinese: "电话线信号很差。你能听见我说话吗？", english: "The line is very bad. Can you hear me?" },
        { chinese: "我打电话是为了说我哥哥的事。", english: "I'm calling about my brother." },
        { chinese: "他从加拿大回来了。", english: "He's come back from Canada." },
        { chinese: "他是一名工程师，为一家大公司工作。", english: "He's an engineer. He works for a big company." },
        { chinese: "他要来看我们。", english: "And he's going to visit us." },
        { chinese: "太令人兴奋了！他什么时候来？", english: "That's exciting! When is he coming?" },
        { chinese: "他下周来。", english: "He's coming next week." },
        { chinese: "我已经订好了周五晚上的餐厅。", english: "I've booked a table at a restaurant for Friday evening." },
        { chinese: "你能来吗？", english: "Can you come?" },
        { chinese: "我很乐意。", english: "Yes, I'd love to." }
    ]
},
{
    id: 141,
    title: "Lesson 141 - Sally's first train ride",
    vocabulary: [
        { word: "excited", translation: "兴奋的", phonetic: "/ɪkˈsaɪtɪd/", example: "Sally is very excited." },
        { word: "get on", translation: "登上（车、船等）", phonetic: "/ɡet ɒn/", example: "We got on the train at the station." },
        { word: "get off", translation: "下车", phonetic: "/ɡet ɒf/", example: "We got off the train in London." },
        { word: "middle-aged", translation: "中年的", phonetic: "/ˈmɪdl eɪdʒd/", example: "A middle-aged woman got on the train." },
        { word: "opposite", translation: "对面的", phonetic: "/ˈɒpəzɪt/", example: "She sat opposite me." },
        { word: "curiously", translation: "好奇地", phonetic: "/ˈkjʊəriəsli/", example: "Sally looked at the woman curiously." },
        { word: "powder", translation: "香粉", phonetic: "/ˈpaʊdə/", example: "She was putting on her face powder." },
        { word: "compact", translation: "粉盒", phonetic: "/ˈkɒmpækt/", example: "She took out a compact." },
        { word: "kindly", translation: "和蔼地", phonetic: "/ˈkaɪndli/", example: "The woman smiled kindly." },
        { word: "ugly", translation: "丑陋的", phonetic: "/ˈʌɡli/", example: "Sally thought the woman was ugly." },
        { word: "make up", translation: "化妆", phonetic: "/meɪk ʌp/", example: "The woman was making up her face." },
        { word: "put on", translation: "涂上；穿上", phonetic: "/pʊt ɒn/", example: "She put on her lipstick." }
    ],
    grammar: [
        { question: "Sally is very ___.", options: ["excited", "exciting", "excite", "excitement"], correct: 0, explanation: "excited 表示'感到兴奋的'，形容人的感受。" },
        { question: "We got ___ the train at the station.", options: ["in", "on", "into", "onto"], correct: 1, explanation: "get on the train 表示'上火车'。" },
        { question: "We got ___ the train in London.", options: ["in", "off", "out", "down"], correct: 1, explanation: "get off the train 表示'下火车'。" },
        { question: "A middle-aged woman got ___ the train.", options: ["in", "on", "into", "onto"], correct: 1, explanation: "get on 表示'登上'公共交通工具。" },
        { question: "She sat ___ me.", options: ["in front", "next", "opposite", "beside"], correct: 2, explanation: "opposite 表示'在……对面'。" },
        { question: "Sally looked ___ the woman curiously.", options: ["in", "on", "at", "to"], correct: 2, explanation: "look at 表示'看着'。" },
        { question: "She was putting on her face ___.", options: ["powder", "powdered", "powdering", "powders"], correct: 0, explanation: "face powder 是名词短语，表示'扑面粉'。" },
        { question: "She took ___ a compact.", options: ["in", "on", "out", "off"], correct: 2, explanation: "take out 表示'拿出'。" },
        { question: "The woman smiled ___.", options: ["kind", "kindly", "kindness", "kinder"], correct: 1, explanation: "修饰动词 smiled 用副词 kindly。" },
        { question: "Then she smiled ___ Sally.", options: ["in", "on", "at", "to"], correct: 2, explanation: "smile at 表示'对……微笑'。" },
        { question: "Sally thought the woman was ___.", options: ["ugly", "uglily", "ugliness", "uglier"], correct: 0, explanation: "系动词 was 后接形容词 ugly 作表语。" },
        { question: "She was making ___ her face.", options: ["in", "on", "up", "for"], correct: 2, explanation: "make up 表示'化妆'。" },
        { question: "She put ___ her lipstick.", options: ["in", "on", "out", "off"], correct: 1, explanation: "put on 表示'涂上'。" },
        { question: "Sally is four years old. She is having her ___ train ride.", options: ["first", "one", "once", "firstly"], correct: 0, explanation: "first train ride 表示'第一次坐火车'。" },
        { question: "The train was ___ the station.", options: ["leaving", "left", "leaves", "to leave"], correct: 0, explanation: "过去进行时 was leaving 表示火车当时正要离站。" }
    ],
    listening: {
        dialogue: "Sally was four years old. She was having her first train ride. She was very excited. Her mother and father got on the train with her. The train left the station. A middle-aged woman got on the train. She sat opposite Sally. She was carrying a lot of bags. Sally looked at the woman curiously. The woman took out a compact and began to make up her face. She put on her lipstick and then she put on her face powder. Sally thought the woman was ugly. 'Mummy,' Sally said, 'why is that lady making her face?' Her mother was embarrassed. But the woman smiled kindly. 'I'm making myself beautiful, dear,' she said. 'But you're still ugly,' Sally replied.",
        questions: [
            { question: "How old was Sally?", options: ["Three", "Four", "Five", "Six"], correct: 1, explanation: "Sally 四岁了。" },
            { question: "What did the middle-aged woman do on the train?", options: ["Read a book", "Ate lunch", "Made up her face", "Slept"], correct: 2, explanation: "那位中年妇女在火车上化妆。" },
            { question: "What did Sally think of the woman?", options: ["She was beautiful", "She was kind", "She was ugly", "She was funny"], correct: 2, explanation: "Sally 认为那个女士很丑。" }
        ]
    },
    translation: [
        { chinese: "莎莉四岁了。", english: "Sally was four years old." },
        { chinese: "她在体验第一次坐火车。", english: "She was having her first train ride." },
        { chinese: "她非常兴奋。", english: "She was very excited." },
        { chinese: "她和爸爸妈妈一起上了火车。", english: "Her mother and father got on the train with her." },
        { chinese: "火车离开了车站。", english: "The train left the station." },
        { chinese: "一位中年妇女上了火车。", english: "A middle-aged woman got on the train." },
        { chinese: "她坐在莎莉的对面。", english: "She sat opposite Sally." },
        { chinese: "莎莉好奇地看着那位女士。", english: "Sally looked at the woman curiously." },
        { chinese: "那位女士拿出一个粉盒开始化妆。", english: "The woman took out a compact and began to make up her face." },
        { chinese: "她涂了口红，然后又扑了粉。", english: "She put on her lipstick and then she put on her face powder." },
        { chinese: "莎莉觉得那个女士很丑。", english: "Sally thought the woman was ugly." },
        { chinese: "那位女士和蔼地笑了笑。", english: "But the woman smiled kindly." },
        { chinese: "可你还是很丑。", english: "But you're still ugly." }
    ]
},
{
    id: 143,
    title: "Lesson 143 - A walk through the woods",
    vocabulary: [
        { word: "wood", translation: "树林", phonetic: "/wʊd/", example: "I walked through the woods." },
        { word: "beauty spot", translation: "风景点", phonetic: "/ˈbjuːti spɒt/", example: "This is a famous beauty spot." },
        { word: "litter", translation: "垃圾", phonetic: "/ˈlɪtə/", example: "There is a lot of litter in the woods." },
        { word: "rubbish", translation: "垃圾", phonetic: "/ˈrʌbɪʃ/", example: "Don't throw rubbish on the ground." },
        { word: "among", translation: "在……之间", phonetic: "/əˈmʌŋ/", example: "There is rubbish among the trees." },
        { word: "prosecute", translation: "起诉", phonetic: "/ˈprɒsɪkjuːt/", example: "Anyone who leaves litter will be prosecuted." },
        { word: "visitor", translation: "游客，参观者", phonetic: "/ˈvɪzɪtə/", example: "Many visitors come to this place." },
        { word: "tyre", translation: "轮胎", phonetic: "/ˈtaɪə/", example: "There is an old tyre in the river." },
        { word: "rusty", translation: "生锈的", phonetic: "/ˈrʌsti/", example: "There is a rusty tin in the grass." },
        { word: "among", translation: "在……之中", phonetic: "/əˈmʌŋ/", example: "The grass is growing among the rubbish." },
        { word: "cover", translation: "覆盖", phonetic: "/ˈkʌvə/", example: "The ground is covered with litter." },
        { word: "pie", translation: "馅饼", phonetic: "/paɪ/", example: "I saw a pie dish on the ground." }
    ],
    grammar: [
        { question: "I walked ___ the woods.", options: ["across", "through", "over", "on"], correct: 1, explanation: "walk through 表示'穿过'，强调从内部穿过。" },
        { question: "There is a lot of ___ in the woods.", options: ["litters", "litter", "littered", "littering"], correct: 1, explanation: "litter 是不可数名词。" },
        { question: "Anyone who ___ litter will be prosecuted.", options: ["leave", "leaves", "left", "leaving"], correct: 1, explanation: "who 指代 anyone，是第三人称单数。" },
        { question: "The ground is ___ with litter.", options: ["cover", "covers", "covered", "covering"], correct: 2, explanation: "被动语态：be covered with 表示'被……覆盖'。" },
        { question: "There is an old tyre ___ the river.", options: ["on", "in", "at", "by"], correct: 1, explanation: "in the river 表示'在河里'。" },
        { question: "There is a rusty tin ___ the grass.", options: ["on", "in", "at", "under"], correct: 1, explanation: "in the grass 表示'在草丛中'。" },
        { question: "This is a famous beauty ___.", options: ["sight", "view", "spot", "scene"], correct: 2, explanation: "beauty spot 表示'风景点'。" },
        { question: "Don't ___ rubbish on the ground.", options: ["throws", "throwing", "throw", "threw"], correct: 2, explanation: "祈使句否定式用 Don't + 动词原形。" },
        { question: "What I saw ___ me very sad.", options: ["make", "makes", "made", "making"], correct: 2, explanation: "描述过去发生的事，用一般过去时。" },
        { question: "Many ___ come to this place every year.", options: ["visits", "visitors", "visited", "visiting"], correct: 1, explanation: "visitor 是名词，表示'游客'。" },
        { question: "There are empty bottles ___ the ground.", options: ["on", "in", "at", "under"], correct: 0, explanation: "on the ground 表示'在地上'。" },
        { question: "The grass is growing ___ the rubbish.", options: ["among", "between", "through", "across"], correct: 0, explanation: "among 表示'在(多数)之中'。" },
        { question: "I saw a pie dish ___ the ground.", options: ["in", "on", "at", "by"], correct: 1, explanation: "on the ground 表示'在地上'。" },
        { question: "The woods ___ very beautiful.", options: ["am", "is", "are", "be"], correct: 2, explanation: "woods 是复数形式，用 are。" },
        { question: "This place ___ very dirty now.", options: ["am", "is", "are", "be"], correct: 1, explanation: "this place 是单数，用 is。" }
    ],
    listening: {
        dialogue: "A: I went for a walk in the woods this afternoon.\nB: Did you enjoy it?\nA: No, I didn't. I was very sad.\nB: Why? What did you see?\nA: There was a lot of litter everywhere. Among the trees, there were empty bottles and rusty tins. On the ground, there were old newspapers and pieces of paper. In the river, there was an old tyre.\nB: What a mess!\nA: Yes. The woods are a beautiful place. But now they're very dirty.\nB: Someone should clean them up.\nA: There is a sign that says 'Anyone who leaves litter will be prosecuted'.\nB: But nobody seems to care.",
        questions: [
            { question: "Where did the man go for a walk?", options: ["In the park", "In the woods", "In the city", "By the river"], correct: 1, explanation: "他今天下午去树林里散步了。" },
            { question: "What did the man find in the river?", options: ["Empty bottles", "Rusty tins", "An old tyre", "Newspapers"], correct: 2, explanation: "河里有一个旧轮胎。" },
            { question: "What does the sign in the woods say?", options: ["Keep off the grass", "No smoking", "Anyone who leaves litter will be prosecuted", "Danger"], correct: 2, explanation: "牌子上写着'任何乱扔垃圾者将被起诉'。" }
        ]
    },
    translation: [
        { chinese: "今天下午我去树林里散步了。", english: "I went for a walk in the woods this afternoon." },
        { chinese: "我很难过。", english: "I was very sad." },
        { chinese: "到处都有很多垃圾。", english: "There was a lot of litter everywhere." },
        { chinese: "树丛中有空瓶子和生锈的罐头盒。", english: "Among the trees, there were empty bottles and rusty tins." },
        { chinese: "地上有旧报纸和纸片。", english: "On the ground, there were old newspapers and pieces of paper." },
        { chinese: "河里有一个旧轮胎。", english: "In the river, there was an old tyre." },
        { chinese: "真是乱七八糟！", english: "What a mess!" },
        { chinese: "树林是一个美丽的地方。", english: "The woods are a beautiful place." },
        { chinese: "但现在它们很脏。", english: "But now they're very dirty." },
        { chinese: "应该有人清理一下。", english: "Someone should clean them up." },
        { chinese: "牌子上说：任何乱扔垃圾者将被起诉。", english: "There is a sign that says 'Anyone who leaves litter will be prosecuted'." },
        { chinese: "但似乎没人在意。", english: "But nobody seems to care." }
    ]
}

];
