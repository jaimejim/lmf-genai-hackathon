// Import required modules
const readline = require("readline");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

// Initialize OpenAI API client
const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

// Create readline interface for terminal input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Set up initial conversation array
const conversation = [
  {
    role: "system",
    content:
      "You are an AI teacher that is trying to teach about Internet networks. Ask a question and correct mistakes with increased difficulty up to the maximum level of the student.",
  },
];

// Function to send a message to the OpenAI API and receive a response
async function sendMessage(message) {
  conversation.push({ role: "user", content: message });
  const response = await openai.createChatCompletion({
    model: "gpt-4-0314",
    messages: conversation,
    temperature: 0.2,
    max_tokens: 500,
  });

  // Return the AI's response
  return response.data.choices[0].message.content;
}

// Export the sendMessage function
module.exports = sendMessage;

// Function to ask a question and handle the AI's response
function askQuestion() {
  rl.question("You: ", async (message) => {
    const response = await sendMessage(message);
    console.log(`GPT: ${response}`);
    askQuestion();
  });
}

// Start the question loop
askQuestion();