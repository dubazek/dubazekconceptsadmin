  // Get DOM element references
const modal = document.getElementById("formModal");
const ctaBtn = document.querySelector(".cta-button");
const closeBtn = document.getElementById("closeFormBtn");

// Open the modal when the "Get Organized Today" button is clicked
ctaBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close the modal when the 'X' button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal if the user clicks anywhere outside of the form box
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
    
