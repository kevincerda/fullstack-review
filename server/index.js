const express = require('express');
const parser = require('body-parser');
const { getReposByUsername } = require('../helpers/github');
const { save } = require('../database/index');

let app = express();
let port = 1128;

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.post('/repos', (req, res) => {
  getReposByUsername(req.body.data, (data) => {
    //save data using save.save method
  });
  console.log('Requested data: ', req.body.data);
  req.end();
});

app.get('/repos', (req, res) => {
  console.log('Request:', req.body);
  console.log('Response:', res.body);
  res.send();
});


app.listen(port, () => console.log(`listening on port ${port}`));
