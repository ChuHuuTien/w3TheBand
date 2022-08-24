const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');
function showBuyTickets(){
    modal.classList.add('open');
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}
function hideBuyTickets(){
    modal.classList.remove('open');
}
modalClose.addEventListener('click',hideBuyTickets);
modal.addEventListener('click',hideBuyTickets);
modalContainer.addEventListener('click',function(event){
    event.stopPropagation();
})