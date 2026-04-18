import React, { useState, useEffect, useRef } from "react";

const AIFriend = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I am Health Mitra 🤖. Ask me about hygiene & sanitation.",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;

    setMessages((prev) => [
      ...prev,
      { text: userText, sender: "user" }
    ]);

    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch(
        "https://swasthyasetu-3o5c.onrender.com/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userText,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.reply || "Server error");
      }

      setMessages((prev) => [
        ...prev,
        { text: data.reply, sender: "bot" }
      ]);

    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Server error. Try again.", sender: "bot" }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section className="h-screen bg-black text-green-400 flex flex-col p-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        🤖 Health Mitra AI
      </h1>

      <div ref={chatRef} className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex mb-3 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[70%] ${
                msg.sender === "user"
                  ? "bg-green-500 text-black"
                  : "bg-gray-800 text-green-300"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="text-green-300">typing...</div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 p-2 bg-black border border-green-500 text-green-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <button
          onClick={handleSend}
          className="bg-green-500 text-black px-4"
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default AIFriend;