
const RoomSchema = require('./rooms');
const PlayerSchema = require('./players');
const ObjectSchema = require('./objects');

module.exports = {
    RoomDB: RoomSchema,
    PlayerDB: PlayerSchema,
    ObjectDB: ObjectSchema,
}