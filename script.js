//your JS code here. If required.

// Function to handle forward typing (focus moves to the next field)
let nextFocusInput = document.querySelectorAll('.code')
nextFocusInput.forEach((input, index, inputs) => {
    input.addEventListener('input', () => {
        // If the input field has a value, move to the next field
        if (input.value) {
            const nextInput = inputs[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        }
    });
});

// Function to handle backspace behavior (focus moves to the previous field)
let prevFocusInput = document.querySelectorAll('.code')
prevFocusInput.forEach((input, index, inputs) => {
	input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && !input.value) {
            const prevInput = inputs[index - 1];
            if (prevInput) {
                prevInput.focus();
            }
        }
    });
});
