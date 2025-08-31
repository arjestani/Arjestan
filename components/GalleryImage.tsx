
import React from 'react';

interface GalleryImageProps {
  src: string;
  onClick: () => void;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, onClick }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md group cursor-pointer" onClick={onClick}>
      <img 
        src={src} 
        alt="منظره‌ای از روستای ارجستان" 
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
    </div>
  );
};

export default GalleryImage;