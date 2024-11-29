let score = 0;
let timer = 0;
let timerInterval;

document.addEventListener("DOMContentLoaded", () => {
  fetch("config.json")
    .then((response) => response.json())
    .then((data) => initializeGame(data))
    .catch((error) => console.error("Error loading config:", error));
});

function initializeGame(config) {
  document.getElementById("gameTitle").innerText = config.gameTitle;
  document.getElementById("image1").src = config.images.image1;
  document.getElementById("image2").src = config.images.image2;

  const image1Container = document.getElementById("image1Container");
  const image2Container = document.getElementById("image2Container");

  // Start the timer
  startTimer();

  // Add differences to the images
  config.differences.forEach((diff) => {
    const { x, y, width, height } = diff;
    createHighlight(image1Container, x, y, width, height, config.differences.length);
    createHighlight(image2Container, x, y, width, height, config.differences.length);
  });
}

function createHighlight(container, x, y, width, height, totalDifferences) {
  const highlight = document.createElement("div");
  highlight.classList.add("highlight");
  highlight.style.left = `${x}px`;
  highlight.style.top = `${y}px`;
  highlight.style.width = `${width}px`;
  highlight.style.height = `${height}px`;

  // Attach the highlight to the container
  container.appendChild(highlight);

  // Add click listener to check user clicks
  container.addEventListener("click", (event) => {
    const rect = container.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    
    if (
      clickX >= x &&
      clickX <= x + width &&
      clickY >= y &&
      clickY <= y + height &&
      !highlight.classList.contains("found")  
    ) {
      highlight.classList.add("found"); 
      score++;
      document.getElementById("score-box").innerText = `Score: ${score}`;

      
      if (score === totalDifferences) {
        endGame();
      }
    }
  });
}

// Timer logic
function startTimer() {
  const timerBox = document.getElementById("timer-box");
  timerInterval = setInterval(() => {
    timer++;
    timerBox.innerText = `Time: ${timer}s`;
  }, 1000); 
}

function endGame() {
  clearInterval(timerInterval);

  // Show popup message
  setTimeout(() => {
    alert(`Congratulations! You found all the differences.\nScore: ${score}\nTime: ${timer}s`);
  }, 100); 
}


document.addEventListener("DOMContentLoaded", () => {
    const backgroundMusic = document.getElementById("backgroundMusic");
    const toggleSoundButton = document.getElementById("toggleSound");
    const volumeControl = document.getElementById("volumeControl");
  
    
    toggleSoundButton.addEventListener("click", () => {
      if (backgroundMusic.paused) {
        backgroundMusic.play()
          .then(() => {
            toggleSoundButton.innerText = "Pause Sound";
          })
          .catch((error) => {
            console.error("Playback error:", error);
          });
      } else {
        backgroundMusic.pause();
        toggleSoundButton.innerText = "Play Sound";
      }
    });
  
    // Volume Control
    volumeControl.addEventListener("input", (event) => {
      backgroundMusic.volume = event.target.value;
    });
  });
  