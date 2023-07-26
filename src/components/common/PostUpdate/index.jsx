import React, { useState } from "react";
import ModalComponent from "../Modal";
import "../PostUpdate/index.scss";

export default function PostStatus() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="post-status-main">
      <div className="post-status">
        <button className="open-post-modal" onClick={() => setModalOpen(true)}>
          Start a Post
        </button>
      </div>
      <ModalComponent modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}
