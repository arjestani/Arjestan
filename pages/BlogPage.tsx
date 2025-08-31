import React from 'react';
import { blogPosts } from '../content/blog';
import BlogPostCard from '../components/BlogPostCard';

const BlogPage: React.FC = () => {
  return (
    <main className="bg-stone-50">
      <div className="bg-stone-100 py-16">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-extrabold text-emerald-900">وبلاگ گردشگری ارجستان</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            در اینجا آخرین اخبار، راهنماهای سفر و داستان‌های جذاب از روستای ارجستان را بخوانید و برای سفر بعدی خود الهام بگیرید.
            </p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;