const app = require('../app')


require('dotenv').config()


let PORT = process.env.PORT || 3003
function OpenServer() {app.listen(PORT, (error) => {
    if(error){
        console.log("ERRO AO ABRIR SERVIDOR "+error.message)
    }else{
        console.log(`SERVIDOR ABERTO NA PORTA ${PORT}`)
    }
})}


module.exports = OpenServer