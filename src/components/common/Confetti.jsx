import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const confettiColors = [
  '#FF69B4', // Hot Pink
  '#FFD700', // Gold
  '#87CEEB', // Sky Blue
  '#DDA0DD', // Plum
  '#98FB98', // Pale Green
  '#FF6B6B', // Coral
  '#4ECDC4', // Teal
  '#FFE66D', // Yellow
  '#FF1493', // Deep Pink
  '#00CED1', // Dark Turquoise
]

const generateConfetti = (count = 150) => {
  return Array.from({ length: count }).map((_, index) => ({
    id: index,
    x: Math.random() * 100,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 2,
    size: 8 + Math.random() * 8,
    rotation: Math.random() * 360,
    shape: ['circle', 'square', 'rectangle'][Math.floor(Math.random() * 3)],
  }))
}

function Confetti() {
  const [confetti, setConfetti] = useState(() => generateConfetti(150))

  useEffect(() => {
    const interval = setInterval(() => {
      setConfetti(generateConfetti(150))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {confetti.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{
              x: `${piece.x}vw`,
              y: -20,
              rotate: 0,
              opacity: 1,
            }}
            animate={{
              y: '110vh',
              rotate: piece.rotation + 720,
              opacity: [1, 1, 0],
              x: [
                `${piece.x}vw`,
                `${piece.x + 10}vw`,
                `${piece.x - 10}vw`,
                `${piece.x + 5}vw`,
                `${piece.x}vw`,
              ],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: piece.duration,
              delay: piece.delay,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              width: piece.shape === 'circle' ? piece.size : piece.size * 0.6,
              height: piece.shape === 'rectangle' ? piece.size * 2 : piece.size,
              backgroundColor: piece.color,
              borderRadius: piece.shape === 'circle' ? '50%' : '2px',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default Confetti

