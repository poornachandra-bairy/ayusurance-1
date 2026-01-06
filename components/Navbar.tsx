import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="border-b border-primary/10 sticky top-0 z-50 backdrop-blur-md bg-background/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        {/* Placeholder for Logo Icon if needed */}
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold">
                            A
                        </div>
                        <span className="font-serif text-2xl font-bold text-primary tracking-wide">
                            AyuSurance
                        </span>
                    </div>
                    <div className="hidden sm:flex sm:space-x-8">
                        <Link
                            href="/"
                            className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about-us"
                            className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/our-mission"
                            className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Our Mission
                        </Link>
                        <Link
                            href="/contact-us"
                            className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                    {/* Mobile menu button could go here */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
