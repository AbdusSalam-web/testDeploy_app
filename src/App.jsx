import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import { AuthProvider } from "./store/AuthProvider";
import About from "./components/About";
import Blog from "./components/Blog";
import CaseStudies from "./components/CaseStudies";
import Services from "./components/Services";
import Login from "./components/Login";
import Register from "./components/Register";
import Error404 from "./components/Error404";
import { ToastContainer } from "react-toastify";
import AdminLayout from "./layout/AdminLayout";
import AdminUSers from "./components/AdminUSers";
import AdminServices from "./components/AdminServices";
import EditUser from "./components/EditUser";
import EditService from "./components/EditService";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "about",
          Component: About,
        },
        {
          path: "blog",
          Component: Blog,
        },
        {
          path: "case_studies",
          Component: CaseStudies,
        },
        {
          path: "services",
          Component: Services,
        },
        {
          path: "login",
          Component: Login,
        },
        {
          path: "register",
          Component: Register,
        },
        {
          path: "*",
          Component: Error404,
        },
      ],
    },
    {
      path: "/admin",
      Component: AdminLayout,
      children: [
        {
          path: "users",
          Component: AdminUSers,
        },
        {
          path: "services",
          Component: AdminServices,
        },
        {
          path: "user/edit/:id",
          Component: EditUser,
        },
        {
          path: "service/edit/:id",
          Component: EditService,
        },
      ],
    },
  ]);
  return (
    <>
      <AuthProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          bodyClassName="toastBody"
        />
        <RouterProvider router={myRouter} />
      </AuthProvider>
    </>
  );
};

export default App;
