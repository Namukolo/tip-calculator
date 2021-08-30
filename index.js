//DOM Elements

const bill_input = document.querySelector('#bill-input');
const button_grid = document.querySelector('.button-grid');
const people_input = document.querySelector('#people-input');
const tipAmountDisplay = document.querySelector('.tip-amount');
const totalAmountDisplay = document.querySelector('.total-amount');
const reset_btn = document.querySelector('#reset');


button_grid.addEventListener('click', function(event){
    // event.target.sytle.backgroundColor = 'hsl(186, 14%, 43%)';s      
    const billAmount = +bill_input.value;
    const numOfPeople = +people_input.value;
    const tipPercentage = +event.target.textContent.slice(0,-1);


    const tipPerPerson = (calcTipAmount(billAmount,tipPercentage,numOfPeople));
    const totalAmountPerPerson = (calcTotalAmount(billAmount,tipPerPerson,numOfPeople));
    console.log(tipPerPerson, totalAmountPerPerson);
    displayResults(tipPerPerson,totalAmountPerPerson);

});

function calcTipAmount(bill,tip,people) {
    return (bill *(tip/100)) / people;
}

function calcTotalAmount(bill,tipPerPerson,people){
    return (bill / people) + tipPerPerson;
}

function displayResults(tip, total){
    tipAmountDisplay.textContent = "$"+tip.toFixed(2);
    totalAmountDisplay.textContent = "$"+total.toFixed(2);
}
reset_btn.addEventListener('click', ()=>{
    bill_input.value = '';
    people_input.value = '';
    tipAmountDisplay.textContent = '$0.00';
    totalAmountDisplay.textContent = '$0.00';
})