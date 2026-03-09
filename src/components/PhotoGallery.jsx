import { motion } from 'framer-motion'
import PageWrapper from './common/PageWrapper'
import Button from './common/Button'

function PhotoGallery({ images, onNext }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      }
    },
  }

  return (
    <PageWrapper>
      <div className="text-center z-10 w-full max-w-4xl mx-auto">
        {/* Title */}
        <motion.h1
          className="font-display text-3xl md:text-4xl lg:text-5xl text-birthday-deep mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Some Cute Moments 📸
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-lg text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Memories worth cherishing forever 💕
        </motion.p>

        {/* Photo Grid */}
        <motion.div
          className="grid grid-cols-2 gap-4 md:gap-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image}
                alt={`Memory ${index + 1}`}
                className="w-full h-48 md:h-64 object-cover"
              />
              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-birthday-pink/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative emojis */}
        <motion.div
          className="flex justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.span
            className="text-2xl"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💖
          </motion.span>
          <motion.span
            className="text-2xl"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            ✨
          </motion.span>
          <motion.span
            className="text-2xl"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            🌟
          </motion.span>
        </motion.div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button onClick={onNext}>
            Continue the Surprise 🎂
          </Button>
        </motion.div>
      </div>
    </PageWrapper>
  )
}

export default PhotoGallery

