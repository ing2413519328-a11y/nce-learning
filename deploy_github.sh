#!/bin/bash
# GitHub Pages 一键部署脚本

echo "🚀 新概念英语学习系统 - GitHub Pages 部署"
echo "============================================"
echo ""

# 检查是否已经是git仓库
if [ -d .git ]; then
    echo "✅ 检测到git仓库"
else
    echo "📦 初始化git仓库..."
    git init
    git add .
    git commit -m "新概念英语学习系统 - 初始提交"
    echo "✅ git仓库初始化完成"
fi

echo ""
echo "📝 接下来的步骤："
echo ""
echo "1. 访问 https://github.com/new 创建新仓库"
echo "   - 仓库名建议: nce-learning"
echo "   - 设置为 Public（公开）"
echo "   - 不要勾选任何初始化选项"
echo ""
echo "2. 创建完成后，复制仓库地址（例如：https://github.com/你的用户名/nce-learning.git）"
echo ""
read -p "请输入你的GitHub仓库地址: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ 未输入仓库地址，退出"
    exit 1
fi

echo ""
echo "🔗 关联远程仓库..."
git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"

echo "📤 推送到GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 部署成功！"
    echo ""
    echo "📋 下一步："
    echo "1. 访问你的GitHub仓库"
    echo "2. 点击 Settings → Pages"
    echo "3. Source 选择 'main' 分支"
    echo "4. 点击 Save"
    echo ""
    echo "⏰ 等待1-2分钟后，你的网站将在以下地址可用："

    # 从仓库URL提取用户名和仓库名
    USERNAME=$(echo $REPO_URL | sed -E 's/.*github\.com[:/]([^/]+)\/.*/\1/')
    REPONAME=$(echo $REPO_URL | sed -E 's/.*\/([^/]+)(\.git)?$/\1/' | sed 's/\.git$//')

    echo ""
    echo "   https://${USERNAME}.github.io/${REPONAME}/"
    echo ""
    echo "🎉 现在可以在任何设备、任何网络访问你的学习系统了！"
else
    echo ""
    echo "❌ 推送失败"
    echo ""
    echo "可能的原因："
    echo "1. 仓库地址错误"
    echo "2. 没有配置GitHub认证"
    echo "3. 网络问题"
    echo ""
    echo "💡 解决方法："
    echo "1. 检查仓库地址是否正确"
    echo "2. 配置GitHub认证: gh auth login"
    echo "3. 或者手动推送: git push -u origin main"
fi
