async function sendMessage() {
    // Get the user's input from the input field
    const userPrompt = document.getElementById("prompt-input").value;

    // Send the user's input to the Google Cloud Function
    const response = await fetch("https://europe-west6-general-158110.cloudfunctions.net/biberai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({prompt: userPrompt})
    });

    // Parse the response from the function
    const data = await response.json();

    // Display the function's reply in the response div
    displayResponse(data.reply);
}

function displayResponse(message) {
    // Display the response from the function in the response div
    const responseDiv = document.getElementById("response");
    const newMessage = document.createElement("p");
    newMessage.textContent = message;
    responseDiv.appendChild(newMessage);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("send-button").addEventListener("click", sendMessage);
});
