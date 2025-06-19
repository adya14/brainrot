import "./Notifications.css";

const dummyNotifications = [
  { message: "Your word 'gyat' got 5 new upvotes!" },
  { message: "New comment on 'mid'" },
];

function Notifications() {
  return (
    <div className="notifications-container">
      <h1 className="notifications-title">🔔 Notifications</h1>
      <ul className="notifications-list">
        {dummyNotifications.map((note, idx) => (
          <li key={idx}>{note.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
