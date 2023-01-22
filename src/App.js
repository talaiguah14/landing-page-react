import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    element: <div>Hello wolrd login</div>,
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
