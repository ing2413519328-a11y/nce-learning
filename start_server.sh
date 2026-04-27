#!/bin/bash
# 启动本地HTTP服务器
# 使用方法: ./start_server.sh

PORT=8080

echo "🚀 启动新概念英语学习服务器..."
echo "📱 在手机浏览器中访问:"
echo ""

# 获取本机IP地址
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -n 1)
else
    # Linux
    IP=$(hostname -I | awk '{print $1}')
fi

echo "   http://${IP}:${PORT}"
echo ""
echo "💡 提示:"
echo "   1. 确保手机和电脑在同一WiFi网络"
echo "   2. 在手机浏览器输入上面的地址"
echo "   3. 按 Ctrl+C 停止服务器"
echo ""
echo "================================"
echo ""

# 启动Python HTTP服务器
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer $PORT
else
    echo "❌ 错误: 未找到Python"
    exit 1
fi
