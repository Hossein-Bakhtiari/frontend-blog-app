import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import Comment from "./Comment";

const CommentsContainer = ({ classname, logginedUserId ,comments }) => {
console.log(comments)
  const [affectedComment, setAffectedComent] = useState(null);





  const deleteCommentHandler = (commentId) => {

  };



  const updateCommentHandler = (value, commentId) => {

    setAffectedComent(null);
  };

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    setAffectedComent(null);
  };

  return (
    <div className={`${classname}`}>
      <CommentForm
        btnLabel="send"
        formSubmitHandler={(value) => addCommentHandler(value)}
      />
      <div className="space-y-4 mt-8">
        {comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            logginedUserId={logginedUserId}
            affectedComment={affectedComment}
            setAffectedComent={setAffectedComent}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={comment.replies}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
