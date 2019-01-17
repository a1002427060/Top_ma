const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get("/",(req,res) =>{
    console.log(req.query);
    res.send("ok")
    
})
app.get("/user/:user/:password",(req,res) =>{
    console.log(req.params);
    res.send("ok") 
})
app.post("/user",(req,res)=>{
    console.log(req.body);
    res.send("请求成功")
    
})
app.listen(3001,() =>{
    console.log("running at http://127.0.0.1:3001");
    
})