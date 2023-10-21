const connection= require('../connection')
const bcrypt = require('bcrypt');

const createUser = async (user) => {
    const salt = await bcrypt.genSalt(12)
    const password = user.password
    const passwordhash = await bcrypt.hash(password, salt)
    const insert = 'INSERT INTO user (nome, sobrenome, username, password) VALUES (?, ?, ?, ?)'
    const createdUser = await connection.execute(insert, [user.nome, user.sobrenome, user.username, passwordhash])
    return createdUser
};


const authUser = async (user) =>{
    console.log(user.username, user.password)
    const query = 'select id, nome, sobrenome, username from user where username = "?" && password = "?";'
    const [searchUser] = await connection.promise().query(query, [user.username, user.password])
    return searchUser
};

module.exports = {
    createUser: createUser,
    authUser: authUser

}