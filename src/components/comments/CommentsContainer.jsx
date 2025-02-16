import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import Comment from "./Comment";

const CommentsContainer = ({ classname }) => {
  const [comments, setComments] = useState([]);
  const mainComments = comments.filter((comment) => comment.parent === null);

  console.log(comments);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: "10",
      user: {
        _id: "a",
        name: "Hossein Bakhtiari",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: "2022-12-31T17:22:05.092+0000",
    };
    setComments((curState) => {
      return [newComment, ...curState];
    });
  };

  return (
    <div className={`${classname}`}>
      <CommentForm
        btnLabel="send"
        formSubmitHandler={(value) => addCommentHandler(value)}
      />
      <div className="space-y-4 mt-8">
          {mainComments.map((comment) => (
            <Comment comment={comment} />
          ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
