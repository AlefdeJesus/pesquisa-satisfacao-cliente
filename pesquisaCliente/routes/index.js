var express = require('express');
var db = require('../utils/db')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/terminalGerenciador', function(req,res){
  res.render('gerenciador')
})

router.get('/terminalPesquisa',function(req, res){
  res.render('termPesquisa')
})


router.post('/muintoBoa', function(req, res){

  db.query("INSERT INTO satisfacao(resulte_pesquisa) VALUES (?)",[req.body.resMuintoBoa], function(erro){
    if (erro){
      res.status(200).send(`Erro: ${erro}`)
    }
    res.redirect('/terminalPesquisa')
    
  })
 
})

router.post('/boa', function(req, res){

  db.query("INSERT INTO satisfacao(resulte_pesquisa) VALUES (?)",[req.body.resBoa], function(erro){
    if (erro){
      res.status(200).send(`Erro: ${erro}`)
    }
    res.redirect('/terminalPesquisa')
    
  })
 
})

router.post('/ruim', function(req, res){

  db.query("INSERT INTO satisfacao(resulte_pesquisa) VALUES (?)",[req.body.resRuim], function(erro){
    if (erro){
      res.status(200).send(`Erro: ${erro}`)
    }
   
    res.redirect('/terminalPesquisa')
  })
 
})

module.exports = router;
