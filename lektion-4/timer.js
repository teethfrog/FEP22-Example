console.log("timers.js INIT")

let count = 0;
const myTimer = setInterval(function (){
    console.log("Hello", count);
    count++;
}, 1000)

function stopHello3() {
    clearInterval(myTimer);
}