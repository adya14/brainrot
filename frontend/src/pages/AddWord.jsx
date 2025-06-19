// frontend/src/pages/AddWord.jsx
import { useState } from "react";
import axios from "axios";
import "./AddWord.css";

function AddWord() {
  const [term, setTerm] = useState("");
  const [meaning, setMeaning] = useState("");
  const [example, setExample] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!term || !meaning) {
      setMessage("Term and meaning are required.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/words/add", {
        term,
        meaning,
        example,
      });
      setMessage("✅ Word submitted for review!");
      setTerm("");
      setMeaning("");
      setExample("");
    } catch (err) {
      setMessage("❌ Something went wrong. Try again.");
    }
  };

  return (
    <div className="addword-container">
      <h1 className="addword-title">Submit a New Word</h1>
      <form onSubmit={handleSubmit} className="addword-form">
        <input
          type="text"
          placeholder="Enter slang/abbreviation"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <textarea
          placeholder="Enter its meaning"
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
        />
        <textarea
          placeholder="Optional: Use it in a sentence"
          value={example}
          onChange={(e) => setExample(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
}

export default AddWord;
