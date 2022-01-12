let colors = ['white', 'red','yellow'];

let button = document.getElementById('button');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');

button.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container');

    container.style.background = randomColor;
})
btn2.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container2');

    container.style.background = randomColor;
})
btn3.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container3');

    container.style.background = randomColor;
})
btn4.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container4');

    container.style.background = randomColor;
})
btn5.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container5');

    container.style.background = randomColor;
})
btn6.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container6');

    container.style.background = randomColor;
})
btn7.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container7');

    container.style.background = randomColor;
})
btn8.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container8');

    container.style.background = randomColor;
})
btn9.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container9');

    container.style.background = randomColor;
})
