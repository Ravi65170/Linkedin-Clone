import React from "react";
import "./index.scss";
import { AiOutlineLike } from "react-icons/ai";

export default function LikeButton() {
  return (
    <div>
      <AiOutlineLike />
      <p>Like</p>
    </div>
  );
}
