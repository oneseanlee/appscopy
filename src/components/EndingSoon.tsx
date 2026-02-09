import { Star } from 'lucide-react';

const endingSoonDeals = [
    { id: 1, title: 'Warm Welcome', description: 'Leverage personalized video across the customer experience to build trust and drive revenue', price: 69, originalPrice: 1288, reviews: 168, timeLeft: 'Plus access ends in 10 hours', color: 'bg-blue-600' },
    { id: 2, title: 'Publytics', description: 'Get accurate, real-time, and historical metrics about web traffic with a Google Analytics alternative', price: 59, originalPrice: 240, reviews: 12, timeLeft: 'Deal ends in 10 hours', color: 'bg-black' },
    { id: 3, title: 'zcal', description: 'Design stunning scheduling pages to increase bookings and enhance customer experience', price: 59, originalPrice: 252, reviews: 70, timeLeft: 'Deal ends in a day', color: 'bg-white border' },
    { id: 4, title: 'SuperCopy.ai', description: 'Create brand and audience personas with AI for targeted marketing campaigns', price: 49, originalPrice: 360, reviews: 88, timeLeft: 'Deal ends in 2 days', color: 'bg-orange-600' },
];

const EndingSoon = () => {
    return (
        <section className="pt-[30px] pb-[30px] max-w-[1600px] mx-auto px-6">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-2xl font-black text-gray-900 mb-2">Ending Soon</h2>
                </div>
                <a href="#" className="text-blue-600 font-bold text-sm hover:underline">View all</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {endingSoonDeals.map((deal) => (
                    <div key={deal.id} className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                        <div className="p-6 flex-1">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${deal.color}`}>
                                <div className="w-6 h-6 bg-white/20 rounded-sm"></div>
                            </div>
                            <h3 className="text-[18px] font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{deal.title}</h3>
                            <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed mb-4">
                                {deal.description}
                            </p>
                            <div className="flex items-center gap-1 mb-4">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-[10px] text-blue-600 font-bold">{deal.reviews} reviews</span>
                            </div>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-[20px] font-bold text-gray-900">${deal.price}</span>
                                <span className="text-xs text-gray-400">/lifetime</span>
                                <span className="text-xs text-gray-300 line-through">${deal.originalPrice}</span>
                            </div>

                            <button className="w-full py-3 bg-[#2e6fff] hover:bg-[#1e5fef] text-white font-bold rounded-lg transition-all text-base shadow-sm">
                                View deal
                            </button>
                        </div>

                        <div className="bg-red-50 py-2 text-center">
                            <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">{deal.timeLeft}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EndingSoon;
