#!/usr/bin/env python3
"""
新概念英语课程数据提取工具
从EPUB文件中提取课程信息并生成JavaScript格式
"""

import ebooklib
from ebooklib import epub
from bs4 import BeautifulSoup
import re
import json

def extract_vocabulary(text):
    """提取单词列表"""
    vocab_list = []
    # 查找单词部分
    vocab_match = re.search(r'New Word.*?(?=参考译文|$)', text, re.DOTALL | re.IGNORECASE)
    if vocab_match:
        vocab_text = vocab_match.group(0)
        # 匹配单词格式: word [phonetic] type. translation
        pattern = r'(\w+(?:\s+\w+)?)\s+\[([^\]]+)\]\s+(?:v\.|n\.|a\.|ad\.|pron\.|int\.|num\.)\s*([^\n]+)'
        matches = re.findall(pattern, vocab_text)

        for word, phonetic, translation in matches:
            vocab_list.append({
                'word': word.strip(),
                'phonetic': f'/{phonetic.strip()}/',
                'translation': translation.strip()
            })

    return vocab_list

def extract_dialogue(text):
    """提取对话内容"""
    # 查找对话部分（在问题之后，单词之前）
    dialogue_match = re.search(r'听录音.*?\n(.*?)(?=New Word|参考译文)', text, re.DOTALL)
    if dialogue_match:
        dialogue = dialogue_match.group(1).strip()
        # 清理格式
        dialogue = re.sub(r'\s+', ' ', dialogue)
        return dialogue
    return ""

def process_epub(epub_path, output_file):
    """处理EPUB文件并生成课程数据"""
    book = epub.read_epub(epub_path)
    lessons = []

    for item in book.get_items():
        if item.get_type() == ebooklib.ITEM_DOCUMENT:
            soup = BeautifulSoup(item.get_content(), 'html.parser')
            text = soup.get_text()

            # 查找课程标题
            lesson_match = re.search(r'Lesson\s+(\d+)\s+(.+?)(?=Listen|$)', text, re.MULTILINE)
            if lesson_match and len(text) > 200:  # 确保是实际课程内容
                lesson_num = int(lesson_match.group(1))
                lesson_title = lesson_match.group(2).strip()

                # 提取数据
                vocabulary = extract_vocabulary(text)
                dialogue = extract_dialogue(text)

                if vocabulary or dialogue:  # 只保存有内容的课程
                    lesson_data = {
                        'id': lesson_num,
                        'title': lesson_title,
                        'vocabulary': vocabulary[:8],  # 限制单词数量
                        'dialogue': dialogue[:200] if dialogue else ""  # 限制对话长度
                    }
                    lessons.append(lesson_data)

    # 按课程编号排序
    lessons.sort(key=lambda x: x['id'])

    # 生成JavaScript代码
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('// 新概念英语第一册课程数据\n')
        f.write('// 注意：这只是课程框架，你需要补充完整的单词、语法题和听力题\n\n')
        f.write('const lessonsTemplate = [\n')

        for i, lesson in enumerate(lessons[:10]):  # 只生成前10课作为示例
            f.write('    {\n')
            f.write(f'        id: {lesson["id"]},\n')
            f.write(f'        title: "Lesson {lesson["id"]} - {lesson["title"]}",\n')
            f.write('        vocabulary: [\n')

            for vocab in lesson['vocabulary']:
                f.write(f'            {{ word: "{vocab["word"]}", ')
                f.write(f'translation: "{vocab["translation"]}", ')
                f.write(f'phonetic: "{vocab["phonetic"]}", ')
                f.write(f'example: "TODO: 添加例句" }},\n')

            f.write('        ],\n')
            f.write('        grammar: [\n')
            f.write('            // TODO: 添加15道语法题\n')
            f.write('            // 格式: { question: "题目", options: ["A", "B", "C", "D"], correct: 0, explanation: "解释" }\n')
            f.write('        ],\n')
            f.write('        listening: {\n')
            f.write(f'            dialogue: "{lesson["dialogue"][:100]}...",\n')
            f.write('            questions: [\n')
            f.write('                // TODO: 添加3道听力题\n')
            f.write('            ]\n')
            f.write('        }\n')
            f.write('    }' + (',\n' if i < min(len(lessons), 10) - 1 else '\n'))

        f.write('];\n')

    print(f"✓ 成功提取 {len(lessons)} 课数据")
    print(f"✓ 已生成前10课模板到: {output_file}")
    print(f"\n提示：")
    print(f"1. 查看生成的文件了解数据结构")
    print(f"2. 使用 editor.html 编辑器补充完整内容")
    print(f"3. 或者手动编辑 lessons.js 文件")

if __name__ == '__main__':
    epub_path = "/Users/ing/新/认真英语.epub"
    output_file = "/Users/ing/新/lessons_template.js"

    process_epub(epub_path, output_file)
