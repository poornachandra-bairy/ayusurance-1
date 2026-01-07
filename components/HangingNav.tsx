"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavItem {
    label: string;
    href: string;
    positionClass: string; // e.g. "left-10" or "right-10"
    delay: number;
}

const navItems: NavItem[] = [
    { label: "Home", href: "/", positionClass: "left-8 md:left-16", delay: 0.2 },
    { label: "Contact Us", href: "/contact-us", positionClass: "right-8 md:right-16", delay: 0.3 },
    { label: "Our Mission", href: "/our-mission", positionClass: "right-40 md:right-56", delay: 0.4 },
    { label: "About Us", href: "/about-us", positionClass: "right-72 md:right-96", delay: 0.5 },
];

const HangingNav = () => {
    return (
        <>
            {navItems.map((item, index) => (
                <div key={index} className={`fixed top-0 ${item.positionClass} z-50 flex flex-col items-center pointer-events-none`}>
                    {/* The Thread */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "40vh" }} // Slightly shorter to keep them upper-mid
                        transition={{
                            type: "spring",
                            stiffness: 40,
                            damping: 12,
                            mass: 0.8,
                            delay: item.delay
                        }}
                        className="w-[2px] bg-secondary" // Gold thread
                    />

                    {/* The Button */}
                    <motion.div
                        initial={{ y: -500, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 40,
                            damping: 12,
                            mass: 0.8,
                            delay: item.delay
                        }}
                        className="pointer-events-auto"
                    >
                        <Link href={item.href}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-secondary font-display font-bold text-sm md:text-base px-5 py-2 md:px-6 md:py-3 rounded-full border-2 border-secondary shadow-lg hover:shadow-secondary/50 transition-shadow whitespace-nowrap"
                            >
                                {item.label}
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            ))}
        </>
    );
};

export default HangingNav;
