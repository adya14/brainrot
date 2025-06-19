import "./Feed.css";

const dummyPosts = [
  { user: "zoomer123", word: "Rizz", meaning: "Flirting skill" },
  { user: "genx_slang", word: "Sus", meaning: "Suspicious" },
];

function Feed() {
  return (
    <div className="feed-container">
      <h1 className="feed-title">🔥 Brainrot Feed</h1>
      {dummyPosts.map((post, index) => (
        <div key={index} className="feed-post">
          <p><strong>@{post.user}</strong> submitted:</p>
          <p><strong>{post.word}</strong> — {post.meaning}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;
