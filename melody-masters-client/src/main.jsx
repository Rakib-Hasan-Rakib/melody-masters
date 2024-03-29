import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routers/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={Router}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </QueryClientProvider>
);
