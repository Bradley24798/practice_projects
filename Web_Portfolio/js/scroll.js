// Select all anchor links that have a hash fragment in the URL
const links = document.querySelectorAll('a[href^="#"]');

// Attach click event listener to each link
links.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// Smooth scroll function
function smoothScroll(e) {
  e.preventDefault();

  // Get the target element's ID from the href attribute
  const targetId = this.getAttribute('href');

  // Calculate the target element's position relative to the document
  const targetPosition = document.querySelector(targetId).offsetTop;

  // Calculate the current scroll position
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  // Set the duration for the scroll animation (in milliseconds)
  const duration = 800;

  // Start the animation
  let start = null;
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;

    // Perform the scrolling animation
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));

    // Continue the animation unless the duration is exceeded
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  // Easing function for smooth animation
  function easeInOutCubic(t, b, c, d) {
    // t: current time, b: start value, c: change in value, d: duration
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }
}
