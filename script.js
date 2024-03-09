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
keys = document.getElementById('keys');
row = document.getElementById('row');
row1 = document.getElementById('row1');
row2 = document.getElementById('row2');
row3 = document.getElementById('row3');
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

if(container){
    container.classList.add('containerDiv')
    container.classList.add('px-4')
    container.classList.add('py-10')
    container.classList.add('bg-blue-500')
    container.classList.add('white')
    container.classList.add('rounded-2xl')
    container.classList.add('text-gray-900')
    container.classList.add('flex')
    container.classList.add('flex-col')
    container.classList.add('gap-6')
}else{
    console.log("container not available");
}
if(output){
    // console.log("Yes sir");
    output.classList.add('text-green-600')
    output.classList.add('outline-none')
    output.classList.add('px-4')
    output.classList.add('py-3')
    output.classList.add('shadow-inner')
    output.classList.add('shadow-gray-200')
    output.classList.add('rounded-lg')
    output.classList.add('w-full')
    output.classList.add('font-bold')
    output.classList.add('text-2xl')
}else{
    console.log("no sir");
}

if(keys){
    keys.classList.add('flex')
    keys.classList.add('flex-col')
    keys.classList.add('items-center')
    keys.classList.add('justify-center')
    keys.classList.add('gap-3')
}else{
    console.log("keys not available");
}

if(row){
    row.classList.add('w-full')
    row.classList.add('grid')
    row.classList.add('grid-cols-4')
    row.classList.add('rounded-lg')
    row.classList.add('gap-3')
}else{
    console.log("row not available");
}
if(row1){
    row1.classList.add('w-full')
    row1.classList.add('grid')
    row1.classList.add('grid-cols-4')
    row1.classList.add('rounded-lg')
    row1.classList.add('gap-3')
}else{
    console.log("row not available");
}
if(row2){
    row2.classList.add('w-full')
    row2.classList.add('grid')
    row2.classList.add('grid-cols-4')
    row2.classList.add('rounded-lg')
    row2.classList.add('gap-3')
}else{
    console.log("row not available");
}
if(row3){
    row3.classList.add('w-full')
    row3.classList.add('grid')
    row3.classList.add('grid-cols-4')
    row3.classList.add('rounded-lg')
    row3.classList.add('gap-3')
}else{
    console.log("row not available");
}

var key = document.querySelectorAll('.key');
var keyUnique = document.getElementById('keyUnique');
// add another class on .key
key.forEach(function(key) {
    key.classList.add('font-semibold');
    key.classList.add('text-xl');
    key.classList.add('bg-gray-100');
    key.classList.add('py-2');
    key.classList.add('px-3');
    key.classList.add('rounded-md');
});

var keyMains = document.querySelectorAll('.keyMain');

keyMains.forEach(function(keyMain) {
    keyMain.classList.add('font-semibold');
    keyMain.classList.add('text-xl');
    keyMain.classList.add('bg-red-600');
    keyMain.classList.add('text-white');
    keyMain.classList.add('py-2');
    keyMain.classList.add('px-3');
    keyMain.classList.add('rounded-md');
})

if(keyUnique){
    keyUnique.classList.add('font-semibold');
    keyUnique.classList.add('text-xl');
    keyUnique.classList.add('bg-green-600');
    keyUnique.classList.add('text-white');
    keyUnique.classList.add('row-span-2');
    keyUnique.classList.add('py-2');
    keyUnique.classList.add('px-3');
    keyUnique.classList.add('rounded-md');
}else{
    console.log("keyUnique not available");
}