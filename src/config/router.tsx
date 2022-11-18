import {createBrowserRouter} from "react-router-dom";
// import HomePage from "../pages/home";
import App from "../App";
import Fabric from "../pages/Fabric";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "1",
        element: <Fabric/>
    },
    {
        path: "404",
        element: <>404 Not Found!</>,
    },
]);

export {router};