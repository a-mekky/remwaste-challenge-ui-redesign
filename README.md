# Modern Skip Hire Application

A fully responsive, TypeScript-based React application for skip hire booking with a modern, clean interface and comprehensive functionality.

## 🌟 Features

- **6-Stage Progress Tracking**: Visual progress bar with step-by-step navigation
- **Dynamic Skip Selection**: Interactive cards with detailed information and pricing
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **TypeScript Integration**: Fully typed components with strict type checking
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Modern UI/UX**: Clean design with smooth animations and transitions
- **Real Data Processing**: Processes JSON data from external sources
- **Context-based Navigation**: Multi-step navigation with persistent state
- **Detail Modals**: Rich skip details with pricing breakdown and feature highlights

## 🛠️ Technologies Used

- **React 19** - Modern functional components with hooks
- **TypeScript** - Strict typing for maintainable code
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
src/
├── App.tsx                  # Root application component
├── App.css                  # App-level styles
├── index.css                # Global and Tailwind styles
├── main.tsx                 # Entry point
├── Constants/
│   └── Constants.ts         # Step definitions and raw skip data
├── components/              # Reusable UI components
│   ├── DetailModal.tsx      # Skip detail modal
│   ├── Header.tsx           # App header
│   ├── Navigation.tsx       # Bottom navigation bar
│   ├── ProgressBar.tsx      # Step progress indicator
│   ├── SkipCard.tsx         # Individual skip selection card
│   └── StepRenderer.tsx     # Renders the current step
├── context/
│   └── NavigationContext.tsx # Navigation context provider and hook
├── hooks/
│   └── useNavigation.ts     # Custom hook for navigation logic
├── pages/
│   └── SkipSelection.tsx    # Main skip selection page
├── types/
│   └── index.ts             # Centralized type exports
├── utils/
│   └── skipProcessing.ts    # Data processing logic
└── assets/
    ├── react.svg
    └── images/
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Color Palette

- **Primary**: Indigo (600, 700) - Main actions and current states
- **Success**: Green (500, 600) - Completed states and confirmations
- **Accent**: Gradients based on skip size categories (blue, green, purple, orange)
- **Neutral**: Gray scale for text and backgrounds

### Component Categories

- **Compact Skips (≤4 yards)**: Blue gradient
- **Standard Skips (≤8 yards)**: Green gradient
- **Large Skips (≤14 yards)**: Purple gradient
- **Industrial Skips (>14 yards)**: Orange gradient

### Typography

- **Headings**: Bold, clear hierarchy
- **Body Text**: Readable, well-spaced
- **Labels**: Consistent sizing and weight

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column grid)
- **Tablet**: 768px - 1024px (2 column grid)
- **Desktop**: 1024px - 1280px (3 column grid)
- **Large Desktop**: > 1280px (4 column grid)

## ♿ Accessibility Features

- Semantic HTML elements (`<section>`, `<button>`, `<nav>`)
- ARIA attributes for screen readers
- Keyboard navigation support (Tab, Enter, Space)
- High contrast color ratios
- Focus indicators for interactive elements
- Alternative text for visual elements

## 🔧 Configuration

### Data Source

The application processes skip data from a JSON source. Update the `RAW_SKIP_DATA` constant in [`Constants/Constants.ts`](src/Constants/Constants.ts) or configure an external API endpoint.

## 🔄 State Management

- Uses React context (`NavigationContext`) for multi-step navigation and state
- `useState` for component-level state
- `useMemo` for computed values and performance optimization
- Custom hooks for logic separation

## 🎯 Performance Optimizations

- **Memoization**: Preventing unnecessary re-renders

## 🧑‍💻 Development Enhancments

- Include tests for new features
- Lazy loading of non-critical components
- **Image Optimization**: Responsive image loading
- Enhance the separation to get these functionality as a standalone module