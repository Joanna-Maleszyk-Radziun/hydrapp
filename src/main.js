const addButton = document.querySelector('.add--js');
const substractButton = document.querySelector('.substract--js');
const counterValue = document.querySelector('.counter--js');

let glasses = 0;

const setCounterValue = (value) => {
    counterValue.innerHTML = value;
}

setCounterValue(glasses)

addButton.addEventListener('click', () => {
    glasses = glasses + 1;
    setCounterValue(glasses);
})

substractButton.addEventListener('click', () => {
    if (glasses >= 1){
    glasses = glasses - 1;
    setCounterValue(glasses);
    }
})