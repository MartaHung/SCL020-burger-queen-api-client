import './App.css'
//Importando la dependencia de routes
import { Routes, Route } from "react-router-dom";

import Home from './Routes/home.jsx';
import LoginChef from './Routes/loginChef';
import LoginWaiter from './Routes/loginWaiter';
import Tables from './Routes/tables';

function App() {
  

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="LoginChef" element={<LoginChef />} />
          <Route path="LoginWaiter" element={<LoginWaiter />} />
          <Route path="Tables" element={<Tables />} />
          {/* <Route path="Menu" element={<Menu />} /> */}
        </Routes>
    </div>
  )
}

export default App
