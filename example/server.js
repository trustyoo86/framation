require('babel-register');

const express = require('express');
const path = require('path');

const app = express();

app.use('/dist/', express.static(path.resolve(__dirname, '..', 'dist')));
app.use('', express.static(path.resolve(__dirname, '..', 'example')))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(4000, () => {
  console.log('')
});

