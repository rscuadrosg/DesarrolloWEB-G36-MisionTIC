var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Hola Mundo uni' });
  res.send("pruebas sin motor de busqueda")
});

module.exports = router;
