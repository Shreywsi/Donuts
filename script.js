window.addEventListener('load', () => {
  const airDropImage = document.querySelector('.AirDrop');
  const targetPage = document.querySelector('.target-page');
  const imageContainer = document.querySelector('.image-container');
  const goBackButton = document.querySelector('button');
  const searchButton = document.querySelector('.search-button');
  const airDropAudio = new Audio('sounds/apple_airdrop.mp3'); // Path to AirDrop sound
  const clickAudio = new Audio('sounds/clicksound.wav'); // Path to click sound

  // Trigger AirDrop image and sound after a delay
  setTimeout(() => {
    airDropImage.style.opacity = '1'; // Make AirDrop image visible
    airDropImage.classList.add('animate-airdrop');
    airDropAudio.play(); // Play AirDrop sound
  }, 3000); // Delay of 3 seconds

  // Show target page with circular transition
  window.showTargetPage = () => {
    imageContainer.style.display = 'none'; // Hide the main content
    targetPage.style.display = 'flex'; // Show the target page
    setTimeout(() => {
      targetPage.style.clipPath = 'circle(150% at 50% 50%)'; // Expand circle
    }, 50);
  };

  // Play click sound on search button click
  searchButton.addEventListener('click', () => {
    clickAudio.play(); // Play click sound
    showTargetPage(); // Navigate to target page
  });

  // Go back to main page with circular transition
  window.goBack = () => {
    targetPage.style.clipPath = 'circle(0% at 50% 50%)'; // Shrink circle
    setTimeout(() => {
      targetPage.style.display = 'none'; // Hide target page
      imageContainer.style.display = 'flex'; // Show main content
    }, 500);
  };

  // Trigger click sound on go-back button click
  goBackButton.addEventListener('click', () => {
    clickAudio.play(); // Play click sound
    airDropImage.classList.remove('animate-airdrop'); // Reset animation
    void airDropImage.offsetWidth; // Trigger reflow
    airDropImage.classList.add('animate-airdrop'); // Restart animation
  });
});
