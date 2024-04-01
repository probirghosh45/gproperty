import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Home";
import Contact from "../Components/Contact/Contact";
import SignIn from "../Components/Auth/Login/SignIn";
import Register from "../Components/Auth/Register/Register";
import ErrorPage from "./ErrorPage";
import Profile from "../Components/Auth/UserProfile/Profile";
import PrivateRoute from "./PrivateRoute";
import About from "../Components/About/About";
import Cart from "../Components/Cart/Cart";
import Faq from "../Components/Faq/Faq";
import EstateDetails from "../Components/Estate/EstateDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/about",
        element: <PrivateRoute><About /></PrivateRoute>,
      },
      {
        path: "/faq",
        element: <PrivateRoute><Faq/></PrivateRoute>,
      },
      {
        path: "/contacts",
        element: <PrivateRoute><Contact /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/estate/:id",
        element: (
          <PrivateRoute>
            <EstateDetails/>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart/>
          </PrivateRoute>
        )
      },
    ],
  },
]);
