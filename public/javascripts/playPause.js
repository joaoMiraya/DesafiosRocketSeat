const play = document.getElementById('playId');
const pause = document.getElementById('pauseId');

const pauseCtnt2 = document.getElementById('ctnt2-pauseId');
const playCtnt2 = document.getElementById('ctnt2-playId');

const pauseCtnt3 = document.getElementById('ctnt3-pauseId');
const playCtnt3 = document.getElementById('ctnt3-playId');

play.addEventListener("click", () =>{
    play.classList.add('hidden') &
    pause.classList.remove('hidden')
});

pause.addEventListener("click", () =>{
    pause.classList.add('hidden') &
    play.classList.remove('hidden')
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