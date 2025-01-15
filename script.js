// Play click sound when the button is clicked
function playClickSound() {
  var sound = new Audio('sounds/clicksound.wav'); // Make sure to have the correct path to the sound file
  sound.play();
}

// Show the target page and hide the main page content
function showTargetPage() {
  document.querySelector('.image-container').style.display = 'none'; // Hide the search button
  document.querySelector('.target-page').style.display = 'block'; // Show the target page
}

// Go back to the main page (index)
function goBack() {
  document.querySelector('.image-container').style.display = 'flex'; // Show the search button again
  document.querySelector('.target-page').style.display = 'none'; // Hide the target page
}
