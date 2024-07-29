import React from 'react'

const UpcomingCars = () => {

    const carsData = [
        {
          img: "./UpcomingImgs/xuv-700.webp",
          carName: "Mahindra XUV 3XO",
          price: "9 Lakh",
          expectedDate : "Apr 29, 2024 Expected Launch"
        },

        {
          img: "./upcomingImgs/lexus-us.webp",
          carName: "Lexus UX",
          price: "16 Lakh",
          expectedDate : "May 05, 2024 Expected Launch"
        },

        {
          img: "./upcomingImgs/mercdez-benz.webp",
          carName: "Mercedes-Benz EQA",
          price: "40 Lakh",
          expectedDate : "May 09, 2024 Expected Launch",
          renderCell :(div) => { 
            return(  <div className="absolute top-36 mt-3 left-2 bg-gray-300 w-fit px-5 py-1 rounded-lg">
            {" "}
            <p className="text-xs font-semibold"> Electric </p>
          </div>
         )
          }
        },

        {
          img: "./upcomingImgs/maruti-swift.jpg",
          carName: "Maruti Swift 2024",
          price: "60 Lakh",
          expectedDate : "May 06, 2024 Expected Launch"
        },
      ];
    
  return (
    <div className="w-full flex justify-center mt-7">
      <div className="bg-white w-[1260px] rounded-2xl">
        <div>
          <p className="text-2xl font-semibold m-4"> UpcomingCars</p>
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

                  <p className="ps-3 font-semibold"> &#8377; {carData.price} <span className='text-xs font-extralight text-gray-400'> Estimated Price</span></p>
                  <p className='ps-3 text text-xs pt-1 text-gray-500 font-light'> {carData.expectedDate} </p>

                  
                </div>

                <div className="flex justify-center">
                  <div className="border border-orange-500 rounded-md text-orange-600 font-semibold text-base w-fit px-10 py-2 my-6 cursor-pointer">
                    {" "}
                    Alert Me When Launched
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
  )
}

export default UpcomingCars
