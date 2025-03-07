import { t } from "i18next";
import { Computer, Cpu } from "lucide-react";

const About = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 lg:flex-row justify-center items-center gap-10 lg:gap-20 lg:mx-[10%]"
      id="about"
    >
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-3xl uppercase">
            About <span className=" text-primary">Me</span>
          </h1>
          {/* <hr className="w-[100px] bg-primary h-2" /> */}
        </div>
        <p className="text-justify">{t("about.description")}</p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-10 ml-5 justify-center items-center">
          <div>
            <div className="flex relative after:w-full after:h-full after:p-8 after:border-2 after:border-primary after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 hover:after:rotate-45 after:transition-all after:duration-200">
              <Computer size={30} strokeWidth={1} />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              {t("about.frontendTitle")}
            </h2>
            <p className="text-justify">{t("about.frontendDescription")}</p>
          </div>
        </div>
        <div className="flex gap-10 ml-5 justify-center items-center">
          <div>
            <div className="flex relative after:w-full after:h-full after:p-8 after:border-2 after:border-primary after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 hover:after:rotate-45 after:transition-all after:duration-200">
              <Cpu size={30} strokeWidth={1} />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">{t("about.backendTitle")}</h2>
            <p className="text-justify">{t("about.backendDescription")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
