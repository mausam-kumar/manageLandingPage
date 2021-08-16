function openingButton() {
    
    var itemContainer = document.getElementById('buttonContent')
    var lineButton = document.querySelector('#hamburgerButton')
    itemContainer.style.display = 'block'
    var crossButton = document.querySelector('.crossLine')
    lineButton.style.display = 'none'
    crossButton.style.display = 'block'    
}

function defaultFunc() {
    
    var itemContainer = document.getElementById('buttonContent')
    itemContainer.style.display = 'none'
    var crossButton = document.querySelector('.crossLine')
    crossButton.style.display = 'none' 
    var lineButton = document.querySelector('#hamburgerButton')
    lineButton.style.display = 'block'
    
    location.reload()
}

var slide_index = 1;  
displaySlides(slide_index);  
function nextSlide(n) {  
    displaySlides(slide_index += n);  
}  
function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  
function displaySlides(n) {  
    var i;  
    var slides = document.querySelectorAll(".showSlide");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block";  
} 
