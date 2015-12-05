var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  total_credit_line: { type: Number, amount: setCredit, default: 20.00 },
  current_credit_line: { type: Number, amount: setCredit, default: 20.00 },
  updated_at: { type: Date, default: Date.now }
});

function setCredit(num) {
    return Math.round(num * 100) / 100;
}

module.exports = mongoose.model('User', UserSchema);
