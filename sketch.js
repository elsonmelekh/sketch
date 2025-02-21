 let container = document.querySelector(`#container`)
 let deleteGrid = document.querySelector(`#clearBtn`).addEventListener(`click`, clearGrid)
 let resizeGrid = document.querySelector(`#resizeBtn`).addEventListener(`click`, chooseGrid)

let containerSize = 500
let rowsAndColumns;

container.style.width = container.style.height = `${containerSize}px`



function createGrid(rowsAndColumns) {

    for (let i = 0; i < rowsAndColumns * rowsAndColumns ; i++) {
        
        let grid = container.appendChild(document.createElement(`div`))
        grid.classList.add(`gridCell`)
        
        grid.style.width = grid.style.height = `${containerSize / rowsAndColumns -2}px`
        
        grid.addEventListener(`mouseover`, gridColor)
        
    }

    
    
}

createGrid(16)




function gridColor(){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
}

function clearGrid() {

let gridCells = document.querySelectorAll('.gridCell');
gridCells.forEach(function(cell) {
    cell.style.backgroundColor = 'white';
});
}



function chooseGrid(){



    

    let userInput;
    while (isNaN(userInput) || userInput > 100 || userInput < 1) {
       userInput = prompt(`Please enter a grid size between 1 and 100`)
    
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild)
        
        
    }

    


    createGrid(userInput)
}




    
    



