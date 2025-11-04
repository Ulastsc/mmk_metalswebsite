"use client";

import Link from "next/link";
import Image from "next/image";

const LABELS = {
  about: "About",
  products: "Products",
  services: "Services",
  network: "Network",
  contact: "Contact",
};

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/55 border-b border-white/10">
        <div className="w-full h-14 px-6 lg:px-10 flex items-center justify-between">
          
          
          <Link href="#home" className="flex items-center gap-2" aria-label="Go to home">
            <Image
              src="/logo.png"   
              alt="MMK Metals Logo"
              width={50}        
              height={50}
              className="object-contain"
              priority
            />
            <span className="text-base sm:text-lg tracking-[0.35em] text-white">
              ALFECOR
            </span>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/90">
            <Link href="#about" className="hover:text-white">{LABELS.about}</Link>
            <Link href="#products" className="hover:text-white">{LABELS.products}</Link>
            <Link href="#services" className="hover:text-white">{LABELS.services}</Link>
            <Link href="#network" className="hover:text-white">{LABELS.network}</Link>
            <Link href="#contact" className="hover:text-white">{LABELS.contact}</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
