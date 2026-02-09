import { Star } from 'lucide-react';

interface Deal {
    id: number;
    title: string;
    description: string;
    price: number;
    originalPrice: number;
    reviews: number;
    rating: number;
    category: string;
    color: string;
}

const deals: Deal[] = [
    { id: 1, title: 'FlexiFunnels', description: 'Create AI-built landing pages, funnels, and courses that actually convert—from one prompt', price: 49, originalPrice: 199, reviews: 64, rating: 4.8, category: 'Marketing', color: 'bg-green-500' },
    { id: 2, title: 'Dreamlit AI', description: 'Leverage AI through vibe coding to send different types of email notifications to users', price: 79, originalPrice: 320, reviews: 10, rating: 5, category: 'Automation', color: 'bg-black' },
    { id: 3, title: 'GetTerms', description: 'Stay compliant with data protection laws using a user-friendly cookie banner and website policy generator', price: 79, originalPrice: 499, reviews: 54, rating: 4.7, category: 'Legal', color: 'bg-purple-600' },
    { id: 4, title: 'TextLink', description: 'Run bulk SMS outreach campaigns using this affordable, user-friendly SMS service', price: 39, originalPrice: 275, reviews: 21, rating: 4.5, category: 'Marketing', color: 'bg-white border-2' },
    { id: 5, title: 'TubeOnAI', description: 'Repurpose videos, podcasts, PDFs, and articles into publish-ready content with AI summarization', price: 59, originalPrice: 108, reviews: 14, rating: 4.9, category: 'Content', color: 'bg-blue-500' },
    { id: 6, title: 'WPSubscription', description: 'Set up subscriptions and recurring payments for WooCommerce through Stripe, PayPal, and Paddle', price: 69, originalPrice: 89, reviews: 44, rating: 4.6, category: 'Ecommerce', color: 'bg-white border' },
    { id: 7, title: 'ClickRank', description: 'Optimize your content for AI search engines like ChatGPT, Claude, Perplexity, and Google Gemini', price: 89, originalPrice: 690, reviews: 458, rating: 4.8, category: 'SEO', color: 'bg-indigo-900' },
    { id: 8, title: 'BrowserAct', description: 'Scrape any website with AI prompts and workflows that intelligently handle dynamic content', price: 69, originalPrice: 240, reviews: 48, rating: 4.7, category: 'Development', color: 'bg-teal-700' },
    { id: 9, title: 'Headway', description: 'Get 15-minute reads of the best book and the best ideas in a nutshell based on your goals & needs', price: 59, originalPrice: 99, reviews: 160, rating: 4.8, category: 'Education', color: 'bg-blue-600' },
];

const DealCard = ({ deal }: { deal: Deal }) => (
    <div className="flex gap-4 p-4 hover:bg-gray-50 border border-gray-200 rounded-2xl transition-all group cursor-pointer relative shadow-sm hover:shadow-md">
        <div className="absolute -left-2 top-4 text-6xl font-black text-gray-100/50 group-hover:text-gray-200/50 transition-colors -z-10 select-none">
            {deal.id}
        </div>
        <div className={`w-16 h-16 rounded-xl shrink-0 flex items-center justify-center shadow-sm ${deal.color}`}>
            <div className="w-8 h-8 bg-white/20 rounded-md"></div>
        </div>
        <div className="flex flex-col">
            <h3 className="text-[18px] font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{deal.title}</h3>
            <p className="text-base text-gray-500 line-clamp-2 mt-1 mb-2 leading-relaxed">
                {deal.description}
            </p>
            <div className="flex items-center gap-1 mb-2">
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(deal.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                    ))}
                </div>
                <span className="text-xs text-blue-600 font-bold underline cursor-pointer">{deal.reviews} reviews</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-[20px] font-bold text-gray-900">${deal.price}</span>
                <span className="text-sm text-gray-400">/lifetime</span>
                <span className="text-sm text-gray-300 line-through">${deal.originalPrice}</span>
            </div>
        </div>
    </div>
);

const DealsGrid = () => {
    return (
        <section className="pt-[30px] pb-[30px] max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-black text-gray-900 mb-4">Top 9 Deals</h2>
                <p className="text-gray-500 font-medium">Our top performing deals, chosen by entrepreneurs like you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {deals.map((deal) => (
                    <DealCard key={deal.id} deal={deal} />
                ))}
            </div>
        </section>
    );
};

export default DealsGrid;
