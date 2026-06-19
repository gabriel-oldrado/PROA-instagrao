import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile } from "lucide-react";

export default function Post({ post }) {
  const [liked, setLiked] = useState(post.liked);
  const [saved, setSaved] = useState(post.saved);
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [commentInput, setCommentInput] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

  function toggleLike() {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  }

  function submitComment(e) {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setComments((prev) => [
      ...prev,
      { id: Date.now(), username: "voce", text: commentInput.trim() },
    ]);
    setCommentInput("");
  }

  const visibleComments = showAllComments ? comments : comments.slice(0, 2);

  return (
    <article className="post">
        
      <div className="post-header">
        <div className="post-user">
          <div className={`story-ring ${post.id % 2 === 0 ? "seen" : ""}`}>
            <img src={post.user.avatar} alt={post.user.username} className="post-avatar" />
          </div>
          <div className="post-user-info">
            <span className="post-username">{post.user.username}</span>
            <span className="post-time">{post.time}</span>
          </div>
        </div>
        <button className="icon-btn">
          <MoreHorizontal size={20} strokeWidth={1.5} />
        </button>
      </div>


      <div className="post-image-wrapper">
        <img src={post.image} alt="post" className="post-image" />
      </div>


      <div className="post-actions">
        <div className="post-actions-left">
          <button className={`icon-btn like-btn ${liked ? "liked" : ""}`} onClick={toggleLike}>
            <Heart size={24} strokeWidth={1.5} fill={liked ? "currentColor" : "none"} />
          </button>
          <button className="icon-btn">
            <MessageCircle size={24} strokeWidth={1.5} />
          </button>
          <button className="icon-btn">
            <Send size={24} strokeWidth={1.5} />
          </button>
        </div>
        <button className={`icon-btn save-btn ${saved ? "saved" : ""}`} onClick={() => setSaved((p) => !p)}>
          <Bookmark size={24} strokeWidth={1.5} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>


      <div className="post-likes">
        {likes.toLocaleString("pt-BR")} curtidas
      </div>

   
      <div className="post-caption">
        <span className="post-username">{post.user.username}</span>{" "}
        {post.caption}
      </div>


      <div className="post-comments">
        {comments.length > 2 && !showAllComments && (
          <button className="view-all-comments" onClick={() => setShowAllComments(true)}>
            Ver todos os {comments.length} comentários
          </button>
        )}
        {visibleComments.map((c) => (
          <div key={c.id} className="comment">
            <span className="post-username">{c.username}</span>{" "}
            <span className="comment-text">{c.text}</span>
          </div>
        ))}
      </div>


      <form className="comment-form" onSubmit={submitComment}>
        <button type="button" className="icon-btn emoji-btn">
          <Smile size={20} strokeWidth={1.5} />
        </button>
        <input
          type="text"
          placeholder="Adicione um comentário..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          className="comment-input"
        />
        {commentInput && (
          <button type="submit" className="post-comment-btn">
            Publicar
          </button>
        )}
      </form>
    </article>
  );
}