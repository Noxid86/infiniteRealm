const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const playerSchema = new Schema({
    id: Number,
    hp: Number,
    name: { type: String, unique: true},
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', default: '63d59a0e267330ce799e19ad'},
    description: String,
    wearing: Array,
    injuries: Array,  
});

module.exports = mongoose.model('Player', playerSchema);