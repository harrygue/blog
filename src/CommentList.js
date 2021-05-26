import React from 'react'

const CommentList = ({comments}) => {

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