import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Homepage from "./pages/Homepage";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/products", element: <ProductsPage /> },
        { path: "/products/:productId", element: <ProductDetailPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
