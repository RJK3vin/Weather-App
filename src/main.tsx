import React from "react";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import { store } from './store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes"

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
