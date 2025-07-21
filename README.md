#  Poem Generator with Google Gemini 

A React web application that generates beautiful poems using Google Gemini AI. Watch as new poems appear every 30 seconds! 


## ✨ Features

- **Real-time Poem Generation**: New poems every 30 seconds
- **Google Gemini Integration**: Powered by advanced AI language model
- **Customizable Prompts**: Easy to modify poem styles and themes

## 🚀 Quick Start

### Prerequisites

Make sure you have these installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **Google Account** (for API key)

### 1. Get Your API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. **Important**: Store this key securely - you'll need it in step 4

### 2. Clone the Repository

```bash
git clone <your-repo-url>
cd ai-poem-generator
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

**Security Note**: Never commit your API key to version control. The `.env` file should be in your `.gitignore`.

### 5. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` and watch the magic happen! 🎉

## 📁 Project Structure

```
src/
├── components/
│   └── PoemBox.jsx          # Main poem generation component
├── App.jsx                  # Root component
├── main.jsx                # Application entry point
└── index.css               # Global styles
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite 5
- **AI Integration**: Google Gemini API (@google/generative-ai)
- **Styling**: CSS3
- **Build Tool**: Vite

## 📝 How It Works

1. **Component Mount**: `PoemBox` component initializes and fetches first poem
2. **Timer Setup**: `useEffect` creates 30-second interval for new poems
3. **AI Generation**: Each interval triggers Gemini API call with custom prompt
4. **State Updates**: New poems update the UI automatically
5. **Error Handling**: Any API errors are caught and displayed gracefully

## 🎨 Customization

### Change Poem Style

Edit the prompt in `PoemBox.jsx`:

```javascript
const prompt = "Write a haiku about nature"; // Your custom prompt here
```

### Adjust Timer Interval

Modify the interval (in milliseconds):

```javascript
const poemIntervalId = setInterval(fetchPoem, 30000); // 30 seconds
```

### Styling

Add your CSS in `index.css` or create component-specific styles.

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🚨 Troubleshooting

### Common Issues

**API Key Error**
```
Error: API key not found
```
- Check your `.env` file exists and has the correct variable name
- Restart the development server after adding the API key

**Rate Limiting**
```
Error: Quota exceeded
```
- Increase the timer interval to reduce API calls
- Check your Google Cloud usage limits

**Build Fails**
```
Module not found: @google/generative-ai
```
- Run `npm install` to ensure all dependencies are installed
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## 🌟 Enhancement Ideas

Ready to level up? Try these features:

- [ ] **User Input**: Let users specify poem themes
- [ ] **Save Poems**: Add local storage or database integration  
- [ ] **Social Sharing**: Share poems on Twitter/Instagram
- [ ] **Multiple Languages**: Generate poems in different languages
- [ ] **Mood-based Generation**: Poems based on user's current mood
- [ ] **Voice Reading**: Text-to-speech for poem recitation
- [ ] **Animation**: Smooth transitions between poems

## 📚 Learning Resources

- [Google Gemini API Documentation](https://ai.google.dev/docs)
- [React Hooks Guide](https://reactjs.org/docs/hooks-intro.html)
- [Vite Configuration](https://vitejs.dev/config/)
- [AI Prompting Best Practices](https://ai.google.dev/docs/prompting_intro)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request



## 🙏 Acknowledgments

As an artist, I recognize the ethical considerations around using AI in creative work. This project, however, began as a fun and exploratory endeavor, a way for me to blend art and technology in a playful, personal way.

I'm also incredibly grateful to Codedex for making the journey into app development approachable and enjoyable. Their platform gave me the tools and confidence to bring this idea to life.

---

**Built with ❤️ by [Pranaya]**
