const mongoose = require('mongoose');
// Equivalent to below 
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

var logbook = new Schema({
    name: String,
    comment: String,
    time: {type: Date, default: Date.now},
    ip:String
});
mongoose.model('logbook', logbook)