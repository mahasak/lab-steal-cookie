var express    = require('express');  
var app        = express();           
var bodyParser = require('body-parser');
var path       = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))

var port = process.env.PORT || 3000;  
var router = express.Router();  
router.get('/image', function(req, res) {
    console.log('your cookie:', req.query.c);
    res.sendFile(path.resolve('./public/icon.png'));    
});

app.use('/api', router);

app.listen(port);
console.log('API running on port ' + port);