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
    
    // if (screen.width<960) {
        
    //     lineButton.style.display = 'block'
    // }else{
        
    //     lineButton.style.display = 'none'
    // }
    // console.log(screen.width);
    location.reload()
}
