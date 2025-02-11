import { Navigate } from "react-router-dom";
import MainLayout from "../elements/MainLayout";
const ProtectedRoutes = () => {
    const isAuthenticated = true;
    return isAuthenticated ? <MainLayout /> : <Navigate to="/" />;
};

export default ProtectedRoutes;