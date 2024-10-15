// script.js

// Function to handle the image click
function handleImageClick() {
    alert("Hire me! Hire me!");
    // You can add more actions here, like opening a new page or performing other logic
}

// Wait for the DOM to fully load, then add the event listener
document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("dennisImage");
    image.addEventListener("click", handleImageClick);
});
