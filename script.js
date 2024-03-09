console.log("Hello world");
const imageContainers = document.querySelectorAll('.item');
const progressbars = document.querySelectorAll('.bars');
const activeClass = 'active'; // Class name for the active image

let currentImageIndex = 0; // Index of the currently active image

function changeActiveImage() {
  // Remove active class from the previous image
  imageContainers[currentImageIndex].classList.remove(activeClass);
  progressbars[currentImageIndex].classList.remove(activeClass);
  // Increment the index, handling rollover
  currentImageIndex = (currentImageIndex + 1) % imageContainers.length;

  // Add active class to the new active image
  imageContainers[currentImageIndex].classList.add(activeClass);
  progressbars[currentImageIndex].classList.add(activeClass);

}

// Initial setup: Add active class to the first image
imageContainers[currentImageIndex].classList.add(activeClass);
progressbars[currentImageIndex].classList.add(activeClass);
// Set up the interval to change images every 3 seconds
setInterval(changeActiveImage, 5000);
