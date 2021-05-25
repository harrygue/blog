import React,{useState,useEffect} from 'react'
import axios from 'axios'



const CommentList = ({postId}) => {
    const [comments,setComments] = useState([])
    const fetchComments = async (postId) => {
        const url = `http://localhost:4001/posts/${postId}/comments`
        const response = await axios.get(url)
        console.log(response.data)
        setComments(response.data)
    }
    useEffect(() => {
        fetchComments(postId)
    },[])
    return (
        <div>
            <p>{comments && comments.length} comments</p>
            <ul>
                {comments && comments.map(comment =>
                    <li key={comment.id}>{comment.content}</li>)}
            </ul>
        </div>
    )
}

export default CommentList