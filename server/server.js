require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToDB = require("./DB/connect");
const jwt = require("jsonwebtoken");
const userModel = require("./models/User.js");
connectToDB();
const PORT = process.env.PORT || 5000;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./models/userGoogleSchema.js");
const historyRoutes = require("./Routes/historyRoutes.js")
const userRoutes = require("./Routes/userRoutes.js")
const MyPosts = require("./Routes/multer.js")

const clientId = process.env.CLIENTID;
const clientsecret = process.env.CLIENTSECRET;

//CORS Policy
app.use(cors())

app.use(express.json());


//Routes
app.use("/history",historyRoutes)
app.use("/api/user",userRoutes)
app.use("/posts",MyPosts)

app.get("/", async (req, res) => {
  res.send("Server is up and running");
})


app.use(
  cors({
    origin: "https://aurore.pages.dev",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);



app.use(
  session({
    secret: process.env.SESSIONSECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy(
    {
      clientID: clientId,
      clientSecret: clientsecret,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("profile",profile);
      try {
        let user = await userdb.findOne({ googleId: profile.id });

        if (!user) {
          user = new userdb({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "https://aurore.pages.dev/main",
    failureRedirect: "https://aurore.pages.dev/login",
  })
);

app.get("/login/success", async (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "user login", user: req.user });
  } else {
    res.status(400).json({ message: "Not authorized" });
  }
});

// Route to check authentication status for both JWT and session-based auth
app.get("/api/auth/status", async (req, res) => {
  try {
    // Check for JWT token first
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith('Bearer')) {
      const token = authorization.split(" ")[1];
      const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await userModel.findById(userID).select("-password");
      if (user) {
        return res.status(200).json({ 
          status: "success", 
          message: "Authenticated via JWT", 
          user: user 
        });
      }
    }
    
    // Check for session-based authentication (Google OAuth)
    if (req.user) {
      return res.status(200).json({ 
        status: "success", 
        message: "Authenticated via session", 
        user: req.user 
      });
    }
    
    // No authentication found
    res.status(401).json({ 
      status: "failed", 
      message: "Not authenticated" 
    });
  } catch (error) {
    console.error("Auth status check error:", error);
    res.status(401).json({ 
      status: "failed", 
      message: "Authentication failed" 
    });
  }
});

app.get("/logout", (req, res, next) => {
  req.logout(function (error) {
    if (error) {
      return next(error);
    }
    res.redirect("https://aurore.pages.dev");
  });
});

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
