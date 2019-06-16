var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/category/php', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/form', function(req, res, next) {
  res.render('form');
});

router.post('/formprocess', function(req, res, next) {
  console.log(req.body);
  var a = req.body.txt1;
  var b = req.body.txt2;
  console.log("A Value is " + a + "B Value is "+ b);
  res.render("abc", { title: a });
});
module.exports = router;
