const sr = ScrollReveal({
    distance: '45px',
    duration: 1500,
    reset: true,
})

sr.reveal('.home-image', {
    delay: 400,
    origin: 'top'
})
sr.reveal('.home-text-content', {
    delay: 900,
    origin: 'bottom'
})
sr.reveal('.about-text-content', {
    delay: 400,
    origin: 'left'
})
sr.reveal('.quality-content', {
    delay: 400,
    origin: 'bottom'
})
sr.reveal('.qulity-image', {
    delay: 1000,
    origin: 'left'
})
sr.reveal('.gallery-image', {
    delay: 400,
    origin: 'top'
})
sr.reveal('.food-main-content', {
    delay: 500,
    origin: 'left'
})
sr.reveal('.inner-menu-food', {
    delay: 400,
    origin: 'bottom'
})
sr.reveal('.menu-food-text', {
    delay: 500,
    origin: 'top'
})
sr.reveal('.before', {
    delay: 400,
    origin: 'top'
})
sr.reveal('.before-content', {
    delay: 700,
    origin: 'left'
})




// let menubar = document.querySelector('#menubar');
// let mynav = document.querySelector('.navbar');



// menubar.onclick = () =>{
//     menubar.classList.toggle('fa-times')
//     mynav.classList.toggle('active')
// }

// document.querySelector('#loginbtn').onclick = () =>{
//     document.querySelector('.login-form').classList.toggle('active');
//   }
//   document.querySelector('#closeloginform').onclick = () =>{
//     document.querySelector('.login-form').classList.remove('active');
//   }