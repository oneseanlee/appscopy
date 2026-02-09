import { ShieldCheck, Users } from 'lucide-react';

const TrustBar = () => {
    return (
        <div className="pt-[116px] pb-12 border-b border-gray-100 bg-white">
            <div className="max-w-[1600px] mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="flex items-center gap-2 text-base font-bold text-gray-700">
                    <span className="text-xl">👋</span>
                    Handpicked, high-quality deals
                </div>
                <div className="flex items-center gap-2 text-base font-bold text-gray-700">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                    60-day money back promise
                </div>
                <div className="flex items-center gap-2 text-base font-bold text-gray-700">
                    <Users className="w-5 h-5 text-purple-500" />
                    Over 2 million satisfied customers
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
