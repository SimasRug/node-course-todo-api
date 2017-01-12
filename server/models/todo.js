var mongoose = require('mongoose');


var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength:1,
    trim:true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) =>{
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('unable to save TODO');
// });
// var newTodo = new Todo({
//   text:'  Save this To db   '
// });
// newTodo.save().then((doc) =>{
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('unable to save Todo');
// });

module.exports = {Todo};
