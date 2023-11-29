const express = require('express')
const app = express();
const router = express.Router();
const bookmodel = require('../models/commentModels')
const bookcontroller = require('../controller/commentsController')

app.use(express.json())

app.use('/api/posts:postId/comments',commentsController.createcomment);

app.use('/api/posts:postId/comments',commentsController.getcomment);

app.use('/api/posts:postId/comments/:commentId',commentsController.getcommentbyID);

app.use('/api/posts:postId/comments/:commentId',commentsController.updatecomment);

app.use('/deletebook',commentsController.deletecomment);

app.use("", router)
module.exports = app;
