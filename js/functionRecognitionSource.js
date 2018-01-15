var inProcess = false;
var changetoLoad = document.getElementById('changetoLoad');

function functionRecognition(){
    let tempNumber = 0;
    changetoLoad.innerText = "...";


    $.ajax({url: "/ajax2",
          type: 'POST',
          success: function(resultText) {
            console.log("Print response = " + resultText);

            let smallNum = resultText.indexOf(window.someOnesName);
            document.getElementById('found').innerText = "Result is: "+smallNum;

            changetoLoad.innerText = "Click to start";
          }
    });

}
