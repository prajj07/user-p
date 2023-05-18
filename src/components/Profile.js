import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./Profile.css";

const Profile = () => {
  const [username] = useState("Cusat Connect");
  const [isFollowed, setIsFollowed] = useState(false);
  const [posts, setPosts] = useState([
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ]);
  const [search] = useState("");
  const [profilePicture, setProfilePicture] = useState(
    "https://via.placeholder.com/150"
  );
  const [bio, setBio] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

  useEffect(() => {
    console.log(search);
  }, [search]);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setProfilePicture(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Assuming you have a form with an input field for the post image URL
    const postImageUrl = e.target.elements.postImageUrl.value;

    if (postImageUrl) {
      setPosts((prevPosts) => [...prevPosts, postImageUrl]);
      e.target.reset(); // Reset the form input
    }
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <img src={profilePicture} alt="Profile" />
        <div className="profile-info">
          <div className="username">@{username}</div>
          <button
            className={isFollowed ? "unfollow-btn" : "follow-btn"}
            onClick={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stats-item">
          <span className="count">Posts</span>
          <span className="count-number">{posts.length}</span>
        </div>
        <div className="stats-item">
          <span className="count">Followers</span>
          <span className="count-number">100</span>
        </div>
        <div className="stats-item">
          <span className="count">Following</span>
          <span className="count-number">200</span>
        </div>
      </div>
      <div className="profile-bio">
        <h3>Bio</h3>
        <textarea value={bio} onChange={handleBioChange} />
      </div>
      <div className="posts">
        {posts.length > 0 ? (
          posts.map((post, index) => <Post src={post} key={index} />)
        ) : (
          <p>No posts yet.</p>
        )}
      </div>
      <div className="edit-profile">
        <h3>Edit Profile</h3>
        <form onSubmit={handlePostSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
          <input type="text" name="postImageUrl" placeholder="Enter image URL" />
          <button type="submit">Add Post</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
