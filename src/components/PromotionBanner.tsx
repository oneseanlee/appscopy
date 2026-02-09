const PromotionBanner = () => {
    return (
        <section className="pt-[30px] pb-[30px] max-w-[1600px] mx-auto px-6">
            <div className="bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-orange-500 rotate-45"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold leading-tight">APPSUMO</span>
                            <span className="text-xl font-black leading-tight italic">AI WEEK</span>
                        </div>
                    </div>

                    <h2 className="text-4xl font-black text-gray-900 mb-6">
                        Win your ultimate AI setup
                    </h2>

                    <p className="text-gray-800 text-sm font-medium leading-relaxed max-w-xl mb-8">
                        This AI Week, we're giving away 3 years of <strong>Claude Max 5x</strong>, $1,000 in <strong>Lovable</strong> credits, and a <strong>Mac Mini</strong> to one grand prize winner. Claude Max gives you unlimited analysis, automation, and problem-solving. Lovable turns your ideas into working apps. The Mac Mini runs it all.
                    </p>

                    <button className="bg-[#ffbd00] hover:bg-[#ffcf40] text-black font-black px-10 py-4 rounded-xl transition-all shadow-lg">
                        Enter to win
                    </button>
                </div>

                <div className="flex-1 relative">
                    {/* Visual assets placeholder */}
                    <div className="relative w-full aspect-square md:aspect-video flex items-center justify-center">
                        <div className="w-full h-full bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 flex items-center justify-center p-8">
                            <div className="text-4xl text-black/50 font-black rotate-[-5deg]">
                                AI SETUP
                            </div>
                            {/* Simplified Mac Mini representation */}
                            <div className="absolute bottom-4 w-48 h-12 bg-gray-200 rounded-lg shadow-xl border-b-4 border-gray-300"></div>
                        </div>
                        {/* Floating decorative elements */}
                        <div className="absolute top-0 right-10 w-16 h-16 bg-orange-400 rounded-full blur-xl opacity-50"></div>
                        <div className="absolute bottom-0 left-10 w-24 h-24 bg-white rounded-full blur-2xl opacity-30"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromotionBanner;
