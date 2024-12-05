import React from "react";
import "../css/Home.css";
import svg1 from "../assets/adım2/icons/1.svg";
import svg2 from "../assets/adım2/icons/2.svg";
import svg3 from "../assets/adım2/icons/3.svg";
import svg4 from "../assets/adım2/icons/4.svg";
import svg5 from "../assets/adım2/icons/5.svg";
import svg6 from "../assets/adım2/icons/6.svg";
import food1 from "../assets/adım2/pictures/food-1.png";
import food2 from "../assets/adım2/pictures/food-2.png";
import food3 from "../assets/adım2/pictures/food-3.png";
import { useNavigate } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import CategoriesList from "./CategoriestList";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/order");
  };

  return (
    <div className="banner-container">
      <div className="text-container">
        <h3 className="firsat">fırsatı kaçırma</h3>
        <h1 className="banner-text">KOD ACIKTIRIR</h1>
        <h1 className="banner-text">PİZZA,DOYURUR</h1>
        <button className="custom-button" onClick={handleClick}>
          ACIKTIM
        </button>
      </div>
      <div className="eklenen-div">
        <CategoriesList />
        <div className="center-div">
          <div className="reklamlar">
            <div className="grup1">
              <div className="ozel-lezzetus">
                <div className="content">
                  <h1 className="child-ozel-lezzetus-h1">Özel Lezzetus</h1>
                  <h6 className="child-ozel-lezzetus-h6">
                    Position:Absolute Acı Burger
                  </h6>
                  <button className="child-ozel-lezzetus-btn">
                    Sipariş Ver
                  </button>
                </div>
              </div>
            </div>

            <div className="grup2">
              <div className="hackatlon-burger">
                <div className="content">
                  <h2>Hackatlon Burger Menü</h2>
                  <button>Sipariş Ver</button>
                </div>
              </div>

              <div className="kurye">
                <div className="content">
                  <p>
                    <span style={{ color: "red" }}>Çooooook</span> hızlı npm
                    kurye
                  </p>
                  <button className="kurye-btn">Sipariş Ver</button>
                </div>
              </div>
            </div>
          </div>

          <div className="orta-yazi">
            <h4>en çok paketlenen menüler</h4>
            <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
          </div>
          <ul className="bestfood-list">
            <li>
              <img src={svg1} />
              Ramen
            </li>
            <li>
              <img src={svg2} />
              Pizza
            </li>
            <li>
              <img src={svg3} />
              Burger
            </li>
            <li>
              <img src={svg4} />
              French Fries
            </li>
            <li>
              <img src={svg5} />
              Fast Food
            </li>
            <li>
              <img src={svg6} />
              <span>Soft Drinks</span>
            </li>
          </ul>
          <div className="pizza-turleri">
            <div className="foods">
              <img src={food1} className="food-img" />
              <h3>Terminal Pizza</h3>
              <div className="card-p-container">
                <p className="card-ps">
                  4.7 <IoMdStar />
                </p>
                <p className="card-ps">(200 kcal)</p>
                <p className="card-price">60 tl</p>
              </div>
            </div>
            <div className="foods">
              <img src={food2} className="food-img" />
              <h3>Position Absolute Acı Pizza</h3>
              <div className="card-p-container">
                <p className="card-ps">
                  5.3 <IoMdStar />
                </p>
                <p className="card-ps">(928 kcal)</p>
                <p className="card-price">85 tl</p>
              </div>
            </div>
            <div className="foods">
              <img src={food3} className="food-img" />
              <h3>useEffect Tavuklu Burger</h3>
              <div className="card-p-container">
                <p className="card-ps">
                  8.1 <IoMdStar />
                </p>
                <p className="card-ps">(462 kcal)</p>
                <p className="card-price">75 tl</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
