import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { bookStore } from './redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddBooks from './components/AddBooks';

const router = createBrowserRouter([
  {
    path: "/add",
    element: <AddBooks />
  },
  {
    path: "/",
    element: <App />
  }
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={bookStore}>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
      {/* <App /> */}
    </React.StrictMode>
  </Provider>
);