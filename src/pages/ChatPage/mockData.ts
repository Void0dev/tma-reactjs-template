export interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
  isOwn: boolean;
}

export const mockChatHistory: Message[] = [
  {
    id: 1,
    text: "Hello! How can I help you today?",
    sender: "Assistant",
    timestamp: "2025-02-04T07:20:00Z",
    isOwn: false
  },
  {
    id: 2,
    text: "I need help with setting up TON Connect",
    sender: "User",
    timestamp: "2025-02-04T07:21:00Z",
    isOwn: true
  },
  {
    id: 3,
    text: "Sure! First, make sure you have a TON wallet installed. Have you done that already?",
    sender: "Assistant",
    timestamp: "2025-02-04T07:21:30Z",
    isOwn: false
  },
  {
    id: 4,
    text: "Yes, I have Tonkeeper installed",
    sender: "User",
    timestamp: "2025-02-04T07:22:00Z",
    isOwn: true
  },
  {
    id: 5,
    text: "Great! Let's proceed with connecting your wallet then.",
    sender: "Assistant",
    timestamp: "2025-02-04T07:22:30Z",
    isOwn: false
  },
  {
    id: 6,
    text: "Click on the 'TON Connect' button in the Features section. You'll see a connection request popup from your wallet.",
    sender: "Assistant",
    timestamp: "2025-02-04T07:22:45Z",
    isOwn: false
  },
  {
    id: 7,
    text: "I clicked but nothing happened",
    sender: "User",
    timestamp: "2025-02-04T07:23:15Z",
    isOwn: true
  },
  {
    id: 8,
    text: "Make sure you have Tonkeeper app open on your device. Also, check if you're using the latest version of the app.",
    sender: "Assistant",
    timestamp: "2025-02-04T07:23:45Z",
    isOwn: false
  },
  {
    id: 9,
    text: "Let me check the version...",
    sender: "User",
    timestamp: "2025-02-04T07:24:00Z",
    isOwn: true
  },
  {
    id: 10,
    text: "Ah, I need to update Tonkeeper first",
    sender: "User",
    timestamp: "2025-02-04T07:24:30Z",
    isOwn: true
  },
  {
    id: 11,
    text: "Yes, that's probably the issue. After updating, the connection should work smoothly. Let me know if you need any other help!",
    sender: "Assistant",
    timestamp: "2025-02-04T07:25:00Z",
    isOwn: false
  },
  {
    id: 12,
    text: "Thanks! I'll try updating now",
    sender: "User",
    timestamp: "2025-02-04T07:25:15Z",
    isOwn: true
  },
  {
    id: 13,
    text: "Perfect! While you're updating, I can explain more about TON Connect features. Would you like to know more?",
    sender: "Assistant",
    timestamp: "2025-02-04T07:25:45Z",
    isOwn: false
  },
  {
    id: 14,
    text: "Yes, please tell me more about what I can do with it",
    sender: "User",
    timestamp: "2025-02-04T07:26:00Z",
    isOwn: true
  },
  {
    id: 15,
    text: "TON Connect allows you to interact with TON blockchain directly from our app. You can check your balance, send transactions, and interact with smart contracts seamlessly.",
    sender: "Assistant",
    timestamp: "2025-02-04T07:26:30Z",
    isOwn: false
  }
];
