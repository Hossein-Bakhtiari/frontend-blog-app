import React from "react";
import {images} from "../../constant"
const Comment = ({ comment }) => {
  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      <img src={images.PostProfileImage} alt="user profile" className="w-9 h-9 object-cover rounded-full"/>
      <div className="flex-1 flex flex-col">

      </div>
      
    </div>
  );
};

export default Comment;
