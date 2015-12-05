var express = require('express');
var router = express.Router();

var Loan = require('../models/Loan.js');
var Payment = require('../models/Payment.js');
var User = require('../models/User.js');

router.get('/', function(req, res, next) {
    Payment.find(function (err, payments) {
        if (err) return next(err);
        res.json(payments);
    });
});

router.get('/:id', function(req, res, next) {
    Payment.findById(req.params.id, function (err, payment) {
        if (err) return next(err);
        res.json(payment);
    });
});

router.post('/', function(req, res, next) {
    Payment.create(req.body, function(err, payment) {
    if (err) return next(err);
        Loan.findByIdAndUpdate(payment.loan_id, {paid: true}, function(err, loan) {
            if (err) return next(err);
            User.findById(loan.loan_to, function(err, user) {
                var credit = user.current_credit_line;
                User.findByIdAndUpdate(loan.loan_to, {current_credit_line: credit + loan.amount}, function(err, user) {
                    res.json(payment);
                });
            });
        });
    });
});

module.exports = router;
