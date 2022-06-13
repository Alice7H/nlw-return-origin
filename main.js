window.addEventListener('scroll', onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  const home = document.querySelector('#home');
  const services = document.querySelector('#services');
  const about = document.querySelector('#about');
  const testimonials = document.querySelector('#testimonials');
  const contact = document.querySelector('#contact');

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(testimonials);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine > sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndReachOrPassedTargetLine = sectionEndsAt <= targetLine;

  // limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndReachOrPassedTargetLine;

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove('active');
  if (sectionBoundaries) {
    menuElement.classList.add('active');
  }
}

function showNavOnScroll() {
  const navigation = document.querySelector("#navigation");
  scrollY > 0
    ? navigation.classList.add('scroll')
    : navigation.classList.remove('scroll');
}

function showBackToTopButtonOnScroll() {
  const backToTopButton = document.querySelector("#backToTopButton");
  scrollY > 400
    ? backToTopButton.classList.add('show')
    : backToTopButton.classList.remove('show');
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
#testimonials,
#testimonials header,
#testimonials .card, 
#contact,
#contact li,
#contact .button,
#contact img
`);