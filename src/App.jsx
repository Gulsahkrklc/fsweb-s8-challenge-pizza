import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import PizzaOrderForm from "./components/OrderPage"
import "./App.css"




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
    <>
    <div className="home">
      <Home />
      <Navbar />
      <PizzaOrderForm />
        
      
    </div>
    
    </>
    </Route>
    </Switch>
    </Router>
  );

  
    
  
}
    export default App;  
      
      
  
