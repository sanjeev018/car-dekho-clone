import React from "react";

const SearchedCars = () => {
  const carsData = [ 
    { 
      img:"./images/mahindra-thar.webp", 
      carName: "Mahindra Thar",
      price: "11.25 - 17.60 Lakh*",
    },
    { 
      img:"./images/tata-punch.webp", 
      carName: "Tata Punch",
      price: "6.13 - 10.20 Lakh*",
    },
    { 
      img:"./images/tata-nexon.jpg", 
      carName: "Tata Nexon",
      price: "8.15 - 15.80 Lakh*",
    },
    { 
      img:"./images/hyundai-creta.webp", 
      carName: "Hyundai Creta",
      price: "11 - 20.15 Lakh*",
    },
  ]

  return (
    <div className="w-full flex justify-center">
      <div className="bg-white w-[1260px] rounded-2xl">
        <div>
          <p className="text-2xl font-semibold m-4"> The Most Searched Cars </p>
        </div>
        <div className="border-b-2">
          <ul className="flex gap-8 ps-4 pb-3">
            <li className="font-semibold border-b-4 border-orange-400">
              {" "}
              SUV{" "}
            </li>
            <li> Hatchback </li>
            <li> Sedan </li>
            <li> MUV </li>
            <li> Luxury </li>
          </ul>
        </div>

        {/* Car card Div */}

        <div className="flex justify-evenly mt-8 pb-8 border-b-2">
          {carsData?.map((carData , index) => {
            return( 
              <div key={index} className="border-2 rounded-md">
              <div>
                {" "}
                <img
                  className="rounded-t-md cursor-pointer"
                  src={carData.img}
                  width={"280px"}
                  alt="car-img"
                />
              </div>
  
              <div>
                <p className="pt-3 ps-3 cursor-pointer"> {carData.carName} </p>
                <p className="ps-3 font-semibold"> &#8377; {carData.price}</p>
              </div>
  
              <div className="flex justify-center">
                <div className="border border-orange-500 rounded-md text-orange-600 font-semibold text-sm w-fit px-16 py-2 my-6 cursor-pointer">
                  {" "}
                  Check March Offers
                </div>
              </div>
            </div>

            )
          })}
        </div>
        <div className="p-4 font-semibold text-sm text-blue-700 cursor-pointer"> View All SUV Cars</div>
      </div>
    </div>
  );
};
export default SearchedCars;
