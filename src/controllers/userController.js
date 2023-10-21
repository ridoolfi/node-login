const {createUser} = require('../models/UserModel')


const userController = async (req, res) => {
    const createdUser = await createUser(req.body)
    return res.status(201).json({msg: 'user created with success'})
}

module.exports = userController