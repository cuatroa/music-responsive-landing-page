const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const btnOpenVideo = document.querySelectorAll('.artist__video-content')
const artistPopup = document.getElementById('popup')

function popUp() {
    artistPopup.classList.add('show-popup')
}

let galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 0,
  slidesPerView: 0,
});

let galleryTop = new Swiper(".gallery-top", {
  effect: 'fade',
  loop: true,
  thumbs: {
    swiper: galleryThumbs,
  },
});

btnOpenVideo.forEach(b => b.addEventListener('click', popUp))

const btnCloseVideo = document.getElementById('popup-close')

btnCloseVideo.addEventListener('click', () => {
    artistPopup.classList.remove('show-popup')
})

const controlImg = document.querySelectorAll('.controls__img')

function ScrollAnimation() {
    gsap.from('.artist__subtitle', {opacity: 0, duration: .2, delay: .2, y: -20})
    gsap.from('.artist__title', {opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.artist__description', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.artist__button', {opacity: 0, duration: .5, delay: .5, y: -20})
    gsap.from('.artist__video-content', {opacity: 0, duration: .6, delay: .6, y: -20})

    artistPopup.classList.remove('show-popup')
}

controlImg.forEach(c => c.addEventListener('click', ScrollAnimation))