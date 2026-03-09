import { motion } from 'framer-motion'

const balloonColors = [
  '#FF69B4', // Hot Pink
  '#FFD700', // Gold
  '#87CEEB', // Sky Blue
  '#DDA0DD', // Plum
  '#98FB98', // Pale Green
  '#FF6B6B', // Coral
  '#4ECDC4', // Teal
  '#FFE66D', // Yellow
]

const generateBalloons = (count = 15) => {
  return Array.from({ length: count }).map((_, index) => ({
    id: index,
    left: `${Math.random() * 90 + 5}%`,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    color: balloonColors[index % balloonColors.length],
    size: 40 + Math.random() * 30,
    rotation: Math.random() * 30 - 15,
  }))
}

const balloons = generateBalloons(15)

function FloatingBalloons({ page }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((balloon) => (
        <motion.div
          key={`${page}-${balloon.id}`}
          className="absolute"
          style={{
            left: balloon.left,
            bottom: -100,
          }}
          initial={{ y: 0 }}
          animate={{
            y: -1200,
            x: [0, 20, -20, 10, 0],
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div
            style={{
              width: balloon.size,
              height: balloon.size * 1.2,
              backgroundColor: balloon.color,
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              transform: `rotate(${balloon.rotation}deg)`,
              boxShadow: `inset -${balloon.size * 0.1}px -${balloon.size * 0.1}px ${balloon.color}99, inset ${balloon.size * 0.1}px ${balloon.size * 0.1}px rgba(255,255,255,0.3)`,
            }}
          >
            {/* Balloon string */}
            <div
              style={{
                position: 'absolute',
                bottom: -30,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 2,
                height: 30,
                backgroundColor: '#888',
              }}
            />
            {/* Balloon shine */}
            <div
              style={{
                position: 'absolute',
                top: '15%',
                left: '20%',
                width: '20%',
                height: '30%',
                backgroundColor: 'rgba(255,255,255,0.4)',
                borderRadius: '50%',
                transform: 'rotate(-30deg)',
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingBalloons

