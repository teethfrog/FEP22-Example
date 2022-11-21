//IF-Satser
document.getElementById("sel").addEventListener('change',()=> {
    let opt = document.getElementById("sel").value;
    let output = "";
    if(opt == "C"){
        output = `C är ett svårt språk.`;
    } else if (opt == "Java"){
        output = `Java är ett språk som bl.a. användes för att göra minecraft.`;
    } else if (opt == "Python"){
        output = `Python används för skripter.`;
    }
    document.getElementById("out").innerText = output;
});

//Arrays
const selArray = [
    `C är ett svårt språk.`,
    `Java är ett språk som bl.a. användes för att göra minecraft.`,
    `Python används för skripter.`
]
document.getElementById("sel2").addEventListener('change', (evt) => {
    document.getElementById("out2").innerText = selArray[evt.target.selectedIndex];
});

//Objekt
const selObj = {
    "C": `C är ett svårt språk.`,
    "Java": `Java är ett språk som bl.a. användes för att göra minecraft.`,
    "Python": `Python används för skripter.`
}
document.getElementById("sel3").addEventListener('change', (evt) => {
    document.getElementById("out3").innerText = selObj[evt.target.value];
});

//Array av arrays
const langArray = [
    {val: "C",info: "C är ett svprt språk"},
    {val: "Java",info: "Java kär på en virtuell maskin"},
    {val: "Python",info: "Python är ett interpreterat språk"}
]

for (let i in langArray) {
    document.getElementById("sel4").innerHTML += `<option>${langArray[i].val}</option>`;
}
document.getElementById("sel4").addEventListener('change', (evt) => {
    document.getElementById("out4").innerText = langArray[evt.target.selectedIndex].info;
});
