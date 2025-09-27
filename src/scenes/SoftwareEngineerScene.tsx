import FadeContent from "../animations/FadeContent";

const SoftwareEngineerScene = () => {   
    return (
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="software-engineer-scene">
                <h1>Software Engineer</h1>
                <p>Hi, I'm Simon Beer, a passionate software engineer.</p>
            </div>
        </FadeContent>
    );
}

export default SoftwareEngineerScene;
