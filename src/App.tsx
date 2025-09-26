import React, { useState } from 'react';
import './App.css';

//Components
import PortfolioSelector from './components/PortfolioSelector';
import Layout from './components/Layouts/Layout';

//Scenes
import DefaultScene from './scenes/DefaultScene';
import AboutScene from './scenes/AboutScene';
import SoftwareEngineerScene from './scenes/SoftwareEngineerScene';
import PhotographyScene from './scenes/PhotographyScene';
import GameDevScene from './scenes/GameDevScene';

//Animations
import FadeContent from './animations/FadeContent';

function App(): React.JSX.Element {
    const [selectedScene, setSelectedScene] = useState('default');
      const renderScene = () => {
    switch(selectedScene) {
      // case 'portfolio': return <PortfolioScene />;
      case 'about': return <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}><AboutScene /></FadeContent>;
      case 'game-development': return <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}><GameDevScene /></FadeContent>;
      case 'software-engineering': return <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}><SoftwareEngineerScene /></FadeContent>;
      case 'photography': return <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}><PhotographyScene /></FadeContent>;
      default: return <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}><DefaultScene /></FadeContent>;
    }
  };

  return (
    <Layout selectedScene={selectedScene}>
      {/* Fixed header area for selector */}
      <div className="selector-container">
        <PortfolioSelector onValueChange={setSelectedScene} />
      </div>
      
      <div className="scene-content">
        {renderScene()}
      </div>
    </Layout>
  );
}

export default App;
