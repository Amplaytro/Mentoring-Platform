import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar.element"
import AttributesList from "./components/attributes-list.element";
import EditAttribute from "./components/edit-attribute.element";
import CreateAttribute from "./components/create-attribute.element";
import CreateExpert from "./components/create-expert.element";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Routes>
      <Route path="/experts-select" element={<AttributesList />}></Route>
      <Route path="/edit/:id" element={<EditAttribute />}></Route>
      <Route path="/create" element={<CreateAttribute />}></Route>
      <Route path="/expert" element={<CreateExpert />}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;