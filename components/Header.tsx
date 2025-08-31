import React from 'react';

interface HeaderProps {
  setPage: (page: 'home' | 'blog') => void;
}

const Header: React.FC<HeaderProps> = ({ setPage }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => setPage('home')}>
          <h1 className="text-2xl font-bold text-emerald-800">ارجستان</h1>
          <p className="text-sm text-gray-500">نگین طبیعت اردبیل</p>
        </div>
        <nav className="flex items-center gap-6">
          <button 
            onClick={() => setPage('home')} 
            className="text-gray-600 hover:text-emerald-700 font-medium transition-colors"
          >
            صفحه اصلی
          </button>
          <button 
            onClick={() => setPage('blog')} 
            className="text-gray-600 hover:text-emerald-700 font-medium transition-colors"
          >
            وبلاگ
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;