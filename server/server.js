// server.js
import express from "express";
import cors from"cors";
import { body, validationResult } from "express-validator";

const app = express();
app.use(express.json());
app.use(cors());

// LOGIN VALIDATION API
app.post(
  "/login",
  [
    body("email").isEmail().withMessage("Enter a valid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Temporary hard-coded login check (replace with DB later)
    if (email === "admin@farmhive.com" && password === "admin123") {
      return res.status(200).json({
        message: "Login successful",
        user: { email: email },
      });
    }

    return res.status(401).json({
      message: "Invalid email or password",
    });
  }
);

// START SERVER
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Login server running at http://localhost:${PORT}`);
});
