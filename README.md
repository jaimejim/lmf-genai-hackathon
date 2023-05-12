# OpenAI chatbot examples

This repository contains examples of simple command-line chatbots using OpenAI's API and both the `gpt-3.5-turbo-0301` and `gpt-4-0314` models.

## Requirements

* Node.js (v14 or higher)
* OpenAI API Key

## Installation

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory of the project and add your OpenAI API key:

OPENAI_API_KEY=your_api_key_here

(We will share the key during the hackathon)

## Run

### Basic Chat 
Open a terminal window and navigate to the project directory.
Run the command `node chat.js` to start the chatbot.
Type your message or type "exit" to quit.

```bash
❯ node chat-cli.js
Type your message or type "exit" to quit:
You: capital of Italy?
GPT-4: The capital of Italy is Rome.
```

### Teaching Chat 
Open a terminal window and navigate to the project directory.
Run the command `node teacher.js` to start the chatbot.
Type your message or type "exit" to quit.

```bash
❯ node teacher
You: hi
GPT: Hello! As an AI teacher, I'm here to help you learn about Internet networks. Let's start with a basic question:

What is the primary purpose of the Internet?
You: The main purpose of the Internet is to facilitate the global exchange of information by routing information over the internet
GPT: That's correct! The main purpose of the Internet is to facilitate the global exchange of information by routing data packets over interconnected networks. Now, let's move on to a question.

Question: What are the two main protocols used for transmitting data over the Internet?
You: TCP and IP
GPT: That's correct! TCP (Transmission Control Protocol) and IP (Internet Protocol) are two fundamental protocols that work together to enable communication over the Internet. TCP is responsible for ensuring the reliable transmission of data, while IP is responsible for routing the data to its intended destination.

Now, let's move on to a slightly more difficult question: Can you explain the difference between IPv4 and IPv6?
You: 
```