console.log("timers.js INIT")

const myTimer = setInterval(function (){
    const justNu = new Date();
    document.querySelector("#Clock").innerText = `
Klockan är ${justNu.getHours()}:${justNu.getMinutes()}:${justNu.getSeconds()}
` 
}, 1000);

function stopHello3() {
    clearInterval(myTimer);
}

document.querySelector("#stopHello3").addEventListener('click', function (evt) {
    stopHello3();
})