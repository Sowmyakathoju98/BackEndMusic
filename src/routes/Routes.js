const express = require('express')
const { signIn } = require('../controllers/SignInController')
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}
router.use(timeLog)


router.get('/login', (req, res) => {
    res.send('login')
})

router.post('/signUp', (req, res) => {
    console.log(req.body);

    signIn(req, res);
})

module.exports = router;