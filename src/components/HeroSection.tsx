const FloatingLogo = ({ src, className, color, delay }: { src?: string, className: string, color: string, delay: string }) => (
    <div className={`absolute w-14 h-14 rounded-[1.25rem] shadow-xl flex items-center justify-center animate-bounce z-0 ${className} ${color}`} style={{ animationDelay: delay, animationDuration: '4s' }}>
        {src ? (
            <img src={src} alt="Brand Logo" className="w-[70%] h-[70%] object-contain" />
        ) : (
            <div className="w-[60%] h-[60%] bg-white/20 rounded-md"></div>
        )}
    </div>
);

const HeroSection = () => {
    return (
        <section className="relative pt-40 pb-24 px-6 bg-gradient-to-b from-white via-[#f0f5ff] to-[#e5edff] flex flex-col items-center">
            {/* Overflow Hidden Wrapper for Logos only */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Brand Logos */}
                <FloatingLogo
                    className="top-20 left-[18%] -rotate-[15deg]"
                    color="bg-black"
                    delay="0s"
                />
                <FloatingLogo
                    src="/shopify_logo_1770667571245.png"
                    className="top-1/2 -translate-y-1/2 left-[12%] -rotate-[10deg]"
                    color="bg-white border border-gray-50"
                    delay="0.5s"
                />
                <FloatingLogo
                    src="/slack_logo_1770667617628.png"
                    className="bottom-20 left-[18%] -rotate-[12deg]"
                    color="bg-[#1264a3]"
                    delay="1s"
                />

                <FloatingLogo
                    src="/zapier_logo_1770667586545.png"
                    className="top-24 right-[16%] rotate-[18deg]"
                    color="bg-[#ff4f00]"
                    delay="0.2s"
                />
                <FloatingLogo
                    src="/mailchimp_logo_1770667601584.png"
                    className="top-[55%] -translate-y-1/2 right-[10%] rotate-[12deg]"
                    color="bg-[#ffe01b]"
                    delay="0.7s"
                />
                <FloatingLogo
                    className="bottom-16 right-[15%] rotate-[15deg]"
                    color="bg-[#ff5a5f]"
                    delay="1.2s"
                />
            </div>

            {/* Central Card - Overlapping bottom edge */}
            <div className="relative w-full max-w-[690px] bg-white border border-blue-200 rounded-[2.5rem] p-10 pt-16 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] z-20 transition-all hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] -mb-48">
                {/* Mascot Overlapping */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md border border-blue-50 p-1">
                    <img
                        src="/appsumo_noah_mascot_1770671148116.png"
                        alt="AppSumo Mascot"
                        className="w-[90%] h-[90%] object-contain"
                    />
                </div>

                <div className="text-center">
                    <h1 className="text-[30px] leading-[36px] font-black text-[#111827] mb-5 font-display tracking-tight">
                        Great software for your <br />
                        business. Insanely low prices.
                    </h1>

                    <p className="text-gray-500 mb-12 font-medium text-[16px]">
                        Get deal alerts + 10% off your first purchase
                    </p>

                    <div className="flex flex-col gap-6 max-w-[540px] mx-auto">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-6 py-4.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50/50 transition-all text-[16px]"
                        />
                        <button className="w-full bg-[#ffbd00] hover:bg-[#ffcf40] text-black font-black py-4.5 rounded-xl transition-all shadow-lg shadow-yellow-100/50 active:scale-[0.98] text-[16px] uppercase tracking-widest">
                            Get 10% off
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
