import React, { useMemo, useState } from "react";
import Topbar from "../components/Topbar";
import { getCurrentUser } from "../api/FirestoreAPI";
import Profile from "../Pages/Profile";

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar />
      <Profile currentUser={currentUser} />
    </div>
  );
}