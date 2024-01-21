// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Parallax scrolling effect
window.addEventListener('scroll', function() {
  var parallax = document.querySelector('.parallax-zoom');
  var scrollPosition = window.pageYOffset;

  parallax.style.transform = 'scale(' + (1 + scrollPosition/1000) + ')';
});

