import "./Dictionary.css";

const dummyWords = [
  { term: "AF", meaning: "As F***" },
  { term: "Bet", meaning: "Agreement or affirmation" },
  { term: "Cap", meaning: "Lie or falsehood" },
  { term: "GOAT", meaning: "Greatest Of All Time" },
];

const sortedWords = dummyWords.sort((a, b) => a.term.localeCompare(b.term));

function Dictionary() {
  return (
    <div className="dictionary-container">
      <h1 className="dictionary-title">📖 Gen Z Dictionary</h1>
      <ul className="dictionary-list">
        {sortedWords.map((word, idx) => (
          <li key={idx}>
            <strong>{word.term}</strong>: {word.meaning}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dictionary;
