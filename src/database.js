const connection = require('./connection')
const OpenServer = require('./server')

function conDB(){
    connection.connect((erro) =>{
        if(erro){
        console.log("Erro ao se conectar ao banco de dados "+ erro)
    }
    else{
        OpenServer()
        console.log("CONECTADO COM SUCESSO!")
        
    }
})
}

conDB()