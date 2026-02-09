import { Star } from 'lucide-react';

const aiStackDeals = [
    { id: 1, title: 'FlexiFunnels', description: 'Create AI-built landing pages, funnels, and courses that actually convert—from one prompt', price: 49, originalPrice: 199, reviews: 64, color: 'bg-green-500' },
    { id: 2, title: 'Dreamlit AI', description: 'Leverage AI through vibe coding to send different types of email notifications to users', price: 79, originalPrice: 320, reviews: 10, color: 'bg-black' },
    { id: 3, title: 'ClickRank', description: 'Optimize your content for AI search engines like ChatGPT, Claude, Perplexity, and Google Gemini', price: 89, originalPrice: 690, reviews: 468, color: 'bg-indigo-900' },
    { id: 4, title: 'BrowserAct', description: 'Scrape any website with AI prompts and workflows that intelligently handle dynamic content', price: 69, originalPrice: 240, reviews: 49, color: 'bg-teal-700' },
];

const AIStack = () => {
    return (
        <section className="pt-[30px] pb-20 max-w-[1600px] mx-auto px-6">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-2xl font-black text-gray-900">AI Stack <span className="text-blue-600 ml-2 font-black cursor-pointer hover:underline text-sm uppercase tracking-tighter">View all</span></h2>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {aiStackDeals.map((deal) => (
                    <div key={deal.id} className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0 ${deal.color}`}>
                            <div className="w-5 h-5 bg-white/20 rounded-sm"></div>
                        </div>
                        <h3 className="text-[18px] font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{deal.title}</h3>
                        <p className="text-base text-gray-500 line-clamp-3 leading-relaxed mb-4 flex-1">
                            {deal.description}
                        </p>
                        <div className="flex items-center gap-1 mb-4">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-xs text-blue-600 font-bold">{deal.reviews} reviews</span>
                        </div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-[20px] font-bold text-gray-900">${deal.price}</span>
                            <span className="text-sm text-gray-400">/lifetime</span>
                            <span className="text-sm text-gray-300 line-through">${deal.originalPrice}</span>
                        </div>

                        <button className="w-full py-3 bg-[#2e6fff] hover:bg-[#1e5fef] text-white font-bold rounded-lg transition-all text-base shadow-sm">
                            View deal
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AIStack;
