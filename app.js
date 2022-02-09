const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');

const divBtnHandle = document.getElementById('divBtn');
const mulBtnHandle = document.getElementById('mulBtn');
const addBtnHandle = document.getElementById('addBtn');
const subBtnHandle = document.getElementById('subBtn');

const result = document.getElementById('result');

class calculator {
    div() {
        result.innerHTML = number1.value / number2.value;
    }
    mul() {
        result.innerHTML = number1.value * number2.value;
    }
    add() {
        result.innerHTML = parseInt(number1.value) + parseInt(number2.value);
    }
    sub() {
        result.innerHTML = number1.value - number2.value;
    }
}

const calc = new calculator();
divBtnHandle.addEventListener('click', calc.div);
mulBtnHandle.addEventListener('click', calc.mul);
addBtnHandle.addEventListener('click', calc.add);
subBtnHandle.addEventListener('click', calc.sub);