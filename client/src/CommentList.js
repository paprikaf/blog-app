import React from 'react';

export default ( {comments} ) => {  
    const rendererComments = comments.map(comment => {
        let content;
        if (comment.status === 'approved') {
            content = comment.content;
        }
        if (comment.status === 'pending') {
            content = 'this comment is awaiting moderation';
        }
        if (comment.status=== 'rejected') {
            content= 'this comment has been rejected';
        }
        return <li key={comment.id}>{content}</li>
    
    })
    
    return <ul> {rendererComments} </ul> 
};