const express = require('express');
const post = require("../model/postModel");

exports.createpost = async(req,res) => {
    try{
        const data = req.body;
        const post = new postModel(data)
        await post.save().then(() => {
            res.status(200).json({message: "Added!!"});
        });
    }
    catch(error){
        console.log(error)
    }
}

exports.getpost = async(req,res) => {
    try{
        const post = await postModel.find();
         res.status(200).json({post});
 
     }
     catch(error){
         console.log(error)
     }
}

exports.getpostbyID = async(req,res) => {
    const id =req.params.id;
     try{
        
         const post = await postModel.findById(id);
         res.send("post = " + post);
 
     }
     catch(error){
         console.log(error)
     }
}
exports.updateTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const {title, description}=req.body;

        const post=await post.findByIdAndUpdate(
            {_id:id},
            {title, description, updateAt:Date.now()},
        )

        res.status(200).json({
            success:true,
            data:post,
            message:"data updated successfully"
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:error.message,
            message:"there was a server error"
        }) 
    }
}
exports.deletepost =async(req,res)=>{
    try{
        const {id}=req.params;
        await post.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"deleted successfully"
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:error.message,
            message:"there was a server error"
        }) 
    }
}

