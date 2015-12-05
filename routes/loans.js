var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Loan = require('../models/Loan.js');

/* GET loans listing. */
router.get('/', function(req, res, next) {
    Loan.find(function (err, loans) {
        if (err) return next(err);
        res.json(loans);
    });
});

module.exports = router;
