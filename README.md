# Spot the Difference Game

**Spot the Difference** is an interactive browser-based game where players must find differences between two side-by-side images. The game dynamically loads image data and differences from a JSON configuration file and provides features like a timer, score tracking, and responsive design.

---

## 📝 Features

- 🎯 **Interactive Gameplay**: Spot the differences by clicking on the correct areas.
- 🕒 **Timer**: Tracks the time taken to complete the game.
- 🏆 **Score Tracking**: Displays the player's progress as they find differences.
- 📂 **JSON Configurable**: Easily update images and difference coordinates via a JSON file.
- 🔊 **Background Music**: Includes background audio with controls for play, pause, and volume adjustment.
- 📱 **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- 🎉 **Endgame Popup**: Displays a congratulatory message with the final score and time.

---

## 🚀 Demo

![Game Screenshot](https://drive.google.com/file/d/1jqFG78CdSkiyUDG9m_r_R4yClI38-VFZ/view?usp=drive_link)

Try the live version of the game here: [Live Demo](#)

---

## 🛠️ Technologies Used

- **HTML5**: Structure and layout.
- **CSS3**: Styling and responsiveness (media queries).
- **JavaScript**: Game logic, interactivity, and JSON handling.

---

## 📂 Project Structure

|-- index.html # Main HTML file
|-- Style.css # Stylesheet for the game
|-- script.js # Game logic and interactivity
|-- config.json # JSON file for images and differences
|-- audio/ # Audio files (background music)
|-- images/ # Game images

---
## ⚙️ Setup Instructions

Follow these steps to run the game locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/spot-the-difference-game.git
   cd spot-the-difference-game

2. Open index.html in your browser:
3. Enjoy the game!

---
## 📖 JSON Configuration

The game uses a config.json file to load the images and define differences. Below is an example structure:
```base
{
  "gameTitle": "Spot the Difference",
  "images": {
    "image1": "images/image1.jpg",
    "image2": "images/image2.jpg"
  },
  "differences": [
    { "x": 100, "y": 200, "width": 50, "height": 50 },
    { "x": 300, "y": 150, "width": 40, "height": 40 }
  ]
}
```
---
## 🎮 How to Play

1. Start the game and view the side-by-side images.
2. Click on the differences you spot in the images.
3. Track your progress with the Score and Timer.
4. Once all differences are found, a popup will display your final score and time.







