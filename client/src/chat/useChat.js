import axios from "axios";

export async function askAI(message, productId){
  try {
    const res = await axios.post("http://localhost:2000/chat",{
      message, 
      productId
    }, {
      timeout: 10000, // 10 second timeout
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.data.reply || res.data.message || "I'm here to help with your fashion choices!";
  } catch (error) {
    console.error('Chat API Error:', error);
    
    // Return a helpful fallback response
    if (error.code === 'ECONNREFUSED') {
      return "I'm having trouble connecting right now, but I'd love to help you with fashion advice! Try asking about trending styles or color combinations.";
    }
    
    return "I'm your fashion AI assistant! I can help you with style recommendations, color matching, and fashion trends. What would you like to know?";
  }
}
