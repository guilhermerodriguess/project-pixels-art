// Cria o Quadro de Pixels

function pixelBoard (width, height) {

// Cria colunas de pixels de acordo com a altura.

    for (i = 0; i < height; i++) {
        let acessPixelBoard = document.querySelector('#pixel-board')
        let createColumn = document.createElement('div')
        createColumn.className = 'column'
        acessPixelBoard.appendChild(createColumn)
    }

// Cria as linhas de acordo com a largura.

    let acessColumn = document.querySelectorAll('.column')
    
    for(i = 0; i < height; i++) {
        for(i2 = 0; i2 < width; i2++) {
            let createPixel = document.createElement('div')
            createPixel.className = 'pixel'
            createPixel.style.backgroundColor = 'white'
            acessColumn[i].appendChild(createPixel)
        }
    }
}
pixelBoard(5,5)

// Seleciona a cor preta assim que a página é acessada.

window.onload = function blackSelected() {
    document.querySelector('.color.black').classList.add('selected')
}

// Seleciona a cor escolhida 

function selectedColor() {
    let acessColorPalette = document.querySelectorAll('.color')

    for (i = 0; i < acessColorPalette.length; i++) {
        acessColorPalette[i].addEventListener('click', recebeClick)
    }
    function recebeClick(origem) {
        origem.target.classList.add('selected')
        for(i = 0; i < acessColorPalette.length; i++) {
            if (acessColorPalette[i].classList.contains('selected') && acessColorPalette[i] !== origem.target) {
                acessColorPalette[i].classList.remove('selected')
            }
        }
    }
}
selectedColor()