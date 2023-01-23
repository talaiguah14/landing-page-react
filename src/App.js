import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/login";
import RegistrationPage from "./components/pages/registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello word</div>,
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
    element: <div>Hello wolrd dashboard</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
