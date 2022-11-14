console.log("timers.js INIT")

let count = 30;
    const myTimer = setInterval(function (){
        if(count>=0) {
            document.querySelector("#timer").innerText = `Time left: ${count}`;
            count--;
        } else if(count<=0) {
            clearInterval(myTimer);
            document.querySelector("#timer").innerText = `Time is out!`;
        }
    }, 1000)