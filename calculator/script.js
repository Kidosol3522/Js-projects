const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.clear-equal');



for(let i = 0; 1<btns.length;i++){
    btns[i].addEventListener('click', function(){
        let number = btns[i].getAttribute('data-num');
        screen.value += number
    })
}

equalBtn.addEventListener('click', function(){
    let value = eval(screen.value);
    screen.value = value;
})

clearBtn.addEventListener('click', function(){
    screen.value = '';
})