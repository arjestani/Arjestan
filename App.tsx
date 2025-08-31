import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import AttractionCard from './components/AttractionCard';
import ProductCard from './components/ProductCard';
import TestimonialCard from './components/TestimonialCard';
import TripPlanner from './components/TripPlanner';
import Footer from './components/Footer';
import BlogPostCard from './components/BlogPostCard';
import InteractiveMap from './components/InteractiveMap';
import ContactForm from './components/ContactForm';
import BlogPage from './pages/BlogPage';
import Gallery from './components/Gallery';


// Importing content from centralized data files
import { attractions } from './content/attractions';
import { localProducts } from './content/products';
import { testimonials } from './content/testimonials';
import { blogPosts } from './content/blog';

const App: React.FC = () => {
  const [page, setPage] = useState<'home' | 'blog'>('home');

  const galleryImages: string[] = [
    'https://images.unsplash.com/photo-1505322266209-6a1005b8398b?q=80&w=2670&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618407333399-5f7560a6a4f2?q=80&w=2670&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599827552494-08637d156649?q=80&w=2574&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605658110825-36a6e2e49be8?q=80&w=2574&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1588631144983-5049b4c818d7?q=80&w=2670&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1628318824597-4581134599a8?q=80&w=2670&auto=format&fit=crop',
  ];

  return (
    <div className="bg-stone-50 text-gray-800">
      <Header setPage={setPage} />
      {page === 'home' ? (
        <main>
          <Hero />
          
          <Section title="جاذبه‌های دیدنی ارجستان">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {attractions.map(attraction => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          </Section>

          <Section title="محصولات محلی و سوغات">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {localProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Section>

          <TripPlanner />

          <Section title="آخرین مطالب وبلاگ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center mt-10">
              <button
                onClick={() => setPage('blog')}
                className="bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-emerald-800 transition-colors duration-300"
              >
                مشاهده همه مطالب
              </button>
            </div>
          </Section>

          <Section title="گالری تصاویر">
            <Gallery images={galleryImages} />
          </Section>

          <section className="bg-stone-100 py-12 md:py-20">
            <div className="container mx-auto px-6">
              <h3 className="text-3xl font-bold text-center mb-10 text-emerald-900">نظرات بازدیدکنندگان</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map(testimonial => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </section>

          <InteractiveMap />

          <ContactForm />

        </main>
      ) : (
        <BlogPage />
      )}
      <Footer />
    </div>
  );
};

export default App;