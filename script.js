// rounding
num01 = 5.12345
num02 = num01.toFixed(2);
console.log(num02)

// date and time
let newDate = new Date();
console.log(newDate);

let newYear = newDate.getFullYear();
console.log(newYear);

newDate.setFullYear(2018);
newYear = newDate.getFullYear();
console.log(newYear);

// DOM
let pTag =  document.getElementById('title');
pTag.innerHTML = "Well Done";

// query
let btn01 = document.querySelector("#btn01");
let btnText = "CLICK";
function click01() {
    if(btn01.innerHTML == "CLICK") {
        btn01.innerHTML = "PUSH";
    }
    else
    {
        btn01.innerHTML = "CLICK"
    }
}

