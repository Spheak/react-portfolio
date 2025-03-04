import CodingLottie from "@/assets/lotties/components/CodingLottie";
import { Button } from "../ui/button";

const Home = () => {
        return (
          <div className="flex justify-center items-center gap-20">
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
              <Button
                className="bg-background hover:bg-background shadow-none border-primary border rounded-none text-foreground cursor-pointer w-[100px] active:bg-primary active:text-white"
              >
                Contact Me
              </Button>
            </div>
            <div className="absolute top-50 left-[30%] lg:relative -z-10 lg:top-0 lg:left-auto">
              <CodingLottie />
            </div>
          </div>
        );
};

export default Home;