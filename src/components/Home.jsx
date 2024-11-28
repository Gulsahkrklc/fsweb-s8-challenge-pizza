import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Home(props) {
    const {secili,setSecili}=props;
    const history=useHistory();



    const HandleClickButton = () => {
        history.push("/order");
        toast.success("Hoşgeldiniz",{theme:"colored",})
    };

    return (
        <div  className = "style">
            <div className="home-page">
            <div className="logo">
                <img src='./Assets\Iteration-1-assets\logo.svg' alt="Logo" />
                </div>
                <h1>KOD ACIKTIRIR <br/>PİZZA, DOYURUR</h1>
                <button className="home-button" onClick={HandleClickButton}>ACIKTIM</button>
        </div>
        <div className="all-page">
        <div className="header-icon">
          <img src="/src/assets/1.svg" alt="" />
          <p>YENİ! Kore</p>
          <img src="/src/assets/2.svg" alt="" />
          <p>Pizza</p>
          <img src="/src/assets/3.svg" alt="" />
          <p>Burger</p>
          <img src="/src/assets/4.svg" alt="" />
          <p>Kızartmalar</p>
          <img src="/src/assets/5.svg" alt="" />
          <p>Fast food</p>
          <img src="/src/assets/6.svg" alt="" />
          <p>Gazlı içecek</p>
        </div><div className="tüm-menü">
          <div className="özel-lezzetus">
            <h1>
              Özel <br /> Lezzetus
            </h1>
            <p>Position:Absolute Acı Burger</p>
            <button className="ilk-button">Sipariş Ver</button>
          </div>
          <div className="sag-taraf">
            <div className="hachatlon">
              <h2>
                Hackathlon <br /> Burger Menü
              </h2>
              <button className="ikinci-buton">Sipariş Ver</button>
            </div>

            <div className="cook">
              <h2>
                {" "}
                <span class="first-word"> Çoooook hızlı</span> <br /> npm gibi
                kurye{" "}
              </h2>
              <button className="ücüncü-buton">Sipariş Ver</button>
            </div>
          </div>
        </div>
        <div>
          <h3 className="paket">en çok paketlenen menüler</h3>
          <h1 className="acıktıran">Acıktıran Kodlara Doyuran Lezzetler</h1>
        </div>
        <div className="menü-bar-header">
          <button className="menü-bar">
            <img src="/src/assets/1.svg" alt="" />
            Ramen
          </button>
          <button className="menü-bar">
            <img src="/src/assets/2.svg" alt="" />
            Pizza
          </button>
          <button className="menü-bar">
            <img src="/src/assets/3.svg" alt="" />
            Burger
          </button>
          <button className="menü-bar">
            <img src="/src/assets/4.svg" alt="" />
            French fries
          </button>
          <button className="menü-bar">
            <img src="/src/assets/5.svg" alt="" />
            Fast food
          </button>
          <button className="menü-bar">
            <img src="/src/assets/6.svg" alt="" />
            Soft drinks
          </button>
        </div>

        <div className="cards">
          <div className="card-1">
            <img src="/src/assets/food-1.png" />
            <h5>Terminal Pizza</h5>
            <div className="food-inc">
              <p>4.9</p>
              <p>(200)</p>
              <h5>60₺</h5>
            </div>
          </div>

          <div className="card-2">
            <img src="/src/assets/food-2.png" />
            <h5>Position Absolute Acı Pizza</h5>
            <div className="food-inc">
              <p>4.9</p>
              <p>(200)</p>
              <h5>60₺</h5>
            </div>
          </div>
          <div className="card-3">
            <img src="/src/assets/food-3.png" />
            <h5>useEffect Tavuklu Burger</h5>
            <div className="food-inc">
              <p>4.9</p>
              <p>(200)</p>
              <h5>60₺</h5>
            </div>
          </div>
        </div>
      </div>
        </div>
        

        
    )
}





