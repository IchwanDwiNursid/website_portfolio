import { Button } from "../components/ui/button.jsx";
import { FiDownload } from "react-icons/fi";

// component
import Social from "../components/Social.jsx";
import Photo from "../components/Photo.jsx";
import Stats from "../components/Stats.jsx";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full xl:mb-16">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Ichwan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a Software Developer with expertise in Web Programming, both
              Frontend and Backend. I frequently implement Microservices in my
              projects. I also have strong proficiency in Linux, Cloud
              Computing, and CI/CD. As a competent and reliable professional, I
              am committed to delivering the best results.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a href="https://drive.google.com/uc?export=download&id=1qsJmNkzd9eL8evygWdUzb8sN6IfLFz-s">
                  Download CV
                </a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
