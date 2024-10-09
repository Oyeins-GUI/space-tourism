import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Destination from "./pages/Destination";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/destination",
      element: <Destination />,
   },
   {
      path: "/crew",
      element: <Crew />,
   },
   {
      path: "/technology",
      element: <Technology />,
   },
]);
