import { createSlice } from "@reduxjs/toolkit";
export const blogSlice = createSlice({
  name: "Blogs",
  initialState: {
    blogs: [],
  },
  reducers: {
    insertBlogs(state, action) {
      state.blogs = action.payload;
      console.log(state.blogs);
    },
    deleteBlog(state, action) {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    editBlog(state, action) {
      state.blogs = state.blogs.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog
      );
    },
  },
});

export const { insertBlogs, deleteBlog, editBlog } = blogSlice.actions;
export default blogSlice.reducer;
