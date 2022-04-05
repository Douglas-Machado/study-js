function getTimeFromSeconds(seconds){
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  })
}

const clock = document.getElementById("clock");

let seconds = 0;
let timer;

function startClock(){
  timer = setInterval(function(){
    seconds++;
    clock.innerHTML = getTimeFromSeconds(seconds);
  }, 1000)
}

// capturando click do usuário pelo elemento clicado na página
document.addEventListener('click', function(e){
  const el = e.target;

  if(el.classList.contains('play')){
    clock.classList.remove('pause-color')
    clearInterval(timer);
    startClock()
  }else if(el.classList.contains('pause')){
    clearInterval(timer)
    clock.classList.add('pause-color')
  }else{
    clock.classList.remove('pause-color')
    clearInterval(timer);
    clock.innerHTML = `00:00:00`
    seconds = 0;
  }
})

//capturando o click do usuário pelo evento diretamente no botão

// const playButton = document.querySelector(".play");
// const pauseButton = document.querySelector(".pause");
// const resetButton = document.querySelector(".reset");

// playButton.addEventListener("click", function(event){
//   clock.classList.remove('pause-color')
//   clearInterval(timer);
//   startClock()
// });

// pauseButton.addEventListener("click", function(event){
//   clearInterval(timer)
//   clock.classList.add('pause-color')
// });

// resetButton.addEventListener("click", function(event){
//   clearInterval(timer);
//   clock.innerHTML = `00:00:00`
//   seconds = 0;
// });
