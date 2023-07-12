

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import MainLayout from "./layout";
import Home from "./pages/home";

function App() {
  return (
    
      <Router>
      
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
             
            </Route>
          </Routes>
    
      </Router>

  );
}

export default App;