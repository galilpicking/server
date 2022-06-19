const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

var fs = require('fs');
var pdf = require('html-pdf');

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let html_to_pdf = require('html-pdf-node');
let options = { format: 'A4' };

app.get('/', (req, res) => {
  res.send('Hello World, from express');
});

app.post('/returnpdf', async (req, res) => {
  const strHtml = req.body.html;

  pdf.create(strHtml).toBuffer(function (err, buffer) {
    console.log('This is a buffer:', Buffer.isBuffer(buffer));
    console.log('This is a buffer:', buffer);
    res.send(buffer);
  });
});

app.listen(process.env.PORT || port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
