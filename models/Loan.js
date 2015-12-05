var mongoose = require('mongoose');

var LoanSchema = new mongoose.Schema({
    created_at: {
        type: Date,
        default: Date.now
    },
    deadline: {
        type: Date,
        default: setOneMonthFromNow,
    },
    paid:{
        type: Boolean,
        default: false
    }
});

function setOneMonthFromNow() {
    var date = Date.now;
    var a = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    return new Date(a, m, d);
}

module.exports = mongoose.model('Loan', LoanSchema);
