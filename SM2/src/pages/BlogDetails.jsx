import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import axios from 'axios';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     const fetchBlog = async() => {
      try {
         const resBlog = await axios.get(`http://localhost:8888/WP-SM/wordpress/wp-json/wp/v2/posts/${id}`);
          const blogData = await resBlog.data;
          // debugger
          setBlog(blogData);
      } catch (err) {
        console.error("Error fetching blog or image:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();    
  }, [id]);

  if (loading) return <Spinner />;
  if (!blog) return <p className="text-center py-20">Blog not found</p>;

  return (
    <>
      <Navbar />
      <article className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {blog.title.rendered}
        </h1>
        <img
          src={blog.acf.image}
          alt={blog.title.rendered}
          className="w-full max-h-96 object-contain rounded-lg mb-6 shadow-lg"
          loading="lazy"
        />
        <div className="prose prose-lg text-gray-700" dangerouslySetInnerHTML= {{ __html :  blog.content.rendered}} />
      </article>
    </>
  );
};

export default BlogDetails;
