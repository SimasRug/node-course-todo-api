// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
// var user = {name:'Simonas', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to mongo db server');

// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
// }, (err, result) =>{
//   if (err) {
//     return console.log('Unable to insert Todo', err);
//   }
//
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });
//insert new doc into users {name, age, location}
// db.collection('Users').insertOne({
//   name: 'Alice',
//   age: 20,
//   location: 'Copenhagen'
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to insert to Users', err);
//   }
//   console.log(result.ops[0]._id.getTimestamp());
// });

  db.close();
});
