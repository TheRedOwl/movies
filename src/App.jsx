import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Trendings } from "./pages/Trendings";
import { Movies } from "./pages/Movies";
import { TvSeries } from "./pages/TvSeries";
import { SearchPage } from "./pages/SearchPage";
import { NotFound } from "./pages/NotFound";
import { Header } from "./components/Header";

const router = createBrowserRouter(
    [
        {
            element: <Header />,
            children: 
              [
                { path: "/", element: <Trendings /> },
                { path: "/movies", element: <Movies /> },
                { path: "/series", element: <TvSeries /> },
                { path: "/search", element: <SearchPage /> },
                { path: "*", element: <NotFound /> },
              ],
        }],
    {
        future: {
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
            v7_skipActionErrorRevalidation: true,
        },
    })

function App() {
    return (
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
    );
}

export default App;
