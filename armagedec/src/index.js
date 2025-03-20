import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import {Asteroids} from "./page/Asteroids";
import {Destroyment} from "./page/Destroyment";
import {Asteroid} from "./page/Asteroid";
const router = createBrowserRouter([

    {
        path: "/Asteroids",
        element: <Asteroids/>
    },
    {
        path: "/Destroyment",
        element: <Destroyment/>,
    },
    {
        path: "/Asteroid/:id",
        element: <Asteroid/>,
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
