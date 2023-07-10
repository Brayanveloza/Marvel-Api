import React from 'react';
import { Routes, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Login from "./pages/Login";
import Listado from "./pages/Listado";
import Detail from "./pages/Detail";
import { ProtectedRoutes } from './components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/listado" element={<Listado />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;