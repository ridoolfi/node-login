


const regMiddle = async (req, res,next) => {
    const user = req.body
    if(!user.nome){
        return res.status(402).json({msg: "Error, the field nome is obrigatory"})
    }if(!user.sobrenome){
        return res.status(402).json({msg: "Error, the field sobrenome is obrigatory"})
    }if(!user.username){
        return res.status(402).json({msg: "Error, the field username is obrigatory"})
    }if(!user.password){
        return res.status(402).json({msg: "Error, the field password is obrigatory"})
    }if(!user.confirm){
        return res.status(402).json({msg: "Error, the field confirm is obrigatory"})
    }
    next()
}


module.exports = regMiddle