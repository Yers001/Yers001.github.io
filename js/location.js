// Get the flower SVG image
const flower = document.querySelector('.flower');

// Create an animation object
const animation = flower.animate(
  [
    { transform: 'scale(0.5)', opacity: 0 },
    { transform: 'scale(1)', opacity: 1 },
  ],
  {
    duration: 1000,
    iterations: Infinity,
    easing: 'ease-in-out',
  },
);

// Start the animation
animation.play();

function showTab(tabId) {
  // Hide all tabs
  const tabs = document.getElementsByClassName('tab-content');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active-tab');
  }

  // Show the selected tab
  document.getElementById(tabId).classList.add('active-tab');
}
