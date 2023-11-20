import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Patients from "./pages/patients";
import Layout from "./components/layout";
import { loader as homeLoader } from "./pages/home/Home";
import { loader as patientsLoader } from "./pages/patients/Patients";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/patients",
        element: <Patients />,
        loader: patientsLoader,
      },
    ],
  },
]);
