'use strict';

var _api = require('./api.js');

var express = require('express');
var next = require('next');

var dev = process.env.NODE_ENV !== 'production';
var app = next({ dev: dev });
var handle = app.getRequestHandler();

app.prepare().then(function () {
  var server = express();

  server.get('/', function (req, res) {
    return app.render(req, res, '/index', req.query);
  });

  server.get('*', function (req, res) {
    res.send(JSON.stringify((0, _api.parseReq)(req)));
  });

  server.listen(8080, function (err) {
    if (err) throw err;
    console.log('> Ready on http://localhost:8080');
  });
});