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
function goto(destination = "github") {
    switch (destination) {
        case "github":
            setTimeout(() => window.open('https://github.com/sankar-raul'), 800)
            break
        case "source":
            setTimeout(() => window.open('https://github.com/sankar-raul/url_shorter'), 800)
            break
        case "facebook":
            setTimeout(() => window.open('https://facebook.com/sankarraul.me'), 800)
            break
        default:
            window.open('https://github.com/sankar-raul')
    }
}
function clickFunc(element) {
    // console.log(element)
    element.target.style.cursor = `url(${preloadCursorClicked.src}) 10 10, auto`
    setTimeout(() => {
        element.target.style.cursor = "url('/res/cursor.svg') 10 10, auto"
    }, 100)
}
const elementsToClikAnim = [shortBtn[0], copyButton, shorten, loader[0]]
elementsToClikAnim.forEach(el => {
    el.addEventListener('click', e => clickFunc(e))
    }
)
// onclick heart pop up animation
let clickTimeOut = null
document.onclick = (e) => {
    if (e.pointerType != "" && (e.target.type != "text")) {
    clickTimeOut ?? clearTimeout(clickTimeOut)
    const hueFilterValue = 360 - (30 * (Math.round(Math.random() * 12)))
    const heartCopy = document.createElement('div')
    heartCopy.classList.add('clickEffect')
    heartCopy.style.top = e.clientY + "px"
    heartCopy.style.left = e.clientX + "px"
    // heartCopy.style.filter = `hue-rotate(${hueFilterValue}deg)`
    document.body.appendChild(heartCopy)
    setTimeout(() => document.body.removeChild(heartCopy), 750)
    document.documentElement.style.cursor = `url(${preloadCursorClicked.src}) 10 10, auto`
    clickTimeOut = setTimeout(() => {
        document.documentElement.style.cursor = "url('/res/cursor.svg') 10 10, auto"
    }, 100)
}
}
// heart animation
const footer = document.getElementsByTagName("footer")[0]
let counter = 10
let gap = counter
footer.addEventListener('mousemove', (e) => {
    if (counter % gap == 0) {
    const hueFilterValue = 360 - (30 * (Math.round(Math.random() * 12)))
    const heartCopy = document.createElement('img')
    heartCopy.src = '/res/heart-icon.svg'
    heartCopy.classList.add('heart')
    heartCopy.style.top = e.clientY + "px"
    heartCopy.style.left = e.clientX + "px"
    heartCopy.style.filter = `hue-rotate(${hueFilterValue}deg) brightness(150%)`
    document.body.appendChild(heartCopy)
    setTimeout(() => document.body.removeChild(heartCopy), 750)
    }
    counter++
}
)
let count = 8
let appendGap = count
footer.addEventListener('touchmove', (e) => {
    if (count % appendGap == 0) {
    const hueFilterValue = 360 - (30 * (Math.round(Math.random() * 12)))
    const heartCopy = document.createElement('img')
    heartCopy.src = '/res/heart-icon.svg'
    heartCopy.classList.add('heart-mobile')
    heartCopy.style.top = e.changedTouches[0].clientY + "px"
    heartCopy.style.left = e.changedTouches[0].clientX + "px"
    heartCopy.style.transform = 
    heartCopy.style.filter = `hue-rotate(${hueFilterValue}deg)`
    document.body.appendChild(heartCopy)
    setTimeout(() => document.body.removeChild(heartCopy), 750)
    }
    count++
}
)
// mouse follow
const mouse = document.querySelectorAll('.mouse')
    document.addEventListener('mousemove', (e) => {
        mouse[0].style.transform = `translate(${e.clientX - 25}px, ${e.clientY - 25}px)`
        mouse[1].style.transform = `translate(${e.clientX - 7.5}px, ${e.clientY - 7.5}px)`
    })