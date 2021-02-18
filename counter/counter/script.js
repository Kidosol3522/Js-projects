let counter = document.querySelector('.counter');
const addConunt = document.querySelector('#addCountBtn');
const lowerCont = document.querySelector('#lowerCountBtn');


let count=0;


addConunt.addEventListener('click', incrementCounter);
lowerCont.addEventListener('click', decrementCounter);


function incrementCounter(){
    count++;
    counter.innerHTML = count;
}

function decrementCounter(){
    count--;
    counter.innerHTML = count;
}