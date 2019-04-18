const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//declaration du schema da la base de donnee
const VoteSchema = new Schema({
    employe: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    }
});

//creation de collection et ajout au schema
const Vote = mongoose.model('Vote', VoteSchema);
module.exports = Vote;