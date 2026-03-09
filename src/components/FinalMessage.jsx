import { motion } from 'framer-motion'
import PageWrapper from './common/PageWrapper'
import Button from './common/Button'

function FinalMessage({ name, onReplay }) {
  return (
    <PageWrapper>
      <div className="text-center z-10 w-full max-w-4xl mx-auto">
        {/* Celebration emojis */}
        <motion.div
          className="flex justify-center gap-2 md:gap-4 mb-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {['🎉', '🎊', '🥳', '🎊', '🎉'].map((emoji, index) => (
            <motion.span
              key={index}
              className="text-4xl md:text-5xl"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -10, 10, 0],
              }}
              transition={{ 
                duration: 2,
                delay: index * 0.1,
                repeat: Infinity,
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        {/* Main message */}
        <motion.h1
          className="font-display text-4xl md:text-5xl lg:text-6xl text-birthday-deep mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Happy Birthday {name}! 🎉
        </motion.h1>

        {/* Submessage */}
        <motion.p
          className="font-body text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          May your day be filled with laughter, cake, and happiness. 
          You are the most amazing friend anyone could ask for! 💕
        </motion.p>

        {/* Decorative hearts */}
        <motion.div
          className="flex justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {['💖', '💕', '💗', '💕', '💖'].map((heart, index) => (
            <motion.span
              key={index}
              className="text-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 1.5,
                delay: index * 0.2,
                repeat: Infinity,
              }}
            >
              {heart}
            </motion.span>
          ))}
        </motion.div>

        {/* Wish text */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="font-display text-2xl md:text-3xl text-birthday-pink">
            ✨ Wish you all the best! ✨
          </p>
        </motion.div>

        {/* Replay Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3 }}
        >
          <Button onClick={onReplay} variant="gold">
            Replay the Surprise 🎁
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="font-body text-sm text-gray-500 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Made with 💕 just for you
        </motion.p>
      </div>
    </PageWrapper>
  )
}

export default FinalMessage

