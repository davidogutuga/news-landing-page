let ham = document.querySelector('.ham')
let close = document.querySelector('.close')
let overlay = document.querySelector('.overlay')

ham.addEventListener('click',function(){
    overlay.style.display = "flex"
})
close.addEventListener('click',function(){
    overlay.style.display = "none"
})