// Select the elements by their IDs
var titleElement = document.getElementById("pageTitle");
var contentElement = document.getElementById("pageContent");

// Change text color and padding

contentElement.style.padding = "20px"; // Add padding to the content

// You can also change the content itself
contentElement.textContent = "This is the updata text that change the background and add new padding.";

// You can add additional CSS classes for more complex styling
titleElement.classList.add("bg-warning", "p-3"); // Add a Bootstrap class for background color and padding
