// user model
//email - require , trimm, type string, min length 1

var mongoose = require('mongoose');

var User = mongoose.model('Users', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trimm: true
  }
});

// var newUser  = new User({
//   email: 'simonas.rugevicius@gmail.com'
// });
// newUser.save().then((doc) => {
//   console.log('Saved user');
//   console.log(JSON.stringify(doc, undefined, 2));
// },(e) =>{
//   console.log('Unable to save data', e);
// });

module.exports = {User};
