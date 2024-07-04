import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add></Add>}>
            Add
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
