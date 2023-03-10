import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandinPage from "./components/pages/landing"
import LoginPage from "./components/pages/login";
import RegistrationPage from "./components/pages/registration";
import DashboardPage from "./components/pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandinPage/>,
  },
  {
    path: "/registro",
    element: <RegistrationPage/>
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;