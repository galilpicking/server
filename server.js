const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World, from express');
});

app.post('/safety', async (req, res) => {
  const strHtml = req.body.html;
  const url = 'https://galilpicking.github.io/safety/';
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();
  firstPage.drawText('This text was added with JavaScript!', {
    x: 5,
    y: height / 2 + 300,
    size: 50,
    font: helveticaFont,
    color: rgb(0.95, 0.1, 0.1),
    rotate: degrees(-45),
  });

  const pdfBytes = await pdfDoc.save();
});

app.post('/rent', async (req, res) => {
  const strHtml = req.body.html;
  const url = 'https://galilpicking.github.io/rent/?price=725';
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();
  firstPage.drawText('This text was added with JavaScript!', {
    x: 5,
    y: height / 2 + 300,
    size: 50,
    font: helveticaFont,
    color: rgb(0.95, 0.1, 0.1),
    rotate: degrees(-45),
  });

  const pdfBytes = await pdfDoc.save();
});

app.post('/work', async (req, res) => {
  const strHtml = req.body.html;
  const url = 'https://galilpicking.github.io/work/';
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();
  firstPage.drawText('This text was added with JavaScript!', {
    x: 5,
    y: height / 2 + 300,
    size: 50,
    font: helveticaFont,
    color: rgb(0.95, 0.1, 0.1),
    rotate: degrees(-45),
  });

  const pdfBytes = await pdfDoc.save();
});

app.listen(process.env.PORT || port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
