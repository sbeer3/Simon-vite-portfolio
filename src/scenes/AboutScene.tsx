import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import AnimatedContent from "../animations/AnimateContent";
import simonImage from "../assets/simon.jpeg"
import simonImage3 from "../assets/simon3.jpeg"
import simonImage4 from "../assets/simon4.jpg"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"


const AboutScene = () => {
    return (
<AnimatedContent
  distance={150}
  direction="vertical"
  reverse={false}
  duration={1.2}
  initialOpacity={0.0}
  animateOpacity
  scale={1.1}
  threshold={0.2}
>
        <div className="about-scene">
            <Card className="about-card">
                <CardHeader>
                    <CardTitle className="text-2xl">About Me</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4 items-start">

                    <Carousel   opts={{
    align: "start",
    loop: true,
  }}
  className="mr-10 ml-10 about-image-carousel">
                        <CarouselContent>
                            <CarouselItem>
                                                    <img 
                                                src={simonImage} 
                                                alt="Simon Beer" 
                                                className="about-image"
                                            />
                                            <div className="about-image-caption italic">Simon in Japan</div>
                            </CarouselItem>
                            <CarouselItem>
                                                    <img 
                                                src={simonImage3} 
                                                alt="Simon Beer" 
                                                className="about-image"
                                            />
                                            <div className="about-image-caption italic">Post half marathon bliss</div>
                            </CarouselItem>
                            <CarouselItem>
                                                    <img 
                                                src={simonImage4} 
                                                alt="Simon Beer" 
                                                className="about-image"
                                            />
                                            <div className="about-image-caption italic">Atop Mt. Antero</div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        </Carousel>
                    <CardDescription className="card-description">
                        <p className="text-lg text-left text-wrap">
                        Hey! My name is Simon Beer. I am a passionate software engineer with a
                        focus in building high quality applications from end to end. 
                        I have a strong expertise in full stack development in a variety of languages and frameworks,
                        and I love learning new technologies and improving my skills. When I am not coding, I am always reading
                        about the newest technologies and trends to stay on top of it.
                        </p>
                        <br />
                        <p className="text-lg text-left text-wrap">
                        Away from the computer, I enjoy hiking, photography and playing video games. A lot of my time is spent 
                        outdoors climbing the 14ers of Colorado and capturing the beauty of nature and my friends through my camera.

                        </p>
                        <br />
                        <p className="text-xs text-left text-wrap">
                        If you would like to see examples of my work, please continue down the dropdown above!
                        </p>

                    </CardDescription>
                </CardContent>
            </Card>
        </div>
        </AnimatedContent>
    );
}
export default AboutScene;