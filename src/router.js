const router = require('express').Router()
const app = require('../app')
const userController = require('./controllers/userController')
const loginController = require('./controllers/loginController')
const regMiddle = require('./middlewares/registerMiddleware')
const loginMiddleware = require('./middlewares/loginMiddleware')
const cors = require('cors')

router.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT","DELETE"],
    credentials: true
}))

// Primary Route
router.get('/', (req,res) => {
    res.status(200).json({
        msg: "Bem vindo a nossa API!"
    })
})


// Register User
router.post('/auth/register', regMiddle, userController);

router.post('/auth/login', loginMiddleware, loginController)

        


module.exports = router