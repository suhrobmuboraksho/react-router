import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/Products";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },
    { path: "/products", element: <ProductsPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
