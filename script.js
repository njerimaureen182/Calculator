// to style h3 on the index.html file:
document.getElementById('heading').style.textAlign = "center";
document.getElementById('heading').style.textTransform = "uppercase";

const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equals');
const clearBtn = document.querySelector('.btn-clear');
const delBtn = document.querySelector('.btn-del');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
        
    }); 
}

// to add functionality to the equal button:
// (the eval() function evaluates the value on the screen and uses the equalbtn to output the value)

equalBtn.addEventListener('click', function () {
    if (screen.value == '') {
        alert ('Input value is empty!');
    } else{
        let value = eval(screen.value);
        screen.value = value;
    }
     
})

// to add functionality to the clear button:
clearBtn.addEventListener('click', function () {
    screen.value = '';
})

