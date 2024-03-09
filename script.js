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





// applying tailwind style
body = document.getElementById('body');
head = document.getElementById('head');
container = document.getElementById('container');
if(body){
    // console.log("Id body is available");
    body.classList.add('bg-sky-100');
    body.classList.add('w-full');
    body.classList.add('flex');
    body.classList.add('justify-center');
    body.classList.add('items-center');
    body.classList.add('gap-4');
    body.classList.add('flex-col');
    body.classList.add('h-screen');
}else{
    console.log("body not available");
}

if(head){
    head.classList.add('text-3xl')
    head.classList.add('uppercase')
    head.classList.add('font-bold')
    head.classList.add('text-green-600')
}else{
    console.log("head not available");
}