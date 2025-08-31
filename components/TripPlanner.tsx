import React, { useState, useCallback } from 'react';
import { generateTripPlan } from '../services/geminiService';
import type { TripPlan } from '../types';
import LoadingSpinner from './LoadingSpinner';

const TripPlanner: React.FC = () => {
  const [duration, setDuration] = useState('3');
  const [interests, setInterests] = useState('');
  const [tripPlan, setTripPlan] = useState<TripPlan | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setTripPlan(null);

    try {
      const plan = await generateTripPlan(Number(duration), interests);
      setTripPlan(plan);
    } catch (err) {
      setError('متاسفانه در تولید برنامه سفر مشکلی پیش آمد. لطفا دوباره تلاش کنید.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [duration, interests]);

  return (
    <section className="bg-emerald-50 py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-emerald-900">برنامه‌ریز سفر هوشمند</h3>
          <p className="text-gray-600 mb-8">
            به هوش مصنوعی ما بگویید چند روز قصد اقامت دارید و به چه فعالیت‌هایی علاقه‌مندید تا یک برنامه سفر اختصاصی برای شما در ارجستان آماده کند.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="duration" className="block text-lg font-bold text-emerald-800 mb-2">مدت اقامت (روز)</label>
              <input
                type="number"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                min="1"
                max="7"
                className="w-full px-4 py-2 bg-emerald-900 text-white border border-emerald-700 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label htmlFor="interests" className="block text-lg font-bold text-emerald-800 mb-2">علاقه‌مندی‌ها</label>
              <input
                type="text"
                id="interests"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                placeholder="مثال: کوهنوردی، عکاسی، آرامش"
                className="w-full px-4 py-2 bg-emerald-900 text-white border border-emerald-700 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-400"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-800 transition-colors duration-300 disabled:bg-emerald-400 flex items-center justify-center"
          >
            {isLoading && <LoadingSpinner />}
            {isLoading ? 'در حال تولید برنامه...' : 'برایم برنامه بچین!'}
          </button>
        </form>

        {error && <p className="text-center text-red-600 mt-6 bg-red-100 p-4 rounded-lg">{error}</p>}
        
        {tripPlan && (
          <div className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg animate-fade-in">
            <h4 className="text-2xl font-bold text-center mb-6 text-emerald-900">{tripPlan.planTitle}</h4>
            <div className="space-y-6">
              {tripPlan.itinerary.map((item) => (
                <div key={item.day} className="border-r-4 border-emerald-600 pr-6">
                  <h5 className="text-xl font-semibold text-emerald-800 mb-2">روز {item.day}: {item.title}</h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {item.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TripPlanner;