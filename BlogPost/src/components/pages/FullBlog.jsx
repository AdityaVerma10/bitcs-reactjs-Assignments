import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogItem from "../Blogitem";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading";
import Error from "../Error";

function FullBlog() {
  const { Id } = useParams();
  const { error, isLoading, getData } = useFetch();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    async function getblog() {
      const res = await getData(`http://localhost:5713/blogs/${Id}`);
      setBlog(res);
    }
    getblog();
  }, []);
  return (
    <div className="flex justify-center items-center mt-5">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : (
        <BlogItem
          title={blog.title}
          description={blog.description}
          showFullDescription={true}
          id={Id}
          author={blog.authorName}
        />
      )}
    </div>
  );
}

export default FullBlog;
