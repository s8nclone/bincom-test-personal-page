/** >>> web animation <<< */


// Define an array of strings
const webArray = ['Web Designer', 'Software Engineer', 'Tech enthusiast'];

// Get the element with the class name "typing_span"
const span = document.querySelector('.typing_span');

let currentIndex = 0;

//Set the text content of the span element to each string in the array, one after the other
setInterval(() => {
  span.textContent = webArray[currentIndex % webArray.length];
  currentIndex++;
}, 2000);
    
