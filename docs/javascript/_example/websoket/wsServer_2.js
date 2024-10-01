const express = require('express');
const expressWs = require('express-ws');
// 创建服务
const app = express()

// 创建短连接路由
const apiRouter = express.Router()

// 创建长连接路由
const wsRouter = express.Router()
expressWs(wsRouter)
expressWs(app)

const prot = 6060 // 启动端口

// 短连接api
apiRouter.get('/test2', (req, res) => {
    res.send({ code: 200, message: 'success', data: "传输的数据", query: req.query })
})

// 长连接api
wsRouter.ws('/test1', (ws, req) => {
    console.log("websocket 链接打开");

    ws.on('message', (message) => {
        console.log(`收到前端发过来的消息：${message}`);
        
        ws.send("node服务在收到前端消息后, 反馈的消息！");
    });

    ws.on('close', () => {
        console.log("websocket链接关闭!");
    })
})



// 短连接
app.use('/api', apiRouter)

// 长连接
app.use('/ws', wsRouter)

app.listen(prot, err => {
  if (!err) console.log(`服务启动成功 http://localhost:${prot}`)
})

