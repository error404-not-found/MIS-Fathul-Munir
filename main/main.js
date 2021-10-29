const navbar = document.getElementById('menu');
const hamburger = document.getElementById('btn-menu');
const closeMenu = document.getElementById('close');


if (hamburger) {
    hamburger.addEventListener('click',function(){
        navbar.classList.add('show-menu');
    });
};

if (closeMenu) {
    closeMenu.addEventListener('click',function(){
        navbar.classList.remove('show-menu');
    });
};



window.addEventListener('scroll',()=>{
    let navbar = document.querySelector('.container-navbar');
    if (window.innerWidth > 425) {
        navbar.classList.toggle('navbar-fixed', window.scrollY > 93);
    }
});



const animate = (el, active) =>{
    window.addEventListener('scroll', () =>{
        let element = document.querySelector(el);
        let CurrentPosition = element.getBoundingClientRect().top;
        let ScreenPosition = window.innerHeight;

        if (CurrentPosition < ScreenPosition) {
            let interval = element.getAttribute('data-interval');
            setTimeout(()=>{
                element.classList.add(active);
            }, interval);
        }
    });
}

animate('.selamat-datang','active-atas');
animate('.visi-misi','active-kanan');