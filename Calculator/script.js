//Get elements
var input = document.getElementById('input');
var output = document.getElementById('output');
var button = document.getElementsByTagName('button');

//set output type to readOnly
output.readOnly = true;


//Add coloring and numbering
var buttonLength = button.length;
for (let index = 0; index < buttonLength; index++) {
    const selected = button[index]
    selected.classList.add('button');

    if (selected.innerHTML === 'C') {
        selected.classList.add('button');
        selected.style.backgroundColor = 'orangered';
    }
    if (selected.innerHTML === '=') {
        selected.classList.add('button');
        selected.classList.add('fullGrid');
        selected.style.backgroundColor = 'green';
    }
}


const isNumeric = int => /^[0-9^xsqrt.*+/√()-]*$/gi.test(int);       //Criteria for validation
const alphaErr = "INPUT ONLY NUMBERS OR '-', '+', '/', '*' "    //err message


//Calculate
function calculate() {
    //Make a value for input values
    var inValue = input.value;

    //make a function that replaces the values since they cannot be converted directly
    const converter = (oldInval, newValue) => {
        const includeCheck = () => inValue.includes(oldInval);
        if (includeCheck(oldInval) === true) {
            var newInval = inValue.replaceAll(oldInval, newValue);
            inValue = newInval;
        }
    }

    //the square root function
    const sqrt = (x) => Math.sqrt(x);

    
    converter('x', '*');    //This converts 'x' to '*'
    converter('^', '**');   //This converts '^' to '**'

    //Check validation
    if (isNumeric(inValue) === false || !inValue) {
        alert(alphaErr);
    } else {
        while (isNumeric(inValue) === true) {
            // console.log(inValue)
            output.value = eval(inValue)
            break;
        }
    }
    // console.log(isNumeric(inValue))
}




// Attach the listener to the calculator
const calculator = document.querySelector('#calculator');

calculator.addEventListener('click', (e) => {
    const target = e.target.innerHTML;
    const tagName = e.target.tagName;

    //only work if tagName is button
    while (tagName === 'BUTTON') {
        if (target === '=') {
            calculate();
        } else if (target === 'x^2') {
            input.value += '^2'
        } else if (target === '√x') {
            input.value += 'sqrt()'
        } else if (target === 'C') {
            input.value = '';
            output.value = ''
        } else (
            input.value += target
        )

        break;
    }
    // console.log(target);
});