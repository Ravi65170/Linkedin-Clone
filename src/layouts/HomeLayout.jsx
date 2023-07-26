import React from "react";
import Home from "../Pages/Home";
import Topbar from "../components/Topbar";

export default function HomeLayout() {
  return (
    <div>
      <Topbar />
      <Home />
    </div>
  );
}
