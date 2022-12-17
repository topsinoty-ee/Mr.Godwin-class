var input = document.getElementById('input');
var output = document.getElementById('output');
var button = document.getElementsByTagName('button');

output.readOnly = true;

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

function calculate() {
    var inValue = input.value;

    const replacer = (oldInval, newValue) => {
        const includeCheck = () => inValue.includes(oldInval);
        if (includeCheck(oldInval) === true) {
            var newInval = inValue.replaceAll(oldInval, newValue);
            inValue = newInval;
        }
    }

    const sqrt = (x) => Math.sqrt(x);

    replacer('x', '*');
    replacer('^', '**');


    if (isNumeric(inValue) === false || !inValue) {
        alert(alphaErr);
    } else {
        while (isNumeric(inValue) === true) {
            console.log(inValue)
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
        input.value += '^2'
    } else if (target === '√x') {
        input.value += 'sqrt()'
    } else if (target === 'C') {
        input.value = '';
        output.value = ''
    } else (
        input.value += target
    )

} 
