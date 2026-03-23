# Water Drop Grid Animation 🌊

Interactive React animation featuring a 20×20 grid of water drop elements. Click any drop to trigger a mesmerizing ripple effect that animates the entire grid!

## ✨ Features

- **Interactive Ripple Effect**: Click a water drop to animate scale, position, and opacity across all 400 drops with perfect stagger timing.
- **Smooth Animations**: Powered by [AnimeJS](https://animejs.com/) with custom easing (easeOutSine, easeInOutQuad).
- **Responsive Design**: Mobile-first layout (360px width), full-screen centering.
- **Hover & Active States**: Gradient transitions and color shifts on interaction.
- **Performance Optimized**: Staggered delays based on grid position from click origin.

## 🛠️ Tech Stack

- **React** (functional components)
- **Vite** (fast dev server & builds)
- **AnimeJS** (powerful animation library)
- **Tailwind CSS** (custom theme with water drop gradients)

## 🚀 Run Locally

1. **Clone/Download this project** to your local directory

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Start development server**:
   ```
   npm run dev
   ```

4. **Open in browser**: e.g. localhost:5173

**Click any water drop to see the magic!** 🎉

## 🎮 How It Works

- Grid: 20 columns × 20 rows = 400 water drops
- **Click Handler**: Triggers AnimeJS timeline on all `.dot` elements
- **Animation Properties**:
  | Property | Values | Duration |
  |----------|--------|----------|
  | `scale` | 1 → 1.35 → 1 | 250ms + 500ms |
  | `translateY` | 0 → -16px → 0 | 250ms + 500ms |
  | `opacity` | 0.5 → 1 → 0.5 | 250ms + 500ms |
- **Stagger**: 100ms delay per cell, origin from clicked index, grid-aware `[20,20]`

## 📁 Project Structure

```
Water Drop Grid/
├── src/
│   ├── App.jsx              # Root component
│   ├── components/
│   │   └── WaterDropGrid.jsx # Grid + animation logic
│   └── App.css              # Tailwind setup + custom theme
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Styling

Custom Tailwind theme:
```css
--color-background: #373F47      /* Dark slate */
--color-dots: #FB6376           /* Vibrant pink */
--color-dots-hover: #FCB1A6     /* Light peach */
--color-dots-active: #FFDCCC    /* Cream highlight */
--color-text: #FFF9EC           /* Off-white */
```


**Built with ❤️ using React & AnimeJS**  
License: MIT
