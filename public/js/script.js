const form = document.getElementById('form')
const url = document.getElementById('url')
const shorten = document.getElementById('shorten')
const urlBox = document.getElementsByClassName('short-url')
const loader = document.getElementsByClassName('loading')
const shortBtn = document.getElementsByClassName('short-btn')
const copyButton = document.getElementsByClassName('copy-button')[0]
const copyIcon = document.querySelector(".copy-button > img")
loader[0].style.display = 'none'
shortBtn[0].value = 'short'
url.addEventListener('mouseover', (e) => {
    url.focus()
})
let isShorted = false
const valid = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
form.addEventListener('submit', async (e) => {
    loader[0].style.display = 'block'
    shortBtn[0].value = ''
    e.preventDefault()
    shortBtn[0].focus()
    if (!isShorted) {
    if (valid.test(url.value.trim())) {
        try {
        const response = await fetch("/short", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: url.value.trim()})
        })
        isShorted = true
        setTimeout(() => {
            isShorted = false
            loader[0].style.display = 'none'
            shortBtn[0].value = 'short'
        }, 500)
        urlBox[0].style.display = "none"
        const data = await response.json()
        shorten.href = location.href + data.id
        shorten.innerHTML = location.href + data.id
        setTimeout(() => {
            urlBox[0].style.display = "grid"
        }, 20)
    } catch (err) {
        isShorted = false
        loader[0].style.display = 'none'
        shortBtn[0].value = 'short'
        console.log(err)
        setTimeout(() => alert("Network Error!", 10))
    }
    } else {
        urlBox[0].style.display = "none"
        alert("Enter a valid url")
        loader[0].style.display = 'none'
        shortBtn[0].value = 'short'
    }
}
})
copyButton.onclick = ()  => {
    navigator.clipboard.writeText(shorten.href).then(() => {
        copyButton.title = "copied"
        copyIcon.src = copiedCheckPreload.src
        setTimeout(() => {
            copyIcon.src = '/res/copy-icon.svg'
            copyButton.title = "copy"
        }, 2000)
    }).catch((err) => {
        console.log(err)
        alert("Copy opreration failed")
    })
}
var copiedCheckPreload, preloadCursorClicked
window.addEventListener('load', () => {
    preloadCursorClicked = new Image()
    preloadCursorClicked.src = '/res/cursor-clicked.svg'
    copiedCheckPreload = new Image()
    copiedCheckPreload.src = '/res/check.svg'
})
document.getElementsByClassName("github")[0].onclick =  () => {
    window.open('https://github.com/sankar-raul/url_shorter')
}
document.getElementsByClassName('pic')[0].onclick = () => {
    window.open('https://github.com/sankar-raul')
}
function clickFunc(element) {
    element.target.style.cursor = `url(${preloadCursorClicked.src}), auto`
    setTimeout(() => {
        element.target.style.cursor = "url('/res/cursor.svg'), auto"
    }, 100)
}
document.getElementById("sankar").onclick = () => window.open("https://github.com/sankar-raul")
const elementsToClikAnim = [shortBtn[0], copyButton, shorten]
elementsToClikAnim.forEach(el => {
    el.addEventListener('click', e => clickFunc(e))
    }
)
let clickTimeOut = null
document.onclick = () => {
    clickTimeOut ?? clearTimeout(clickTimeOut)
    document.documentElement.style.cursor = `url(${preloadCursorClicked.src}), auto`
    clickTimeOut = setTimeout(() => {
        document.documentElement.style.cursor = "url('/res/cursor.svg'), auto"
    }, 100)
}
// heart animation
const footer = document.getElementsByTagName("footer")[0]
let counter = 10
footer.addEventListener('mousemove', (e) => {
    if (counter % 10 == 0) {
    const hueFilterValue = 360 - (30 * (Math.round(Math.random() * 12)))
    const heartCopy = document.createElement('img')
    heartCopy.src = '/res/heart-icon.svg'
    heartCopy.classList.add('heart')
    heartCopy.style.top = e.clientY + "px"
    heartCopy.style.left = e.clientX + "px"
    heartCopy.style.filter = `hue-rotate(${hueFilterValue}deg)`
    document.body.appendChild(heartCopy)
    setTimeout(() => document.body.removeChild(heartCopy), 750)
    }
    counter++
}
)
let count = 8
footer.addEventListener('touchmove', (e) => {
    if (count % 8 == 0) {
    const hueFilterValue = 360 - (30 * (Math.round(Math.random() * 12)))
    const heartCopy = document.createElement('img')
    heartCopy.src = '/res/heart-icon.svg'
    heartCopy.classList.add('heart')
    heartCopy.style.top = e.changedTouches[0].clientY + "px"
    heartCopy.style.left = e.changedTouches[0].clientX + "px"
    heartCopy.style.transform = "translate(-50%, -50%)"
    heartCopy.style.filter = `hue-rotate(${hueFilterValue}deg)`
    document.body.appendChild(heartCopy)
    setTimeout(() => document.body.removeChild(heartCopy), 750)
    }
    count++
}
)
