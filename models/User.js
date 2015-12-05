'use strict';
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

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
        required: true,
        default: 20.00
    },
    current_credit_line: {
        type: Number,
        set: setCredit,
        required: true,
        default: 20.00
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    total_loans: [{ type: ObjectId, ref: 'Loan' }]
});


module.exports = mongoose.model('User', UserSchema);
