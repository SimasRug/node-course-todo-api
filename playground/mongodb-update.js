// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to mongo db server');

//findOneAndUpdate
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('58765270467ab0a3fc7ebdb5')
// },{
//   $set: {
//     completed: true
//   }
// },{
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });


db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('58752a93d7140927845973db')
}, {
  $set: { name: 'Bob' },
  $inc: { age: 1 }
}, { returnOriginal: false })
.then((result) => {
  console.log(result);
});
// db.collection('Users').findOneAndUpdate({
//   _id: new ObjectID('58752a93d7140927845973db')
// }, {
//   $inc: { age: 1 }
// }, { returnOriginal: false })
// .then((result) => {
//   console.log(result);
// });

  // db.close();
});
