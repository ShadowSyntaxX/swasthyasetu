import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ========================
// ✅ MIDDLEWARE
// ========================
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"]
}));

app.use(express.json());

// ========================
// ❌ SAFETY CHECK (IMPORTANT)
// ========================
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY is missing!");
  process.exit(1); // stop server immediately if key missing
}

// ========================
// 🤖 GEMINI INIT
// ========================
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ========================
// 🧪 HEALTH CHECK ROUTE
// ========================
app.get("/", (req, res) => {
  res.send("SwasthyaSetu AI Backend is running 🚀");
});

// ========================
// 💬 CHAT ROUTE
// ========================
app.post("/chat", async (req, res) => {
  try {
    console.log("📩 Request received:", req.body);

    const userMessage = req.body?.message;

    if (!userMessage || userMessage.trim() === "") {
      return res.status(400).json({
        reply: "Message is required"
      });
    }

    // ========================
    // 🤖 GEMINI MODEL
    // ========================
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    // ========================
    // 🚀 AI RESPONSE
    // ========================
    const result = await model.generateContent(userMessage);
    const response = await result.response;

    const text = response?.text();

    console.log("🤖 Gemini Response:", text);

    return res.json({
      reply: text || "No response from AI"
    });

  } catch (error) {
    console.error("🔥 CHAT ERROR:", error);

    return res.status(500).json({
      reply: "Server error occurred",
      debug: error.message
    });
  }
});

// ========================
// 🚀 START SERVER
// ========================
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});