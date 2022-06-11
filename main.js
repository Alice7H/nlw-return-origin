
window.addEventListener('scroll', onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  const navigation = document.querySelector("#navigation");
  scrollY > 0
    ? navigation.classList.add('scroll')
    : navigation.classList.remove('scroll');
}

function showBackToTopButtonOnScroll() {
  const backToTop = document.querySelector("#backToTopButton");
  scrollY > 400
    ? backToTop.classList.add('show')
    : backToTop.classList.remove('show');
}


function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  durations: 700,
}).reveal(`
#home,
#home .img-woman, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#contact,
#contact li,
#contact .button,
#contact img
`);