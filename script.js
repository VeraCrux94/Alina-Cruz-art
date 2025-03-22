function toggleSubMenu(id) {
  const submenu = document.getElementById(id);
  if (submenu) {
    console.log(`Toggling submenu with ID: ${id}`); // Debug log
    submenu.classList.toggle('open'); // Use 'open' class to toggle visibility
    console.log(`Submenu class list: ${submenu.classList}`); // Debug log
  } else {
    console.error(`Submenu with ID: ${id} not found`); // Debug log if submenu is not found
  }
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}

let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const imageItems = document.querySelectorAll('.image-item');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const closeBtn = document.querySelector('.close');
const galleryBtn = document.querySelector('.gallery-view-btn');

// Open modal when an image is clicked
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    modal.style.display = 'flex';
    modalImage.src = image.src;
    modalDescription.textContent = image.getAttribute('data-description'); // Show description in modal
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Navigate to previous image
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  modalImage.src = images[currentIndex].src;
  modalDescription.textContent = images[currentIndex].getAttribute('data-description'); // Update description
});

// Navigate to next image
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  modalImage.src = images[currentIndex].src;
  modalDescription.textContent = images[currentIndex].getAttribute('data-description'); // Update description
});

// Open the gallery view (you can add custom functionality for this button)
galleryBtn.addEventListener('click', () => {
  alert("Gallery view functionality can be added!");
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

let slideIndex = 0; // Start with the first slide (index 0)

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Increment slideIndex and loop back to the first slide if necessary
  slideIndex = (slideIndex + 1) > slides.length ? 1 : slideIndex + 1;
  // Display the current slide
  slides[slideIndex - 1].style.display = "block";
}

// Initialize the slideshow on window load
window.onload = function () {
  showSlides(); // Show the first slide
  setInterval(showSlides, 2000); // Automatically cycle through slides every 2 seconds
};

document.querySelectorAll('.gallery-image').forEach(image => {
  image.addEventListener('click', function() {
      const modal = document.getElementById('imageModal');
      const modalImage = document.getElementById('modalImage');
      const modalDescription = document.getElementById('modalDescription');
      
      modal.style.display = 'block';
      modalImage.src = image.src;
      modalDescription.textContent = image.dataset.description;
  });
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('imageModal').style.display = 'none';
});

document.querySelector('.hamburger').addEventListener('click', function () {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});

const modalTriggers = document.querySelectorAll(".imageModalTrigger");

modalTriggers.forEach(trigger => {
  trigger.addEventListener("click", (event) => {
    modal.style.display = "block";
    modalImage.src = event.target.src;
    modalDescription.textContent = event.target.getAttribute("data-description");
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling effect
  });
}

// Show the "Back to Top" button when scrolling down
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Show button after scrolling 300px
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});