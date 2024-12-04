"use client";

import React from "react";
import { useAppSelector } from "@/app/hooks/storeHooks";

const Profile: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  return (
    <div>
      {user ? <h1>Welcome, {user.name}!</h1> : <h1>No user is logged in.</h1>}
    </div>
  );
};

export default Profile;
