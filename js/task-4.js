const valueRef = document.querySelector ('#value')
const incrementRef = document.querySelector('[data-action="increment"]')
const decrementRef = document.querySelector('[data-action="decrement"]')

let counterValue = 0;

const increment = () => {
  counterValue +=1;
  valueRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -=1;
  valueRef.textContent = counterValue;
};


  incrementRef.addEventListener("click", increment);
  decrementRef.addEventListener("click", decrement);