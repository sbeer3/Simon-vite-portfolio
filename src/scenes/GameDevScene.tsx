import FadeContent from "../animations/FadeContent";

const GameDevScene = () => {
    return (
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="game-dev-scene">
                <h1>Game Development Projects</h1>
                <p>Hi, I'm Simon Beer, a passionate game developer.</p>
            </div>
        </FadeContent>
    );
}

export default GameDevScene;
