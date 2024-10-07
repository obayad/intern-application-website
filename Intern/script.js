
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const href = link.getAttribute('href');

    if (href.startsWith('#')) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
})