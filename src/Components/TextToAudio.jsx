import React, { useState, useEffect } from "react";

const TextToAudio = () => {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");

  // Fetch available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0].name); // Default to the first voice
      }
    };

    loadVoices();

    // Ensure voices are loaded after the speechSynthesis API is initialized
    speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  const handleSpeak = () => {
    if (!text) {
      alert("Please enter some text to convert to speech!");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    // Set the selected voice
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) utterance.voice = voice;

    speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    speechSynthesis.cancel();
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Text-to-Audio Converter with Voice Selection</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
        cols="50"
        placeholder="Type your text here..."
        style={{ margin: "10px 0", padding: "10px" }}
      />
      <br />
      <label htmlFor="voiceSelect">Choose Voice: </label>
      <select
        id="voiceSelect"
        value={selectedVoice}
        onChange={(e) => setSelectedVoice(e.target.value)}
        style={{ margin: "10px", padding: "5px" }}
      >
        {voices.map((voice, index) => (
          <option key={index} value={voice.name}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
      <br />
      <button onClick={handleSpeak} style={{ marginRight: "10px" }}>
        Speak
      </button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default TextToAudio;
