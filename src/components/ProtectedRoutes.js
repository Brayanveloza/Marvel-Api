import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
    let isLogged = localStorage.getItem("isLogged");
    if (!isLogged){
        return <Navigate to="/" />
    }
    
    return (
        <Outlet />
    );
}