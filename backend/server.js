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
  console.log("🔥 HIT CHAT ROUTE");
  console.log("BODY:", req.body);

  return res.json({
    reply: "Backend reached successfully"
  });
});

// ========================
// 🚀 START SERVER
// ========================
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});