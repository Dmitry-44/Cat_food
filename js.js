
const cards = document.getElementsByClassName('card_body');
const selectButtons = document.getElementsByClassName('select_button');

/*  CHANGE STATES OF CARDS */

for (let index = 0 ; index < cards.length; index++ ){

    let card = cards[index];
    let selectButton = selectButtons[index];
    card.addEventListener('click', changeClass);
    selectButton.addEventListener('click', changeClass2);
}

function changeClass(){
    if(this.parentNode.classList.contains('card-disabled')) {
        this.removeEventListener("click", changeClass)
    } 
        else {
          this.parentNode.classList.toggle('card-default');
          this.parentNode.classList.toggle('card-selected');
    }
}

function changeClass2(){
    this.parentNode.parentNode.parentNode.classList.toggle('card-default');
    this.parentNode.parentNode.parentNode.classList.toggle('card-selected');
}

/*
function changeClass3(){

    if(this.parentNode.classList.contains('card')) {

        this.parentNode.classList.toggle('card-default');
        this.parentNode.classList.toggle('card-selected');

    }   
        else {

            return changeClass3(this.parentNode);
    }
}       */