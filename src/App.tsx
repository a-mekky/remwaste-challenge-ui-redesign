import './App.css'
import { ProgressBar } from './components/ProgressBar'
import { Navigation } from './components/Navigation';
import { StepRenderer } from './components/StepRenderer';
import { NavigationProvider } from './context/NavigationContext';
import Header from './components/Header';

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className='block'>
          <Header />
        </div>
        
        <div className='lg:mt-0'>
          <NavigationProvider initialStep={3}> {/* Set initial step to 3 for skip selection for demo purposes */}
            <ProgressBar />
            <StepRenderer />
            <Navigation />
          </NavigationProvider>
        </div>
      </div>
    </>
  )
}

export default App
