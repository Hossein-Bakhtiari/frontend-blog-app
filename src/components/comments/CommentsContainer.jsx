import React from 'react'
import CommentForm from './CommentForm'

const CommentsContainer = ({classname}) => {
  return (
    <div className={`${classname}`}>
        <CommentForm btnLabel="send" />
    </div>
  )
}

export default CommentsContainer