// frontend/src/pages/WordDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./WordDetail.css";

function WordDetail() {
  const { id } = useParams();
  const [word, setWord] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/words")
      .then((res) => {
        const found = res.data.find((w) => w._id === id);
        setWord(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching word:", err);
        setLoading(false);
      });
  }, [id]);

  const handleUpvote = async () => {
    try {
      await axios.patch(`http://localhost:5000/api/words/${id}/upvote`);
      setWord({ ...word, upvotes: word.upvotes + 1 });
    } catch (err) {
      console.error("Upvote failed", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!word) return <p>Word not found.</p>;

  return (
    <div className="worddetail-container">
      <h1 className="worddetail-title">{word.term}</h1>
      <p className="worddetail-meaning">{word.meaning}</p>
      {word.example && (
        <p className="worddetail-example">Example: {word.example}</p>
      )}
      <button className="worddetail-upvote" onClick={handleUpvote}>
        Upvote ({word.upvotes})
      </button>
    </div>
  );
}

export default WordDetail;
