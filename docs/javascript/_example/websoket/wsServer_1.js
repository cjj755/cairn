const http = require('http');
const websoket = require('ws');

// 通过http 创建一个node服务
const port = 6060;
const server = http.createServer();

// 创建一个websocket 服务
const ws = new websoket.Server({ server });

ws.on('connection', (socket) => {
    console.log("websocket 链接打开");

    socket.on('message', (message) => {
        console.log(`收到前端发过来的消息：${message}`);
        
        socket.send("node服务在收到前端消息后, 反馈的消息！");
    });

    socket.on('close', () => {
        console.log("websocket链接关闭!");
    })
});

server.listen(port, () => {
    console.log(`node服务已开启,地址:http:localhost:${port}`);
});