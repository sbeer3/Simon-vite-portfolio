import React, { useState, Suspense, lazy } from 'react';
import './App.css';

//Components
import PortfolioSelector from './components/PortfolioSelector';
import Layout from './components/Layouts/Layout';
import { Toaster } from "./components/ui/sonner"

//Animations
import FadeContent from './animations/FadeContent';

// Lazy load scenes for code splitting
const DefaultScene = lazy(() => import('./scenes/DefaultScene'));
const AboutScene = lazy(() => import('./scenes/AboutScene'));
const SoftwareEngineerScene = lazy(() => import('./scenes/SoftwareEngineerScene'));
const GameDevScene = lazy(() => import('./scenes/GameDevScene'));

function App(): React.JSX.Element {
    const [selectedScene, setSelectedScene] = useState('default');
      const renderScene = () => {
    switch(selectedScene) {
      // case 'portfolio': return <PortfolioScene />;
      case 'about': return (
        <Suspense fallback={<div></div>}>
          <AboutScene />
        </Suspense>
      );
      case 'game-development': return (
        <Suspense fallback={<div></div>}>
          <GameDevScene />
        </Suspense>
      );
      case 'software-engineering': return (
        <Suspense fallback={<div></div>}>
          <SoftwareEngineerScene />
        </Suspense>
      );
      // case 'photography': return <PhotographyScene />;
      default: return (
        <Suspense fallback={<div></div>}>
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <DefaultScene />
          </FadeContent>
        </Suspense>
      );
    }
  };

  return (
    <Layout selectedScene={selectedScene}>
      {/* Fixed header area for selector */}
      <div className="selector-container">
        <Toaster position="top-center" />
        <PortfolioSelector onValueChange={setSelectedScene} />
      </div>
      
      <div className="scene-content">
        {renderScene()}
      </div>
    </Layout>
  );
}

export default App;
