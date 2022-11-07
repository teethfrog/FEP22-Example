console.log("Hello from js-file!");

function minFunktion() {
    console.log("Funktionen kördes!");
}

minFunktion();

function buttonHandler() {
    console.log("Du klickade här!");
    alert("Du klickade på knappen.")
}

function secondButton() {
    const name = prompt("Whats your name?");

    alert("Hello "+ name);
}

function thirdButton() {
    let name = document.querySelector("#name").value;
    //const name = document.getElementById("name").value; -- Samma sak! Men specifikt för ID.
    if (name == "Alexander") {
        name = name + " Kasianov";
    } else if (name == "kasianoa") {
        name = "Alexander Kasianov"
    } else {
        console.log("Okänt efternamn!");
    }
    document.querySelector("#hello-output").innerText = `Hello ${name}!`;
}