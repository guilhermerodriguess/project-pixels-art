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