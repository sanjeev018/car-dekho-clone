import React from "react";
import images1 from "./images1/hyundai-creta-img.webp";
import images2 from "./images2/mahindra-thar-img.webp";
import images3 from "./images3/bosch-car-services.webp";

const FirstComponent = () => {


  return (
    <div className="w-full flex justify-center">

      <div className="flex  w-[1450px] overflow-y-auto">
          <div
            className="bg-red-200 w-full h-[550px] bg-center"
            style={{ backgroundImage: "url(" + images1 + ")" }}
          ></div>

          <div
            className="bg-red-200 w-full h-[550px] bg-center"
            style={{ backgroundImage: "url(" + images2 + ")" }}
          ></div>
        

          <div
            className="bg-red-200 w-full h-[550px] bg-center"
            style={{ backgroundImage: "url(" + images3 + ")" }}
          ></div>

        </div>

    </div>
  );
};

export default FirstComponent;
