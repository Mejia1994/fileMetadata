const app = require('./app/app');
const multer = require('multer');

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/api/fileanalyse', multer().single('upfile'), function (req, res) {
    let {originalname: name, mimetype: type, size} = req.file;
    res.json({name, type, size});
});

const listener = app.listen(process.env.PORT || 3000, function () {
    console.log("sever started on port " + listener.address().port)
});