import { motion } from 'framer-motion'

function PageWrapper({ children, className = '' }) {
  return (
    <motion.div
      className={`page-container ${className}`}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageWrapper

