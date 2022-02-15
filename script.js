let nav
let navlinks
let divHeight

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
    checkHeight()
    return {
        nav,
        navlinks
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
}