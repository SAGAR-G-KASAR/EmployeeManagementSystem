import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layout/AppLayout";
import Home from "./Pages/Home";
import { useState } from "react";
import { EmpData } from "./EmpData";
import EmployeeForm from "./Pages/EmployeeForm";
import Landing from "./Pages/Landing";

const App = () => {
  const [data, setData] = useState(EmpData);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true, // "/"
          element: <Landing />,
        },
        {
          path: "/home", // "/home"
          element: <Home data={data} setData={setData} />,
        },
        {
          path: "create",
          element: <EmployeeForm data={data} setData={setData} />,
        },
        {
          path: "edit/:id",
          element: <EmployeeForm data={data} setData={setData} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
