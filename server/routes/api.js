const express = require('express');
const router = express.Router();
const {PlayerClass} = require('../classes/player.js');
const { PlayerDB, RoomDB } = require('../schemas');
const { parseCommand } = require('../scripts/utils.js');

router.post("/createRoom", async (req, res)=>{
    const { room } = req.body; 
        console.log(room)
        let newRoom = new RoomDB({
            ...room
        })
    try {
        newRoom.save((error) => {
            if(error) {
                throw err
            } else {
                return res.status(200).json({
                    success: true,
                });
            }
        });
    } catch ( error ){
        throw error
    }
});

router.post("/createPlayer", async (req, res)=>{
    const { player } = req.body; 
    console.log(player)
    thisPlayer = new PlayerClass({...player})
})

router.post('/sendCmd', function (req, res) {
    console.log(req.body)
    const { input, player } = req.body.data;
    console.log(player)
    PlayerDB.findById(player).then(function(player){
        parseCommand(player, input).then(function(message){
            return res.status(200).json({
                success: true,
                message: message
            });
        })
    })
});

module.exports = router;