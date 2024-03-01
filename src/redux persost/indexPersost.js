import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import Store from './Redux/Store';
import {PersistGate} from "redux-persist/integration/react"
import {persistStore} from "redux-persist"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(Store)
root.render(
  <React.StrictMode>
    <Provider  store={Store}>
      <PersistGate persistor={persistor}  >
        <App />

      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
