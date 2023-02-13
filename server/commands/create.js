const schemas = require('../schemas')
module.exports = function(player, words, cmd){
    console.log('Creating')
    let obj = cmd.replace('create', '')
    console.log(obj)
    return null
}