"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { ProcessedResult } from "../types"
import { AlertTriangle, ThumbsUp, Activity, ChevronDown, ChevronUp } from "lucide-react"

interface ResultsListProps {
  results: ProcessedResult[]
}

export default function ResultsList({ results }: ResultsListProps) {
  const [visibleResults, setVisibleResults] = useState<ProcessedResult[]>([])
  const [expandedResult, setExpandedResult] = useState<string | null>(null)

  useEffect(() => {
    setVisibleResults([])
    const timer = setTimeout(() => {
      setVisibleResults(results)
    }, 500)
    return () => clearTimeout(timer)
  }, [results])

  if (results.length === 0) {
    return (
      <div className="text-center text-gray-600 text-xl mt-12">
        <p>Nenhum diagnóstico encontrado. Por favor, insira sintomas mais específicos.</p>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div className="space-y-6 mt-12" initial="hidden" animate="show" variants={container}>
      <h2 className="text-3xl font-bold text-teal-700 text-center mb-8">Possíveis Diagnósticos</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleResults.map((result, index) => (
          <motion.div
            key={result.disease.name}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            variants={item}
          >
            <div
              className="p-6 cursor-pointer"
              onClick={() => setExpandedResult(expandedResult === result.disease.name ? null : result.disease.name)}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center justify-between">
                <span className="flex items-center">
                  {index === 0 ? (
                    <AlertTriangle className="mr-2 text-yellow-500" />
                  ) : index === 1 ? (
                    <ThumbsUp className="mr-2 text-blue-500" />
                  ) : (
                    <Activity className="mr-2 text-green-500" />
                  )}
                  {result.disease.name}
                </span>
                {expandedResult === result.disease.name ? (
                  <ChevronUp className="text-gray-500" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </h3>
              <motion.div
                className="relative h-4 bg-gray-200 rounded-full mb-4 overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${result.probability}%` }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                ></motion.div>
              </motion.div>
              <p className="text-lg font-medium text-gray-700 mb-2">Probabilidade: {result.probability.toFixed(1)}%</p>
            </div>
            <AnimatePresence>
              {expandedResult === result.disease.name && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600">{result.disease.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}