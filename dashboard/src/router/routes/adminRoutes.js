import { lazy } from "react";

const Orders = lazy(() => import("../../views/admin/Orders"));
const Dashboard = lazy(() => import("../../views/admin/Dashboard"));
const Category = lazy(() => import("../../views/admin/Category"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));
export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <Dashboard />,
    role: "admin",
  },
  {
    path: "admin/dashboard/orders",
    element: <Orders />,
    role: "admin",
  },
  {
    path: "admin/dashboard/category",
    element: <Category />,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers",
    element: <Sellers />,
    role: "admin",
  },
];
