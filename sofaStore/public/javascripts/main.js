const closeBtn = document.getElementById('closeBtn');
const gifContainer = document.querySelector('.container-modal');
const gif = document.getElementById('360');
const sofaImg = document.querySelector('.sofa-box')

gif.addEventListener('click', () =>{
    gifContainer.classList.add('mostarGif')
    sofaImg.classList.add('esconder');
})
closeBtn.addEventListener('click', () =>{
    gifContainer.classList.remove('mostarGif')
    sofaImg.classList.remove('esconder');
})