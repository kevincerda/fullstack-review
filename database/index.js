const mongoose = require('mongoose');
mongoose.connect('mongodb://kevin:test@ds133360.mlab.com:33360/fetcher');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Server connected'));

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  owner: String,
  description: String,
  size: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;