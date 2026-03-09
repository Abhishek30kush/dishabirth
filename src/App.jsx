import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import Welcome from './components/Welcome'
import Countdown from './components/Countdown'
import BalloonGame from './components/BalloonGame'
import PhotoGallery from './components/PhotoGallery'
import MemoryQuiz from './components/MemoryQuiz'
import CakePage from './components/CakePage'
import FinalMessage from './components/FinalMessage'
import FloatingBalloons from './components/common/FloatingBalloons'
import Confetti from './components/common/Confetti'

// Configuration - Easy to edit!
export const CONFIG = {
  // Set the birthday date here (format: YYYY-MM-DD)
  // Set to tomorrow so countdown shows time remaining
  birthdayDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  
  // Birthday person's name
  name: 'Kitkat',
  
  // Images for the gallery (use your own images from public/images folder)
  images: [
    '/images/1.jpeg',
    '/images/2.jpeg',
    '/images/3.jpeg',
    '/images/4.jpeg',
  ],
  
  // Number of balloons in the game
  balloonCount: 10,
  
  // Number of candles on the cake
  candleCount: 5,
}

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [balloonsPopped, setBalloonsPopped] = useState(0)
  const [candlesLit, setCandlesLit] = useState(0)

  const totalPages = 7

  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1)
    }
  }, [currentPage, totalPages])

  const goToPage = useCallback((pageIndex) => {
    setCurrentPage(pageIndex)
    setBalloonsPopped(0)
    setCandlesLit(0)
  }, [])

  const handleBalloonPop = useCallback(() => {
    setBalloonsPopped(prev => prev + 1)
    if (balloonsPopped + 1 >= CONFIG.balloonCount) {
      setShowConfetti(true)
      setTimeout(() => {
        setShowConfetti(false)
      }, 5000)
    }
  }, [balloonsPopped, CONFIG.balloonCount])

  const handleCandleLight = useCallback(() => {
    setCandlesLit(prev => prev + 1)
    if (candlesLit + 1 >= CONFIG.candleCount) {
      setShowConfetti(true)
      setTimeout(() => {
        setShowConfetti(false)
      }, 5000)
    }
  }, [candlesLit, CONFIG.candleCount])

  const handleReplay = useCallback(() => {
    goToPage(0)
  }, [goToPage])

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <Welcome key="welcome" onNext={goToNextPage} />
      case 1:
        return (
          <Countdown
            key="countdown"
            birthdayDate={CONFIG.birthdayDate}
            onComplete={goToNextPage}
          />
        )
      case 2:
        return (
          <BalloonGame
            key="balloon"
            balloonCount={CONFIG.balloonCount}
            balloonsPopped={balloonsPopped}
            onBalloonPop={handleBalloonPop}
            onAllPopped={goToNextPage}
          />
        )
      case 3:
        return <PhotoGallery key="gallery" images={CONFIG.images} onNext={goToNextPage} />
      case 4:
        return <MemoryQuiz key="quiz" onNext={goToNextPage} />
      case 5:
        return (
          <CakePage
            key="cake"
            candleCount={CONFIG.candleCount}
            candlesLit={candlesLit}
            onCandleLight={handleCandleLight}
            onAllLit={goToNextPage}
          />
        )
      case 6:
        return (
          <FinalMessage
            key="final"
            name={CONFIG.name}
            onReplay={handleReplay}
          />
        )
      default:
        return <Welcome key="welcome" onNext={goToNextPage} />
    }
  }

  return (
    <div className="relative min-h-screen bg-pattern">
      {/* Floating Balloons Background */}
      <FloatingBalloons page={currentPage} />
      
      {/* Confetti Overlay */}
      <AnimatePresence>
        {showConfetti && <Confetti />}
      </AnimatePresence>
      
      {/* Page Content */}
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
      
      {/* Page Indicator */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentPage
                ? 'bg-birthday-pink w-6'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default App

