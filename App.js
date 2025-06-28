import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Application = () => {
    return (
        <div className="">
            <Header />
            <Outlet />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Application />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);