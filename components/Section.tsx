
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-10 text-emerald-900">{title}</h3>
        {children}
      </div>
    </section>
  );
};

export default Section;
