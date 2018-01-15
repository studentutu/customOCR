//Set the worker, core and lang to local files
(function() {
    var path = (function() { //absolute path
      var pathArray = window.location.pathname.split( '/' );
      pathArray.pop(); //Remove the last ("**.html")
      return window.location.origin + pathArray.join("/");
      })();
    console.log(path);

    window.Tesseract = Tesseract.create({
    workerPath: path + '/js/worker.js',
    langPath: path + '/js/eng.traineddata.gz',
    corePath: path + '/js/index.js'
    });
})();
