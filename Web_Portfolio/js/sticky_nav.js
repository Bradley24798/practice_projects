window.addEventListener('DOMContentLoaded', function() {
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('#navbar a');

  function makeSectionActive() {
    var scrollPosition = window.scrollY;

    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop - 60 &&
        scrollPosition < sectionTop + sectionHeight - 60
      ) {
        var targetLink = document.querySelector('a[href="#' + section.id + '"]');
        navLinks.forEach(function(link) {
          link.classList.remove('active');
        });
        targetLink.classList.add('active');
      } else {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
        });
      }
    });
  }

  makeSectionActive();

  window.addEventListener('scroll', makeSectionActive);
});
