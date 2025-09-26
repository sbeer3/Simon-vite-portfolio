import TextType from '../animations/TextType';

const DefaultScene = () => {
    return (
            <TextType 
        text={["Hello, my name is Simon Beer, welcome to my portfolio!", "Use the above dropdown to checkout my project categories.", "See you around!"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="_"
        className="header-text"
        />
    );
}

export default DefaultScene;
