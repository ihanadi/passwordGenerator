const pwEl  = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbol');
const gBtnEl = document.getElementById('gBtn');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';


function getLowercase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}
function getUppercase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}
function getNumbers(){
    return numbers[Math.floor(Math.random() * numbers.length)]
}
function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword(){
    const len = lengthEl.value;

    let password = '';

    for(let i = 0; i < len; i++){
        const x = genarateX();
        password += x;
    }
    pwEl.innerHTML = password;

}

function genarateX(){
    const xs = [];
    if(upperEl.checked){
        xs.push(getUppercase());
    }

    if(lowerEl.checked){
        xs.push(getLowercase());
    }

    if(numberEl.checked){
        xs.push(getNumbers());
    }

    if(symbolEl.checked){
        xs.push(getSymbol());
    }
    if(xs.length == 0) return ''

    return xs[Math.floor(Math.random() * xs.length)]
}

gBtnEl.addEventListener('click',generatePassword);

