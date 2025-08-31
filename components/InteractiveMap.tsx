import React from 'react';
import Section from './Section';

const InteractiveMap: React.FC = () => {
  return (
    <Section title="موقعیت ما روی نقشه">
      <div className="w-full h-[450px] rounded-xl shadow-lg overflow-hidden border-4 border-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12739.67497258019!2d48.33719183863579!3d38.4552438173489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4018a7a9e346b0a7%3A0x6b801a6b0c137e29!2sArjestan%2C%20Ardabil%20Province%2C%20Iran!5e0!3m2!1sen!2sus!4v1718042693838!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="نقشه موقعیت روستای ارجستان"
        ></iframe>
      </div>
    </Section>
  );
};

export default InteractiveMap;