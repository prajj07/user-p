import React from "react";

const Post = ({ src }) => {
  return (
    <>
      <img style={{ marginRight: "4px" }} src={src} alt="Post" />
    </>
  );
};

export default Post;
