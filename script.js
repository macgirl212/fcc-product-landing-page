let nav
let navlinks
let divHeight
let title
let homeDiv
let about
let description
let chartImg

// gets first div's height
const checkHeight = () => {
    let clientHeight = document.getElementById('home').getBoundingClientRect()
    divHeight = clientHeight.height
    return divHeight
}

// dynamically checks first div's height
window.onload = () => {
    nav = document.querySelector('nav')
    navlinks = nav.querySelectorAll('a')
    title = document.querySelector('#title')
    homeDiv = document.querySelector('.home-div')
    aboutTitle = document.querySelector('.about-title')
    description = document.querySelector('.description')
    chartImg = document.querySelector('#chart-img')
    checkHeight()
    title.classList.remove('hidden')
    title.classList.add('title-visible')
    homeDiv.classList.remove('hidden')
    homeDiv.classList.add('home-div-visible')
    return {
        nav,
        navlinks,
        about,
        description,
        chartImg
    }
}

window.onresize = () => {
    checkHeight()
}

// changes nav color
window.onscroll = () => {
    if (document.body.scrollTop > (divHeight - 50) || document.documentElement.scrollTop > (divHeight - 50)) {
        nav.classList.remove('black-menu')
        nav.classList.add('white-menu')
        navlinks.forEach(link => {
            link.classList.remove('white-text')
            link.classList.add('black-text')
        })
    } else {
        nav.classList.remove('white-menu')
        nav.classList.add('black-menu')
        navlinks.forEach(link => {
            link.classList.remove('black-text')
            link.classList.add('white-text')
        })
    }
    if (document.body.scrollTop >= 820 || document.documentElement.scrollTop >= 820) {
        aboutTitle.classList.remove('hidden')
        aboutTitle.classList.add('visible')
        description.classList.remove('hidden')
        description.classList.add('description-visible')
        chartImg.classList.remove('hidden')
        chartImg.classList.add('chart-visible')
    }
}