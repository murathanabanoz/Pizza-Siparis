import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import formBanner from "../assets/adım2/pictures/form-banner.png";
import "../css/Order.css";
import { IoMdStar } from "react-icons/io";

const Order = ({ setOrder }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    size: "",
    dough: "",
    toppings: [],
    note: "",
  });
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const toppingsOptions = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Domates",
    "Jalepeno",
  ];

  const doughs = ["İnce Hamur", "Normal Hamur", "Kalın Hamur"];
  const pizzaSizes = ["S", "M", "L"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToppingChange = (e) => {
    const value = e.target.value;

    setFormData((prevFormData) => {
      const alreadySelected = prevFormData.toppings.includes(value);

      if (alreadySelected) {
        const newToppings = prevFormData.toppings.filter(
          (topping) => topping !== value
        );
        return { ...prevFormData, toppings: newToppings };
      }

      if (prevFormData.toppings.length >= 7) {
        alert("En fazla 7 malzeme seçebilirsiniz.");
        return prevFormData;
      }

      const newToppings = [...prevFormData.toppings, value];
      return { ...prevFormData, toppings: newToppings };
    });
  };

  const totalToppingPrice = formData.toppings.length * 5;

  useEffect(() => {
    const newTotalPrice = (totalToppingPrice + 85.5) * count;
    setTotal(newTotalPrice.toFixed(2));
  }, [formData.toppings, count]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.size || !formData.dough) {
      alert("Lütfen tüm zorunlu alanları doldurun.");
      navigate("/order");
      return;
    }

    const finallyOrder = {
      ...formData,
      count,
      total,
      totalToppingPrice,
    };

    // axios
    //   .post("https://reqres.in/api/users", finallyOrder)
    //   .then((response) => {
    //     setOrder(finallyOrder);
    //     console.log("Sipariş Özeti:", response.data);
    //     navigate("/done");
    //   })
    //   .catch((error) => {
    //     console.error("Sipariş Gönderim Hatası:", error);
    //     alert("Sipariş gönderilemedi. Lütfen tekrar deneyin.");
    //   });

    setOrder(finallyOrder);
    navigate("/done");
  };

  return (
    <div className="food-card">
      <div className="colored-div"></div>
      <div className="box">
        <img src={formBanner} className="form-banner" alt="Pizza Form Banner" />
        <div className="pizza-bilgi">
          <h2 className="pizza-name">Position Absolute Acı Pizza</h2>
          <div className="pizza-bilgi-ps">
            <h1 className="pizza-price">85.50₺ </h1>
            <p className="degerlendirme">
              (4.5) <IoMdStar className="değerlendirme-icon" />
            </p>
            <p className="degerlendirme">(200)</p>
          </div>
          <p className="pizza-description">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir.
          </p>
        </div>
        <form className="form-component" onSubmit={handleSubmit}>
          <div className="boyut-hamur">
            <div className="radio-container">
              <h3>Boyut Seç*</h3>
              <div className="radio-group">
                {pizzaSizes.map((size) => (
                  <label
                    key={size}
                    className={`radio-label ${
                      formData.size === size ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      onChange={handleChange}
                      checked={formData.size === size}
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>
            <div className="dough-group">
              <h3>Hamur Seç*</h3>
              <label>
                <select
                  className="dropbox"
                  id="dough"
                  name="dough"
                  onChange={handleChange}
                  value={formData.dough}
                >
                  <option value="" disabled hidden>
                    Hamur Kalınlığı Seç
                  </option>
                  {doughs.map((dough, index) => (
                    <option key={index} value={dough}>
                      {dough}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <h3>Ek Malzemeler:</h3>
          <p>En Fazla 7 malzeme seçebilirsiniz. 5₺</p>
          <div className="checkbox-container">
            {toppingsOptions.map((topping) => (
              <label key={topping} className="checkbox-item">
                <input
                  type="checkbox"
                  value={topping}
                  checked={formData.toppings.includes(topping)}
                  onChange={handleToppingChange}
                />
                {topping}
                <div className="checkmark"></div>
              </label>
            ))}
          </div>
          <div>
            <h3>Sipariş Notu:</h3>
            <label>
              <textarea
                className="textarea"
                name="note"
                placeholder="Siparişe eklemek istediğiniz bir not var mı?"
                value={formData.note}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
          <div className="bottom-container">
            <div className="buttons">
              <button type="button" className="decrase-btn" onClick={decrease}>
                -
              </button>
              <button type="button" className="count">
                {count}
              </button>
              <button type="button" className="incrase-btn" onClick={increase}>
                +
              </button>
            </div>
            <div className="siparis-toplami">
              <div className="siparisler">
                <p>Sipariş Toplamı:</p>
                <p>Seçimler: {formData.toppings.join(", ")}</p>
                <p>Toplam: {total} TL</p>
              </div>
              <button type="submit" className="siparis-button">
                Sipariş Ver
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
