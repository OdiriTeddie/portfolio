// import './style.css'

const header = document.querySelector('.header')

function headerChange() {
    header.classList.toggle('sticky', window.scrollY > 0)
}

window.addEventListener('scroll', headerChange)
