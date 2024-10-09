import { ReactNode } from "react";
import NavBar from "./components/NavBar";

type RootLayoutProps = {
   className?: string;
   children: ReactNode;
};

export default function RootLayout({ className, children }: RootLayoutProps) {
   return (
      <div className={`${className} flex flex-col min-h-dvh`}>
         <NavBar />
         <main className="max-w-6xl mx-auto p-300 md:px-0 flex items-start xl:items-center justify-center flex-1">
            {children}
         </main>
      </div>
   );
}
