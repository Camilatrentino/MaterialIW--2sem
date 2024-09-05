import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Search from "./pages/Search";
import PGN from "./pages/PageNotFound";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./contexts/Favorites";


function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>

                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/Watch/:id" element={<Watch></Watch>}></Route>
                    <Route path="/Search" element={<Search></Search>}></Route>
                    <Route path="/Favorites" element={<Favorites></Favorites>}></Route>
                    <Route path="*" element={<PGN></PGN>}></Route>

                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;