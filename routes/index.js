var express = require('express');
var router = express.Router();

var quizController = require ('../controllers/quiz_controller');

// GET pagina de entrada (home page)
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load);  //autoload :quizId

// Definición de routas de /quizes
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',quizController.answer);

//añadido en el ejercicio p2p obligatiorio del modulo6
router.get('/author', function(req,res) {
  res.render('author');
});


module.exports = router;
