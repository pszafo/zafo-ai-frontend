import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  async function askAI() {
    const res = await fetch("https://zafo-ai-backend.onrender.com/ask-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    setResponse(data.response);
  }

  async function trackEvent(eventType) {
    await fetch("https://zafo-ai-backend.onrender.com/track-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: "user123",
        event_type: eventType,
        metadata: {},
      }),
    });
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Zafo AI POC</h1>
      <button onClick={() => trackEvent("button_click")}>Track Click</button>
      <br /><br />
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Ask AI anything..."
      />
      <button onClick={askAI}>Ask</button>
      <p><strong>Response:</strong> {response}</p>
    </div>
  );
}
