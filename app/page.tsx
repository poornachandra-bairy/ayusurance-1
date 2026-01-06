import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-secondary rounded-full blur-[100px]"></div>
      </div>

      <main className="z-10 w-full max-w-5xl px-6 py-12 flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary tracking-tight">
          AyuSurance
        </h1>
      </main>
    </div>
  );
}
