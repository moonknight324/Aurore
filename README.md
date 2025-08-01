# 🌌 Aurore - Space Exploration Platform

A comprehensive space exploration application that captivates space enthusiasts, students, and anyone curious about our universe. Aurore serves as a platform providing reliable information about space missions, celestial events, and user-contributed space facts.

## 🚧 Disclaimer
**Note: This project is under active maintenance. Some modules may throw errors if cloned and run locally. A stable version is being prepared and will be updated soon.**

## ✨ Features

### 🔐 Authentication & User Management
- **Multi-Provider Authentication**: Google OAuth 2.0 integration
- **Traditional Authentication**: Email/password registration and login
- **Password Recovery**: Secure password reset functionality via email
- **User Profiles**: Personalized user experience with profile management
- **Session Management**: Secure session handling for authenticated users

### 🌍 Space Data & Information
- **NASA APOD (Astronomy Picture of the Day)**: Daily stunning space imagery with descriptions
- **Mars Rover Data**: Real-time data and images from Mars rovers
- **ISRO Launches**: Information about Indian Space Research Organization missions
- **Space Articles**: Curated articles about space exploration and discoveries
- **Space Blogs**: User-generated content and space-related blog posts

### 🎯 Interactive Features
- **Solar System Visualization**: Interactive solar system model with planetary information
- **User-Generated Content**: Community-driven space facts and knowledge sharing
- **Search & Filter**: Advanced search and filtering capabilities for all content
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 📱 User Experience
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Real-time Updates**: Live data fetching from various space APIs
- **Cross-platform**: Works seamlessly across different browsers and devices
- **Performance Optimized**: Fast loading times and efficient data handling

## 🛠️ Technology Stack

### Frontend
- **React.js** - Modern UI framework
- **Vite** - Fast build tool and development server
- **CSS Modules** - Scoped styling
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **Passport.js** - Authentication middleware
- **Multer** - File upload handling
- **Nodemailer** - Email functionality

### APIs & Services
- **NASA APIs** - Space data and imagery
- **Google OAuth 2.0** - Authentication service
- **Cloudinary** - Image storage and management
- **MongoDB Atlas** - Cloud database hosting

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Google OAuth 2.0 credentials
- NASA API key (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Capstone-Test
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the server directory with the following variables:
   - `MONGOOSE_URI` - MongoDB connection string
   - `CLIENTID` - Google OAuth client ID
   - `CLIENTSECRET` - Google OAuth client secret
   - `SESSIONSECRET` - Session encryption secret
   - `JWT_SECRET_KEY` - JWT token signing secret
   - `PORT` - Server port (default: 5000)
   - `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_FROM` - Email configuration


   For detailed setup instructions and security best practices, see [SETUP.md](SETUP.md).

4. **Run the application**
   ```bash
   # Start the server (from server directory)
   npm start
   
   # Start the client (from client directory)
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## 📁 Project Structure

```
Capstone-Test/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── Pages/         # Page components
│   │   ├── FetchedData/   # API data components
│   │   ├── Styles/        # CSS modules
│   │   └── assets/        # Static assets
│   └── public/
├── server/                 # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── Routes/           # API routes
│   ├── middlewares/      # Custom middlewares
│   ├── config/          # Configuration files
│   └── uploads/         # File uploads of users
└── README.md
```

## 🌐 Live Demo

- **Frontend**: [https://aurore.pages.dev/](https://aurore.pages.dev/)
- **Backend**: [https://aurore.onrender.com](https://aurore.onrender.com)


## 🙏 Acknowledgments

- **NASA** for providing space data APIs
- **Google** for OAuth authentication services
- **MongoDB** for database services
- **React** and **Node.js** communities for excellent documentation
