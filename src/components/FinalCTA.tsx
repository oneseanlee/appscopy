const FinalCTA = () => {
    return (
        <section className="py-24 max-w-[1600px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
                <span className="text-blue-600 font-medium font-serif italic">You made it all the way down here?</span>{' '}
                <span className="relative">
                    Respect.
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600 rounded-full"></div>
                </span>
            </h2>
            <p className="text-gray-600 font-medium mb-10">
                Reward yourself with our best deals, insider perks, and surprisingly good emails.
            </p>

            <div className="flex flex-col md:flex-row gap-2 max-w-xl mx-auto">
                <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 px-6 py-4 rounded-lg border border-gray-200 outline-none text-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-4 rounded-lg transition-all shadow-lg shadow-blue-100">
                    Join the list
                </button>
            </div>
        </section>
    );
};

export default FinalCTA;
