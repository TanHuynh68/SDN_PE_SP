const mongoose = require('mongoose')

const positionSchema = new mongoose.Schema({
    position: {
        type: String,
        require: true
    },
}, {timestamps: true});

const position = mongoose.model('positions', positionSchema)
module.exports = position

// _id:1
// position: Captain MU
// age: 21
//...