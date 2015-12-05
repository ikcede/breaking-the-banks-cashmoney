'use strict';
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Loan = require('../models/Loan.js');
var User = require('../models/User.js');

router.get('/', function(req, res, next) {
    Loan.find(function (err, loans) {
        if (err) return next(err);
        res.json(loans);
    });
});

router.get('/:id', function(req, res, next) {
    Loan.findById(req.params.id, function (err, loan) {
        if (err) return next(err);
        res.json(loan);
    });
});

router.post('/', function(req, res, next) {
    Loan.create(req.body, function(err, loan) {
        if (err) return next(err);
        User.findById(loan.loan_to, function(err, user) {
            if (loan.amount > user.current_credit_line) res.send("Not enough credit available for loan.");
            else {
                User.findByIdAndUpdate(loan.loan_to, {$push: {total_loans: loan._id }, current_credit_line: user.current_credit_line - loan.amount}, function (err, user) {
                    if (err) return next(err);
                    res.json(loan);
                });
            }
        });
    });
});

module.exports = router;
