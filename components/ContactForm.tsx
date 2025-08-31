import React, { useState } from 'react';
import Section from './Section';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    // Here you would typically send the data to a server
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Section title="ارتباط با ما">
        <div className="max-w-2xl mx-auto text-center bg-emerald-100 p-10 rounded-xl shadow-lg border border-emerald-200 animate-fade-in">
          <svg className="w-16 h-16 mx-auto mb-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <h4 className="text-2xl font-bold text-emerald-800 mb-3">از پیام شما متشکریم!</h4>
          <p className="text-gray-700">پیام شما با موفقیت ارسال شد. کارشناسان ما به زودی با شما تماس خواهند گرفت.</p>
        </div>
      </Section>
    );
  }

  return (
    <Section title="ارتباط با ما">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 sm:p-12 rounded-xl shadow-lg">
        {/* Contact Info */}
        <div className="text-center md:text-right">
          <h4 className="text-2xl font-bold text-emerald-800 mb-4">راه‌های ارتباطی</h4>
          <p className="text-gray-600 mb-8 leading-relaxed">
            سوال، پیشنهاد یا نظری دارید؟ خوشحال می‌شویم از طریق فرم مقابل یا راه‌های ارتباطی زیر با ما در میان بگذارید.
          </p>
          <div className="space-y-5">
            <div className="flex items-center justify-center md:justify-end">
              <span className="font-semibold text-gray-700">info@arjestan-village.com</span>
              <svg className="w-5 h-5 text-emerald-600 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <span className="font-semibold text-gray-700" dir="ltr">۰۴۵ - ۱۲۳۴ ۵۶۷۸</span>
               <svg className="w-5 h-5 text-emerald-600 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
             <div className="flex items-center justify-center md:justify-end">
              <span className="font-semibold text-gray-700">ایران، استان اردبیل، روستای ارجستان</span>
               <svg className="w-5 h-5 text-emerald-600 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label htmlFor="name" className="sr-only">نام شما</label>
              <input
                type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-emerald-900 text-white border border-emerald-700 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-400"
                placeholder="نام شما" required
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="sr-only">ایمیل شما</label>
              <input
                type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-emerald-900 text-white border border-emerald-700 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-400"
                placeholder="ایمیل شما" required
              />
            </div>
            <div className="relative">
              <label htmlFor="message" className="sr-only">پیام شما</label>
              <textarea
                id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-emerald-900 text-white border border-emerald-700 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-400"
                placeholder="پیام شما..." required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-800 transition-colors duration-300"
            >
              ارسال پیام
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;