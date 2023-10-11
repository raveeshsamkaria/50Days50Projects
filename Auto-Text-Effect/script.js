const textElement = document.getElementById('text')
const speedElement = document.getElementById('speed')
const text = 'We Love Programming !!!'
let idx = 1
let speed = 300 / speedElement.value

function writeText() {
    textElement.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
}

writeText()
speedElement.addEventListener('input', (e) => speed = 300 / e.target.value)