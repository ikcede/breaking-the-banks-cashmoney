'use strict';
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var PaymentSchema = new mongoose.Schema({
    loan_id: {
        type: ObjectId,
        ref: 'Loan'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Payment', PaymentSchema);
