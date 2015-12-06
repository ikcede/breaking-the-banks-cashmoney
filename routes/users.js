'use strict';
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/User.js');
var Loan = require('../models/Loan.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find(function(err, users) {
        if (err) return next(err);
        res.json(users);
    });
});

/* GET /users/id */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

router.get('/:id/get-loans', function(req, res, next) {
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    var loans = [];
    var loanId;
    for (var i = 0; i < user.total_loans.length; i++) {
        loanId = user.total_loans[i];
        Loan.findById(loanId, function(err, loan) {
            if (err) return next(err);
            loans.push(loan);
            if (loans.length === user.total_loans.length) res.json(loans);
        });
    }
  });
});

router.post('/', function(req, res, next) {
    User.create(req.body, function(err, user) {
        if (err) return next(err);
        res.json(user);
    });
});

router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* DELETE /users/:id */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

module.exports = router;
