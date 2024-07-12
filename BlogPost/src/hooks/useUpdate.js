import { useState } from "react";

export const useUpdate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  async function updateBlog(id, updatedBlogData) {
    try {
      const res = await fetch(`http://localhost:5713/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBlogData),
      });
      if (!res.ok) throw new Error("Failed to updated Blog!");
      setIsLoading(false);
      return true;
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      return false;
    }
  }
  return { isLoading, error, updateBlog };
};
