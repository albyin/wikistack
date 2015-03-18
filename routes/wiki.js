var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:title', function(req, res, next) {
	var Page = require('../models/').Page;
	
	var url_name = req.params.title;


	Page.findOne({"url_name":url_name}, function (err, doc){
		var title = url_name.replace(/_/g, " ");
		//this is cheating but it works. I want to use doc.title but it keeps crashing
		res.render('page', { title: title, doc: doc});
	});

});

module.exports = router;
