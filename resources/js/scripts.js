// Get references to the input field, alert text, and image button
const emailInput = document.getElementById("input-field");
const alertText = document.getElementById("alert");
const inputField = document.getElementById("input-field");
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
		inputField.style.border = "1px solid hsla(0, 6%, 24%, 0.3)"; //Change input field border color.
		alertText.style.display = "none"; // Hide alert if the email is valid
	} else {
		inputField.style.border = "2px solid hsl(0, 93%, 68%)"; //Change input field border color.
		alertText.style.display = "block"; // Show alert if the email is invalid
	}
});
