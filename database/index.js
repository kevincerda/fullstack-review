const mongoose = require('mongoose');
mongoose.connect('mongodb://kevin:test@ds133360.mlab.com:33360/fetcher');

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