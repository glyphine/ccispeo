"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const levels = [
  `Articulate expertise in understanding, analyzing, and applying current and emerging technologies in the design and development of IT-based solutions for entertainment and multimedia computing profession.`,
  `Perform tasks effectively as individuals and team members in the workplace growing into highly technical or project management and leadership roles.`,
  `Pursue life-long learning enabling them to adapt and grow as organizational responsibilities change.`,
];

export default function FillInTheBlanks() {
  const [level, setLevel] = useState(0);
  const [blanks, setBlanks] = useState<number[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [started, setStarted] = useState(false);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">(
    "easy"
  ); 
  const router = useRouter();

  const words = levels[level].split(" ");

  useEffect(() => {
    if (started) generateBlanks();
  }, [level, started, difficulty]);

  const generateBlanks = () => {
    const totalBlanks =
      difficulty === "easy" ? 3 : difficulty === "medium" ? 7 : 12;
    const randomBlanks = new Set<number>();

    while (randomBlanks.size < totalBlanks) {
      const randIndex = Math.floor(Math.random() * words.length);
      if (words[randIndex].match(/^[a-zA-Z]+$/)) {
        randomBlanks.add(randIndex);
      }
    }
    setBlanks([...randomBlanks]);
    setAnswers({});
    setSubmitted(false);
    setCompleted(false);
  };

  const handleChange = (index: number, value: string) => {
    setAnswers({ ...answers, [index]: value });
  };

  const checkCorrect = (word: string, input: string) =>
    word.toLowerCase() === input.toLowerCase();

  const handleSubmit = () => {
    setSubmitted(true);
    const allCorrect = blanks.every((index) =>
      checkCorrect(words[index], answers[index] || "")
    );
    if (allCorrect) {
      setCompleted(true);
    }
  };

  const handleNextLevel = () => {
    setSubmitted(false);
    if (level === levels.length - 1) {
     
      router.push("/"); 
    } else {
      setLevel(level + 1);
    }
  };

  if (!started) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8"
      >
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          henloo EMC peps
        </motion.h1>
        <motion.p
          className="mb-6 text-lg text-center max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          do u need help memorizing? i got you bai :3
        </motion.p>

        {/* Difficulty Selection */}
        <motion.div className="mb-6 flex gap-6 justify-center">
          <motion.button
            onClick={() => setDifficulty("easy")}
            className={`px-8 py-4 border-4 border-blue-500 hover:bg-blue-600 text-white text-xl font-semibold rounded-xl transition-all duration-300 ease-in-out ${
              difficulty === "easy" ? "bg-blue-700 border-0" : ""
            }`}
            whileTap={{ scale: 0.95 }}
          >
            Easy
          </motion.button>
          <motion.button
            onClick={() => setDifficulty("medium")}
            className={`px-8 py-4 border-4 border-yellow-600 hover:bg-yellow-600 text-white text-xl font-semibold rounded-xl transition-all duration-300 ease-in-out ${
              difficulty === "medium" ? "bg-yellow-700 border-0" : ""
            }`}
            whileTap={{ scale: 0.95 }}
          >
            Medium
          </motion.button>
          <motion.button
            onClick={() => setDifficulty("hard")}
            className={`px-8 py-4 border-4 border-red-600 hover:bg-red-600 text-white text-xl font-semibold rounded-xl transition-all duration-300 ease-in-out ${
              difficulty === "hard" ? "bg-red-700 border-0" : ""
            }`}
            whileTap={{ scale: 0.95 }}
          >
            Hard
          </motion.button>
        </motion.div>

        <motion.button
          onClick={() => setStarted(true)}
          className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white text-xl font-semibold"
          whileTap={{ scale: 0.95 }}
        >
          Start Game
        </motion.button>
        <div className="absolute bottom-0 w-full text-center py-2 text-sm text-gray-400">
          Developed by Gwyn (glyphine)
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8 relative"
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">
          Level {level + 1} of {levels.length}
        </h1>
        <p className="text-gray-300 mt-2">Fill in the missing words</p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center text-lg leading-relaxed max-w-4xl text-center">
        {words.map((word, i) =>
          blanks.includes(i) ? (
            <input
              key={i}
              type="text"
              value={answers[i] || ""}
              onChange={(e) => handleChange(i, e.target.value)}
              placeholder="______"
              className={`border-b-2 px-2 py-1 w-28 text-center rounded-md outline-none transition-colors duration-200
                ${
                  submitted
                    ? answers[i] !== undefined
                      ? checkCorrect(word, answers[i])
                        ? "border-green-500 bg-green-400 text-black"
                        : "border-red-500 bg-red-400 text-black"
                      : "border border-gray-400 bg-black text-white"
                    : "border border-gray-400 bg-black text-white"
                }`}
            />
          ) : (
            <span key={i} className="mx-1">
              {word}
            </span>
          )
        )}
      </div>

      {!completed && (
        <motion.button
          onClick={handleSubmit}
          className="mt-12 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      )}

      {completed && (
        <motion.button
          onClick={handleNextLevel}
          className="mt-12 px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold"
          whileTap={{ scale: 0.95 }}
        >
          Finish Game
        </motion.button>
      )}

      <div className="absolute bottom-0 w-full text-center py-2 text-sm text-gray-400 pointer-events-none">
        Developed by Gwyn (glyphine)
      </div>
    </motion.div>
  );
}
