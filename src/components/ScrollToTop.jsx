import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import App from "../App.jsx";


export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Forces the window to start at the top of the new page
  }, [pathname]);

  return null;
}
