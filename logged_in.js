document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('commandInput');
    const outputDiv = document.getElementById('output');

    inputField.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            const command = inputField.value;

            // Process the command and generate output
            const output = processCommand(command);

            // Display output
            const prompt = document.createElement('div');
            prompt.innerHTML = `<span id="prompt">root@Jatayu $</span> ${command}`;
            outputDiv.appendChild(prompt);

            const outputElement = document.createElement('div');
            outputElement.textContent = output;
            outputDiv.appendChild(outputElement);

            // Clear input field
            inputField.value = '';

            // Scroll to the bottom of the output
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
    });

    function processCommand(command) {
        // Add your command processing logic here
        // Example: return `Command received: ${command}`;
    }
});
