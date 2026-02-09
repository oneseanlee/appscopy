import { Star } from 'lucide-react';

const staffPicks = [
    {
        id: 1,
        title: 'FlexiFunnels',
        description: 'Create AI-built landing pages, funnels, and courses that actually convert—from one prompt',
        price: 49,
        originalPrice: 199,
        reviews: 64,
        rating: 4.8,
        color: 'bg-black',
        logoColor: 'bg-green-500',
        testimonial: {
            quote: '"Literally pays for itself immediately."',
            author: 'Vanessa',
            role: 'Head of Operations'
        }
    },
    {
        id: 2,
        title: 'ClickRank',
        description: 'Optimize your content for AI search engines like ChatGPT, Claude, Perplexity, and Google Gemini',
        price: 89,
        originalPrice: 690,
        reviews: 468,
        rating: 4.9,
        color: 'bg-purple-600',
        logoColor: 'bg-indigo-900',
        testimonial: {
            quote: '"SEO now takes me minutes instead of hours."',
            author: 'Ilona',
            role: 'Chief Operating Officer'
        }
    },
    {
        id: 3,
        title: 'Tabby',
        description: 'Streamline accounting, expense tracking, and bookkeeping with this all-in-one AI tool',
        price: 59,
        originalPrice: 340,
        reviews: 49,
        rating: 4.7,
        color: 'bg-blue-600',
        logoColor: 'bg-blue-700',
        testimonial: {
            quote: '"Like having a bookkeeper in my pocket."',
            author: 'Chad',
            role: 'Chief Technology Officer'
        }
    }
];

const StaffPicks = () => {
    return (
        <section className="pt-[30px] pb-[30px] max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-black text-gray-900 mb-4">Staff Picks</h2>
                <p className="text-gray-500 font-medium">The tools our team can't stop talking about</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {staffPicks.map((pick) => (
                    <div key={pick.id} className="w-[370px] h-[520px] border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group bg-white shrink-0">
                        <div className={`h-24 ${pick.color} flex items-center justify-center relative shrink-0`}>
                            <div className={`absolute -bottom-6 w-12 h-12 rounded-xl border-4 border-white shadow-md flex items-center justify-center ${pick.logoColor}`}>
                                <div className="w-5 h-5 bg-white/20 rounded-sm"></div>
                            </div>
                        </div>

                        <div className="pt-10 p-6 flex-1 flex flex-col text-center items-center overflow-hidden">
                            <h3 className="text-[18px] font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight truncate w-full">{pick.title}</h3>
                            <p className="text-base text-gray-500 leading-relaxed mb-4 line-clamp-2 px-2">
                                {pick.description}
                            </p>

                            <div className="flex items-center gap-1 mb-3">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(pick.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                                    ))}
                                </div>
                                <span className="text-xs text-blue-600 font-bold underline cursor-pointer">{pick.reviews} reviews</span>
                            </div>

                            <div className="flex items-center gap-2 mb-4 shrink-0">
                                <span className="text-[20px] font-bold text-gray-900">${pick.price}</span>
                                <span className="text-xs text-gray-400 font-bold italic">/lifetime</span>
                                <span className="text-xs text-gray-300 line-through">${pick.originalPrice}</span>
                            </div>

                            <div className="w-full bg-blue-50/50 rounded-xl p-4 text-left mb-4 relative flex-1 min-h-0 flex flex-col justify-center">
                                <p className="text-xs font-medium text-gray-800 mb-2 italic leading-tight line-clamp-2">
                                    {pick.testimonial.quote}
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-gray-200 border border-white shadow-sm overflow-hidden shrink-0">
                                        <div className="w-full h-full bg-slate-400"></div>
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[10px] font-black text-gray-900 leading-tight truncate">{pick.testimonial.author}</p>
                                        <p className="text-[9px] text-gray-500 font-medium truncate">{pick.testimonial.role}</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-[#2e6fff] hover:bg-[#1e5fef] text-white font-bold rounded-lg transition-all text-base shadow-sm shrink-0">
                                View deal
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StaffPicks;
