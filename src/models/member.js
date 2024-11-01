const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    key: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true
    },
}, {timestamps: true});

const members = mongoose.model('members', memberSchema)
module.exports = members