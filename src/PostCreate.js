import React,{useState} from 'react'
import axios from 'axios'

const PostCreate = () => {
    const [title,setTitle] = useState('')
    const handleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = 'http://localhost:4000/posts'
        await axios.post(url,{title})
        setTitle('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Title</label>
                    <input 
                        className='form-control' 
                        name='title'
                        value={title}
                        onChange={handleChange}
                    />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default PostCreate;