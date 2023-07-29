import React from "react";
import ProfileComponent from "../components/ProfileComponent";

export default function Profile({ currentUser }) {
  return <ProfileComponent currentUser={currentUser} />;
}
