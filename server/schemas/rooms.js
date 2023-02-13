const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let soilTypes = [   
    {"name": "Sandy soil", "composition": "large particles of sand"},    
    { "name": "Silt soil", "composition": "fine particles of silt"},    
    { "name": "Clay soil", "composition": "small particles of clay"},    
    { "name": "Loam soil", "composition": "balanced mixture of sand, silt, and clay"},    
    { "name": "Peat soil", "composition": "decomposed organic matter"},    
    { "name": "Chalk soil", "composition": "calcium carbonate"},    
    { "name": "Limestone soil", "composition": "calcium carbonate with higher levels of calcium and magnesium"},    
    { "name": "Black soil", "composition": "rich in organic matter, clay and minerals"}
]
const roomSchema = new Schema({
    id: Number,
    name: String,
    exits: Array,
    scenery: Array,
    creatures: Array,
    people: Array,
    objects: Array,
    indoor: {
        type: Boolean, 
        default: false
    },
    soil: {
        type: String,
        default: "loam"
    },
    elevation: {
        // Units are feet above sea level
        type: Number, 
        default: 0,
    },
    details: Array, 
    description: String
});

module.exports = mongoose.model('Room', roomSchema);