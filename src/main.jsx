import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import App from './App.jsx'
import { store } from "./redux/store";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='mainDiv'>
        
        <App />
        
      </div>
    </Provider>
  </React.StrictMode>,
)
