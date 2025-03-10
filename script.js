document.addEventListener("DOMContentLoaded", () => {
    const codeInputs = document.querySelectorAll('.code');

    // Forward typing behavior (when a user types a digit)
    codeInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value && index < codeInputs.length - 1) {
                // Focus on next input field after typing
                codeInputs[index + 1].focus();
            }
        });
    });

    // Backspace behavior (move focus to previous field)
    codeInputs.forEach((input, index) => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && index > 0) {
                // Focus on previous input field when backspace is pressed and current field is empty
                codeInputs[index - 1].focus();
            }
        });
    });

    // Set focus on the first input field on page load
    codeInputs[0].focus();
});
