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
];
