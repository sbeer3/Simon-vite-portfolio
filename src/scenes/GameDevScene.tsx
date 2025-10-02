import FadeContent from "../animations/FadeContent";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card"


const GameDevScene = () => {
    return (
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="game-dev-scene">
                <Card className="game-dev-portfolio-card">
                <CardHeader className="game-dev-card-header">
                    <CardTitle className="game-dev-card-title">Project Red Escape</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-6 items-start game-dev-card-content">
                    <div className="game-dev-text flex-1">
                        <p>This has been the biggest project I have been working on over the course of the last few months. I have always been
                            super interested in game development, and I have made small projects here and there, but this is the first project that 
                            I have actually taken seriously. I have been using the Godot engine, and it has been a great experience so far. 
                            The game is still in the early stages, phase 2.0 is what I am calling it now. The idea is an "idler" game where you
                            are training an LLM. The game emphasizes typing speed and accuracy. Eventually the user can purchase an auto typer and 
                            they can upgrade that to make more money faster, scaling exponentially. I am very excited to see where this project goes.
                        </p>
                    </div>
                    
                    <div className="game-dev-video flex-shrink-0" style={{pointerEvents: 'auto'}}>
                        <iframe 
                            src="https://drive.google.com/file/d/1lyzwFsZI7s__oPIMbREm5-TM84gjYn3E/preview" 
                            width="400" 
                            height="300" 
                            allow="autoplay"
                            className="rounded-lg shadow-lg"
                            style={{pointerEvents: 'auto', border: 'none'}}
                            title="Project Red Escape Demo"
                        ></iframe>
                    </div>
                </CardContent>
                </Card>
            </div>
        </FadeContent>
    );
}

export default GameDevScene;
