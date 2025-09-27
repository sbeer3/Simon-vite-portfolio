import FadeContent from "../animations/FadeContent";

const PhotographyScene = () => {
    return (
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="photography-scene">
                <h1>Photography</h1>
                <p>Hi, I'm Simon Beer, a passionate photographer.</p>
            </div>
        </FadeContent>
    );
}

export default PhotographyScene;
