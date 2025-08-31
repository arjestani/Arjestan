import React, { useState, useCallback } from 'react';
import GalleryImage from './GalleryImage';
import ImageLightbox from './ImageLightbox';

interface GalleryProps {
    images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = useCallback((index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
    }, []);

    const goToNext = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const goToPrevious = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images.length]);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <GalleryImage 
                        key={index} 
                        src={src} 
                        onClick={() => openLightbox(index)}
                    />
                ))}
            </div>
            {lightboxOpen && (
                <ImageLightbox
                    src={images[currentImageIndex]}
                    onClose={closeLightbox}
                    onNext={goToNext}
                    onPrevious={goToPrevious}
                />
            )}
        </>
    );
};

export default Gallery;
