import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
//register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(401).json({ message: "Invalid Credentials" });
    }
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'username already exists' });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
//loginn
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign(
      { userId: user._id},
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.json({ message: "Login successful", username, token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
export default router;
