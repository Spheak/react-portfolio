import Lottie from "react-lottie";
import animationData from "@/assets/lotties/json/coding.json";

const CodingLottie = () => {
        const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        };
        return (
          <div className="h-[300px] lg:h-[400px]">
            <Lottie options={defaultOptions}/>
          </div>
        );
};

export default CodingLottie;