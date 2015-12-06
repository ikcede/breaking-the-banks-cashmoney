var express = require('express');
var router = express.Router();

var User = require('../models/User.js');

router.post('/', function(req, res, next) {
    var loginInfo = req.body;
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) res.send(false);
        if (user.email === loginInfo.email && user.password === loginInfo.password) res.json(user);
        else res.send(false);
    });
});

module.exports = router;
