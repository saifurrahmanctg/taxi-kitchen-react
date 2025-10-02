import { ChefHat } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <h2
      className={`banner-bg flex justify-center items-center gap-1 text-4xl font-bold text-center pb-20 pt-10 `}
    >
      <ChefHat size={40} />
      Kitchen Room
    </h2>
  );
};

export default Banner;
