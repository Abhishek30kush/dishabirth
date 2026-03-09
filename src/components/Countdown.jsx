import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from './common/PageWrapper'
import Confetti from './common/Confetti'

function Countdown({ birthdayDate, onComplete }) {
  // 10 second countdown
  const [timeLeft, setTimeLeft] = useState(10)
  const [isComplete, setIsComplete] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsComplete(true)
      setShowConfetti(true)
      setTimeout(() => {
        onComplete()
      }, 3000)
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft, onComplete])

  const seconds = timeLeft

  const TimeUnit = ({ value, label }) => (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-card p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
        <motion.span
          className="font-display text-4xl md:text-5xl lg:text-6xl text-birthday-deep"
          key={value}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="font-body text-sm md:text-base text-gray-600 mt-2 uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  )

  if (isComplete) {
    return (
      <PageWrapper>
        {showConfetti && <Confetti />}
        <div className="text-center z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.8 }}
          >
            <span className="text-8xl">🎉</span>
          </motion.div>
          <motion.h1
            className="font-display text-4xl md:text-5xl text-birthday-deep mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            It's Your Special Day! ✨
          </motion.h1>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <div className="text-center z-10">
        {/* Title */}
        <motion.h1
          className="font-display text-3xl md:text-4xl lg:text-5xl text-birthday-deep mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Counting down to your special moment ⏳
        </motion.h1>

        {/* Decorative elements */}
        <motion.div
          className="flex justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-2xl">🎂</span>
          <span className="text-2xl">🎈</span>
          <span className="text-2xl">🎁</span>
        </motion.div>

        {/* Countdown Timer - Show just seconds */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card p-8 md:p-12">
            <motion.span
              className="font-display text-6xl md:text-8xl lg:text-9xl text-birthday-deep"
              key={seconds}
              initial={{ scale: 1.2, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {seconds}
            </motion.span>
          </div>
        </motion.div>

        {/* Birthday message */}
        <motion.p
          className="font-body text-lg md:text-xl text-gray-600 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Get ready for an amazing birthday surprise! 🎉
        </motion.p>
      </div>
    </PageWrapper>
  )
}

export default Countdown

