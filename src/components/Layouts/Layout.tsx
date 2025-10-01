import React from 'react';
import '../../App.css';
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar"
import { AppSidebar } from "../../components/ui/app-sidebar"



import Dither from '../../backgrounds/Dither';

interface LayoutProps {
  children: React.ReactNode;
  selectedScene?: string;
  enableMouseInteraction?: boolean;
  waveColor?: [number, number, number];
  disableAnimation?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  selectedScene = 'default', 
  enableMouseInteraction = false,
  waveColor, 
  disableAnimation = false
}) => {
  // Scene-based color mapping
  const getSceneColors = (scene: string): [number, number, number] => {
    const colorMap: Record<string, [number, number, number]> = {
      default: [0.5, 0.5, 0.5],                   
      about: [0.5, 0.6, 0.6],                      
      'game-development': [0.5, 0.8, 0.5],         
      'software-engineering': [0.5, 0.5, 0.6],     
      photography: [0.6, 0.5, 0.5],              
    };
    return colorMap[scene] || colorMap.default;
  };

  const sceneWaveColor = waveColor || getSceneColors(selectedScene);
  return (
          <div className="App">
        <div className="background-dither">
          <Dither
            waveColor={sceneWaveColor}
            disableAnimation={disableAnimation}
            enableMouseInteraction={enableMouseInteraction}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={2}
            waveSpeed={0.01}
          />
        </div>
        <main className="flex-1 relative w-full h-full">
          <div className="Overlay">
            {children}
          </div>
        </main>
      </div>
  );
};

export default Layout;
