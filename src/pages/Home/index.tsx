import RootLayout from "../../RootLayout";

export default function Home() {
   return (
      <RootLayout className="bg-home-mobile md:bg-home-tablet xl:bg-home-desktop bg-cover">
         <HeroSection />
      </RootLayout>
   );
}

function HeroSection() {
   return (
      <div className="flex flex-col xl:flex-row xl:items-end items-center justify-between gap-300 text-center xl:text-left mt-300 md:mt-1600 xl:mt-0">
         <div>
            <h3 className="text-blue-300 md:text-desktop-preset-5-6 text-mobile-preset-6">
               SO, YOU WANT TO TRAVEL TO SPACE
            </h3>
            <h1 className="text-white md:text-desktop-preset-1 text-mobile-preset-1">
               SPACE
            </h1>
            <p className="text-blue-300 xl:text-desktop-preset-9 md:text-tablet-preset-9 text-mobile-preset-9 max-w-[570px]">
               Let&apos;s face it; if you want to go to space, you might as well
               genuinely go to outer space and not hover kind of on the edge of
               it. Well sit back, and relax because we&apos;ll give you a truly
               out of this world experience!
            </p>
         </div>
         <Explore />
      </div>
   );
}

function Explore() {
   return (
      <button className="bg-white text-blue-900 md:text-desktop-preset-4 text-mobile-preset-4 p-100 rounded-full w-[144px] md:w-[272px] aspect-square flex items-center justify-center xl:ml-600 border-none outline-none cursor-pointer mt-600 md:mt-0">
         EXPLORE
      </button>
   );
}
