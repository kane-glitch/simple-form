const form = document.getElementById('simple-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const javascript = document.getElementById('javascript').checked;
    const java = document.getElementById('java').checked;

    let skillText = "no programming language";

    if (javascript && java) {
        skillText = "JavaScript and Java";
    } else if (javasript) {
        skillText = "JavaScript";
    } else if (java) {
        skillText = "Java";
    }

    document.getElementById("output").textContent = 
    `My name is ${name}, I am ${age} years old. I can code in ${skillText}`
})