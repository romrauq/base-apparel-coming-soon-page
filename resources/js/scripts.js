// Get references to the input field, alert text, and image button
const emailInput = document.getElementById("input-field");
const alertText = document.getElementById("alert");
const inputImageDiv = document.querySelector(".input-image-div");

// Hide the alert text by default
alertText.style.display = "none";

// Function to validate email
function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Add a click event listener to the image button
inputImageDiv.addEventListener("click", () => {
	const emailValue = emailInput.value.trim();

	if (validateEmail(emailValue)) {
		alertText.style.display = "none"; // Hide alert if the email is valid
	} else {
		alertText.style.display = "block"; // Show alert if the email is invalid
	}
});
