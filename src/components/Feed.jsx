import { posts, stories, currentUser } from "../data/posts";
import Post from "./Post";

export default function Feed() {
  return (
    <main className="feed">

      <div className="stories-bar">

        <div className="story">
          <div className="story-avatar-wrapper your-story">
            <img src={currentUser.avatar} alt="seu story" className="story-avatar" />
            <span className="add-story">+</span>
          </div>
          <span className="story-username">Seu story</span>
        </div>

        {stories.map((s) => (
          <div key={s.username} className="story">
            <div className={`story-avatar-wrapper ${s.seen ? "seen" : ""}`}>
              <img src={s.avatar} alt={s.username} className="story-avatar" />
            </div>
            <span className="story-username">{s.username.split(".")[0]}</span>
          </div>
        ))}
      </div>

      
      <div className="stories-divider" />

      <div className="posts-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}