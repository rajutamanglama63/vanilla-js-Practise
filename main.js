const hamburger = document.getElementsByClassName('hamburger')[0]
// console.log(hamburger);

const navLinks = document.getElementsByClassName('nav-link')[0]
// console.log(navLinks);

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    // console.log(navLinks.classList)
})