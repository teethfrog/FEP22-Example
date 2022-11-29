console.log('app INIT')

const contentItems = [
    { menuTitle: "Home", url: "./content/home.html"},
    { menuTitle: "Info", url: "./content/info.html"},
    { menuTitle: "Contact", url: "./content/contact.html"}
];

async function loadContent(contentUrl) {
    const resp = await fetch(contentUrl);
    const content = await resp.text();

    document.getElementById("content").innerHTML = `
    ${content}
    `

}

for (item of contentItems) {
    document.getElementById("menuitems").innerHTML += `
    <div data-url="${item.url}">${item.menuTitle}</div>
    `
}

document.querySelectorAll("#menuitems > div").forEach((item) => {
    console.log(item);
    item.addEventListener("click", () => {
        loadContent(item.getAttribute("data-url"));
    });
});

