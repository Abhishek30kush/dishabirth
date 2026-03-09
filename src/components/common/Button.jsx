import { motion } from 'framer-motion'

function Button({ children, onClick, className = '', variant = 'primary', disabled = false }) {
  const baseStyles = 'px-8 py-4 rounded-full font-semibold text-lg cursor-pointer transition-all duration-300'
  
  const variants = {
    primary: 'bg-gradient-to-r from-birthday-pink to-birthday-deep text-white shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-white from-birthday-pink to-birthday-deep text-birthday-deep border-2 border-birthday-pink hover:scale-105',
    gold: 'bg-gradient-to-r from-birthday-gold to-yellow-400 text-gray-800 shadow-lg hover:shadow-xl hover:scale-105',
  }

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.button>
  )
}

export default Button

