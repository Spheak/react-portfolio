import CodingLottie from "@/assets/lotties/components/CodingLottie";
import { Button } from "../ui/button";
import { FileDown, Send } from "lucide-react";

const Home = () => {
        return (
          <div className="flex justify-between items-center gap-20 lg:mx-[10%]">
            <div className="flex flex-col gap-10 my-20">
              <div>
                <h4 className="uppercase font-semibold">
                  Welcome to my domain
                </h4>
                <h1 className="text-4xl lg:text-[60px] font-serif uppercase font-bold">
                  I'm Sopheak SY
                </h1>
                <p className="mt-5 text-xs">
                  Fresh graduate student of Computer Science at Royal University
                  of Phnom Penh
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 [&>button]:block">
                <Button className=" w-[150px] bg-background hover:bg-background shadow-none border-primary border rounded-none text-foreground cursor-pointer active:bg-primary active:text-white">
                  <div className="flex gap-1 items-center justify-center">
                    <span>Contact Me</span>
                    <Send />
                  </div>
                </Button>
                <Button className="w-[150px] bg-background hover:bg-background shadow-none border-primary border rounded-none text-foreground cursor-pointer active:bg-primary active:text-white">
                  <div className="flex gap-1 items-center justify-center">
                    <p>Resume</p>
                    <FileDown />
                  </div>
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