let colors = ['white', 'red', 'yellow'];
var count = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;
var count7 = 0;
var count8 = 0;
var count9 = 0;
let button = document.getElementById('button');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');


button.addEventListener('click', function () {

    count++
    if (count >= 3) {
        window.alert("Já foi jogado.")
    } else {
        var randomColor = colors[Math.floor(Math.random() * colors.length)]
        let container = document.getElementById('container');

        container.style.background = randomColor;
    }

})
btn2.addEventListener('click', function () {
    count2++
    if (count2 >= 3) {
        window.alert("Já foi jogado.")
    } else {
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container2');

    container.style.background = randomColor;
    }
})
btn3.addEventListener('click', function () {
    count3++
    if (count3 >= 3) {
        window.alert("Já foi jogado.")
    } else {
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container3');
    container.style.background = randomColor;
    }
})
btn4.addEventListener('click', function () {
    count4++
    if (count4 >= 3) {
        window.alert("Já foi jogado.")
    } else {
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container4');
    container.style.background = randomColor;
    }
})
btn5.addEventListener('click', function () {
    count5++
    if (count5 >= 3) {
        window.alert("Já foi jogado.")
    } else {
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container5');
    container.style.background = randomColor;
    }
})
btn6.addEventListener('click', function () {
    count6++
    if (count6 >= 3) {
        window.alert("Já foi jogado.")
    } else {
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container6');
    container.style.background = randomColor;
    }
})
btn7.addEventListener('click', function () {
    count7++
    if (count7 >= 3) {
        window.alert("Já foi jogado.")
    } else {
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container7');
    container.style.background = randomColor;
    }
})
btn8.addEventListener('click', function () {
    count8++
    if (count8 >= 3) {
        window.alert("Já foi jogado.")
    } else {
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container8');
    container.style.background = randomColor;
    }
})
btn9.addEventListener('click', function () {
    count9++
    if (count9 >= 3) {
        window.alert("Já foi jogado.")
    } else {
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container9');
    container.style.background = randomColor;
    }
})
