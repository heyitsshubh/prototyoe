import { useState, useRef, useEffect } from "react";
import { askAI } from "./useChat";
import "./ChatPanel.css";

export default function ChatPanel({ productId }) {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [msgs]);

  const handleQuickAction = (action) => {
    setInput(action);
  };

  const formatTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  async function send() {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);
    setIsTyping(true);

    // Add user message
    setMsgs(prev => [...prev, { type: 'user', content: userMessage, timestamp: formatTime() }]);

    try {
      // Simulate typing delay
      setTimeout(async () => {
        const reply = await askAI(userMessage, productId);
        setIsTyping(false);
        
        // Add AI response
        setMsgs(prev => [...prev, { 
          type: 'bot', 
          content: reply, 
          timestamp: formatTime(),
          // Check if response contains product info
          product: reply.includes('$') ? {
            name: "Fashion Item",
            description: "Premium quality fashion piece with modern styling",
            price: 299,
            id: productId
          } : null
        }]);
        
        setIsLoading(false);
      }, 1200);
    } catch (error) {
      setIsTyping(false);
      setIsLoading(false);
      setMsgs(prev => [...prev, { 
        type: 'bot', 
        content: "I apologize, but I'm having trouble responding right now. Please try again.", 
        timestamp: formatTime() 
      }]);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const selectProduct = (product) => {
    // Handle product selection
    console.log('Selected product:', product);
  };

  return (
    <div className="chat-panel">
      <div className="chat-header">
        <div className="header-content">
          <span className="header-icon">🤖</span>
          <h3>Fashion AI Assistant</h3>
          <span className="header-sparkle">✨</span>
        </div>
        <p className="header-subtitle">Get personalized fashion recommendations</p>
      </div>

      <div className="quick-actions">
        <button 
          className="quick-action-btn" 
          onClick={() => handleQuickAction("What's trending now?")}
        >
          <span className="action-icon">🔥</span>
          Trending
        </button>
        <button 
          className="quick-action-btn" 
          onClick={() => handleQuickAction("Show me summer collections")}
        >
          <span className="action-icon">☀️</span>
          Summer
        </button>
        <button 
          className="quick-action-btn" 
          onClick={() => handleQuickAction("Help me find formal wear")}
        >
          <span className="action-icon">👔</span>
          Formal
        </button>
        <button 
          className="quick-action-btn" 
          onClick={() => handleQuickAction("What matches my style?")}
        >
          <span className="action-icon">🎨</span>
          Style
        </button>
      </div>

      <div className="chat-messages">
        {msgs.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">💬</div>
            <p>Start a conversation about fashion!</p>
            <small>Ask me about trends, styling tips, or product recommendations</small>
          </div>
        )}
        
        {msgs.map((msg, i) => (
          <div key={i} className={`message ${msg.type}-message`}>
            <div className="message-content">
              {msg.content}
              {msg.product && (
                <div className="product-card">
                  <h4>{msg.product.name}</h4>
                  <p>{msg.product.description}</p>
                  <div className="product-actions">
                    <button 
                      className="select-product-btn"
                      onClick={() => selectProduct(msg.product)}
                    >
                      Select Item
                    </button>
                    <span className="price">{msg.product.price}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="message-time">{msg.timestamp}</div>
          </div>
        ))}
        
        {isTyping && (
          <div className="message bot-message">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input 
          type="text"
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about fashion, trends, or styling tips..."
          disabled={isLoading}
        />
        <button 
          onClick={send} 
          disabled={!input.trim() || isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}
