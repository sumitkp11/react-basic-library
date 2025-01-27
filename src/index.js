import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Provider } from 'react-redux';
import { bookStore } from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddBooks from './components/AddBooks';
import Header from './components/Header';
import BookDetails from './components/BookDetails';

// const router = createBrowserRouter([
//   {
//     path: "/add",
//     element: <AddBooks />
//   },
//   {
//     path: "/",
//     element: <App />
//   }

// ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={bookStore}>
    <BrowserRouter>
    <Header />
    {/* <Header> */}



      {/* <React.StrictMode> */}
      
        <Routes>
          <Route exact path="/" element={<BookDetails />} />
          <Route exact path="/add" element={<AddBooks />} />
        </Routes>

     
      {/* <RouterProvider router={router}></RouterProvider> */}
      {/* <App /> */}
      {/* </React.StrictMode> */}

    {/* </Header> */}
    </BrowserRouter>
  </Provider>
);