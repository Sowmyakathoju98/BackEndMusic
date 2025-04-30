const express = require('express')
const { CreateRoomController, JoinRoomController } = require('../controllers/RoomController')
const roomRouter = express.Router()

const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}
roomRouter.use(timeLog)

roomRouter.post('/createRoom', (req, res) => {
    console.log(req.body);
    CreateRoomController(req, res)
})

roomRouter.post('/joinRoom', (req, res) => {
    JoinRoomController(req, res);
})

module.exports = roomRouter;