import { GoogleGenerativeAI } from "@google/generative-ai";

// Function to send a message
async function sendMessage() {
  let userInput = document.getElementById("userInput");
  let message = userInput.value.trim();

  if (message === "") return; // Ignore empty messages

  // Append user message to chat box
  appendMessage("user", message);

  // Clear input field
  userInput.value = "";

  try {
    // Get bot response
    let botResponse = await getBotResponseAI(message);
    console.log(botResponse);
    // Format bot response
    botResponse = formatResponse(botResponse);
    console.log(botResponse);
    // Append formatted bot response to chat box
    appendMessage("bot", botResponse);
  } catch (error) {
    // Handle error
    console.error("Error fetching bot response:", error);
    appendMessage("bot", "Bot: Sorry, I couldn't process your request.");
  }
}

// Function to append a message to the chat box
function appendMessage(sender, message) {
  let chatBox = document.getElementById("chatBox");
  let messageElement = document.createElement("div");
  messageElement.classList.add(sender);

  let messageText = document.createElement("div"); // Changed from <p> to <div>
  messageText.innerText = message; // Use innerHTML instead of textContent

  messageElement.appendChild(messageText);
  chatBox.appendChild(messageElement);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Placeholder function for fetching bot response using Google Generative AI
async function getBotResponseAI(message) {
  // Replace 'YOUR_API_KEY' with your actual API key
  const apiKey = "AIzaSyAL-xcWgAfO_h-z6vx-t7k0Mk1EDHvUZcA";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(message);
  const response = await result.response;
  return response.text();
}

// Function to handle user input and bot response
async function handleUserInput() {
  let userInput = document.getElementById("userInput");
  let message = userInput.value.trim();

  // Send message if Enter key is pressed
  if (event.key === "Enter") {
    await sendMessage();
  }
}

// Event listener for sending message on button click
document.getElementById("sendButton").addEventListener("click", sendMessage);

// Event listener for sending message on pressing Enter key
document
  .getElementById("userInput")
  .addEventListener("keypress", handleUserInput);

// Format the bot response
const formatResponse = (response) => {
  const sections = response.split("**");
  if (sections.length < 2) {
    // Return the response as is if it doesn't contain expected sections
    return response;
  }

  let formattedResponse = "";

  for (let i = 1; i < sections.length; i += 2) {
    let category = sections[i].trim();
    let items = sections[i + 1]
      .trim()
      .split("*")
      .filter((item) => item.trim() !== "");

    formattedResponse += `**${category}:**\n`;

    items.forEach((item) => {
      formattedResponse += `* ${item.trim()}\n`;
    });

    formattedResponse += "\n";
  }

  return formattedResponse.trim().replace(/\*/g, "");
};
