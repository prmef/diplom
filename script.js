// Get all "Купить" buttons
var buyButtons = document.querySelectorAll(".buy-button");
var modal = document.getElementById("myModal");
const close = document.querySelector('.close'); // Corrected selector for close button

// Function to handle when a "Купить" button is clicked
function handleBuyButtonClick(event) {
    var productName = event.target.parentNode.querySelector("h3").innerText; // Get the product name from the clicked card
    // Call your function to open modal and pass productName
    openModalWithProductName(productName);
}

// Attach click event listener to each "Купить" button
buyButtons.forEach(function(button) {
    button.addEventListener("click", handleBuyButtonClick);
});

// Function to open modal with product name
function openModalWithProductName(productName) {
    // Your code to open modal and populate with productName
    // For example:
    modal.style.display = "block";
    // Populate a hidden input field in the modal with the productName if needed
    document.getElementById("productNameInput").value = productName;
}

close.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display='none';
    document.getElementById("productNameInput").value='';
}
