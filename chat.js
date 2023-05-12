// Load environment variables from .env file
require("dotenv").config();

// Import required libraries
const { Configuration, OpenAIApi } = require("openai");
const readline = require("readline");

// Create a configuration object for the OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Instantiate an OpenAI API client
const openai = new OpenAIApi(configuration);

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define an async function to get the answer from GPT-4
async function getAnswer(userMessage) {
  // Call the OpenAI API to create a chat completion
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-0301",
    messages: [{ role: "user", content: userMessage }],
  });

  return completion.data.choices[0].message.content;
}

function chat() {
  rl.question("You: ", async (userMessage) => {
    if (userMessage.toLowerCase() === "exit") {
      rl.close();
      return;
    }

    const answer = await getAnswer(userMessage);
    console.log("GPT-4:", answer);

    chat();
  });
}

console.log('Type your message or type "exit" to quit:');
chat();
