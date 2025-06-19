// frontend/src/pages/Home.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [words, setWords] = useState([]); // ✅ Declare this at the top

  useEffect(() => {
    axios.get("http://localhost:5000/api/words")
      .then(res => {
        setWords(res.data);
      })
      .catch(err => {
        console.error("Failed to fetch words:", err);
      });
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">🔥 Trending Slang</h1>
      <ul className="word-list">
        {words.map(word => (
          <li key={word._id}>
            <Link to={`/word/${word._id}`}>
              <strong>{word.term}</strong>
            </Link>: {word.meaning}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
