const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();
const ejs = require('ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',	
  database: 'blog'
});

app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/setting', (req, res) => {
  res.render('setting.ejs')
});

app.listen(3000);
// $ node app.js //