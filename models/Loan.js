'use strict';
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

function setOneMonthFromNow() {
    var oneMonth = new Date();
    return oneMonth.setMonth(oneMonth.getMonth() + 1);
}

function setAmount(num) {
    return Math.round(num * 100) / 100;
}

var LoanSchema = new mongoose.Schema({
    loan_to: {
        type: ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number,
        set: setAmount,
        required: true
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
