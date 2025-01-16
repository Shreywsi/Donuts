window.addEventListener('load', () => {
  // DOM elements
  const airDropImage = document.querySelector('.AirDrop');
  const targetPage = document.querySelector('.target-page');
  const imageContainer = document.querySelector('.image-container');
  const goBackButton = document.querySelector('button');
  const searchButton = document.querySelector('.search-button');
  const airDropAudio = new Audio('sounds/apple_airdrop.mp3'); // Path to AirDrop sound
  const clickAudio = new Audio('sounds/clicksound.wav'); // Path to click sound
  const signupLink = document.querySelector('.signup-link');
  const signupModal = document.getElementById('signup-modal');
  const closeModal = document.querySelector('.close-btn');

  // Show AirDrop image with animation
  setTimeout(() => {
    airDropImage.style.opacity = '1'; // Make AirDrop image visible
    airDropImage.classList.add('animate-airdrop');
  });

  // Show target page with circular transition
  window.showTargetPage = () => {
    imageContainer.style.display = 'none'; // Hide the main content
    targetPage.style.display = 'flex'; // Show the target page
    setTimeout(() => {
      targetPage.style.clipPath = 'circle(150% at 50% 50%)'; // Expand circle
    }, 50);
  };

  // Play click sound and navigate to target page when search button is clicked
  searchButton.addEventListener('click', () => {
    clickAudio.play(); // Play click sound
    showTargetPage(); // Navigate to target page
  });

  // Go back to the main page with circular transition
  window.goBack = () => {
    clickAudio.play(); // Play click sound
    targetPage.style.clipPath = 'circle(0% at 50% 50%)'; // Shrink circle
    setTimeout(() => {
      targetPage.style.display = 'none'; // Hide target page
      imageContainer.style.display = 'flex'; // Show main content
    }, 500);
  };

  // Trigger click sound and restart AirDrop image animation on go-back button click
  goBackButton.addEventListener('click', () => {
    clickAudio.play(); // Play click sound
    airDropImage.classList.remove('animate-airdrop'); // Reset animation
    void airDropImage.offsetWidth; // Trigger reflow
    airDropImage.classList.add('animate-airdrop'); // Restart animation
  });

  // Open signup modal function
  window.openSignupModal = () => {
    signupModal.style.display = 'flex';
  };

  // Signup modal functionality
  const signupButtons = document.querySelectorAll('.signup-button'); // Add class 'signup-button' to all sign-up triggers
  const closeBtn = document.querySelector('.close-btn');

  // Show the modal when any signup button is clicked
  signupButtons.forEach(button => {
    button.addEventListener('click', () => {
      signupModal.style.display = 'flex';
    });
  });

  // Close the modal when the close button is clicked
  closeBtn.addEventListener('click', () => {
    signupModal.style.display = 'none';
  });

  // Close the modal if the user clicks outside of the modal content
  window.addEventListener('click', (e) => {
    if (e.target === signupModal) {
      signupModal.style.display = 'none';
    }
  });
});
