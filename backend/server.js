import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"]
}));

app.use(express.json());

// ✅ Debug: check API key
if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is missing in environment variables!");
}

// ✅ Initialize Gemini safely
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("SwasthyaSetu AI Backend is running 🚀");
});

// ✅ Chat endpoint (FIXED + DEBUG ENABLED)
app.post("/chat", async (req, res) => {
  try {
    console.log("📩 Incoming Request Body:", req.body);

    const userMessage = req.body?.message;

    if (!userMessage) {
      return res.status(400).json({
        reply: "Message is required"
      });
    }

    // ✅ Gemini model
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
    });

    // ✅ Generate response
    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const text = response?.text?.() || "No response from AI";

    console.log("🤖 Gemini Response:", text);

    return res.json({
      reply: text || "No response from AI"
    });

  } catch (error) {
    console.error("🔥 FULL ERROR:", error.stack || error);

return res.status(500).json({
  reply: "Server error occurred",
  debug: error.message
    });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});