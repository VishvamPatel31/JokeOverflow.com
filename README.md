SOFTWARE ENGINEER JOKE BOX

_____________________________________________________________________________________________________________________________________________

INTRODUCTION

Welcome to the Software Engineer Joke Box! This is a simple web application that fetches programming jokes from a joke API and allows you to translate them into various languages using the Google Translate API. The app is designed to provide a light-hearted and entertaining experience for software engineers and anyone interested in programming humor.

Link to Project: https://64c2787ac3372106f797df0f--ephemeral-crumble-d9f156.netlify.app

INSTALLATION

Before running the application, ensure you have Node.js and npm installed on your system.

1. Clone this repository to your local machine using the following command: git clone //github.com/VishvamPatel31/JokeOverflow.com.git

2. Navigate to the project directory: cd software-engineer-joke-box

3. Install dependencies: Axios: Axios is a popular JavaScript library used for making HTTP requests. It simplifies the process of sending and handling HTTP requests from the browser. To install Axios, you can use npm: -------------> npm install axios

RUNNING THE APPLICATION

To run the application locally, follow these steps:
-Ensure you are in the project directory.
-Start the development server: npm start
-Open your web browser and visit http://localhost:3000 to access the app.

APPROACH AND DESIGN 

The Software Engineer Joke Box is a simple front-end web application built using HTML, CSS, and JavaScript. It leverages the Axios library to make API requests to the joke API and the Google Translate API for translation.

Code Structure
- index.html: The main HTML file that serves as the entry point of the application.
- style.css: The CSS file that defines the styles for the application's layout and components.
- script.js: The JavaScript file that contains the logic for fetching jokes, handling translations, and updating the DOM. Joke API and Google Translate API
- languages.js consists of all the languages listed in a seperate file

The app uses the Joke API (https://v2.jokeapi.dev) to fetch random programming jokes. It filters out any potentially offensive content to maintain a family-friendly experience. For translation, the Google Translate API is used to convert jokes into various languages. The available languages are listed in the languages array in the script.js file.

User Interface
The user interface is designed to be simple and intuitive. When the app loads, a "Get Joke and Translate" button is displayed. Clicking this button fetches a random joke from the joke API and displays it on the screen. If a user selects a language from the dropdown, the app will translate the joke into the chosen language.

Hosting
The app can be hosted on platforms like Netlify, which automatically deploy the app whenever changes are pushed to the linked Git repository.






