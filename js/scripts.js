const d = document
const tableroContainer = d.querySelector('.tablero-container')
const namePlayer = d.querySelector('.name-player')
const buttonReiniciar = d.querySelector('.btn-reiniciar')
const buttonContainer = d.querySelector('.button-container')
let count = 0
let turn = true

let table =  [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

const winnerPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
]

buttonReiniciar.addEventListener('click', (e) => {
    table = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]
   /*  const buttons = d.querySelectorAll('.btn') */
    count = 0
    turn = true
    startGame()
})


function startGame() {
    buttonContainer.classList.add('hidden')
    namePlayer.textContent = turn? 'es turno de X': ' es turno de O'

       let result = table.map(subArray => {
            let resp =  subArray.map(celda => {
                return  `<button class='btn'>${celda}</button>`
            })
           // console.log(resp)
             return `<div class='div'>${resp.join('')}</div>`
       }) 
       console.log(result)
       tableroContainer.innerHTML = result.join('')
       const buttons = Array.from(document.querySelectorAll('.btn'))
       tarea(buttons)
}

startGame()


function tarea(btns){
    btns.forEach((button, index) => {
        button.addEventListener('click', (e) => clickButton(e,index), {once:true}) 
    })

    function clickButton(e,indice){
   
        let columna = indice % 3
        let fila = parseInt(indice/3)
        
        if(count%2==0){
            
            table[fila][columna] = 'x'
           // console.log(table)
           btns[indice].textContent = table[fila][columna]
            changeTurn()
            checkWinner(btns,'x')
        
        }
        else {
           
            table[fila][columna] = 'o'
            //console.log(table)
            btns[indice].textContent = table[fila][columna]
            changeTurn()
             checkWinner(btns,'o')
            
        }
        count++
    }
}

function checkWinner(btns,figure) {
   let response = winnerPosition.some(element => {
        return element.every(ele => {
            return btns[ele].textContent== figure
        })
    })
 
    if(response){
        alert('ha ganado '+ ' '+ figure)
        buttonContainer.classList.remove('hidden')
    }
    else if(table.every(ele => !ele.includes(''))){
        alert('se ha empatado')
        buttonContainer.classList.remove('hidden')
    }
}

function changeTurn() {
    turn = !turn
    namePlayer.textContent = turn? 'es turno de X': 'es turno de O'
}
