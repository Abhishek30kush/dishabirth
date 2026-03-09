# Interactive Birthday Surprise Web App - Specification

## Project Overview
- **Project Name**: Birthday Surprise Web App
- **Type**: Interactive Web Application (React SPA)
- **Core Functionality**: A multi-page birthday celebration app with games, animations, and interactive elements
- **Target Users**: Birthday celebrant (female friend)

---

## UI/UX Specification

### Color Palette
- **Primary**: #FF69B4 (Hot Pink)
- **Secondary**: #FFD700 (Gold)
- **Accent 1**: #87CEEB (Sky Blue)
- **Accent 2**: #DDA0DD (Plum)
- **Accent 3**: #98FB98 (Pale Green)
- **Background 1**: #FFF0F5 (Lavender Blush - light pink)
- **Background 2**: #E6E6FA (Lavender)
- **Background 3**: #F0FFF0 (Honeydew - light green)
- **Text Primary**: #4A4A4A (Dark Gray)
- **Text Accent**: #FF1493 (Deep Pink)

### Typography
- **Headings**: 'Pacifico', cursive (cute handwritten style)
- **Body**: 'Quicksand', sans-serif (friendly rounded font)
- **Font Sizes**:
  - Hero Title: 3rem (48px)
  - Section Title: 2rem (32px)
  - Body: 1.125rem (18px)
  - Small: 0.875rem (14px)

### Spacing System
- Container padding: 2rem (32px)
- Section spacing: 3rem (48px)
- Component gap: 1.5rem (24px)
- Button padding: 1rem 2rem (16px 32px)

### Visual Effects
- Balloon float animation: translateY with easing
- Confetti: particle system with gravity
- Button hover: scale(1.05) with shadow
- Page transitions: fade + slide
- Card hover: scale(1.02) with lift shadow

---

## Page Specifications

### Page 1: Welcome Screen
- Full viewport height
- Gradient background: linear-gradient(135deg, #FFF0F5, #E6E6FA, #F0FFF0)
- Floating balloons (8-10) with random positions and animation delays
- Hero text with bounce animation
- Large CTA button with pulse animation
- Confetti particles in background

### Page 2: Birthday Countdown
- Centered countdown display
- Large digital numbers (days, hours, minutes, seconds)
- Decorative border with stars
- Countdown reaches zero triggers confetti burst
- Auto-advance to next page after countdown

### Page 3: Pop the Balloons Game
- 10 balloons distributed across screen
- Random colors from palette
- Click/tap to pop with burst animation
- Progress indicator (X/10 balloons)
- After all popped: reveal birthday message with confetti
- "See Your Surprise" button

### Page 4: Photo Memories
- 2x2 grid layout for 4 images
- Image cards with rounded corners (16px)
- Hover: scale(1.05) with shadow
- Staggered fade-in animation
- Placeholder images from picsum.photos

### Page 5: Birthday Cake Interaction
- Centered animated cake SVG
- 5 candles on top
- Click to light each candle (flame animation)
- After all lit: show wish message
- Continuous confetti and floating balloons

### Page 6: Final Birthday Message
- Large celebration text
- Background music toggle button (uses audio)
- Replay button to restart journey
- Full-screen confetti celebration

---

## Functionality Specification

### Core Features
1. **Multi-page navigation**: Smooth transitions between 6 pages
2. **Countdown timer**: Real-time countdown with target date
3. **Balloon popping game**: Interactive game with score tracking
4. **Photo gallery**: Responsive grid with hover effects
5. **Cake interaction**: Click-to-light candles mechanic
6. **Audio playback**: Background music toggle
7. **Replay functionality**: Reset all states and restart

### User Interactions
- Button clicks for navigation
- Click/tap on balloons to pop
- Click on candles to light
- Hover on images for zoom effect
- Toggle audio on/off

### State Management
- Current page index
- Balloons popped count
- Candles lit count
- Audio playing state

### Animations (Framer Motion)
- Page transitions: opacity + x-axis slide
- Balloon float: y-axis oscillation
- Pop effect: scale + opacity
- Confetti: particle physics
- Button press: scale down/up
- Stagger children for lists

---

## Technical Implementation

### Dependencies
- react: ^18.2.0
- react-dom: ^18.2.0
- framer-motion: ^10.x
- tailwindcss: ^3.x
- react-confetti: ^6.x (or custom)
- @vercel/analytics: latest

### File Structure
```
birthday-surprise/
├── public/
│   ├── index.html
│   └── images/
├── src/
│   ├── components/
│   │   ├── Welcome.jsx
│   │   ├── Countdown.jsx
│   │   ├── BalloonGame.jsx
│   │   ├── PhotoGallery.jsx
│   │   ├── CakePage.jsx
│   │   ├── FinalMessage.jsx
│   │   └── common/
│   │       ├── Balloon.jsx
│   │       ├── Confetti.jsx
│   │       ├── Button.jsx
│   │       └── PageWrapper.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## Acceptance Criteria

1. ✅ All 6 pages render correctly
2. ✅ Smooth page transitions between all pages
3. ✅ Countdown timer works and auto-advances
4. ✅ All 10 balloons can be popped with animation
5. ✅ Photo gallery displays 4 images in 2x2 grid
6. ✅ Candles can be lit with flame animation
7. ✅ Confetti appears at appropriate moments
8. ✅ Floating balloons visible on multiple pages
9. ✅ Mobile responsive design works
10. ✅ Replay button resets entire experience
11. ✅ Audio toggle functions correctly
12. ✅ All text is editable via constants
13. ✅ Vercel deployment ready (static build)

---

## Default Configuration

### Birthday Date
- Default: Current date + 1 day (for demo purposes)
- Can be configured via environment variable or config file

### Placeholder Images
- Uses picsum.photos for demo images
- Easy to replace with custom image paths

### Audio
- Background music: royalty-free birthday song
- Muted by default, toggle to enable

