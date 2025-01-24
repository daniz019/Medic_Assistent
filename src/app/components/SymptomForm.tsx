"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, UserIcon, FileText, Loader2, ArrowRight, ArrowLeft, Check, AlertCircle } from "lucide-react"
import { processSymptoms } from "../utils/symptomProcessor"

interface SymptomFormProps {
  onSubmit: (age: number, gender: "male" | "female", symptoms: string) => void
}

export default function SymptomForm({ onSubmit }: SymptomFormProps) {
  const [step, setStep] = useState(1)
  const [age, setAge] = useState("")
  const [gender, setGender] = useState<"male" | "female" | "">("")
  const [symptoms, setSymptoms] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  // Updates the progress bar based on the current step
  useEffect(() => {
    setProgress((step / 3) * 100)
  }, [step])

  // Disables the submit button if symptoms are too short or the form is loading
  useEffect(() => {
    setIsButtonDisabled(symptoms.length < 50 || isLoading);
  }, [symptoms, isLoading]);

  // Handles form submission and triggers symptom processing
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (age && gender && symptoms) {
      setIsLoading(true)
      const processedResults = processSymptoms(Number.parseInt(age), gender, symptoms)

      if (processedResults === null) {
        setIsLoading(false)
        return
      }

      onSubmit(Number.parseInt(age), gender, symptoms)
      setTimeout(() => setIsLoading(false), 1000)
    }
  }

  // Advances to the next step if the current step's data is valid
  const nextStep = () => {
    if ((step === 1 && age) || (step === 2 && gender)) {
      setStep(step + 1)
    }
  }

  // Animation variants for form transitions
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  }

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 max-w-2xl mx-auto relative overflow-hidden">
      <motion.div
        className="h-2 bg-gradient-to-r from-teal-500 to-cyan-500 absolute top-0 left-0"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-700 mb-4 sm:mb-6 text-center">
                Qual é a sua idade?
              </h2>
              <div className="relative">
                <User className="absolute top-1/2 left-4 transform -translate-y-1/2 text-teal-500" size={24} />
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-12 sm:px-16 py-4 sm:py-6 text-xl sm:text-2xl md:text-3xl border-2 border-teal-300 rounded-full focus:outline-none focus:ring-4 focus:ring-teal-500 focus:border-transparent transition-all duration-300 shadow-md"
                  required
                  placeholder="Digite sua idade"
                />
              </div>
              <motion.p
                className="text-center text-teal-600 text-base sm:text-lg md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Sua idade nos ajuda a fornecer um diagnóstico mais preciso.
              </motion.p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-700 mb-4 sm:mb-6 text-center">
                Qual é o seu sexo?
              </h2>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`flex-1 py-6 sm:py-8 px-6 sm:px-8 text-xl sm:text-2xl rounded-2xl transition-all duration-300 flex flex-col items-center justify-center shadow-md ${
                    gender === "male"
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                      : "bg-white text-teal-700 border-2 border-teal-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <UserIcon size={36} className="mb-2" />
                  Masculino
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`flex-1 py-6 sm:py-8 px-6 sm:px-8 text-xl sm:text-2xl rounded-2xl transition-all duration-300 flex flex-col items-center justify-center shadow-md ${
                    gender === "female"
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                      : "bg-white text-teal-700 border-2 border-teal-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <UserIcon size={36} className="mb-2" />
                  Feminino
                </motion.button>
              </div>
              <motion.p
                className="text-center text-teal-600 text-base sm:text-lg md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                O sexo biológico pode influenciar certos diagnósticos.
              </motion.p>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-700 mb-4 sm:mb-6 text-center">
                Descreva seus sintomas
              </h2>
              <div className="relative">
                <FileText className="absolute top-6 left-4 transform -translate-y-1/2 text-teal-500" size={24} />
                <textarea
                  id="symptoms"
                  value={symptoms}
                  onChange={(e) => {
                    if (e.target.value.length <= 500) {
                      setSymptoms(e.target.value)
                      setCharCount(e.target.value.length)
                    }
                  }}
                  className="w-full px-12 sm:px-16 py-4 sm:py-6 text-base sm:text-xl border-2 border-teal-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500 focus:border-transparent transition-all duration-300 shadow-md h-[150px] sm:h-[200px] resize-none"
                  required
                  placeholder="Digite seus sintomas aqui. Seja o mais detalhado possível."
                  maxLength={500}
                ></textarea>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-gray-400 text-sm sm:text-base">
                  {charCount}/500 caracteres
                </div>
              </div>
              <motion.div
                className="text-center text-teal-600 text-base sm:text-lg md:text-xl space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p>Quanto mais detalhes você fornecer, mais preciso será o diagnóstico.</p>
              </motion.div>
              {charCount > 0 && charCount < 50 && (
                <motion.div
                  className="flex items-center justify-center text-yellow-600 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <AlertCircle className="mr-2" size={16} />
                  <p>Forneça mais detalhes para um diagnóstico mais preciso.</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-8 space-y-4 sm:space-y-0">
          {step > 1 && (
            <motion.button
              type="button"
              onClick={() => setStep(step - 1)}
              className="bg-gray-200 text-gray-700 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-lg sm:text-xl hover:bg-gray-300 transition-all duration-300 flex items-center justify-center sm:justify-start shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="mr-2 w-5 h-5 sm:w-6 sm:h-6" /> Voltar
            </motion.button>
          )}
          {step < 3 ? (
            <motion.button
              type="button"
              onClick={nextStep}
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-lg sm:text-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center sm:justify-end sm:ml-auto shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Próximo <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              className={`bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50 transition-all duration-300 flex items-center justify-center sm:justify-end sm:ml-auto shadow-md ${
                isButtonDisabled ? "opacity-50 cursor-not-allowed" : "hover:from-teal-600 hover:to-cyan-600"
              }`}
              disabled={isButtonDisabled}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  Processando...
                </span>
              ) : (
                <>
                  Analisar Sintomas
                  <Check className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
                </>
              )}
            </motion.button>
          )}
        </div>
      </form>
    </div>
  )
}