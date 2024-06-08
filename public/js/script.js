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
    if (!isShorted) {
    if (valid.test(url.value.trim())) {
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
        }, 1000)
        urlBox[0].style.display = "none"
        const data = await response.json()
        shorten.href = location.href + data.id
        shorten.innerHTML = location.href + data.id
        setTimeout(() => {
            urlBox[0].style.display = "grid"
        }, 20)
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
        copyIcon.src = '/res/check.svg'
        setTimeout(() => {
            copyIcon.src = '/res/copy-icon.svg'
            copyButton.title = "copy"
        }, 2000)
    }).catch((data) => {
        alert("Copy opreration failed")
    })
    // alert();
}