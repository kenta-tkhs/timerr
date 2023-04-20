const express = require('express');
const mysql = require('mysql2');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();
const ejs = require('ejs');


app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pappi2002',	
  database: 'list_app'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  if (req.session.userId === undefined) {
    res.locals.username = 'ゲスト';
    res.locals.isLoggedIn = false;
  } else {
    res.locals.username = req.session.username;
    res.locals.isLoggedIn = true;
  }
  next();
});

app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      console.log(results);
      res.render('hello.ejs');
    }
  );
  res.render('index.ejs');
});

app.get('/signup', (req, res) => {
  res.render('signup.ejs')
});

app.listen(3000);
// $ node app.js //