const { default: Room } = require("../models/Room");

const JoinRoomController = async (req, res, next) => {
    try {

    } catch (error) {

    }
};

const CreateRoomController = async (req, res, next) => {
    try {
       const {roomId, userId } = req.body;

       const newRoom = await Room.create({
           roomId,
           userId
       });
       
       res.status(201).send({ message: 'Room created successfully', Room: newRoom });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to create Room' });

    }
};

module.exports = {
    JoinRoomController, CreateRoomController
};