import React from "react";

const LatestCars = () => {
  const carsData = [
    {
      img: "./latestCarsImg/bmw-ix.webp",
      carName: "BMW iX",
      price: "1.21 - 1.40 Cr*",
      renderCell :(div) => { 
        return(  <div className="absolute top-36 mt-3 left-2 bg-gray-300 w-fit px-5 py-1 rounded-lg">
        {" "}
        <p className="text-xs font-semibold"> Electric </p>
      </div>
     )
      }
    },
    {
      img: "./latestCarsImg/bmw-6-series.jpg",
      carName: "BMW 6 Series",
      price: "73.50 - 78.90 Lakh*",
    },
    {
      img: "./latestCarsImg/bmw-i7.jpg",
      carName: "BMW i7",
      price: "2.03 - 2.50 Cr*",
      renderCell :(div) => { 
        return(  <div className="absolute top-36 mt-3 left-2 bg-gray-300 w-fit px-5 py-1 rounded-lg">
        {" "}
        <p className="text-xs font-semibold"> Electric </p>
      </div>
     )
      }
    },
    {
      img: "./latestCarsImg/lexus-lm.jpg",
      carName: "Lexus LM",
      price: "s2 - 2.50 Cr*",
    },
  ];

  return (
    <div className="w-full flex justify-center mt-7">
      <div className="bg-white w-[1260px] rounded-2xl">
        <div>
          <p className="text-2xl font-semibold m-4"> Latest Cars </p>
        </div>

        {/* Car card Div */}

        <div className="flex justify-evenly mt-8 pb-8 border-b-2">
          {carsData?.map((carData, index) => {
            const {renderCell} = carData
            return (
              <div key={index} className="border-2 rounded-md inline relative">
                <div>
                  {" "}
                  <img
                    className="rounded-t-md cursor-pointer"
                    src={carData.img}
                    width={"280px"}
                    alt="car-img"
                    />
                    {renderCell?.()}
                </div>


                <div>
                  <p className="pt-3 ps-3 cursor-pointer">
                    {" "}
                    {carData.carName}{" "}
                  </p>

                  <p className="ps-3 font-semibold"> &#8377; {carData.price}</p>
                </div>

                <div className="flex justify-center">
                  <div className="border border-orange-500 rounded-md text-orange-600 font-semibold text-sm w-fit px-16 py-2 my-6 cursor-pointer">
                    {" "}
                    Check April Offers
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-4 font-semibold text-sm text-blue-700 cursor-pointer">
          {" "}
          View All Latest Cars
        </div>
      </div>
    </div>
  );
};
export default LatestCars;
