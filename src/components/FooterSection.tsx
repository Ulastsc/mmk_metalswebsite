"use client";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer id="contact" className="bg-[#0A66A0] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="MMK Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="text-xl font-semibold tracking-wide">
              MMK Precious Metals Inc.
            </span>
          </div>

          <p className="flex items-start gap-2 text-white/90">
            <MapPin size={18} className="mt-1" />
            <span className="text-sm">
              Kucukbakkalkoy Mah. Selvi St. No:4, Interior Door No:20,
              Atasehir, Istanbul, Türkiye <br />
              Kozyatagi Tax Office 6222501689
            </span>
          </p>

          <p className="mt-4 flex items-center gap-2 text-white/90">
            <Phone size={16} /> +90 532 271 75 92
          </p>
          <p className="flex items-center gap-2 text-white/90">
            <Mail size={16} /> info@pilgegroup.com
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-lg">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-md border px-3 py-2 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-[#0A66A0]"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-md border px-3 py-2 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-[#0A66A0]"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full rounded-md border px-3 py-2 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-[#0A66A0]"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-[#003d66] py-2 text-white font-medium hover:bg-[#002a47] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-xs text-white/70">
        © 2025 MMK Metals — All rights reserved.
      </div>
    </footer>
  );
}
