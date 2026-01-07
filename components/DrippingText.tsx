"use client";

import { motion } from "framer-motion";

interface DrippingTextProps {
    text: string;
}

const DrippingText = ({ text }: DrippingTextProps) => {
    const letters = text.split("");

    return (
        // Increased height and bottom padding significantly to safely hold the huge font + descenders + reflection/shadows
        <div className="relative flex items-end justify-center h-80 overflow-hidden px-4 pb-12">
            {/* SVG Liquid Filter Definition */}
            <svg className="absolute hidden">
                <defs>
                    <filter id="gooey-effect">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
            {letters.map((letter, index) => (
                <div key={index} className="relative flex flex-col items-center justify-end w-auto mx-0 sm:mx-1">
                    {/* The Liquid Drip */}
                    <motion.div
                        initial={{ y: -400, height: 60, opacity: 1, scaleX: 1 }}
                        animate={{
                            y: 0,
                            height: 0,
                            opacity: 0,
                            scaleX: 3 // Larger splat effect
                        }}
                        transition={{
                            duration: 1.2,
                            ease: "easeIn",
                            delay: index * 0.1, // Staggered drip
                        }}
                        className="w-2 md:w-4 bg-primary rounded-full absolute bottom-0 mb-4 z-10"
                    />

                    {/* The Letter Filling Up (Using Clip Path now to avoid clipping descenders) */}
                    <motion.span
                        initial={{ clipPath: "inset(100% 0 0 0)" }} // Fully hidden from top
                        animate={{ clipPath: "inset(0% 0 0 0)" }}   // Fully visible
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: index * 0.1 + 0.9,
                        }}
                        className="text-[6rem] md:text-[10rem] font-display font-extrabold tracking-tight block bg-gradient-to-br from-primary via-[#4a7c52] to-secondary bg-clip-text text-transparent drop-shadow-lg pb-2"
                        style={{
                            // Ensure text stays aligned bottom
                            display: "flex",
                            alignItems: "flex-end",
                            paddingBottom: "10px", // Safety zone for descenders
                            lineHeight: 0.8, // Syne is chunky
                            filter: "url(#gooey-effect)" // Apply the SVG filter
                        }}
                    >
                        {letter}
                    </motion.span>
                </div>
            ))}



        </div>
    );
};

export default DrippingText;
