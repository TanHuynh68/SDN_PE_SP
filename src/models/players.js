

var mongoose = require('mongoose')
const Schema = mongoose.Schema;
const playerSchema = new Schema(
    {
        playerName: {
            type: String,
            require: true
        },
        team:{
            type: String,
            require: true
        },
        minutesPlayed:{
            type: String,
            require: true
        },
        image:{
            type: String,
            require: true
        },
        PassingAccuracy:{
            type: Number,
            require: true
        }
        ,
        isCaptain:{
            type: boolean,
            default: false
        }
        ,
        position: { type: mongoose.Schema.Types.ObjectId, ref: "positions", require: true }
    },
    { timestamps: true, });
module.exports = mongoose.model('players', playerSchema);