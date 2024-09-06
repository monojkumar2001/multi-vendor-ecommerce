import { lazy } from "react";

const Orders = lazy(() => import("../../views/admin/Orders"));
// const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Dashboard = lazy(() => import("../../views/admin/Dashboard"));
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
];
