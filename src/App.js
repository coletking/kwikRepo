import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import { AuthProvider } from "./USerAuth";



function App() {

  return (
    <div className="App">
     <BrowserRouter>
     <AuthProvider>
     <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
     </AuthProvider>
    
  </BrowserRouter>
    </div>
  );
}

export default App;
