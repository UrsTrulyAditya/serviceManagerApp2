import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';
import Spinner from '../components/Spinner';
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8888/WP-SM/wordpress/wp-json/wp/v2/posts').then(res => res.data).then(data => {
      setBlogs(data);
      setFilteredBlogs(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const filtered = blogs.filter(b => b.title.rendered.toLowerCase().includes(search.toLowerCase()) || b.excerpt.rendered.toLowerCase().includes(search.toLowerCase()));
    setFilteredBlogs(filtered);
  }, [search, blogs]);

  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Blog
        </h2>

        <div className="mb-8 flex justify-center">
          <label htmlFor="search" className="sr-only">
            Search blog posts
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search by title or excerpt..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="p-3 border border-gray-300 rounded-full w-full md:w-1/2 shadow focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        {!loading && filteredBlogs.length === 0 && (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-600 text-lg font-medium">No blogs found.</p>
          </div>
        )}

        {loading ? <Spinner /> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>}
      </section>
    </>
  );
};

export default Blog;
