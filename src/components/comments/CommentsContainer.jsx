import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import Comment from "./Comment";
import { useMutation } from "@tanstack/react-query";
import { createNewComment } from "../../services/index/comments";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const CommentsContainer = ({
  classname,
  logginedUserId,
  comments,
  postSlug,
}) => {
  console.log(comments);
  const [affectedComment, setAffectedComent] = useState(null);
  const userState = useSelector((state) => state.user);
  const { mutate: mutateNewComment, isLoading: isLoadingNewComment } =
    useMutation({
      mutationFn: ({ token, desc, slug, parent, replyOnUser }) => {
        return createNewComment({ token, desc, slug, parent, replyOnUser });
      },
      onSuccess: () => {
        toast.success(
          "Your comment is sent successfully, it will be visible after the confirmation of the Admin"
        );
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

  const deleteCommentHandler = (commentId) => {};

  const updateCommentHandler = (value, commentId) => {
    setAffectedComent(null);
  };

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    mutateNewComment({
      desc: value,
      parent,
      replyOnUser,
      token: userState.userInfo.token,
      slug: postSlug,
    });
    setAffectedComent(null);
  };

  return (
    <div className={`${classname}`}>
      <CommentForm
        btnLabel="send"
        formSubmitHandler={(value) => addCommentHandler(value)}
        loading={isLoadingNewComment}
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
