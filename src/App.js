import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cards from "./components/cards";
import CardsDetails from "./components/CardsDetails";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" Component={Cards} />
            <Route path="/carts/:id" Component={CardsDetails} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
