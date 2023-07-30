var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
    // Serve static files from the '../client/build' folder
    app.use(express.static(path.resolve('..', 'client', 'build')));
  
    // For all other requests, serve the React application
    app.get('*', (req, res) =>
      res.sendFile(path.resolve('..', 'client', 'build', 'index.html'))
    );
  } else if (process.env.NODE_ENV === 'development') {
    var corsOptions = {
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200
    };
    app.use(cors(corsOptions));
  }

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
