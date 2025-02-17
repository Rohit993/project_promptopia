"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
const MyProfile = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filterPosts = posts.filter((p) => p._id !== post._id);
        setPosts(filterPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const { data: session } = useSession();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);
  return (
    <Profile
      name="My"
      data={posts}
      desc="Welcome to your personalized profile page"
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
};

export default MyProfile;
