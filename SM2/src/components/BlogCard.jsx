import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = React.memo(({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden">
      <img
        src={blog.acf.image}
        alt={blog.title.rendered}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {blog.title.rendered}
        </h3>
        <div className="text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{__html: blog.excerpt.rendered}}/>
        <Link
          to={`/blog/${blog.id}`}
          className="mt-3 inline-block text-indigo-600 font-semibold hover:underline"
        >
          Read More -
        </Link>
      </div>
    </div>
  );
});

export default BlogCard;
