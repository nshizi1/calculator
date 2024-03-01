let output = document.getElementById('output');

function clearAll() {
    output.value = '';
}

function clearEntry() {
    if(output.value == 'Error'){
        output.value = '';
    }else{
        let currentValue = output.value;
        output.value = currentValue.slice(0, -1);
    }
}

function appendChar(char) {
    output.value += char;
}

function calculate() {
    try {
        output.value = eval(output.value);
    } catch (error) {
        output.value = 'Error';
    }
}
