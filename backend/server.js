import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  console.log("✅ Request received at /chat");

  try {
    const { message } = req.body;

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.2:1b",
        prompt: `You are Health Mitra AI. Answer about hygiene and sanitation simply:\n${message}`,
        stream: false,
      }),
    });

    const data = await response.json();
    console.log("Ollama Response:", data);

    return res.json({
      reply: data.response || "No response",
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      reply: "⚠️ Server error. Try again.",
    });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});