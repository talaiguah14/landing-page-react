import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import LoginPage from "./components/pages/login";
import Landin from "./components/pages/landing"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landin/>,
  },
  // {
  //   path: "/registro",
  //   element: <div>Hello wolrd registro</div>,
  // },
  // {
  //   path: "/login",
  //   element: <div>Hello wolrd registro</div>,
  // },
  // {
  //   path: "/dashboard",
  //   element: <div>Hello wolrd dashboard</div>,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;