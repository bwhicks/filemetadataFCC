//Setup Express
var express = require('express')
var app = express();

//Configure multer and set to memory storage
var multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

//set pug (JADE successor) as rendering engine
app.set('view engine', 'pug');

//----Routes----//
//Render instructions and test form on GET to /
app.get('/', function (req, res) {
    res.render('index');
});

//Return JSON on POST to /api/post with file info from memory
app.post('/api/post', upload.single('file'), function(req, res, next) {
    var data = {
        'name': req.file.originalname,
        'size': req.file.size + 'kb',
        'mime-type': req.file.mimetype
    }
    
    res.send(data);
});
//----Routes----//


app.listen(process.env.PORT, function() {
   console.log("App listening on " + process.env.PORT);
});