'use strict';
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var DEFAULT_CREDIT_LINE = 20.00;

function setCredit(num) {
    return Math.round(num * 100) / 100;
}

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true
    },
    total_credit_line: {
        type: Number,
        set: setCredit,
        default: DEFAULT_CREDIT_LINE
    },
    current_credit_line: {
        type: Number,
        set: setCredit,
        default: DEFAULT_CREDIT_LINE
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    total_loans: [{ type: ObjectId, ref: 'Loan' }]
});


module.exports = mongoose.model('User', UserSchema);
