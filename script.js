// rounding
num01 = 5.12345
num02 = num01.toFixed(2);

// date and time
let newDate = new Date();
let newYear = newDate.getFullYear();
newDate.setFullYear(2018);
newYear = newDate.getFullYear();

// DOM
let pTag =  document.getElementById('title');
pTag.innerHTML = "Well Done";

// query
let btn01 = document.querySelector("#btn01");
let btnText = "CLICK";
function click01() {
    if(btn01.innerHTML == "CLICK") {
        btn01.innerHTML = "PUSH";
        btn01.style.backgroundColor = "green";
        container01.style.display = "none";
    }
    else
    {
        btn01.innerHTML = "CLICK";
        btn01.style.backgroundColor = "red";
        container01.style.display = "initial";
    }
}

// create elements
let container01 = document.querySelector(".container01");
let newP = document.createElement("p");
newP.innerHTML = "Ninja works";
container01.appendChild(newP);

// event listener
let btn02 = document.querySelector("#btn02");
btn02.addEventListener("click", function() {
    alert("POW");
    btn02.style.backgroundColor = "grey";
    btn02.removeEventListener("click");
});

// BOM
let iHeight = window.innerHeight;
let sHeight = screen.height;
let loc01 = location.hostname;

// Cookie
document.cookie = "health=100;SameSite=None"

// ES6 functions
let name01 = "Mario";
let newString = `hello ${name01}`
let myFunc = (hero) => {
    console.log(hero)
}

myFunc("Peach")

/// Output
console.log(newString)

