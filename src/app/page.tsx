"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SymptomForm from "./components/SymptomForm"
import ResultsList from "./components/ResultsList"
import type { ProcessedResult } from "./types"
import { processSymptoms } from "./utils/symptomProcessor"
import { Stethoscope, Heart, Activity, Brain } from "lucide-react"

export default function Home() {
  const [results, setResults] = useState<ProcessedResult[]>([])
  const [showForm, setShowForm] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = (age: number, gender: "male" | "female", symptoms: string) => {
    const processedResults = processSymptoms(age, gender, symptoms);

    if (processedResults !== null) {
      setResults(processedResults);
      setShowResults(true);
    }
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {!showForm && !showResults && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl font-bold text-teal-700 mb-4">Assistente Médico Virtual</h1>
            <p className="text-xl text-gray-600 mb-8">Descreva seus sintomas e receba possíveis diagnósticos</p>
            <div className="flex justify-center space-x-8 mb-8">
              <motion.div variants={iconVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                <Stethoscope className="text-teal-500" size={48} />
              </motion.div>
              <motion.div variants={iconVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
                <Heart className="text-red-500" size={48} />
              </motion.div>
              <motion.div variants={iconVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>
                <Activity className="text-blue-500" size={48} />
              </motion.div>
              <motion.div variants={iconVariants} initial="hidden" animate="visible" transition={{ delay: 0.8 }}>
                <Brain className="text-purple-500" size={48} />
              </motion.div>
            </div>
            <motion.button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar Consulta
            </motion.button>
          </motion.div>
        )}

        {showForm && !showResults && (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl"
          >
            <SymptomForm onSubmit={handleSubmit} />
          </motion.div>
        )}

        {showResults && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl"
          >
            <ResultsList results={results} />
            <motion.button
              onClick={() => {
                setShowForm(true)
                setShowResults(false)
                setResults([])
              }}
              className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 mx-auto block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nova Consulta
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}