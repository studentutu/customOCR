function readURL(input) {

            //only when File is uploaded into browser
            if (input.files && input.files[0]) {

                var reader = new FileReader();

                $('#UploadAndPreview').hide("slow", function(){
                      reader.onload = function () {
                          $('#UploadAndPreview')
                              .attr('src', reader.result)
                              .show("slow");

                          console.log("inside "+ reader.result);

                          //client --> server
                          var dataImage = JSON.stringify({'file':reader.result});

                          $.ajax({url: "/ajax1",
                                type: 'POST',
                                data: dataImage,
                                success: function(data) {
                                  console.log("Print response = " + data);
                                }
                          });
                      };

                      reader.readAsDataURL(input.files[0]);
                });

            }
        }
