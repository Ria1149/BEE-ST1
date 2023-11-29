const express = require('express');
const app = express();
const mongoose=require("mongoose");
const dB = require('./connection/connection');
const postroute = require('./router/postRoutes');
const commentroute = require('./router/commentRoutes');
app.use(express.json())
dB.connectTodB()
app.get("/", (req,res) =>{
    res.send("hello")
})
app.use("/api/posts",postroute)
app.use("/api/posts/:postid/comments",commentroute)

app.listen(2000,() =>{
    console.log("yes connected")
} )