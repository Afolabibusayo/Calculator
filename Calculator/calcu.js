let display = document.getElementById('display')
// function pressOne() {
//     display.value += '1'
// }

// function pressTwo() {
//     display.value += '2'
// }

// function pressThree() {
//     display.value += '3'
// }
// function pressFour() {
//     display.value += '4'
// }

// function pressFive() {
//     display.value += '5'
// }

// function pressSix() {
//     display.value += '6'
// }

// function pressSeven() {
//     display.value += '7'
// }

function pressEight() {
    display.value += '8'
}

function pressNine() {
    display.value += '9'
}


function pressZero(){
    display.value += '0'
}

function pressPlus(){
    display.value += '+'
}

function pressDivision(){
    display.value += '/'
}

function pressMinus(){
    display.value += '-'
}

function pressTimes(){
    display.value += '*'
}

function pressDot(){
    display.value += '.'
}

function pressClear(){
    display.value ='0'
}

// function pressDelete(){
// display.value = (display.value).slice(0, -1)   
// }

function pressPercentage(){
    display.value = (parseFloat(display.value)/100).toString();
}

function pressEqual(){
    display.value = eval(display.value)
}

function pressNine(button) {
    if (display.value === "0") {
      display.value = button.textContent;
    } else {
      display.value += button.textContent;
    }
}

function pressDelete(){
    if (display.value.length === 1){
        display.value = "0"
    } else{
        display.value = display.value.slice(0, -1)
    }
}
















// let x = Math.floor(Math.random() * 10)
// console.log("random number is here: ",x);

// let num1 = "5";
// let num2 = "7";

// if((num1 || num2).includes(x)){
//     alert('You Win!')
// }
// else{
//     alert('You Lose!');
// }