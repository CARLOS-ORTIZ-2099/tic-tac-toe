let array = [
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
const hijo = d.querySelector('.hijo')
const btnReinicio = document.querySelector('.btn-reinicio')
const nameG = d.querySelector('.nameGamer')
let turn = true

function reiniciarJuego() {
    array = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
  
    const buttons = Array.from(document.querySelectorAll('.btn'));
  
    buttons.forEach(button => {
      button.textContent = "";
    });
  
    count = 0;
  }
  
  // Luego, puedes llamar a esta función dentro del evento del botón de reinicio:
  
  btnReinicio.addEventListener('click', (e) => {
    btnReinicio.classList.add('hidden')
    turn = true
    reiniciarJuego();
    valor()
  });

  
function valor() {
    nameG.textContent = turn ? 'X' : 'O';
    let response =  array.map(celdas => {
            let buttons =  celdas.map(celda => {
                return `<button class='btn'>${celda}</button>`
            })  
            /*  console.log(buttons)
            console.log(`<div>${ buttons.join('')}</div>`)  */
        
            return `<div class='div'>${ buttons.join('')}</div>`
     })   
      // console.log(response)
     
      hijo.innerHTML = response.join('')
     let buttons = Array.from(document.querySelectorAll('.btn'))
     recorrido(buttons)
} 

valor()

function recorrido(buttons){

    buttons.forEach((button, index) => {
        button.addEventListener('click',((e) => {
           //console.log(index)
           let fila = parseInt(index/3)
           let columna = index%3
           
           console.log(fila, columna)

            if(count%2==0){
                //e.target.textContent = 'X'
                let buttonsDom = d.querySelectorAll('.btn')
                console.log(buttonsDom)
                count++
                array[fila][columna] = 'X'
                e.target.textContent = array[fila][columna]
                console.log(array)
                changePlayer()
                verificarGanador(buttonsDom, e.target.textContent)
            }
            else {
                //e.target.textContent = 'O'
                let buttonsDom = d.querySelectorAll('.btn')
                count++
                array[fila][columna] = 'O'
                e.target.textContent = array[fila][columna]
                console.log(array)
                changePlayer()
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
       btnReinicio.classList.remove('hidden')
    }
    else if(!response && array.every(subArray => !subArray.includes(''))){
        alert('empate')
        btnReinicio.classList.remove('hidden')
    }
    
}

function changePlayer(){
    turn = !turn;
    nameG.textContent = turn ? 'X' : 'O';
}

