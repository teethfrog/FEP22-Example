let char = document.getElementById("name").value;
let role = document.getElementById("role").value;

document.getElementById("generate").addEventListener("click", () => {
    document.getElementById("output").innerText = `
    Once upon a time there existed a ${role} by the name of ${char}.
    `
});
