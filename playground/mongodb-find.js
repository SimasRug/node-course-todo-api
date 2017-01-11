// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to mongo db server');

// db.collection('Todos').find({
//   _id: new ObjectID('58753194467ab0a3fc7e9bc7')
// }).toArray().then((docs) => {
//   console.log('Todos:');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch Todos', err);
// });


// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch Todos', err);
// });

// db.collection('Users').find({
//   name: 'Simonas'
// }).count().then((count) => {
//   console.log(`Todos with name Simonas count: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch Todos');
// });

db.collection('Users').find({
  name: 'Simonas'
}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch user data');
});

  // db.close();
});
