import { ChefHat } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <h2
      className={`bg-[url(./assets/title-bg.png)] flex justify-center items-center gap-1 text-4xl font-bold text-center bg-no-repeat pb-20 pt-10 bg-center`}
      style={{ backgroundSize: "100% 100%" }}
    >
      <ChefHat size={40} />
      Kitchen Room
    </h2>
  );
};

export default Banner;
