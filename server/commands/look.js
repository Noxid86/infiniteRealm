const schemas = require('../schemas')
module.exports = function(player, words){
    console.log('looking')
    return schemas.RoomDB.findById(player.room).then(function(room){
        console.log(room)
        console.log(room.description, room.name, room.soil)
        return room.description
    })
}