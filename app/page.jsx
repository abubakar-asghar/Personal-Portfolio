"use client";

import Photo from "@/Components/Photo";
import Social from "@/Components/Social";
import { Stats } from "@/Components/Stats";
import { Button } from "@/Components/ui/button";
import { FiDownload } from "react-icons/fi";

export const Home = () => {
  const handleDownloadCV = () => {
    const cvUrl = "/assets/Abubakar_CV.pdf";

    const link = document.createElement("a");
    link.href = cvUrl;

    link.download = "AbuBakar_CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 pb-14">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">FullStack Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">AbuBakar</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A Full Stack Developer dedicated to creating dynamic and
              innovative web solutions that deliver exceptional user experiences
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownloadCV}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>{" "}
      <Stats />
    </section>
  );
};
export default Home;
