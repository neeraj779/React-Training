import "./postcard.css";

const PostCard = ({ title, body, reactions, views }) => {
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p>{body}</p>
      <ul>
        <li>Likes: {reactions.likes}</li>
        <li>Dislikes: {reactions.dislikes}</li>
        <li>Views: {views}</li>
      </ul>
    </div>
  );
};

export default PostCard;
