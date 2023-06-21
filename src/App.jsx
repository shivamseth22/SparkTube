import Header from "./Component.jsx/Header";
import Body from "./Component.jsx/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./Component.jsx/MainContainer";
import WatchPage from "./Component.jsx/WatchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "/Home",
        element: <MainContainer/>,
      },
      
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
