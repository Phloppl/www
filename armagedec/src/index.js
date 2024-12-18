import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import {Asteroids} from "./page/asteroids";

const router = createBrowserRouter([

    {
        path: "/asteroids",
        element: <Asteroids/>
    },
    {
        path: "/destroyment",
        element: <div>Hello second!</div>,
    },
    {
        path: "/asteroids/:id",
        element: <div>Hello third!</div>,
    },
    {
        path: "*",
        element: <div>Hello first!</div>,

    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
