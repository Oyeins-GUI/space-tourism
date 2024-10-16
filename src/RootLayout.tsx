import { ReactNode } from "react";
import NavBar from "./components/NavBar";

type RootLayoutProps = {
   className?: string;
   style?: string;
   children: ReactNode;
};

export default function RootLayout({
   className,
   style,
   children,
}: RootLayoutProps) {
   return (
      <div className={`${className} flex flex-col min-h-dvh`}>
         <NavBar />
         <main
            className={`max-w-6xl mx-auto p-300 md:p-300 ${style} w-full flex-1`}
         >
            {children}
         </main>
      </div>
   );
}
