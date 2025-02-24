import React, { useState } from "react";
import { trackEvent } from "../api/api";

function EventTracker() {
  const [event, setEvent] = useState("");

  const handleTrack = async () => {
    if (!event) return;
    try {
      await trackEvent("user123", event, { extra: "data" });
      alert(`Event "${event}" tracked successfully!`);
    } catch (error) {
      console.error("Error tracking event:", error);
      alert("Failed to track event.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter event name"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
      />
      <button onClick={handleTrack}>Track Event</button>
    </div>
  );
}

export default EventTracker;
