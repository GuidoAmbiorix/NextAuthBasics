"use client";
import React, { use, useEffect } from "react";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();

  useEffect(() => {}, []);
  return (
    <div>
      <h1>Page Profile</h1>
      <hr />
      <div className="flex flex-col">
        <span>{session?.user?.name}</span>
        <span>{session?.user?.email}</span>
        <span>{session?.user?.image}</span>
        <span>{session?.user?.id}</span>
        <span>{session?.user?.roles}</span>

      </div>
    </div>
  );
};

export default ProfilePage;
