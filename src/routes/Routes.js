const express = require('express')
const { signIn } = require('../controllers/SignInMongoController')
const { default: SignInHandler } = require('../handlers/SignInHandler')
const { default: LoginController } = require('../controllers/LoginController')
const router = express.Router()

const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}
router.use(timeLog)

router.post('/login', (req, res) => {
    console.log(req.body);
    LoginController(req, res)
})

router.post('/signUp', (req, res) => {
    console.log(req.body);
    SignInHandler(req, res);
})

module.exports = router;