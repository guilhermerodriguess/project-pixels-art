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
pixelBoard(lengthBoard(),lengthBoard())

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

// Pinta os pixels com a cor selecionada

function paintPixel() {
    let acessPixel = document.querySelectorAll('.pixel')

    for (i = 0; i < acessPixel.length; i++) {
        acessPixel[i].addEventListener('click', recebeClick)
    }
    function recebeClick(origem) {
        origem.target.style.backgroundColor = document.querySelector('.selected').classList[1]
    }
}
paintPixel()

// Faz o botão 'limpar' pintar todos os pixels de branco.

function clearBoard() {
    let acessButon = document.querySelector('#clear-board')
    let acessPixel = document.querySelectorAll('.pixel')

    acessButon.addEventListener('click', recebeClick)

    function recebeClick() {
        for (i = 0; i < acessPixel.length; i++) {
            acessPixel[i].style.backgroundColor = 'white'
        }
    }
}
clearBoard()

// Faz o tamanho do Quadro de pixels, ser definido pelo usuário.

function lengthBoard() {
    let acessInput = document.querySelector('#board-size')
    if (acessInput.value < 5 || acessInput.value > 50) {
        if (acessInput.value < 5)
        return '5'
        else {
            return '50'
        }
    }
    else {
        return acessInput.value
    }
}

function GenetareButton() {
    let acessButton = document.querySelector('#generate-board')
    let acessInput = document.querySelector('#board-size')

    acessButton.addEventListener('click', recebeClick)

    function recebeClick() {
        if (acessInput.value === '') {
            return window.alert('Board inválido!')
        }
        else {
        let pixel = document.querySelectorAll('.pixel')
        let column = document.querySelectorAll('.column')
        for (i = 0; i < column.length; i++) {
            column[i].remove()
        }
        for (i = 0; i < pixel.length; i++) {
            pixel[i].remove()
        }
        pixelBoard(lengthBoard(),lengthBoard())
        paintPixel()
        clearBoard()
        }
    }
}
GenetareButton()