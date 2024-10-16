import { useState } from "react";
import RootLayout from "../../RootLayout";
import data from "../../data.json";

export default function Destination() {
   return (
      <RootLayout
         className="bg-destination-mobile md:bg-destination-tablet xl:bg-destination-desktop bg-cover"
         style=""
      >
         <HeroSection />
      </RootLayout>
   );
}

function HeroSection() {
   const [count, setCount] = useState(0);
   const destination = data.destinations[count];

   return (
      <div>
         <h3 className="text-white text-center md:text-left text-mobile-preset-6 md:text-tablet-preset-5 xl:text-desktop-preset-5-6">
            <span className="font-bold text-white text-opacity-25">01</span>{" "}
            PICK YOUR DESTINATION
         </h3>
         <div className="flex flex-col xl:flex-row items-center justify-center gap-400 text-center xl:text-left mt-300 md:mt-500 xl:mt-600">
            <img
               src={destination.images.png}
               alt="destination_image"
               className="w-[150px] md:w-[300px] xl:w-[480px] px-300"
            />
            <div className="flex items-center xl:items-start flex-col gap-300 md:gap-400 xl:gap-500 text-white md:px-300">
               <Tabs setCount={setCount} />
               <div className="flex flex-col gap-200">
                  <h1 className="text-mobile-preset-2 md:text-tablet-preset-2 xl:text-desktop-preset-2 uppercase font-bold">
                     {destination.name}
                  </h1>
                  <p className="max-w-[327px] md:max-w-[512px] xl:max-w-[445px]">
                     {destination.description}
                  </p>
                  <hr className="border-blue-300" />
                  <div className="flex flex-col md:flex-row items-center md:justify-between xl:justify-normal gap-300 uppercase">
                     <div>
                        <h4 className="text-desktop-preset-7 text-blue-300">
                           AVG. DISTANCE
                        </h4>
                        <p className="text-desktop-preset-5-6">
                           {destination.distance}
                        </p>
                     </div>
                     <div>
                        <h4 className="text-desktop-preset-7 text-blue-300">
                           EST. TRAVEL TIME
                        </h4>
                        <p className="text-desktop-preset-5-6">
                           {destination.travel}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

function Tabs({ setCount }: { setCount: (newCount: number) => void }) {
   return (
      <div className="flex gap-400 text-blue-300 font-semibold">
         <button onClick={() => setCount(0)}>MOON</button>
         <button onClick={() => setCount(1)}>MARS</button>
         <button onClick={() => setCount(2)}>EUROPA</button>
         <button onClick={() => setCount(3)}>TITAN</button>
      </div>
   );
}
