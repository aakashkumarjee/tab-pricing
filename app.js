let checkButton = document.querySelector('.plans-switch input');
let annualPlans = document.querySelector('.annual-cards')
let monthlyPlans = document.querySelector('.monthly-cards')
let cards = document.querySelectorAll('.card');
checkButton.addEventListener('click', (e) => {
    if(annualPlans.style.display == "none"){
        annualPlans.style.display = "flex";
        monthlyPlans.style.display = "none";
    }else{
        annualPlans.style.display = "none";
        monthlyPlans.style.display = "flex";
    }
})

cards.forEach(card =>{
    card.addEventListener('mouseenter', (e) => {
        card.classList.add('active-card')
        card.style.zIndex = '1';
    })
    card.addEventListener('mouseleave', (e) => {
        card.classList.remove('active-card')
        card.style.zIndex = '0';

    })
})