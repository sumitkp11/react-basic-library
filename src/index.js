import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { bookStore } from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBooks from './components/AddBooks';
import Header from './components/Header';
import BookDetails from './components/BookDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={bookStore}>
    <BrowserRouter>
    <Header />      
        <Routes>
          <Route exact path="/" element={<BookDetails />} />
          <Route exact path="/add" element={<AddBooks />} />
        </Routes>
    </BrowserRouter>
  </Provider>
);