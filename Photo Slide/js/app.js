document.querySelectorAll('.slider').forEach((n, i) => {
    window[`slider${i+1}`] = new Swiper(n, {
        freeMode: true,
        centeredSlides: true,
        direction: 'vertical',
        mousewheel: true,
        slidesPerView: 1.75,
        slidesOffsetBefore: -125,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    
})

document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', event =>{
        item.classList.toggle('opened')
    })
})

swipers(slider1, slider2, slider3, slider4)