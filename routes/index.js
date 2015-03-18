var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var Page = require('../models/').Page;

	Page.find(function (err, data){
		res.render('index', { title: 'BROWSE MY WIKISTACK', docs: data });
	});

 	
});

module.exports = router;
