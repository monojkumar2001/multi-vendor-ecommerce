import MainLayout from "../../layout/MainLayout";
import { privateRoutes } from "./ProtectRoutes";

export const getRoutes = () => {
  return {
    path: "/",
    element: <MainLayout />,
    children: privateRoutes,
  };
};
