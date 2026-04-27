// 新概念英语第一册课程数据
// 注意：这只是课程框架，你需要补充完整的单词、语法题和听力题

const lessonsTemplate = [
    {
        id: 1,
        title: "Lesson 1 - Excuse me!对不起！",
        vocabulary: [
            { word: "expressions 生词和短语excuse", translation: "原谅me [mi:, mi] pron.我(宾格)yes [jes] ad.是的is [iz, s, z, əz] v.be动词现在时第三人称单数this [ðis] pron.这your [jə:, jɔ:, jər, jɔ:r] 你的，你们的handbag ['hændbæg] n.(女用)手提包pardon ['pɑ:dən] int.原谅，请再说一遍it [it] pron.它thank you 感谢你(们)very much 非常地", phonetic: "/ik'skju:z/", example: "TODO: 添加例句" },
        ],
        grammar: [
            // TODO: 添加15道语法题
            // 格式: { question: "题目", options: ["A", "B", "C", "D"], correct: 0, explanation: "解释" }
        ],
        listening: {
            dialogue: "...",
            questions: [
                // TODO: 添加3道听力题
            ]
        }
    },
    {
        id: 3,
        title: "Lesson 3 - Sorry, sir.对不起，先生。",
        vocabulary: [
            { word: "Expressions 生词和短语umbrella", translation: "伞please [pli:z] int.请here [hiə] ad.这里my [mai] 我的ticket ['tikit] n.票number ['nʌmbə] n.号码five [faiv] num.五sorry ['sɔri] a.对不起的sir [sə:] n.先生cloakroom ['kləukru:m] n.衣帽存放处", phonetic: "/ʌm'brelə/", example: "TODO: 添加例句" },
        ],
        grammar: [
            // TODO: 添加15道语法题
            // 格式: { question: "题目", options: ["A", "B", "C", "D"], correct: 0, explanation: "解释" }
        ],
        listening: {
            dialogue: "...",
            questions: [
                // TODO: 添加3道听力题
            ]
        }
    },
    {
        id: 5,
        title: "Lesson 5 - Nice to meet you很高兴见到你。",
        vocabulary: [
            { word: "先生good", translation: "好morning ['mɔ:niŋ] n.早晨Miss [mis] 小姐new [nju:] a.新的student ['stju:dənt] n.学生French [frentʃ] a.& n.法国人German ['dʒə:mən] a.& n.德国人nice ['nais] a.美好的meet [mi:t] v.遇见Japanese [ˌdʒæpə'ni:z] a.& n.日本人Korean [kə'riən] a.& n.韩国人Chinese [ˌtʃai'ni:z] a.& n.中国人too [tu:] ad.也", phonetic: "/gud/", example: "TODO: 添加例句" },
        ],
        grammar: [
            // TODO: 添加15道语法题
            // 格式: { question: "题目", options: ["A", "B", "C", "D"], correct: 0, explanation: "解释" }
        ],
        listening: {
            dialogue: "...",
            questions: [
                // TODO: 添加3道听力题
            ]
        }
    },
    {
        id: 7,
        title: "Lesson 7 - Are you a teacher?你是教师吗？",
        vocabulary: [
            { word: "expressions 生词和短语I", translation: "我am [m, əm, æm] v.be动词现在时第一人称单数are [ɑ:] v.be动词现在时复数name ['neim] n.名字what [wɔt, wɑ:t] a.& pron.什么nationality [ˌnæʃə'næliti] n.国籍job [dʒɔb] n.工作keyboard ['ki:bɔ:d] n.电脑键盘operator ['ɔpəreitə] n.操作人员engineer [ˌendʒi'niə] n.工程师", phonetic: "/ai/", example: "TODO: 添加例句" },
        ],
        grammar: [
            // TODO: 添加15道语法题
            // 格式: { question: "题目", options: ["A", "B", "C", "D"], correct: 0, explanation: "解释" }
        ],
        listening: {
            dialogue: "...",
            questions: [
                // TODO: 添加3道听力题
            ]
        }
    },
    {
        id: 9,
        title: "Lesson 9 - How are you today?今天好吗？",
        vocabulary: [
            { word: "expressions 生词和短语hello", translation: "喂(表示问候)hi [hai] int.喂，嗨how [hau] ad.怎样today [tə'dei] ad.今天well [wel] a.身体好fine [fain] a.美好的thanks [θæŋks] int.谢谢goodbye [ˌgud'bai] int.再见see [si:] v.见", phonetic: "/hə'ləu/", example: "TODO: 添加例句" },
        ],
        grammar: [
            // TODO: 添加15道语法题
            // 格式: { question: "题目", options: ["A", "B", "C", "D"], correct: 0, explanation: "解释" }
        ],
        listening: {
            dialogue: "...",
            questions: [
                // TODO: 添加3道听力题
            ]
        }
    },
    {
        id: 11,
        title: "Lesson 11 - Is this your shirt?这是你的衬衫吗？",
        vocabulary: [
            { word: "expressions 生词和短语whose", translation: "谁的blue [blu:] a.蓝色的perhaps [pə'hæps] ad.大概white [wait] a.白色的catch [kætʃ] v.抓住", phonetic: "/hu:z/", example: "TODO: 添加例句" },
        ],
        grammar: [
            // TODO: 添加15道语法题
            // 格式: { question: "题目", options: ["A", "B", "C", "D"], correct: 0, explanation: "解释" }
        ],
        listening: {
            dialogue: "...",
            questions: [
                // TODO: 添加3道听力题
            ]
        }
    },
    {
        id: 13,
        title: "Lesson 13 - A new dress一件新连衣裙",
        vocabulary: [
            { word: "expressions 生词和短语colour", translation: "颜色green [gri:n] a.绿色come [kʌm] v.来upstairs [ˌʌp'steəz] ad.楼上smart [smɑ:t] a.时髦的，巧妙的hat [hæt] n.帽子same [seim] a.相同的lovely ['lʌvli] a.可爱的，秀丽的", phonetic: "/'kʌlə/", example: "TODO: 添加例句" },
        ],
        grammar: [
            // TODO: 添加15道语法题
            // 格式: { question: "题目", options: ["A", "B", "C", "D"], correct: 0, explanation: "解释" }
        ],
        listening: {
            dialogue: "...",
            questions: [
                // TODO: 添加3道听力题
            ]
        }
    },
    {
        id: 15,
        title: "Lesson 15 - Your passports, please.请出示你们的护照",
        vocabulary: [
            { word: "expressions 生词和短语Customs", translation: "海关officer  ['ɔfisə] n. 官员girl  [gə:l] n. 女孩，姑娘Danish  ['deiniʃ] a.& n. 丹麦人friend  ['deiniʃ] a.& n. 丹麦人Norwegian  [nɔ:'wi:dʒən] a.& n. 挪威人passport  ['pɑ:spɔ:t] n. 护照brown  [braun] a. 棕色的tourist  ['tuərist] n. 旅游者", phonetic: "/'kʌstəmz/", example: "TODO: 添加例句" },
        ],
        grammar: [
            // TODO: 添加15道语法题
            // 格式: { question: "题目", options: ["A", "B", "C", "D"], correct: 0, explanation: "解释" }
        ],
        listening: {
            dialogue: "...",
            questions: [
                // TODO: 添加3道听力题
            ]
        }
    },
    {
        id: 17,
        title: "Lesson 17 - How do you do?你 好！",
        vocabulary: [
            { word: "expressions 生词和短语employee", translation: "雇员hard-working  ['hɑ:dwə:kiŋ] a. 勤奋的sales", phonetic: "/im'plɔi-i:/", example: "TODO: 添加例句" },
            { word: "reps  推销员man", translation: "男人office  ['ɔfis] n. 办公室assistant  [ə'sistənt] n. 助手", phonetic: "/mæn/", example: "TODO: 添加例句" },
        ],
        grammar: [
            // TODO: 添加15道语法题
            // 格式: { question: "题目", options: ["A", "B", "C", "D"], correct: 0, explanation: "解释" }
        ],
        listening: {
            dialogue: "reps 推销员man [mæn] n. 男人office ['ɔfis] n. 办公室assistant [ə'sistənt] n. 助手...",
            questions: [
                // TODO: 添加3道听力题
            ]
        }
    },
    {
        id: 19,
        title: "Lesson 19 - Tired and thirsty又累又渴",
        vocabulary: [
            { word: "expressions 生词和短语matter", translation: "事情children  ['tʃildrən] n. 孩子们(child 的复数)tired  ['taiəd] a. 累，疲乏boy  [bɔi] n. 男孩thirsty  ['θə:sti] a. 渴mum  ['mʌm] n. 妈妈(儿语)sit", phonetic: "/'mætə/", example: "TODO: 添加例句" },
            { word: "坐下right", translation: "好，可以ice", phonetic: "/rait/", example: "TODO: 添加例句" },
        ],
        grammar: [
            // TODO: 添加15道语法题
            // 格式: { question: "题目", options: ["A", "B", "C", "D"], correct: 0, explanation: "解释" }
        ],
        listening: {
            dialogue: "down [ˌsit'daun] 坐下right [rait] a. 好，可以ice cream [ˌais'kri:m] 冰淇淋...",
            questions: [
                // TODO: 添加3道听力题
            ]
        }
    }
];
