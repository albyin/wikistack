var express = require('express');
var router = express.Router();

/* GET tag listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/search', function (req, res){
	var query = req.query.tagQuery;
	console.log("QUERY: ", query);

	var Page = require('../models/').Page;

	Page.find({"tags": query},function (err, data){
		res.render('tags', { title: 'TAGS, YALL', docs: data });
	});
});

module.exports = router;
