
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from './common/PageWrapper'
import Button from './common/Button'

const questions = [
  {
    id: 1,
    question: "What was the first gift I gave you? 🎁",
    options: ["Ring", "Pendant", "Watch", "Bracelet"],
    correctAnswer: 1, // Pendant
    emoji: "💝"
  },
  {
    id: 2,
    question: "Where did we meet for the first time? 🏔️",
    options: ["Shimla", "Manali", "Dharamshala", "Kasol"],
    correctAnswer: 1, // Manali
    emoji: "⛰️"
  },
  {
    id: 3,
    question: "Which food we eat together at Himachal? 🍽️",
    options: ["Momos", "Siddu", "Dosa", "Biryani"],
    correctAnswer: 1, // Siddu
    emoji: "🍜"
  }
]

function MemoryQuiz({ onNext }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  const [allCorrect, setAllCorrect] = useState(false)

  const question = questions[currentQuestion]

  const handleAnswer = (index) => {
    if (showResult) return
    
    setSelectedAnswer(index)
    setShowResult(true)
    
    if (index === question.correctAnswer) {
      setScore(score + 1)
    }
    
    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        // Quiz complete
        setQuizComplete(true)
        const finalScore = index === question.correctAnswer ? score + 1 : score
        setAllCorrect(finalScore === questions.length)
      }
    }, 1500)
  }

  const getOptionStyle = (index) => {
    if (!showResult) {
      return selectedAnswer === index
        ? 'bg-birthday-pink text-white border-birthday-pink'
        : 'bg-white text-gray-700 border-gray-300 hover:border-birthday-pink hover:bg-pink-50'
    }
    
    if (index === question.correctAnswer) {
      return 'bg-green-500 text-white border-green-500'
    }
    
    if (selectedAnswer === index && index !== question.correctAnswer) {
      return 'bg-red-500 text-white border-red-500'
    }
    
    return 'bg-gray-100 text-gray-400 border-gray-300'
  }

  return (
    <PageWrapper>
      <div className="text-center z-10 w-full max-w-2xl mx-auto">
        {/* Title */}
        <motion.h1
          className="font-display text-3xl md:text-4xl text-birthday-deep mb-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Memory Quiz! 🧠
        </motion.h1>
        
        <motion.p
          className="font-body text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Let's test our friendship memories! 💕
        </motion.p>

        {!quizComplete ? (
          <>
            {/* Progress */}
            <motion.div
              className="flex justify-center gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index < currentQuestion
                      ? 'bg-green-500'
                      : index === currentQuestion
                      ? 'bg-birthday-pink'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </motion.div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="glass-card p-8 mb-8"
              >
                <div className="text-5xl mb-4">{question.emoji}</div>
                <h2 className="font-display text-2xl md:text-3xl text-birthday-deep mb-6">
                  {question.question}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {question.options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showResult}
                      className={`p-4 rounded-xl border-2 font-semibold transition-all duration-300 ${getOptionStyle(index)}`}
                      whileHover={!showResult ? { scale: 1.02 } : {}}
                      whileTap={!showResult ? { scale: 0.98 } : {}}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-8"
          >
            <div className="text-6xl mb-4">
              {allCorrect ? '🏆' : '💖'}
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-birthday-deep mb-4">
              {allCorrect ? 'Perfect Score! 🎉' : 'Great Effort! 💕'}
            </h2>
            <p className="font-body text-xl text-gray-700 mb-2">
              You got {score} out of {questions.length} correct!
            </p>
            <p className="font-body text-lg text-gray-600 mb-8">
              {allCorrect 
                ? "You remember everything about us! 🥹💕" 
                : "Our memories are special! 💖"
              }
            </p>
            
            <Button onClick={onNext}>
              Continue 🎁
            </Button>
          </motion.div>
        )}
      </div>
    </PageWrapper>
  )
}

export default MemoryQuiz


