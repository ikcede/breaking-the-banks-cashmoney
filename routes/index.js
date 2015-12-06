var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('landing', { title: 'Credit 22', layout: false });
});

router.get('/signup', function(req, res, next) {
    res.render('signup', { title: 'Sign Up' });
});

router.get('/dashboard', function(req, res, next) {
    res.render('dashboard', {
        title: 'Dashboard', 
        layout: 'layouts/dashlayout', 
        active: {
            home: true, loan: false, pay: false, settings: false   
        }
    });
});

router.get('/loan', function(req, res, next) {
    res.render('loan', { 
        title: 'New Loan', 
        layout: 'layouts/dashlayout', 
        active: {
            home: false, loan: true, pay: false, settings: false   
        }
    });
});

router.get('/pay', function(req, res, next) {
    res.render('pay', { 
        title: 'Pay Loans', 
        layout: 'layouts/dashlayout', 
        active: {
            home: false, loan: false, pay: true, settings: false   
        }
    });
});

router.get('/settings', function(req, res, next) {
    res.render('settings', { 
        title: 'Settings', 
        layout: 'layouts/dashlayout', 
        active: {
            home: false, loan: false, pay: false, settings: true   
        }
    });
});

module.exports = router;
