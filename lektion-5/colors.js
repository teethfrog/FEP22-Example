console.log("init")

document.querySelectorAll('#colors li').forEach((elem) => {
    console.log(elem.getAttribute('data-hex'));
    
    elem.addEventListener('click', () => {
        elem.style.backgroundColor = 'coral';
    })
})

document.querySelector('#colors').addEventListener('mouseover', (event) =>{
    console.log("mouseover")
})