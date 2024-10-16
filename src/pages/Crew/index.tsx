import { useState } from "react";
import RootLayout from "../../RootLayout";
import data from "../../data.json";

export default function Crew() {
   return (
      <RootLayout
         className="bg-crew-mobile md:bg-crew-tablet xl:bg-crew-desktop bg-cover"
         style="flex items-center justify-center mt-300 md:mt-400"
      >
         <HeroSection />
      </RootLayout>
   );
}

function HeroSection() {
   const [count, setCount] = useState(0);
   const crew = data.crew[count];

   return (
      <div className="flex flex-col xl:flex-row md:gap-300 xl:gap-600 text-white">
         <div className="flex items-center justify-between xl:items-start xl:ustify-between flex-col gap-200 xl:gap-0">
            <h3 className="text-white text-center md:text-left text-mobile-preset-6 md:text-tablet-preset-5 xl:text-desktop-preset-5-6">
               <span className="font-bold text-white text-opacity-25">02</span>{" "}
               MEET YOUR CREW
            </h3>
            <div>
               <p className="text-center xl:text-left text-white text-opacity-50 uppercase text-mobile-preset-4 xl:text-desktop-preset-4 md:text-tablet-preset-4">
                  {crew.role}
               </p>
               <h1 className="text-center xl:text-left uppercase text-mobile-preset-3 md:text-tablet-preset-3 xl:text-desktop-preset-3">
                  {crew.name}
               </h1>
               <p className="text-center xl:text-left max-w-[327px] md:max-w-[512px] xl:max-w-[539px] text-mobile-preset-9 md:text-tablet-preset-9 xl:text-desktop-preset-9">
                  {crew.bio}
               </p>
            </div>
            <Tabs count={count} setCount={setCount} />
         </div>
         <div className="block w-max-[271px] md:w-max-[446px] xl:w-max-[539px] h-max-[271px] md:h-max-[446px] xl:h-max-[539px]">
            <img
               src={crew.images.png}
               alt="crew image"
               className="block w-max-[271px] md:w-max-[446px] xl:w-max-[539px]"
            />
         </div>
      </div>
   );
}

function Tabs({
   count,
   setCount,
}: {
   count: number;
   setCount: (newCount: number) => void;
}) {
   return (
      <div className="flex items-center xl:justify-normal justify-center gap-400 text-blue-300 font-semibold mt-100 mb-500 xl:mb-0 xl:pb-24">
         <button onClick={() => setCount(0)}>
            <div
               className={`w-[10px] xl:w-[15px] aspect-square rounded-full ${
                  count === 0 ? "bg-white" : "bg-blue-300"
               }`}
            />
         </button>
         <button onClick={() => setCount(1)}>
            <div
               className={`w-[10px] xl:w-[15px] aspect-square rounded-full ${
                  count === 1 ? "bg-white" : "bg-blue-300"
               }`}
            />
         </button>
         <button onClick={() => setCount(2)}>
            <div
               className={`w-[10px] xl:w-[15px] aspect-square rounded-full ${
                  count === 2 ? "bg-white" : "bg-blue-300"
               }`}
            />
         </button>
         <button onClick={() => setCount(3)}>
            <div
               className={`w-[10px] xl:w-[15px] aspect-square rounded-full ${
                  count === 3 ? "bg-white" : "bg-blue-300"
               }`}
            />
         </button>
      </div>
   );
}
