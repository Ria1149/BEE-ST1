const express = require('express');
const comment = require("../model/commentModel");

exports.createcomment = async(req,res) => {
    try{
        const data = req.body;
        const post = new comment(data)
        await post.save().then(() => {
            res.status(200).json({message: "Added!!"});
        });
    }
    catch(error){
        console.log(error)
    }
}

exports.getcomment = async(req,res) => {
    try{
        const comment = await comment.find();
         res.status(200).json({post});
 
     }
     catch(error){
         console.log(error)
     }
}

exports.getcommentbyID = async(req,res) => {
    const id =req.params.id;
     try{
        
         const comment = await comment.findById(id);
         res.send("comment = " + comment);
 
     }
     catch(error){
         console.log(error)
     }
}
exports.updatecomment=async(req,res)=>{
    try{
        const {id}=req.params;
        const {title, description}=req.body;

        const comment=await comment.findByIdAndUpdate(
            {_id:id},
            {
                title, 
                description, 
                updateAt:Date.now()},
        )

        res.status(200).json({
            success:true,
            data:comment,
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

exports.deletecomment =async(req,res)=>{
    try{
        const {id}=req.params;
        await comment.findByIdAndDelete(id);

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

