'use strict';

var consts = require('../../constants');

function configure (app, wares) {
  var express = require('express'),
      api = express.Router( )
  ;

  if (app.enabled('api')) {
    api.use(wares.sendJSONStatus);
    api.get('/:secret/test', wares.verifyAuthorization, function (req, res, next) {
        return res.json({status: 'ok'});
    });

    api.get('/test', wares.verifyAuthorization, function (req, res, next) {
        return res.json({status: 'ok'});
    });
  }

  return api;
}

module.exports = configure;
