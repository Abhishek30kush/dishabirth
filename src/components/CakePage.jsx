import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from './common/PageWrapper'
import Button from './common/Button'

function CakePage({ candleCount, candlesLit, onCandleLight, onAllLit }) {
  const [litCandles, setLitCandles] = useState([])
  const [showWish, setShowWish] = useState(false)
  const [canProceed, setCanProceed] = useState(false)

  const handleCandleClick = (index) => {
    if (!litCandles.includes(index)) {
      const newLitCandles = [...litCandles, index]
      setLitCandles(newLitCandles)
      onCandleLight()

      if (newLitCandles.length >= candleCount) {
        setTimeout(() => {
          setShowWish(true)
          setTimeout(() => {
            setCanProceed(true)
          }, 2000)
        }, 500)
      }
    }
  }

  const Candle = ({ index, isLit }) => (
    <motion.div
      className="relative cursor-pointer"
      onClick={() => handleCandleClick(index)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Candle body */}
      <div
        className="w-4 h-16 rounded-t-lg"
        style={{
          background: `linear-gradient(90deg, #FFD700, #FFA500, #FFD700)`,
          boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.2)',
        }}
      >
        {/* Candle stripe */}
        <div className="absolute top-2 left-1 w-2 h-2 bg-red-400 rounded-full" />
        <div className="absolute top-6 left-1 w-2 h-2 bg-red-400 rounded-full" />
        <div className="absolute top-10 left-1 w-2 h-2 bg-red-400 rounded-full" />
      </div>
      
      {/* Flame */}
      <AnimatePresence>
        {isLit && (
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -3, 0],
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              opacity: { duration: 0.2 },
              y: { duration: 0.3, repeat: Infinity }
            }}
          >
            {/* Flame shape */}
            <div 
              className="w-4 h-8"
              style={{
                background: 'radial-gradient(ellipse at bottom, #FFD700 0%, #FF6B00 50%, transparent 70%)',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                filter: 'blur(1px)',
              }}
            />
            {/* Inner flame */}
            <div 
              className="absolute top-1 left-1 w-2 h-4"
              style={{
                background: 'radial-gradient(ellipse at bottom, #FFF 0%, #FFD700 60%, transparent 100%)',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )

  return (
    <PageWrapper>
      <div className="text-center z-10 w-full max-w-4xl mx-auto">
        {/* Title */}
        <motion.h1
          className="font-display text-3xl md:text-4xl text-birthday-deep mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Make a birthday wish and light the candles 🎂
        </motion.h1>

        {/* Instruction */}
        <motion.p
          className="font-body text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {candlesLit < candleCount 
            ? `Click on the candles to light them! (${candleCount - candlesLit} remaining)`
            : 'All candles are lit! Make a wish! ✨'
          }
        </motion.p>

        {/* Cake Container */}
        <motion.div
          className="relative inline-block mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Candles row */}
          <div className="flex justify-center gap-2 md:gap-4 mb-2">
            {Array.from({ length: candleCount }).map((_, index) => (
              <Candle key={index} index={index} isLit={litCandles.includes(index)} />
            ))}
          </div>

          {/* Cake layers */}
          <div className="relative">
            {/* Top layer */}
            <div 
              className="w-48 md:w-64 h-12 mx-auto rounded-t-2xl"
              style={{
                background: 'linear-gradient(180deg, #FFB6C1 0%, #FF69B4 100%)',
                boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.1)',
              }}
            >
              {/* Frosting details */}
              <div className="absolute top-2 left-4 w-3 h-3 bg-white/50 rounded-full" />
              <div className="absolute top-2 right-4 w-3 h-3 bg-white/50 rounded-full" />
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/50 rounded-full" />
            </div>
            
            {/* Middle layer */}
            <div 
              className="w-56 md:w-72 h-14 mx-auto rounded-t-xl"
              style={{
                background: 'linear-gradient(180deg, #FFB6C1 0%, #FF69B4 100%)',
                boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.1)',
              }}
            >
              {/* Frosting details */}
              <div className="absolute top-2 left-8 w-3 h-3 bg-white/50 rounded-full" />
              <div className="absolute top-2 right-8 w-3 h-3 bg-white/50 rounded-full" />
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/50 rounded-full" />
            </div>
            
            {/* Bottom layer */}
            <div 
              className="w-64 md:w-80 h-16 mx-auto rounded-t-xl"
              style={{
                background: 'linear-gradient(180deg, #FFB6C1 0%, #FF69B4 100%)',
                boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.1)',
              }}
            >
              {/* Frosting details */}
              <div className="absolute top-2 left-12 w-3 h-3 bg-white/50 rounded-full" />
              <div className="absolute top-2 right-12 w-3 h-3 bg-white/50 rounded-full" />
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/50 rounded-full" />
            </div>

            {/* Cake plate */}
            <div 
              className="w-72 md:w-96 h-4 mx-auto rounded-b-xl"
              style={{
                background: 'linear-gradient(180deg, #E8E8E8 0%, #C0C0C0 100%)',
              }}
            />
          </div>
        </motion.div>

        {/* Wish Message */}
        <AnimatePresence>
          {showWish && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-8"
            >
              <h2 className="font-display text-3xl md:text-4xl text-birthday-deep mb-4">
                Hope all your wishes come true ✨
              </h2>
              <p className="font-body text-xl text-gray-700">
                Happy Birthday Cutiepie! 🎉
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Continue button */}
        {canProceed && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button onClick={onAllLit}>
              Continue 🎁
            </Button>
          </motion.div>
        )}
      </div>
    </PageWrapper>
  )
}

export default CakePage

