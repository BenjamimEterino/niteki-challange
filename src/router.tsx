import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Products from "./pages/productsPage/Products";
import { ProductDetails } from "./pages/productsPage/ProductDetails";

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route  index element={<Products />} />
                    <Route path="details/:id" element={<ProductDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}