const {authUser} = require('../models/UserModel')

const loginController = async (req, res) => {
    const userSelected = await authUser(req.body)
    return res.status(200).json({userSelected})
}

module.exports = loginController