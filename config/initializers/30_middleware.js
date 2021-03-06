var express = require('express')
  , poweredBy = require('connect-powered-by');
var session = require('express-session');
var cookieParser = require('cookie-parser');
module.exports = function() {
  // Use middleware.  Standard [Connect](http://www.senchalabs.org/connect/)
  // middleware is built-in, with additional [third-party](https://github.com/senchalabs/connect/wiki)
  // middleware available as separate modules.
  if ('development' == this.env) {
    this.use(express.logger());
  }

  this.use(poweredBy('Locomotive'));
  this.use(express.favicon());
  this.use(express.static(__dirname + '/../../public'));
  this.use(express.bodyParser());
  this.use(express.methodOverride());

  this.use(cookieParser());
  this.use(session({
    //key: 'user_sid',
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true,
    //cookie: {
        //expires: 600000
    //}
}));
  this.use(this.router);
  this.use(express.errorHandler());
}
