const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '07265950550',
    porta: 3306,
    database: 'pesquisa_cliente',
    multipleStatements: true
});

//código abaixo faz a conexão com o database

db.connect((erro)=>{
    if(erro){
        throw erro;
    }
    console.log(`Conectado ao banco de dados pesquisa_cliente`)
})
global.db = db;

module.exports = db;