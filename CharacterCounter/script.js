var input = document.getElementById("input");
var output = document.getElementById("output");
var trigger = document.getElementById("count");


//Works with a button
function getCount() {
    var text = input.value;
    var inputValues = [...text]


    output.innerHTML = inputValues.length
}