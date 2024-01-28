const navMenu = document.querySelectorAll('.navMenu')
const menuBg = document.querySelector('.menuBg')

navMenu.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        item.childNodes[1].style.bottom = 0
        item.childNodes[3].style.color = '#fff'
    })
    item.addEventListener('mouseleave', () => {
        item.childNodes[1].style.bottom = '-100%'
        item.childNodes[3].style.color = '#000000c2'
    })
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
})

const elements = document.querySelectorAll('.elem')
const elemBg = document.querySelectorAll('.elemBg')

elements.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        elemBg[index].style.top = 0
        if (index == 4 || index == 6) {
            item.insertAdjacentHTML('afterbegin', `<video class="media" autoplay muted loop src="./assets/${index + 1}.mp4"></video>`)
        } else {
            item.insertAdjacentHTML('afterbegin', `<img class="media" src="./assets/${index + 1}.webp" alt="" />`)
        }
    })
    item.addEventListener('mouseleave', () => {
        elemBg[index].style.top = '-100%'
        item.childNodes[0].remove()
    })
})

let projectDetails = [
    {
        img: `./assets/project1.webp`,
        text: `Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.`,
    },
    {
        img: `./assets/project2.webp`,
        text: `Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.`,
    },
    {
        img: `./assets/project3.webp`,
        text: `We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.`,
    },
]

const link = document.querySelectorAll('.projects')
const ptext = document.querySelector('.ptext')
const projectImg = document.querySelector('.projectImg')
const projectText = document.querySelector('.projectText')
const projectRight = document.querySelector('.projectRight')

link.forEach((item, index) => {
    item.addEventListener('click', () => {
        projectText.style.opacity = '0'
        projectRight.style.opacity = '0'
        switch (index) {
            case 0:
                link[0].style.borderLeftColor = '#FE330A'
                link[0].childNodes[0].style.color = '#efeae3'
                link[1].style.borderLeftColor = '#504a45'
                link[1].childNodes[0].style.color = '#504a45'
                link[2].style.borderLeftColor = '#504a45'
                link[2].childNodes[0].style.color = '#504a45'
                break
            case 1:
                link[1].style.borderLeftColor = '#FE330A'
                link[1].childNodes[0].style.color = '#efeae3'
                link[0].style.borderLeftColor = '#504a45'
                link[0].childNodes[0].style.color = '#504a45'
                link[2].style.borderLeftColor = '#504a45'
                link[2].childNodes[0].style.color = '#504a45'
                break
            case 2:
                link[2].style.borderLeftColor = '#FE330A'
                link[2].childNodes[0].style.color = '#efeae3'
                link[1].style.borderLeftColor = '#504a45'
                link[1].childNodes[0].style.color = '#504a45'
                link[0].style.borderLeftColor = '#504a45'
                link[0].childNodes[0].style.color = '#504a45'
                break

            default:
                break
        }
        setTimeout(() => {
            ptext.innerHTML = projectDetails[index].text
            projectImg.setAttribute('src', projectDetails[index].img)
            projectText.style.opacity = '1'
            projectRight.style.opacity = '1'
        }, 500)
    })
})

function swiper() {
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 100,
    })
}

function loading() {
    let loader = document.querySelector('.loader')
    let loaderHeading = document.querySelectorAll('.loader h1')
    loaderHeading[0].style.opacity = 1
    setTimeout(() => {
        loaderHeading[0].style.opacity = 0
        loaderHeading[1].style.opacity = 1
        setTimeout(() => {
            loaderHeading[1].style.opacity = 0
            loaderHeading[2].style.opacity = 1
        }, 1000)
    }, 1000)
    setTimeout(() => {
        loader.style.top = '-100%'
    }, 3000)
}

loading()
swiper()
