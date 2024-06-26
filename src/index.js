import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './redux/campersSlice';
import './index.css';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/test-task-rent-camper">
      <App />
    </BrowserRouter>
  </Provider>
);
