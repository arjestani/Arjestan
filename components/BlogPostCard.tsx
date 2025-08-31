import React from 'react';
import type { BlogPost } from '../types';
import SocialShareButtons from './SocialShareButtons';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const pageUrl = "https://arjestan.ir/blog/" + post.id; // Example post URL

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-transparent hover:border-emerald-200 flex flex-col">
       <div className="overflow-hidden h-48">
        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-emerald-800 mb-2">{post.title}</h4>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
            <div className="text-xs text-gray-500">
                <span>{post.author}</span> &bull; <span>{post.date}</span>
            </div>
            <SocialShareButtons shareUrl={pageUrl} shareTitle={post.title} />
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;