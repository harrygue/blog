import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

const PostList = () => {
    
    const [posts,setPosts] = useState({})
    
    const fetchPosts = async () => {
        const url = 'http://posts.com/posts'
        const response = await axios.get(url)
        console.log(response.data)
        setPosts(response.data)
    }

    useEffect(() =>{
        fetchPosts()
    },[])

    const renderedPosts = Object.values(posts).map(post =>
        (
            <div className='card' 
                style={{width:'30%', marginBottom:'20px'}}
                key={post.id}
            >
                <div className='card-body'>
                    <h3>{post.title}</h3>
                    <CommentList comments={post.comments} />
                    <CommentCreate postId={post.id}/>
                </div>
            </div>
        )
    )

    posts && console.log(renderedPosts)

    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderedPosts}
        </div>
    )
}

export default PostList