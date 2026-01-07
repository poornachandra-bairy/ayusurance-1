"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HangingButton = () => {
    return (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-none">
            {/* The Thread */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "50vh" }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 10,
                    mass: 0.8,
                    delay: 0.5
                }}
                className="w-[2px] bg-secondary" // Gold thread
            />

            {/* The Button */}
            <motion.div
                initial={{ y: -500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }} // It moves with the thread's flow essentially
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 10,
                    mass: 0.8,
                    delay: 0.5
                }}
                className="pointer-events-auto"
            >
                <Link href="/">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-secondary font-display font-bold text-lg px-6 py-3 rounded-full border-2 border-secondary shadow-lg hover:shadow-secondary/50 transition-shadow"
                    >
                        Home
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
};

export default HangingButton;
