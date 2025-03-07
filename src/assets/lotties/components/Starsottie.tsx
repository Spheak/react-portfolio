import Lottie from "react-lottie";
import animationData from "@/assets/lotties/json/start.json";

const StarsLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-[40px] absolute top-0 -left-2">
      <Lottie options={defaultOptions}  />
    </div>
  );
};

export default StarsLottie;
