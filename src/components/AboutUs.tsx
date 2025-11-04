"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}     
          whileInView={{ opacity: 1, x: 0 }}     
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-3xl font-bold text-slate-900">About Us</h2>
          <p className="mt-2 text-slate-600">
            Part of Pilge Group — international trade and multi-sector business development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>ALFECOR Inc.</strong> is a Pilge Group company
              specializing in international trade. We build reliable partnerships
              worldwide and deliver quality products with optimal logistics solutions.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <p className="text-slate-700 text-sm leading-relaxed">
              Pilge Group operates through companies in Türkiye, USA, Uganda,
              Bulgaria, Kenya, and Uzbekistan across textiles, agriculture, logistics,
              and management consulting. The Group also owns an art gallery in Istanbul.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
