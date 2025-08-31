
import React from 'react';
import SocialShareButtons from './SocialShareButtons';

const Footer: React.FC = () => {
  const pageUrl = "https://arjestan.ir";
  const pageTitle = "وبسایت گردشگری روستای ارجستان";

  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-right">
          <div>
            <h2 className="text-2xl font-bold">ارجستان</h2>
            <p className="max-w-md mt-2 text-emerald-200">
              ما را در شبکه‌های اجتماعی دنبال کنید و از زیبایی‌های این روستای بی‌نظیر باخبر شوید.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <SocialShareButtons shareUrl={pageUrl} shareTitle={pageTitle} />
          </div>
        </div>
        <hr className="my-6 border-emerald-700" />
        <div className="text-center text-emerald-300">
          <p>&copy; ۱۴۰۳ روستای توریستی ارجستان. تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;