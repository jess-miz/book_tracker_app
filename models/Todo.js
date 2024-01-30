const mongoose = require('mongoose')
const validator = require('validator')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    validate(value){
      if(value > 10){
          throw new Error ("Please Enter A Number 1-10");
      } else if (!value){
         throw new Error ('Please give a rating')
      }
    }
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
