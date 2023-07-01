

console.log("HEY THIS IS JAVASCRIPT CALLED")


// Define variables to store Google Sheets data
let titles = ["how to do 1?","How to do 2","How to do 3"];
let scripts = ["Hi this a script fo this topic 1","Hi this a script fo this topic 3","Hi this a script fo this topic 3"];
let images = ["image1", "Image2", "Image3"];

// Get references to relevant DOM elements
const editorContainer = document.getElementById('editor');
const outputContainer = document.getElementById('output');

// Function to read and process Google Sheets data
function readGoogleSheetsData() {
  // Use the Google Sheets API or a library like Google Sheets API Client to fetch the data from the Google Sheets document
  // Process the fetched data and store it in the respective variables (titles, scripts, images)


    console.log("Reading Data from Google Sheet is happening now..")


}

// Function to generate videos
function generateVideos() {
  // Iterate over the stored data and generate videos based on the titles, scripts, and images
  // Use a video editing library or API to manipulate and export the videos
  // Display progress messages or success message in the outputContainer


  console.log("Generate Videos Button Clicked")
}

// Function to update the user interface
function updateUI() {
  // Clear the editorContainer
//   editorContainer.innerHTML = 'Old is Removed';//Reassign

  // Generate input fields for each row of data
  for (let i = 0; i < titles.length; i++) {
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = titles[i];

    const scriptInput = document.createElement('textarea');
    scriptInput.value = scripts[i];

    const imageInput = document.createElement('input');
    imageInput.type = 'text';
    imageInput.value = images[i];

    editorContainer.appendChild(titleInput);
    editorContainer.appendChild(scriptInput);
    editorContainer.appendChild(imageInput);


    const break_ele = document.createElement('br');
    editorContainer.appendChild(break_ele);
  }

  // Create a button to trigger video generation
  const generateButton = document.createElement('button');
  generateButton.textContent = 'Generate Videos';
  generateButton.addEventListener('click', generateVideos);

  editorContainer.appendChild(generateButton);
}

// Entry point of the application
function initializeApp() {
  readGoogleSheetsData();//done
  updateUI();
}

// Call initializeApp to start the application
initializeApp();
