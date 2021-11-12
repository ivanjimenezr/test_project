holesElem = document.querySelectorAll('div.hole')
molesElem = document.querySelectorAll('div.mole')
scoreElem = document.querySelector('span.score')
// console.log(holesElem)
// console.log(molesElem)
// console.log(scoreElem)
lastHole = document.querySelector('div.hole6')

function peep() {
    let randon = Math.random() * (500 - 3000) + 3000
    return Math.round(randon);
   
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 15000) 
//muestra topos aleatoriamente durante 15 segundos
}


const addItem = () => {
    const promesa = new Promise((resolve, reject) => {
    //   if (!list) {
    //     reject('No existe el array');
    //   }
  
      setTimeout(function () {
        timeUp = true
        resolve(timeUp);
      }, 3000);
    });
  
    return promesa;
  };
  
  
  
  addItem()
    .then(() => {
      console.log(`El listado final es`);
    })
    .catch((err) => {
      throw new Error(err);
    });

