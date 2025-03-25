import { use } from "react";
import Post from "./Post";


export default function Posts({fetchPosts}){
    // console.log(fetchPosts)
    const postPromise = use(fetchPosts);
    
    return (
        <div>
            Total Posts: {postPromise.length}
            {
                postPromise.map(post => <Post key={post.id} post={post}></Post>)
            }
            
        </div>
    )
}