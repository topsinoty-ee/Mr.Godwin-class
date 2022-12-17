var input = document.getElementById("input");
var output = document.getElementById("output");
var button = document.getElementsByTagName("button");

output.readOnly = true;

function setCaretPosition(ctrl, pos) {
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);

    }
}

// Set the cursor position of the "#test-input" element to the end when the page loads


var buttonLength = button.length;
for (let index = 0; index < buttonLength; index++) {
    const selected = button[index]
    selected.classList.add("button");

    if (selected.innerHTML === "C") {
        selected.classList.add("button");
        selected.style.backgroundColor = "orangered";
    }
    if (selected.innerHTML === "=") {
        selected.classList.add("button");
        selected.classList.add("fullGrid");
        selected.style.backgroundColor = "green";
    }
}

const isNumeric = int => /^[0-9^()√.*+/-]*$/gi.test(int); //Criteria for validation
const alphaErr = "INPUT ONLY NUMBERS OR '-', '+', '/', '*' " //err message

function calculate() {
    var inValue = input.value;
    const arr = [...inValue];


    if (isNumeric(inValue) === false || !inValue) {
        alert(alphaErr);
    } else {
        while (isNumeric(inValue) === true) {
            output.value = eval(inValue)
            break;
        }
    }
    console.log(isNumeric(inValue))
}

window.onclick = e => {
    var target = e.target.innerHTML
    console.log(target)
    if (target === '=') {
        calculate();
    } else if (target === 'x^2') {
        input.value += '**2'
    } else if (target === '√x') {
        input.value += 'sqrt()'
        setCaretPosition(input, input.value.length - 1);
    } else if (target === 'C') {
        input.value = "";
    } else (
        input.value += target
    )

} 
