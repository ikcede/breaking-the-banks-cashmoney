var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

function setOneMonthFromNow() {
    var date = Date.now;
    var a = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    return new Date(a, m, d);
}

var LoanSchema = new mongoose.Schema({
    loan_to: {
        type: ObjectId,
        ref: 'User'
    },
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


module.exports = mongoose.model('Loan', LoanSchema);
