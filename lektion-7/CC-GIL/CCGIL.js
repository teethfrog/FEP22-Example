let i = 0;


document.getElementById("image").addEventListener("mousedown", () => {
    console.log("mousedown");
    document.getElementById("image").src = "img/jack-open-small.png"
        if(i>=10){
            document.getElementById("image").remove();
            document.body.style.backgroundColor = "crimson";
            document.getElementById("text").innerText = 'BOO!'
        }
        else {
            i = i+1;
            console.log("works");
            console.log(i);
        }
})

document.getElementById("image").addEventListener("mouseup", () => {
    console.log("mouseup");
    document.getElementById("image").src = "img/jack-closed-small.png"
})

