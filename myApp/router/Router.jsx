import { createBrowserRouter } from "react-router-dom";
import RootLayout from './RootLayout';
import HeroSection from '../components/HeroSrction';
import AboutMe from '../components/AboutMe';
import MainPage from '../components/MainPage';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainPage/>,
      }
    ]
  },
]);
