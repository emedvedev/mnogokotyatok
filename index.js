const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('kittens'));

app.get('/', (req, res) => {
  fs.readdir('kittens', (err, items) => {
    res.send(`
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        body {
          height: 100vh;
          background-image: url(${items[Math.floor(Math.random() * items.length)]});
          background-size: cover;
          background-position: center center;
        }
      </style>
    `);
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
