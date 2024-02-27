const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Hedom is power' });
});

app.listen(3000, () => {
  console.log('On port 3000!');
});