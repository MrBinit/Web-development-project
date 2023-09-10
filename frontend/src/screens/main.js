// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import { BrowserRouter } from 'react-router-dom';
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//         <BrowserRouter>

//     <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom' // Import ReactDOM from 'react-dom' instead of 'react-dom/client'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Uncomment the BrowserRouter component */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
