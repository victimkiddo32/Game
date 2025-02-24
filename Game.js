document.addEventListener("DOMContentLoaded", function() {
    console.log("Game start");
  
    let life = 10;
    let level = 1;
    let points = 0;
    let rangemax = 10;
    let number = -1;
  
    // Function to start the game
    function startgame() {
      life = 10;
      document.getElementById("life").innerText= life;
      level = 1;
      document.getElementById("level").innerText= level;
      points = 0;
      document.getElementById("points").innerText= points;
      rangemax = 10;
      number = Math.floor(Math.random() * rangemax) + 1;
      console.log(`Game initialized. Random number between 1 and ${rangemax} generated.`);
    }
  
    // Hide the main screen if it exists
    const mainscreen = document.getElementById("Home-screen");
    if (mainscreen) {
      mainscreen.classList.add("hidden");
    } else {
      console.error('Element with ID "Home-screen" not found.');
    }
  
    // Add event listener to the start button if it exists
    const startButton = document.getElementById("start-button");
    if (startButton) {
      startButton.addEventListener("click", startgame);
    } else {
      console.error('Element with ID "start-button" not found.');
    }
  });
  