import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './Components/StarRating/StarRating';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} onSetRating={''} defaultRating={3} messages={['Terrible','Bad','Okay','Good', 'Amazing']} /> */}
  </React.StrictMode>
);


