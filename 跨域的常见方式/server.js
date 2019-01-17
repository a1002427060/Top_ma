const express = require('express')

const app = express()


// No 'Access-Control-Allow-Origin' header is present on the requested resource.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.get('/', (req, res) => {
    res.send('express 启动了')
})

app.get('/getusers', (req, res) => {
    res.send({
        err: 0,
        data: [
            { name: '张三', age: 18 },
            { name: 'lisi', age: 81 }
        ]
    })
})

app.get('/jsonptest', (req, res) => {
    // console.log('888888')
    var obj = {
        err: 0,
        data: [
            { name: '张三', age: 18 },
            { name: 'lisi', age: 81 }
        ]
    }
    var fnName = req.query.cb
    console.log(fnName)
    res.send(`${fnName}(${JSON.stringify(obj)})`)
})

const port = 80
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
})