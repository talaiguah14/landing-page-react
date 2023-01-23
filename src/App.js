import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([{

  path: "/dashboard",
  element: <div>Hello wolrd dashboard</div>,

},]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
