// Function to send a message
// Function to send a message
async function sendMessage() {
  var userInput = document.getElementById("userInput");
  var message = userInput.value.trim();

  if (message !== "") {
    // Append user message to chat box
    appendMessage("user", message);

    // Clear input field
    userInput.value = "";

    try {
      // Get bot response
      var botResponse = await getBotResponseAI(message);
      // Append bot response to chat box
      appendMessage("bot", botResponse);
    } catch (error) {
      // Handle error
      console.error("Error fetching bot response:", error);
      appendMessage("bot", "Bot: Sorry, I couldn't process your request.");
    }
  }
}

// Function to append a message to the chat box
function appendMessage(sender, message) {
  var chatBox = document.getElementById("chatBox");
  var messageElement = document.createElement("div");
  messageElement.classList.add(sender);

  var messageText = document.createElement("p");
  messageText.textContent = message;

  messageElement.appendChild(messageText);
  chatBox.appendChild(messageElement);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Placeholder function for fetching bot response using Google Generative AI
async function getBotResponseAI(message) {
  const { GoogleGenerativeAI } = require("@google/generative-ai");

  const genAI = new GoogleGenerativeAI(
    "AIzaSyAL - xcWgAfO_h - z6vx - t7k0Mk1EDHvUZcA"
  );

  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(message);
  const response = await result.response;
  return response.text();
}

// Function to handle user input and bot response
async function handleUserInput() {
  var userInput = document.getElementById("userInput");
  var message = userInput.value.trim();

  if (message !== "") {
    // Append user message to chat box
    appendMessage("user", message);

    // Clear input field
    userInput.value = "";

    // Get bot response and append to chat box
    try {
      const botResponse = await getBotResponseAI(message);
      appendMessage("bot", botResponse);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      appendMessage("bot", "Bot: Sorry, I couldn't process your request.");
    }
  }
}

// Event listener for sending message on button click
document
  .getElementById("sendButton")
  .addEventListener("click", handleUserInput);

// Event listener for sending message on pressing Enter key
document
  .getElementById("userInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleUserInput();
    }
  });
