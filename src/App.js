import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello word</div>,
  },
  {
    path: "/registro",
    element: <div>Hello wolrd registro</div>,
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