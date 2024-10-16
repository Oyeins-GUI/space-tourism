import { useState } from "react";
// import RootLayout from "../../RootLayout";
import RootLayout from "../../RootLayout";
import data from "../../data.json";

export default function Technology() {
   return (
      <RootLayout
         className="bg-technology-mobile md:bg-technology-tablet xl:bg-technology-desktop bg-cover"
         style="text-white"
      >
         <HeroSection />
      </RootLayout>
   );
}

function HeroSection() {
   const [count, setCount] = useState(2);
   const technology = data.technology[count];

   return (
      <div className="flex flex-col gap-300 xl:gap-0">
         <h3 className="text-white text-center md:text-left text-mobile-preset-6 md:text-tablet-preset-5 xl:text-desktop-preset-5-6">
            <span className="font-bold text-white text-opacity-25">03</span>{" "}
            SPACE LAUNCH 101
         </h3>
         <div className="flex flex-col xl:flex-row gap-400 items-center justify-center">
            <div className="block xl:hidden">
               <img
                  src={technology.images.landscape}
                  alt="space craft img"
                  className="block xl:hidden"
               />
               <img
                  src={technology.images.portrait}
                  alt="space craft img"
                  className="hidden xl:block"
               />
            </div>

            <div className="flex items-center flex-col xl:flex-row gap-500 xl:gap-800">
               <Tabs setCount={setCount} />
               <div className="flex flex-col gap-200 items-center xl:items-start justify-center xl:justify-normal text-center xl:text-left">
                  <h4 className="text-blue-300 text-mobile-preset-4 md:text-tablet-preset-4 xl:text-desktop-preset-4">
                     THE TERMINOLOGY
                  </h4>
                  <h1 className="uppercase text-mobile-preset-3 md:text-tablet-preset-3 xl:text-desktop-preset-3">
                     {technology.name}
                  </h1>
                  <p className="max-w-[327px] md:max-w-[512px] xl:max-w-[491px] text-blue-300 text-mobile-preset-9 md:text-tablet-preset-9 xl:text-desktop-preset-9">
                     {technology.description}
                  </p>
               </div>
            </div>

            <div className="hidden xl:block">
               <img
                  src={technology.images.landscape}
                  alt="space craft img"
                  className="block xl:hidden"
               />
               <img
                  src={technology.images.portrait}
                  alt="space craft img"
                  className="hidden xl:block"
               />
            </div>
         </div>
      </div>
   );
}

function Tabs({ setCount }: { setCount: (newCount: number) => void }) {
   return (
      <div className="flex items-center justify-between xl:flex-col gap-200 xl:gap-400">
         <TabButton setCount={setCount} newCount={0} />
         <TabButton setCount={setCount} newCount={1} />
         <TabButton setCount={setCount} newCount={2} />
      </div>
   );
}

function TabButton({
   setCount,
   newCount,
}: {
   newCount: number;
   setCount: (newCount: number) => void;
}) {
   return (
      <button
         className="bg-white text-black w-[40px] md:w-[56px] xl:w-[80px] aspect-square rounded-full border-blue-300 text-mobile-preset-4 md:text-tablet-preset-4 xl:text-desktop-preset-4"
         onClick={() => setCount(newCount)}
      >
         {newCount + 1}
      </button>
   );
}
