import { createBrowserRouter } from "react-router-dom";
// import HomePage from "../pages/home";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "404",
        element: <>404 Not Found!</>,
    },
]);

export { router };