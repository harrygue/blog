import React from 'react'

const CommentList = ({comments}) => {
    const getComment = (comment) => {
        switch(comment.status){
            case 'approved':
                return comment.content
            case 'pending':
                return 'Comment will be checked, be patient...'
            case 'rejected':
                return 'sorry, your comment was rejected ...'
            default:
                return 'Comment will be checked, be patient...'
        }
    }
    return (
        <div>
            <p>{comments && comments.length} comments</p>
            <ul>
                {comments && comments.map(comment =>
                    <li key={comment.id}>{getComment(comment)}</li>)}
            </ul>
        </div>
    )
}

export default CommentList