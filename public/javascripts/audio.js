const playBtn = document.getElementById('playId');
const pause = document.getElementById('pauseId');

const pauseCtnt2 = document.getElementById('ctnt2-pauseId');
const playCtnt2 = document.getElementById('ctnt2-playId');

const pauseCtnt3 = document.getElementById('ctnt3-pauseId');
const playCtnt3 = document.getElementById('ctnt3-playId');

playBtn.addEventListener("click", () =>{
    playBtn.classList.add('hidden') &
    pause.classList.remove('hidden')
});

pause.addEventListener("click", () =>{
    pause.classList.add('hidden') &
    playBtn.classList.remove('hidden')
});
                   /*  CONTENT-2 */

playCtnt2.addEventListener("click", () =>{
    playCtnt2.classList.add('hidden') &
    pauseCtnt2.classList.remove('hidden')
});

pauseCtnt2.addEventListener("click", () =>{
    pauseCtnt2.classList.add('hidden') &
    playCtnt2.classList.remove('hidden')
});
                             /*  CONTENT-3 */

 playCtnt3.addEventListener("click", () =>{
    playCtnt3.classList.add('hidden') &
    pauseCtnt3.classList.remove('hidden')
});

pauseCtnt3.addEventListener("click", () =>{
    pauseCtnt3.classList.add('hidden') &
    playCtnt3.classList.remove('hidden')
});                            
                       /*  PLAY/PAUSE AUDIO */

const playButton = document.getElementById('playId')
playButton.addEventListener('click', function(){
const audio = document.querySelector('audio')
audio.play();
});

const pauseButton = document.getElementById('pauseId')
pauseButton.addEventListener('click', function(){
const audio = document.querySelector('audio')
audio.pause();
})

                  /*   BARRA DE DURACAO */
const inputMusicTime = document.getElementById('musicDuration');
const boxInputMusicTime = document.getElementById('timeMusicBox');

boxInputMusicTime.addEventListener('click', ()=> {
    inputMusicTime.click(); 
})



audio.addEventListener('timeupdate', atualizarBarra);

function atualizarBarra(){
let barra = document.getElementById('musicDuration');
barra.style.width = Math.floor((audio.currentTime / audio.duration) * 100) + '%';
let musicCurrentTime = document.querySelector('.inicio');
musicCurrentTime.textContent = secForMin(Math.floor(audio.currentTime));
}

function secForMin (segundos) {
let campoMinutos = Math.floor(segundos / 60);
let campoSegundos = segundos % 60;
if (campoSegundos < 10){
campoSegundos = '0' + campoSegundos
}
return campoMinutos + ':' + campoSegundos;
};

audio.addEventListener('loadeddata', duration);
function duration(){
let musicFinalTime = document.querySelector('.final');
musicFinalTime.textContent = secForMin(Math.floor(audio.duration));
}



