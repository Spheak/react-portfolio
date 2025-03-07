import CodingLottie from "@/assets/lotties/components/CodingLottie";
import { Button } from "../ui/button";
import { FileDown, Send } from "lucide-react";
import resume from '@/assets/pdf/resume.pdf'
import { t } from "i18next";
const Home = () => {
        return (
          <div className="flex justify-between items-center gap-20 lg:mx-[10%]">
            <div className="flex flex-col gap-10 my-20">
              <div>
                <h4 className="uppercase font-semibold">
                  {t("home.primaryTitle")}
                </h4>
                <h1 className="text-4xl lg:text-[60px] font-serif uppercase font-bold">
                  {t("home.secondaryTitle")}
                </h1>
                <p className="mt-5 text-xs">{t("home.description")}</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 [&>button]:block">
                <Button className="w-[150px] p-0 bg-background hover:bg-background shadow-none border-primary border rounded-none text-foreground cursor-pointer active:bg-primary active:text-white">
                  <a
                    href="#contact"
                    className="flex gap-1 items-center justify-center  py-2"
                  >
                    <p>{t("button.contactMe")}</p>
                    <Send />
                  </a>
                </Button>
                <Button className="w-[150px] p-0 bg-background hover:bg-background shadow-none border-primary border rounded-none text-foreground cursor-pointer active:bg-primary active:text-white">
                  <a
                    href={resume}
                    download
                    className="flex gap-1 items-center justify-center py-2"
                  >
                    <p>{t("button.resume")}</p>
                    <FileDown />
                  </a>
                </Button>
              </div>
            </div>
            <div className="absolute top-50 left-[30%] lg:relative -z-10 lg:top-0 lg:left-auto">
              <CodingLottie />
            </div>
          </div>
        );
};

export default Home;