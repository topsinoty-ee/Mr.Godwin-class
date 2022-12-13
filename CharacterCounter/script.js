var input = document.getElementById("input");
var output = document.getElementById("output");
var trigger = document.getElementById("count");
var inputValues=[]


//Works with a button
function getCount() {
    var text = input.value;
    inputValues = [...text]

    function slowWork(){
        input.placeholder="Input text to get started";
        output.innerHTML="";
    }

    if(inputValues.length >= 0){
        setTimeout(slowWork(), 2000);
    }
    output.innerHTML = inputValues.length + " chars"
}
