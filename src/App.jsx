import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // BrowserRouter import edilmeli

import Footer from "./components/Footer";
import Home from "./components/Home";
import Secenekler from "./components/Secenekler";
import Siparis from "./components/Siparis";
import "./index.css";

const initialFormData = {
  pizzaBoyut: "Orta",
  pizzaKalinlik: "İnce Hamur",
  siparisNotu: "",
  pizzaMalzeme: ["Biber", "Sucuk", "Domates", "Sosis"],
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [pizzaKalinlik, setPizzaKalinlik] = useState("");
  const [pizzaBoyut, setPizzaBoyut] = useState();
  const [pizzaMalzeme, setPizzaMalzeme] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [secili, setSecili] = useState("/");
  const [pizzaFiyatı, setPizzaFiyatı] = useState(0);
  const [siparisNotu, setSiparisNotu] = useState();
  const [malzemeSec, setMalzemeSec] = useState(5);
  const [toplamTutar, setToplamTutar] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
          <Home secili={secili} setSecili={setSecili} />
        </Route>
        <Route exact path="/secenekler">
          <Secenekler
            pizzaKalinlik={pizzaKalinlik}
            setPizzaKalinlik={setPizzaKalinlik}
            pizzaBoyut={pizzaBoyut}
            setPizzaBoyut={setPizzaBoyut}
            pizzaMalzeme={pizzaMalzeme}
            setPizzaMalzeme={setPizzaMalzeme}
            count={count}
            setCount={setCount}
            error={error}
            setError={setError}
            secili={secili}
            setSecili={setSecili}
            pizzaFiyatı={pizzaFiyatı}
            setPizzaFiyatı={setPizzaFiyatı}
            formData={formData}
            setFormData={setFormData}
            siparisNotu={siparisNotu}
            setSiparisNotu={setSiparisNotu}
            malzemeSec={malzemeSec}
            setMalzemeSec={setMalzemeSec}
            toplamTutar={toplamTutar}
            setToplamTutar={setToplamTutar}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </Route>
        <Route exact path="/siparis">
          <Siparis
            pizzaBoyut={pizzaBoyut}
            pizzaKalinlik={pizzaKalinlik}
            pizzaMalzeme={pizzaMalzeme}
            malzemeSec={malzemeSec}
            toplamTutar={toplamTutar}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;


      
  
