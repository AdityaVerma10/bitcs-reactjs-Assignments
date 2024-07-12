import { useState } from "react";

const useDeleteBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteBlog = async (id) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5713/blogs/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      setIsLoading(false);
      return true;
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      return false;
    }
  };

  return { deleteBlog, isLoading, error };
};

export default useDeleteBlog;
