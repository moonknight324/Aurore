# 🛠️ Aurore Setup Guide

This guide provides detailed instructions for setting up the Aurore space exploration platform locally.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🔐 Required Services & APIs

### 1. MongoDB Atlas
1. Create a free account at [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a new cluster
3. Set up database access (username/password)
4. Set up network access (IP whitelist)
5. Get your connection string

### 2. Google OAuth 2.0
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `https://aurore-latest.onrender.com/auth/google/callback` (development)
   - `https://your-domain.com/auth/google/callback` (production)

### 3. NASA API (Optional)
1. Get a free API key from [NASA API Portal](https://api.nasa.gov/)
2. This is optional but recommended for full functionality

### 4. Email Service (Gmail)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password for the application
3. Use this password in your environment variables

## 🔧 Environment Configuration

Create a `.env` file in the `server` directory with the following structure:

```env
# Database Configuration
MONGOOSE_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority

# Google OAuth Configuration
CLIENTID=your_google_oauth_client_id.apps.googleusercontent.com
CLIENTSECRET=your_google_oauth_client_secret

# Session & JWT Configuration
SESSIONSECRET=your_very_long_random_session_secret
JWT_SECRET_KEY=your_very_long_random_jwt_secret

# Server Configuration
PORT=5000

# Optional: NASA API
NASA_API_KEY=your_nasa_api_key
```


## 🚀 Installation Steps

### 1. Clone Repository
```bash
git clone <repository-url>
cd Capstone-Test
```

### 2. Install Dependencies
```bash
# Server dependencies
cd server
npm install

# Client dependencies
cd ../client
npm install
```

### 3. Configure Environment
1. Copy the environment variables from above
2. Replace placeholder values with your actual credentials
3. Ensure `.env` is in `.gitignore`

### 4. Start Development Servers
```bash
# Terminal 1 - Start backend
cd server
npm start

# Terminal 2 - Start frontend
cd client
npm run dev
```

### 5. Verify Installation
- Backend: https://aurore-latest.onrender.com (should show "Server is up and running")
- Frontend: https://aurore.pages.dev (should load the application)
