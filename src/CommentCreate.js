import React,{useState} from 'react'
import axios from 'axios'

const CommentCreate = ({postId}) => {
    const [content,setContent] = useState('')
    const createComment = async (content) => {
        const url = `http://posts.com/posts/${postId}/comments`
        const comments = await axios.post(url,{content})
        console.log(comments)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(content)
        createComment(content)
        setContent('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>New Comment</label>
                    <input 
                        value={content} 
                        onChange={e => {setContent(e.target.value)} }
                        className='form-control'/>
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>

        </div>
    )
}

export default CommentCreate