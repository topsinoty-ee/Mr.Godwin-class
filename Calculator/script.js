var input = document.getElementById("input");
var output = document.getElementById("output");
var button = document.getElementsByTagName("button");

var buttonLength = button.length;
for (let index = 0; index < buttonLength; index++) {
    const selected = button[index]
    selected.classList.add("button");

    if (selected.innerHTML === "C") {
        selected.classList.add("button");
        selected.style.backgroundColor="orangered";
    }
    if (selected.innerHTML === "=") {
        selected.classList.add("button");
        selected.classList.add("fullGrid");
        selected.style.backgroundColor="green";
    }
}

input.type = "number";
output.readOnly = true;

function calculate() {
    var inputValue = input.value;
    var outputValue = output.value;

    eval(inputValue)
}
