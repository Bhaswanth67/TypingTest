# Typing Test Game

The Typing Test Game is an engaging web application designed to boost typing speed and accuracy. Users can select difficulty levels and timer durations to match their skill levels. The game provides real-time feedback on performance, including words per minute (WPM) and characters per minute (CPM).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [Contribution](#contribution)

## Features

- Select timer duration for the typing test (30 seconds, 1 minute, 3 minutes, 5 minutes, 10 minutes).
- Real-time display of WPM and CPM.
- Animations for game start and end.
- Interactive UI with hover effects and color-changing effects.
- Circle-like background animation when the mouse cursor is outside the typing game box.
- Option to toggle between light and dark themes.

## Technologies Used

- **HTML:** Used for structuring the content and layout of the game.
- **CSS:** Utilized for styling the game interface, including custom animations and responsive design.
  - Animations: Gradient color changes for headings and hover effects for buttons.
  - Responsive Design: Ensures the game looks good on various screen sizes.
- **JavaScript:** Powers the game’s interactive features and logic.
  - Event Handling: Listens for user inputs and mouse movements to update the game state.
  - Game Logic: Manages typing speed calculation, timer, and mistake tracking.
- **React:** A JavaScript library for building user interfaces.
- **Bootstrap:** Ensures responsiveness and better styling across various screens.


## Usage

1. Select a timer duration from the options provided (30 seconds, 1 minute, 3 minutes, 5 minutes, 10 minutes).11
2. Click the "Start" button to begin the test.
3. Type the displayed text in the input field as quickly and accurately as possible.
4. When the timer ends, a popup will display your typing speed (WPM), characters per minute (CPM), and accuracy.
5. Click "Try Again" to restart the test or "End" to exit.

## Project Structure

```
TypingTest/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── TypingTest.js
│   │   ├── DifficultySelector.js
│   │   ├── StartAnimation.js
│   │   ├── EndAnimation.js
│   │   └── animations.css
│   ├── data/
│   │   └── data.js
│   ├── styles/
│   │   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

### Components

- **App.js:** The main component that contains the application logic and UI elements.
- **TypingTest.js:** Manages the typing test logic, including input handling, timer, and displaying the test paragraph.
- **DifficultySelector.js:** Allows users to select the difficulty level of the test.
- **StartAnimation.js:** Displays an animation when the test starts.
- **EndAnimation.js:** Displays an animation when the test ends.
- **animations.css:** Contains the CSS for animations used in the game.

### Styling

- **CSS:** Styles are written in `App.css` and `animations.css` to create a responsive design and apply custom animations. The styles ensure a visually appealing interface with dynamic effects.

    ```css
    .App {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #f0f4f8;
    }

    .typing-test {
      margin: 20px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color: #fff;
    }

    .start-button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: #fff;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .start-button:hover {
      background-color: #0056b3;
    }

    .end-animation {
      animation: fadeOut 1s;
    }

    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    ```

## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

Thank you for using the Typing Test Game!
