import { FC, useState, KeyboardEvent, useRef, useEffect } from 'react';
import styles from './ChatPage.module.css';
import { mockChatHistory } from './mockData';
import { postEvent } from '@telegram-apps/sdk';

export const ChatPage: FC = () => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  postEvent('web_app_setup_swipe_behavior', { allow_vertical_swipe: false });

  const adjustTextareaHeight = () => {
    setTimeout(() => window.scrollTo(0, 0), 1000);
    // const textarea = textareaRef.current;
    // if (textarea) {
    //   textarea.style.height = 'auto';
    //   textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`; // Max height of 200px
    // }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        // Handle message sending here
        setMessage('');
      }
    }
  };

  return (
      <div className={styles.container}>
        <div className={styles.chatContainer}>
          {mockChatHistory.map((message) => (
            <div
              key={message.id}
              className={`${styles.message} ${message.isOwn ? styles.ownMessage : styles.otherMessage}`}
            >
              <div className={styles.messageContent}>
                <div className={styles.sender}>{message.sender}</div>
                <div className={styles.text}>{message.text}</div>
                <div className={styles.timestamp}>
                  {new Date(message.timestamp).toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <textarea
            ref={textareaRef}
            className={styles.messageInput}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={adjustTextareaHeight}
            onBlur={adjustTextareaHeight}
            placeholder="Type your message..."
            rows={1}
          />
        </div>
      </div>
  );
};

export default ChatPage;
