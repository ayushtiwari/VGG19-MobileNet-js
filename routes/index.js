var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/mobilenet', function(req, res, next) {
  res.render('predict_page', { model: 'MobileNet' });
});

router.get('/vgg19', function (req, res, next) {
  res.render('predict_page', { model: 'VGG19'})
});

module.exports = router;
