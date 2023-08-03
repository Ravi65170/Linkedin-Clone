import React, { useState, useMemo } from "react";
import { postStatus, getStatus } from "../../../api/FirestoreAPI";
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
    await setStatus("");
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);

  return (
    <div className="post-status-main">
      <div className="post-status">
        <button className="open-post-modal" onClick={() => setModalOpen(true)}>
          Start a Post
        </button>
      </div>
      <ModalComponent
        setStatus={setStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        status={status}
        sentStatus={sentStatus}
      />

      {allStatus.map((posts) => {
        return (
          <div key={posts.id}>
            <PostsCard posts={posts} />
          </div>
        );
      })}
    </div>
  );
}
