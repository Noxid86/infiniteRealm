const schemas = require('../schemas');
const PlayerDB = schemas.PlayerDB;
class Player{
    constructor(attr){
        this.hp = attr.hp || 100
        this.name = attr.name
        this.room = attr.room || '63d5ba10bb3275c6fd50556b'
        this.description = attr.description || 'rather plain'
        this.wearing = attr.wearing 
        this.injuries = attr.injuries 
        this.create() 
    }
    create(){
        console.log(this)
        PlayerDB.create({
            hp: this.hp,
            name: this.name,
            room: this.room,
            description: this.description,
            wearing: this.wearing,
            injuries: this.injuries,
        }, (err)=>{
            if(err){
                console.log(err)
            } else {
                console.log('Created new player: ', this.name)
            }
        })
    }
    move(dir){
        console.log('moving '+dir)
    }

}

module.exports = {
    PlayerClass: Player,
}