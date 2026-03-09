import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from './common/PageWrapper'
import Button from './common/Button'

const balloonColors = [
  '#FF69B4', '#FFD700', '#87CEEB', '#DDA0DD', '#98FB98',
  '#FF6B6B', '#4ECDC4', '#FFE66D', '#FF1493', '#00CED1',
]

const generateBalloons = (count) => {
  return Array.from({ length: count }).map((_, index) => ({
    id: index,
    x: Math.random() * 80 + 10,
    y: Math.random() * 60 + 20,
    color: balloonColors[index % balloonColors.length],
    size: 60 + Math.random() * 30,
    delay: Math.random() * 0.5,
  }))
}

function BalloonGame({ balloonCount, balloonsPopped, onBalloonPop, onAllPopped }) {
  const [balloons, setBalloons] = useState(() => generateBalloons(balloonCount))
  const [poppedIds, setPoppedIds] = useState([])
  const [showMessage, setShowMessage] = useState(false)
  const [canProceed, setCanProceed] = useState(false)

  const handlePop = (id) => {
    if (!poppedIds.includes(id)) {
      setPoppedIds([...poppedIds, id])
      onBalloonPop()
      
      if (poppedIds.length + 1 >= balloonCount) {
        setTimeout(() => {
          setShowMessage(true)
          setTimeout(() => {
            setCanProceed(true)
          }, 1500)
        }, 500)
      }
    }
  }

  const remaining = balloonCount - poppedIds.length

  return (
    <PageWrapper>
      <div className="text-center z-10 w-full max-w-4xl mx-auto">
        {/* Title */}
        <motion.h1
          className="font-display text-3xl md:text-4xl text-birthday-deep mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Pop the balloons to reveal your birthday message 🎈
        </motion.h1>

        {/* Progress */}
        <motion.div
          className="font-body text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {remaining > 0 ? (
            <>Pop {remaining} more balloon{remaining !== 1 ? 's' : ''}! 🎯</>
          ) : (
            <span className="text-birthday-deep">All balloons popped! 🎉</span>
          )}
        </motion.div>

        {/* Balloons */}
        <div className="relative h-[50vh] md:h-[60vh] w-full">
          {balloons.map((balloon, index) => {
            const isPopped = poppedIds.includes(balloon.id)
            
            return (
              <motion.div
                key={balloon.id}
                className="absolute cursor-pointer"
                style={{
                  left: `${balloon.x}%`,
                  top: `${balloon.y}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: isPopped ? 0 : 1,
                  scale: isPopped ? 1.5 : 1,
                  y: isPopped ? -20 : [0, -10, 0],
                }}
                transition={{ 
                  duration: 0.3,
                  delay: balloon.delay,
                }}
                onClick={() => handlePop(balloon.id)}
                whileHover={!isPopped ? { scale: 1.1 } : {}}
              >
                <AnimatePresence>
                  {!isPopped && (
                    <motion.div
                      style={{
                        width: balloon.size,
                        height: balloon.size * 1.2,
                        backgroundColor: balloon.color,
                        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                        boxShadow: `inset -${balloon.size * 0.1}px -${balloon.size * 0.1}px ${balloon.color}99, inset ${balloon.size * 0.1}px ${balloon.size * 0.1}px rgba(255,255,255,0.3)`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random(),
                        repeat: Infinity,
                        delay: balloon.delay,
                      }}
                    >
                      {/* String */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: -25,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 2,
                          height: 25,
                          backgroundColor: '#888',
                        }}
                      />
                      {/* Shine */}
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
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Pop effect */}
                {isPopped && (
                  <motion.div
                    className="absolute text-4xl"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.5, 0], opacity: [1, 1, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    💥
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Birthday Message */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center">
                <motion.h2
                  className="font-display text-4xl md:text-5xl lg:text-6xl text-birthday-deep mb-6"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', duration: 0.8 }}
                >
                  🎉 HAPPY BIRTHDAY CUTIEPIE 🎉
                </motion.h2>
                <motion.p
                  className="font-body text-xl text-gray-700 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  You made my day special! ✨
                </motion.p>
                
                {canProceed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button onClick={onAllPopped}>
                      See Your Surprise 🎁
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  )
}

export default BalloonGame

