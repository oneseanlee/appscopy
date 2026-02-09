import { Youtube, Facebook, Instagram, Twitter, Music2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-20 px-6">
            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between gap-16">
                <div className="flex-1">
                    <div className="flex flex-col mb-8">
                        <span className="text-2xl font-black tracking-tighter">APPSUMO</span>
                        <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-xs font-medium">
                            Part of the Sumo family with TidyCal, BreezeDoc, FormRobin, and SendFox.
                        </p>
                    </div>

                    <div className="flex gap-4 mb-10">
                        <a href="#" className="p-2 hover:bg-gray-800 rounded-full transition-colors"><Youtube className="w-5 h-5" /></a>
                        <a href="#" className="p-2 hover:bg-gray-800 rounded-full transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="p-2 hover:bg-gray-800 rounded-full transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="p-2 hover:bg-gray-800 rounded-full transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="p-2 hover:bg-gray-800 rounded-full transition-colors"><Music2 className="w-5 h-5" /></a>
                    </div>

                    <button className="bg-gray-900 border border-gray-800 px-4 py-2 rounded text-xs font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Get 10% Off
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:flex-[2]">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-sm">Account</h4>
                        <ul className="text-gray-400 font-medium text-sm flex flex-col gap-3">
                            <li><a href="#" className="hover:text-white">Profile</a></li>
                            <li><a href="#" className="hover:text-white">Join Plus</a></li>
                            <li><a href="#" className="hover:text-white">Help center</a></li>
                            <li><a href="#" className="hover:text-white">Terms</a></li>
                            <li><a href="#" className="hover:text-white">Privacy</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-sm">AppSumo</h4>
                        <ul className="text-gray-400 font-medium text-sm flex flex-col gap-3">
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Affiliates</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-sm">Sell</h4>
                        <ul className="text-gray-400 font-medium text-sm flex flex-col gap-3">
                            <li><a href="#" className="hover:text-white">AppSumo Select</a></li>
                            <li><a href="#" className="hover:text-white">List your own product</a></li>
                            <li><a href="#" className="hover:text-white">Case studies</a></li>
                            <li><a href="#" className="hover:text-white">Partner Portal</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-sm">Learn</h4>
                        <ul className="text-gray-400 font-medium text-sm flex flex-col gap-3">
                            <li><a href="#" className="hover:text-white">How to start an online business</a></li>
                            <li><a href="#" className="hover:text-white">What is the creator economy?</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
