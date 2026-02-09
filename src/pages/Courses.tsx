import { useState, useEffect, useRef } from 'react';
import { Star, Loader2 } from 'lucide-react';

const initialCourses = [
    {
        id: 1,
        title: 'The AI-Powered Content Machine',
        description: 'Build a content engine that runs on AI and produces high-quality, high-converting copy in minutes.',
        price: 49,
        originalPrice: 490,
        reviews: 324,
        rating: 4.9,
        badge: 'Select',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Mastering SaaS Sales',
        description: 'The complete guide to landing your first 100 customers and scaling your software business.',
        price: 99,
        originalPrice: 990,
        reviews: 156,
        rating: 4.8,
        badge: 'Select',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'SEO for Solopreneurs',
        description: 'No-BS search engine optimization strategies for entrepreneurs who want to rank without a team.',
        price: 39,
        originalPrice: 199,
        reviews: 89,
        rating: 4.7,
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1571721795195-a2cb2d33e00d?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'High-Ticket Closing 101',
        description: 'Learn the exact psychological triggers used by world-class closers to seal premium deals.',
        price: 149,
        originalPrice: 1500,
        reviews: 42,
        rating: 4.6,
        badge: 'Select',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 5,
        title: 'Digital Marketing Mastery',
        description: 'A comprehensive journey through FB Ads, Google Ads, and Email Marketing for 2024.',
        price: 69,
        originalPrice: 299,
        reviews: 842,
        rating: 4.9,
        badge: 'Select',
        image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 6,
        title: 'Zero to App: Flutter Course',
        description: 'Build your first cross-platform mobile application from scratch with zero prior code experience.',
        price: 59,
        originalPrice: 399,
        reviews: 215,
        rating: 4.7,
        badge: 'Ending Soon',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop'
    }
];

const generateMoreCourses = (count: number, startIndex: number) => {
    const titles = ['Cold Email ROI', 'UI/UX for Founders', 'Lead Gen Secrets', 'Python Automation', 'Ghostwriting Pro', 'Webflow Mastery'];
    const images = [
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800',
        'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800',
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800',
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800',
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800'
    ];

    return Array.from({ length: count }).map((_, i) => ({
        id: startIndex + i + 1,
        title: titles[(startIndex + i) % titles.length],
        description: 'Unlock explosive growth with this market-proven course designed for high-performance entrepreneurs.',
        price: Math.floor(Math.random() * 100) + 19,
        originalPrice: 499,
        reviews: Math.floor(Math.random() * 500) + 50,
        rating: 4.5 + Math.random() * 0.5,
        badge: Math.random() > 0.5 ? 'Select' : 'New',
        image: images[(startIndex + i) % images.length]
    }));
};

const Courses = () => {
    const [courses, setCourses] = useState(initialCourses);
    const [isLoading, setIsLoading] = useState(false);
    const observerTarget = useRef(null);

    const loadMore = () => {
        if (isLoading) return;
        setIsLoading(true);
        // Simulate API delay
        setTimeout(() => {
            setCourses(prev => [...prev, ...generateMoreCourses(3, prev.length)]);
            setIsLoading(false);
        }, 1500);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    loadMore();
                }
            },
            { threshold: 1.0 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [observerTarget, isLoading]);

    return (
        <div className="pt-24 pb-20 min-h-screen max-w-[1600px] mx-auto px-6">
            <div className="mb-8">
                <nav className="text-sm text-gray-500 mb-4">
                    <span>Browse</span>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-medium">Courses & Learning</span>
                </nav>
                <h1 className="text-4xl font-black text-gray-900">Courses & Learning</h1>
            </div>

            <div className="flex gap-10">
                {/* Sidebar Filters */}
                <aside className="w-64 shrink-0">
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Categories</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">Courses</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">Digital Downloads</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4 uppercase text-[11px] tracking-wider">Rating</h3>
                            <div className="space-y-2">
                                {[4, 3, 2, 1].map((rating) => (
                                    <label key={rating} className="flex items-center gap-2 cursor-pointer group">
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-3 h-3 ${i < rating ? 'fill-current' : 'text-gray-200'}`} />
                                            ))}
                                            <span className="text-sm text-gray-600 ml-1">& up</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4 uppercase text-[11px] tracking-wider">Price Range</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">Free</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">Under $50</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">$50 to $100</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Grid */}
                <main className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course) => (
                            <div key={course.id} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white group flex flex-col">
                                <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden shrink-0">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className={`text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider ${course.badge === 'Select' ? 'bg-blue-600 text-white' :
                                            course.badge === 'New' ? 'bg-green-600 text-white' :
                                                course.badge === 'Ending Soon' ? 'bg-red-600 text-white' :
                                                    'bg-gray-900 text-white'
                                            }`}>
                                            {course.badge}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-[18px] font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                            {course.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed flex-1">
                                        {course.description}
                                    </p>

                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-3.5 h-3.5 ${i < Math.floor(course.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs text-blue-600 font-bold underline cursor-pointer">{course.reviews} reviews</span>
                                    </div>

                                    <div className="flex items-center gap-2 pt-4 border-t border-gray-50">
                                        <span className="text-[20px] font-bold text-gray-900">${course.price}</span>
                                        <span className="text-[14px] text-gray-400 line-through">${course.originalPrice}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Infinite Scroll Trigger & Loader */}
                    <div ref={observerTarget} className="mt-12 flex flex-col items-center justify-center gap-4 py-8">
                        {isLoading ? (
                            <div className="flex flex-col items-center gap-3">
                                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Loading more amazing deals...</p>
                            </div>
                        ) : (
                            <p className="text-xs text-gray-300 font-medium italic">Scroll for more software goodness</p>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Courses;
