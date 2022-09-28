import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Home from "./pages/Home";
import Destination from "./pages/destination"
import Crew from "./pages/crew"
import Technology from "./pages/technology"
import {Route , Routes} from "react-router-dom"


function App() {

  return (
    <div className="w-full h-screen">  
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/destination" element={<Destination/>}/>
      <Route path="/crew" element={<Crew/>}/>
      <Route path="/technology" element={<Technology/>}/>

    </Routes>
    </div>
  );
}

export default App;
