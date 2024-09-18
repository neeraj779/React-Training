import PostCard from "./components/Card/PostCard";
import { posts } from "./data";
import CardButton from "./components/Button";

function App() {
  return (
    <div>
      <h1>Total Posts: {posts.length}</h1>
      {posts.posts.map((post) => (
        <div key={post.id}>
          <PostCard
            title={post.title}
            body={post.body}
            reactions={post.reactions}
            views={post.views}
          />
          {post.userId === 123 && <CardButton />}
        </div>
      ))}
    </div>
  );
}

export default App;
