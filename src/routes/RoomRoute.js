const express = require('express')
const { CreateRoomController, JoinRoomController } = require('../controllers/RoomController')
const router = express.Router()

const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}
router.use(timeLog)

router.post('/createRoom', (req, res) => {
    console.log(req.body);
    CreateRoomController(req, res)
})

router.post('/joinRoom', (req, res) => {
    JoinRoomController(req, res);
})

module.exports = router;