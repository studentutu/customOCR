var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var Tesseract = require('tesseract.js');



//var bitmap;
//to publicly open the js, css, node-modules
app.use(express.static(__dirname));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/lab2.html'));
});

app.post('/ajax1', function(req,res) {

  req.on('data', function(chunk) {
    //Pure base64 string
    //console.log(JSON.parse(chunk).file);
    //var buffer = new Buffer(chunk.file, 'base64');
      // function to create file from base64 encoded string
    function base64_decode(base64str, file) {
      console.log(base64str);

      var ext = base64str.split(';')[0].match(/jpeg|png|gif/)[0];
      // strip off the data: url prefix to get just the base64-encoded bytes
      var data = base64str.replace(/^data:image\/\w+;base64,/, "");
      var buf = new Buffer(data, 'base64');
      fs.writeFile(file, buf, function(somethingInterst) {
        //
      });
    }
    base64_decode(JSON.parse(chunk).file,'out.png');

    res.send('Upload success!');

  });

});

app.post('/ajax2', function(req,res) {

  // window.Tesseract = Tesseract.create({
  //   workerPath: './js/worker.js',
  //   langPath: './js/eng.traineddata.gz',
  //   corePath: './js/index.js'
  // })


  Tesseract.recognize('./out.png',{
    m_data_sub_dir: './',
    lang: 'eng'
  })
  .progress(function(result){
    console.log('Progress is: '+ Math.round(result["progress"]* 100) );
  })
  .then(function(result){
    res.send( result["text"].toLowerCase());
  })

  // fs.readFile('/path/to/file.json', 'utf8', function (err, data) {
  //   if (err) throw err; // we'll not consider error handling for now
  //   var obj = JSON.parse(data);
  // });

});


// Part of skeleton
app.listen(8080);
