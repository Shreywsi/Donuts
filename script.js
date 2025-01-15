window.addEventListener('load', () => {
  const airDropImage = document.querySelector('.AirDrop');
  const targetPage = document.querySelector('.target-page');
  const imageContainer = document.querySelector('.image-container');
  const goBackButton = document.querySelector('button');
  const audio = new Audio('sounds/apple_airdrop.mp3'); // Path to AirDrop sound
  
  // Trigger AirDrop animation and play sound on page load
  setTimeout(() => {
    airDropImage.classList.add('animate-airdrop');
  }, 50);

  airDropImage.addEventListener('animationstart', () => {
    audio.play();
  });

  // Show target page with circular transition
  window.showTargetPage = () => {
    imageContainer.style.display = 'none'; // Hide the main content
    targetPage.style.display = 'flex'; // Show the target page
    setTimeout(() => {
      targetPage.style.clipPath = 'circle(150% at 50% 50%)'; // Expand circle
    }, 50);
  };

  // Go back to main page with circular transition
  window.goBack = () => {
    targetPage.style.clipPath = 'circle(0% at 50% 50%)'; // Shrink circle
    setTimeout(() => {
      targetPage.style.display = 'none'; // Hide target page
      imageContainer.style.display = 'flex'; // Show main content
    }, 500);
  };

  // Trigger AirDrop animation on button click (optional)
  goBackButton.addEventListener('click', () => {
    airDropImage.classList.remove('animate-airdrop'); // Reset animation
    void airDropImage.offsetWidth; // Trigger reflow
    airDropImage.classList.add('animate-airdrop'); // Restart animation
  });
});
