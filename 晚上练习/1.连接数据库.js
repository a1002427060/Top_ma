const express = require("express")
const app = express()
const mysql = require("mysql")
const conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'mysql_001'
  });
// app.get("/",(req,res) =>{
    const sqlstr1 = "select * from users where isdel =0" 
    conn.query(sqlstr1,(err,result) =>{
        if(err) return console.log("数据读取失败"+err.message)
        console.log(result);    
    })
    // res.send(req.query)
    // const user ={uname:"李四",age:22,gender:"女"}
    // const sqlstr2 = "insert into users set ?"
    // conn.query(sqlstr2,user,(err,result) =>{
    //     if(err) return console.log("数据添加失败"+err.message)
    //     console.log(result);
        
    // })
    const  user= {id:3,isdel:1}
    const sqlstr2 = "update users set ? where id =?"
    conn.query(sqlstr2,[user,user.id],(err,result)=>{
        if(err) return console.log("数据修改失败"+err.message)
        console.log(result);   
    })

   const sqlstr3 = "delete from users where id =?"
   conn.query(sqlstr3,8,(err,result) => {
    if(err) return console.log("删除失败"+err.message)
    console.log(result);   
   })
   




app.listen(3001, function() {
    console.log('Express server running at http://127.0.0.1:3001')
})