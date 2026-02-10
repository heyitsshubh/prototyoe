# Fashion AI Prototype

A full-stack 3D fashion customization platform with AI-powered chat assistance.

## 🚀 Features

- **Interactive 3D Viewer**: Real-time clothing customization with Three.js
- **AI Chat Assistant**: Intelligent fashion advice and product recommendations
- **Material Customization**: Dynamic color, texture, and material property changes
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: Live material and color changes in the 3D scene

## 🛠️ Tech Stack

### Frontend
- **React** + **Vite** - Modern frontend framework and build tool
- **Three.js** + **@react-three/fiber** - 3D rendering and scene management
- **@react-three/drei** - Useful helpers for Three.js in React

### Backend
- **Node.js** + **Express** - Server and API framework
- **AI Integration** - Smart fashion assistant (OpenAI compatible)

## 📁 Project Structure

```
fashion-ai-prototype/
├── client/                 # Frontend React app
│   ├── public/
│   │   └── models/        # 3D model files (.glb)
│   └── src/
│       ├── viewer/        # 3D scene components
│       ├── chat/          # AI chat interface
│       └── config/        # Product configurations
│
└── server/                # Backend API
    ├── ai/               # AI provider integrations
    ├── routes/           # API endpoints
    └── data/             # Product data
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn
- A 3D model file (jacket.glb) - place in `client/public/models/`

### Installation

1. **Clone and navigate to the project:**
   ```bash
   cd fashion-ai-prototype
   ```

2. **Install backend dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables:**
   ```bash
   cd ../server
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Development

1. **Start the backend server:**
   ```bash
   cd server
   npm run dev
   # Server runs on http://localhost:5000
   ```

2. **Start the frontend (in a new terminal):**
   ```bash
   cd client
   npm run dev
   # Client runs on http://localhost:3000
   ```

3. **Visit the application:**
   Open http://localhost:3000 in your browser

## 🎨 Usage

### 3D Customization
- **Rotate**: Click and drag to rotate the model
- **Zoom**: Use mouse wheel to zoom in/out
- **Colors**: Use the material controls or ask the AI to change colors
- **Materials**: Adjust roughness and metalness for different finishes

### AI Assistant
- **Product Inquiry**: "Show me available jackets"
- **Color Changes**: "Make it blue" or "Change to black"
- **Style Advice**: "What goes well with this jacket?"
- **Product Info**: "What sizes are available?"

## 🔧 Configuration

### Adding 3D Models
1. Place your `.glb` files in `client/public/models/`
2. Update the product configuration in `client/src/config/products.js`
3. Restart the development server

### AI Configuration
The app works with a built-in mock AI. For advanced features:
1. Get an OpenAI API key
2. Add it to `server/.env`:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
3. Restart the server

## 🚀 Production Build

### Frontend
```bash
cd client
npm run build
```

### Backend
```bash
cd server
npm start
```

## 📱 API Endpoints

- `POST /api/chat/message` - Send chat messages to AI
- `GET /api/chat/products/search` - Search products
- `GET /api/chat/products/:id` - Get product details
- `POST /api/chat/products/:id/stock` - Check stock availability

## 🎯 Roadmap

- [ ] User authentication and profiles
- [ ] Shopping cart and checkout
- [ ] More 3D models and categories
- [ ] Advanced material editing
- [ ] Social sharing features
- [ ] Mobile app development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

- Check the Issues page for common problems
- Create a new issue for bugs or feature requests
- Join our Discord for community support

---

Built with ❤️ for the fashion and tech community