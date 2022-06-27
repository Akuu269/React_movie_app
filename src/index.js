import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  
  // when you want to run app only , follow this
     // <App/>
    // when you want to run app with routing follow this mean wrape this   
   <BrowserRouter><App /></BrowserRouter> 

    // when you want to do routing , comment <App/> and write <Routing></Routing>
   //<BrowserRouter ><Routing></Routing> </BrowserRouter> 

  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
