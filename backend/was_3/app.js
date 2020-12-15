var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Router 정의
const userRouter = require('./router/user');
const tempRouter = require('./router/temp');
const requestRouter = require('./router/request');
const reviewRouter = require('./router/review');
const my_listRouter = require('./router/my_list');
const searchRouter = require('./router/search');

app.use('/user', userRouter);
app.use('/temp', tempRouter);
app.use('/request', requestRouter);
app.use('/review', reviewRouter);
app.use('/my_list', my_listRouter);
app.use('/search', searchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

