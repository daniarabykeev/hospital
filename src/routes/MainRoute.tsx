import {Route, Routes} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/homePage/HomePage.tsx";
import AuthPage from "../pages/authPage/AuthPage.tsx";

const MainRoute = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/login'} element={<AuthPage/>}/>
            </Route>
        </Routes>
    );
};

export default MainRoute;