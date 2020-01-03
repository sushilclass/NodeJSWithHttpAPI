const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    FirstName: String,
    LastName: String
},{
    timestamps: true
});

module.exports = mongoose.model('customers',CustomerSchema);