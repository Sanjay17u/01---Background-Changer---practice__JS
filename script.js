
const button = document.querySelector("button");

const body = document.querySelector("body")

const color = ["blue", "red", "green", "black"]

function clr () {
    const colorvalues = parseInt(Math.random() * color.length)
    body.style.backgroundColor = color[colorvalues]
}

// body.style.backgroundColor = "blueviolet"

button.addEventListener('click', clr)