const { ObjectId } = require('mongodb')
const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req,res)=>{
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, date: new Date(), rating: req.body.bookRating, userId: req.user.id})
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    updateModal: async (req, res) => {
        console.log(req.params);
        try{
            const id = req.params.id;
            res.render('updateModal.ejs', { id });
        }catch(err){
            console.log(err)
        } 
    },
    updateData: async (req, res) =>{
        const { _id, bookTitle, rating} = req.body;
        try{
            await Todo.findOneAndUpdate({_id: ObjectId(_id)},{
                $set: {
                    todo : bookTitle,
                    rating: rating
                }
        })
        res.redirect('/todos');
        }catch(err){
            console.log(err)
            console.log('Updated document');
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    