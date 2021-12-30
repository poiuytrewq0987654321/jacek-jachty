function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("test.json", function(text){
    var mydata = JSON.parse(text);
    $(document).ready(function () {
  
        // Use the given data to create 
        // the table and display it
        $('table').bootstrapTable({
          data: mydata
        });
      });
});

function wyslijMaila() {
    var mail = document.getElementById("exampleFormControlInput1").value;
    var jacht = document.getElementById("exampleFormControlSelect1").value;
    var pytania = document.getElementById("exampleFormControlTextarea1").value;
    return confirm ('wyslales formularz\ntwoj mail to: ' + mail + '\nwybrany numer jachtu to: ' + jacht + '\ndodatkowe pytania to: ' + pytania);
  }
