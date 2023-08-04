import React, { useState, useMemo } from "react";
import { postStatus, getStatus, updatePost } from "../../../api/FirestoreAPI";
import ModalComponent from "../Modal";
import PostsCard from "../PostsCard";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import getUniqueID from "../../../helpers/getUniqueId";
import "../PostUpdate/index.scss";

export default function PostStatus({ currentUser }) {
  let userEmail = localStorage.getItem("userEmail");
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const sentStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: userEmail,
      userName: currentUser.name,
      postID: getUniqueID(),
      userID: currentUser.id,
    };
    await postStatus(object);
    await setModalOpen(false);
    setIsEdit(false);
    await setStatus("");
  };

  const getEditData = (posts) => {
    setModalOpen(true);
    setStatus(posts.status);
    setCurrentPost(posts);
    setIsEdit(true);
  };

  const updateStatus = () => {
    updatePost(currentPost.id, status);
    setModalOpen(false);
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);

  return (
    <div className="post-status-main">
      <div className="user-details">
        <img src={currentUser.imageLink} alt="imageLink" />
        <p className="name">{currentUser.name}</p>
        <p className="headline">{currentUser.headline}</p>
      </div>
      <div className="post-status">
        <img
          className="post-image"
          src={currentUser.imageLink}
          alt="imageLink"
        />
        <button
          className="open-post-modal"
          onClick={() => {
            setModalOpen(true), setIsEdit(false);
          }}
        >
          Start a Post
        </button>
      </div>
      <ModalComponent
        setStatus={setStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        status={status}
        sentStatus={sentStatus}
        isEdit={isEdit}
        updateStatus={updateStatus}
      />

      {allStatus.map((posts) => {
        return (
          <div key={posts.id}>
            <PostsCard posts={posts} getEditData={getEditData} />
          </div>
        );
      })}
    </div>
  );
}
