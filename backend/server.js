import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ========================
// MIDDLEWARE
// ========================
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"]
}));

app.use(express.json());

// ========================
// SAFETY CHECK
// ========================
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY missing");
  process.exit(1);
}

// ========================
// GEMINI INIT
// ========================
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ========================
// HEALTH CHECK
// ========================
app.get("/", (req, res) => {
  res.send("SwasthyaSetu AI Backend Running 🚀");
});

// ========================
// CHAT ROUTE (FINAL CLEAN)
// ========================
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body?.message;

    if (!userMessage || userMessage.trim() === "") {
      return res.status(400).json({
        reply: "Message is required"
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const text = response.text();

    return res.json({
      reply: text
    });

  } catch (error) {
    console.error("🔥 GEMINI ERROR:", error);

    return res.status(500).json({
      reply: "AI error occurred",
      debug: error.message
    });
  }
});

// ========================
// START SERVER
// ========================
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});