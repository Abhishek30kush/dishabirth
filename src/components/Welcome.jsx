import { motion } from 'framer-motion'
import PageWrapper from './common/PageWrapper'
import Button from './common/Button'

function Welcome({ onNext }) {
  return (
    <PageWrapper>
      <div className="text-center z-10">
        {/* Decorative stars */}
        <motion.div
          className="absolute top-20 left-10 text-4xl"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute top-32 right-16 text-3xl"
          animate={{ rotate: [0, -360], scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-2xl"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          🌟
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-24 text-3xl"
          animate={{ rotate: [0, -360], scale: [1, 1.2, 1] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          💫
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-display text-5xl md:text-6xl lg:text-7xl text-birthday-deep mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hey Cutiepie! 🎉
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="font-body text-xl md:text-2xl text-gray-700 mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I made a little birthday surprise just for you!
        </motion.p>

        {/* Decorative emojis */}
        <motion.div
          className="flex justify-center gap-4 mb-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.span
            className="text-4xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎈
          </motion.span>
          <motion.span
            className="text-4xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            🎁
          </motion.span>
          <motion.span
            className="text-4xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            🎂
          </motion.span>
          <motion.span
            className="text-4xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
          >
            🥳
          </motion.span>
        </motion.div>

        {/* Start button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button onClick={onNext} className="text-xl px-10 py-5">
            Start the Birthday Surprise 🎁
          </Button>
        </motion.div>
      </div>
    </PageWrapper>
  )
}

export default Welcome

