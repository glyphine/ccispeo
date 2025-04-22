"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Import the Link component

export default function FillInTheBlanks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8"
    >
      <motion.img
        src="/kapoy.gif" 
        alt="Program Selection"
        className="w-40 h-40 object-cover rounded-full mb-8" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />

      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Select a Program
      </motion.h1>
      <motion.p
        className="text-xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        tun tun tun sahur or ballerina capuchina
      </motion.p>
      <motion.p
        className="text-xl mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        (Kapoy mangita og memorizing tool)
      </motion.p>

      {/* Program Selection */}
      <motion.div className="mb-6 flex flex-col gap-6 justify-center">
        <motion.button
          className="px-8 py-4 border-4 border-purple-900 hover:bg-purple-900 text-white text-xl font-semibold rounded-xl transition-all duration-300 ease-in-out"
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/is">Information Systems</Link>
        </motion.button>
        <motion.button
          className="px-8 py-4 border-4 border-purple-900 hover:bg-purple-900 text-white text-xl font-semibold rounded-xl transition-all duration-300 ease-in-out"
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/cs">Computer Science</Link>
        </motion.button>
        <motion.button
          className="px-8 py-4 border-4 border-purple-900 hover:bg-purple-900 text-white text-xl font-semibold rounded-xl transition-all duration-300 ease-in-out"
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/emc">Entertainment & Multimedia Computing</Link>
        </motion.button>
      </motion.div>

      <div className="absolute bottom-0 w-full text-center py-2 text-sm text-gray-400">
        Developed by Gwyn (glyphine)
      </div>
    </motion.div>
  );
}
