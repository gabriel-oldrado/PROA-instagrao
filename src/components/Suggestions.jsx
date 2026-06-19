import { useState } from "react";
import { currentUser, suggestions } from "../data/posts";

export default function Suggestions() {
  const [followed, setFollowed] = useState({});

  function toggleFollow(username) {
    setFollowed((prev) => ({ ...prev, [username]: !prev[username] }));
  }

  return (
    <aside className="right-panel">
        
      <div className="right-profile">
        <img src={currentUser.avatar} alt={currentUser.username} className="right-avatar" />
        <div className="right-profile-info">
          <span className="right-username">{currentUser.username}</span>
          <span className="right-name">{currentUser.name}</span>
        </div>
        <button className="switch-btn">Trocar</button>
      </div>


      <div className="suggestions">
        <div className="suggestions-header">
          <span className="suggestions-title">Sugeridos para você</span>
          <button className="see-all-btn">Ver tudo</button>
        </div>

        {suggestions.map((s) => (
          <div key={s.username} className="suggestion-item">
            <img src={s.avatar} alt={s.username} className="suggestion-avatar" />
            <div className="suggestion-info">
              <span className="suggestion-username">{s.username}</span>
              <span className="suggestion-reason">{s.reason}</span>
            </div>
            <button
              className={`follow-btn ${followed[s.username] ? "following" : ""}`}
              onClick={() => toggleFollow(s.username)}
            >
              {followed[s.username] ? "Seguindo" : "Seguir"}
            </button>
          </div>
        ))}
      </div>


      <div className="right-footer">
        <p>Sobre · Ajuda · Privacidade · Condições</p>
        <p>© 2025 Instagram</p>
      </div>
    </aside>
  );
}