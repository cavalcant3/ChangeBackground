let cores = ['vermelho', 'amarelo', 'branco']

let button = document.getElementById('button');

button.addEventListener('click', function(){
    var colors = cores[cores.length]
    let container = document.getElementById('container');
    container.style.background = colors;
})