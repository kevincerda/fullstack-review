const express = require('express');
const axios = require('axios');
const parser = require('body-parser');
const helper = require('../helpers/github.js')
const save = require('../database/index.js')
let app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.post('/repos', (req, res) => {
  helper.getReposByUsername(req.body.data, (data) => {
    //save data using save.save method
  });
  console.log('Requested data: ', req.body.data);
  req.end('Success');
});

app.get('/repos', (req, res) => {
  console.log('Request:', req.body);
  console.log('Response:', res.body);
  res.send();
});

let port = 1128;

app.listen(port, () => console.log(`listening on port ${port}`));
