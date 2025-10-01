import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import FadeContent from "../animations/FadeContent";

import { FiExternalLink } from "react-icons/fi";
import { 
  SiReact, 
  SiJavascript, 
  SiNodedotjs, 
  SiExpress, 
  SiDiscord, 
  SiTypescript, 
  SiFirebase,
  SiExpo
} from "react-icons/si";

import InfiniteScroll from '../components/InfiniteScroll';
  
const items = [
  { content: 
    <Card className="software-portfolio-card">
      <CardHeader className="software-card-header">
        <CardTitle className="software-card-title">Oscar Predictions Game <a href="https://github.com/sbeer3/oscar-predictions/tree/main" target="_blank" rel="noopener noreferrer"><FiExternalLink className="inline ml-1" /></a></CardTitle>
        <div className="tech-stack-row">
          <p className="software-card-subtitle">Frontend Stack: <SiReact className="inline mx-1" /> React, <SiJavascript className="inline mx-1" /> JavaScript</p>
        </div>
        <div className="tech-stack-row">
          <p className="software-card-subtitle">Backend Stack: <SiNodedotjs className="inline mx-1" /> Node.js, <SiExpress className="inline mx-1" /> Express</p>
        </div>
      </CardHeader>
      <CardContent className="flex gap-4 items-start software-card-content">
        <p>This is a little project I cooked up in React / JavaScript.
            I was hosting an academy award viewing party and thought what better way to host besides snacks and drinks,
            then with a fun Oscar predictions game. I started by building a default app layout with a form and a simple list
            of all the oscar nominations. I then dug into the API to fetch the posters and movie details to display in the app.
            I set up some routes to store the user's predictions in a json file on my local machine and kept track of all the answers that way.
            It was a fun project that I think I will expand upon for the next oscars.</p>
      </CardContent>
    </Card>
  },
  { content: 
    <Card className="software-portfolio-card">
      <CardHeader className="software-card-header">
        <CardTitle className="software-card-title">Discord Bot <a href="https://github.com/sbeer3/DiscordBotNew" target="_blank" rel="noopener noreferrer"><FiExternalLink className="inline ml-1" /></a></CardTitle>
        <div className="tech-stack-row">
          <p className="software-card-subtitle">Backend Stack: <SiNodedotjs className="inline mx-1" /> Node.js, <SiDiscord className="inline mx-1" /> Discord.js</p>
        </div>
      </CardHeader>
      <CardContent className="flex gap-4 items-start software-card-content">
        <p>Throughout my years of programming I have developed many iterations of the discord bot. 
            This is the most recent one that I built out. The main functions include interaction with openai, youtube video searching,
            and youtube audio playing (for music playback purposes). It is always a chill time and I definitely would say this was in a 
            "finished" state in terms of being a discord music bot for my friends server.</p>
      </CardContent>
    </Card>
  },
  { content: 
    <Card className="software-portfolio-card">
      <CardHeader className="software-card-header">
        <CardTitle className="software-card-title">Geomory (mobile app)<a href="https://github.com/sbeer3/Geomory" target="_blank" rel="noopener noreferrer"><FiExternalLink className="inline ml-1" /></a></CardTitle>
        <div className="tech-stack-row">
          <p className="software-card-subtitle">Frontend Stack: <SiReact className="inline mx-1" /> ReactNative, <SiTypescript className="inline mx-1" /> TypeScript, <SiExpo className="inline mx-1" /> ExpoGO</p>
        </div>
        <div className="tech-stack-row">
          <p className="software-card-subtitle">Backend: <SiFirebase className="inline mx-1" /> Firebase</p>
        </div>
      </CardHeader>
      <CardContent className="flex gap-4 items-start software-card-content">
        <p>I wanted to get into app development and I found Expo. I started building out a geography based memory picture sharing app.
            The goal was to allow users to create events and share images, pretty simple. This project taught me a lot about
            firebase integration, including storage, database, and authentication.
        </p>
      </CardContent>
    </Card>
  },
//   { content: 
//     <Card className="software-portfolio-card">
//       <CardHeader className="software-card-header">
//         <CardTitle className="software-card-title">Project Title <a href="#" target="_blank" rel="noopener noreferrer"><FiExternalLink className="inline ml-1" /></a></CardTitle>
//         <CardTitle className="software-card-subtitle">Frontend Stack: </CardTitle>
//         <CardTitle className="software-card-subtitle">Backend Stack: </CardTitle>
//       </CardHeader>
//       <CardContent className="flex gap-4 items-start">
//         <p></p>
//       </CardContent>
//     </Card>
//   },
];

const SoftwareEngineerScene = () => {
    return (
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="software-engineer-scene">
                <div style={{height: '85vh', width: '100%', position: 'relative'}}>
                    <InfiniteScroll
                        items={items}
                        autoplay={false}
                        width="90vw"
                        itemMinHeight={400}
                        negativeMargin={"-5em"}
                    />
                </div>
            </div>
        </FadeContent>
    );
}

export default SoftwareEngineerScene;
