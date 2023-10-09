const arr = [
    ["","",""],
    ["","",""],
    ["","",""]
]

const posicionesGanadoras = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]

let count = 0
const d = document
const container = d.querySelector('.container')
const child = d.querySelector('.child')
const jugador = d.querySelector('.jugador')
const btnReinicio = document.querySelector('.btn-reinicio')

btnReinicio.addEventListener('click', () => {
    valor()
})

function valor() {
    

    let response =  arr.map(celdas => {
            let buttons =  celdas.map(celda => {
                return `<button class='btn'>${celda}</button>`
            })  
            /* console.log(buttons)
            console.log(`<div>${ buttons.join('')}</div>`) */
        
            return `<div class='div'>${ buttons.join('')}</div>`
     })   
     // console.log(response)
     
     child.innerHTML = response.join('')
     let buttons = Array.from(document.querySelectorAll('.btn'))
     recorrido(buttons)
} 

valor()

function recorrido(buttons){

    buttons.forEach((button, index) => {
        button.addEventListener('click',((e) => {
           //console.log(index)
           let columna = index%3
           let fila = parseInt(index/3)
           console.log(fila, columna)

            if(count%2==0){
                //e.target.textContent = 'X'
                let buttonsDom = d.querySelectorAll('.btn')
                console.log(buttonsDom)
                count++
                arr[fila][columna] = 'X'
                e.target.textContent = arr[fila][columna]
                console.log(arr)
                
                verificarGanador(buttonsDom, e.target.textContent)
  
            }
            else {
                //e.target.textContent = 'O'
                let buttonsDom = d.querySelectorAll('.btn')
                count++
                arr[fila][columna] = 'O'
                e.target.textContent = arr[fila][columna]
                console.log(arr)

                verificarGanador(buttonsDom, e.target.textContent)
         
                
            }

        }), {once:true})

    })

}


function verificarGanador(btns,figure){
    let response = posicionesGanadoras.some(subArray => {
            
        return subArray.every(position => {

            return btns[position].textContent == figure
        })
    })

    console.log(response)
    if(response){
        alert('ha ganado '+ figure)
      
    }
    else if(!response && arr.every(subArray => !subArray.includes(''))){
        alert('empate')
      
    }
    
}




