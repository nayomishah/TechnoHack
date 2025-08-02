import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "DabbaBot",
  initialMessages: [createChatBotMessage(`Hello! I'm here to help. What can I do for you today?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#007bff",
    },
    chatButton: {
      backgroundColor: "#007bff",
    },
  },
};

export default config;
