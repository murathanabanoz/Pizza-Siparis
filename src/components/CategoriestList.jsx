import "../css/CategoriesList.css";
import svg1 from "../assets/adım2/icons/1.svg";
import svg2 from "../assets/adım2/icons/2.svg";
import svg3 from "../assets/adım2/icons/3.svg";
import svg4 from "../assets/adım2/icons/4.svg";
import svg5 from "../assets/adım2/icons/5.svg";
import svg6 from "../assets/adım2/icons/6.svg";

const CategoriesList = () => {
  return (
    <ul className="categories-list">
      <li>
        <img src={svg1} />
        YENİ!Kore
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
        Kızartmalar
      </li>
      <li>
        <img src={svg5} />
        Fast Food
      </li>
      <li>
        <img src={svg6} />
        <span> Gazlı İçecek</span>
      </li>
    </ul>
  );
};

export default CategoriesList;
