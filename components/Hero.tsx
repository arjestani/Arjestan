import React from 'react';
import SocialShareButtons from './SocialShareButtons';

const Hero: React.FC = () => {
  const pageUrl = "https://arjestan.ir"; // Example URL
  const pageTitle = "بهشت گمشده ایران، ارجستان";

  return (
    <section 
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542856333-035b8392a15c?q=80&w=2670&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          {pageTitle}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md mb-8">
          سفری به قلب طبیعت بکر و زیبای اردبیل را تجربه کنید و خاطراتی فراموش‌نشدنی بسازید.
        </p>
        <div className="flex justify-center">
            <SocialShareButtons shareUrl={pageUrl} shareTitle={pageTitle} />
        </div>
      </div>
    </section>
  );
};

export default Hero;