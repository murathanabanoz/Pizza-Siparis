import React from "react";
import "../css/Done.css";

const Done = ({ order }) => {
  console.log(order);
  return (
    <div className="done-card">
      <h3 className="lezzet">lezzetin yolda</h3>
      <h1 className="done-text">SİPARİŞ ALINDI</h1>
      <hr className="hr" />

      <h4 className="name">Position Absolute Acı Pizza</h4>
      <div className="siparis-bilgi">
        <h5>
          Boyut: <span> {order.size}</span>
        </h5>
        <h5>
          Hamur: <span>{order.dough}</span>
        </h5>
        <h5>
          Ek Malzemeler: <span> {order.toppings.join(", ")}</span>
        </h5>
        <h5>{order.count} adet pizza</h5>
      </div>
      <div className="siparis-box">
        <h4>Sipariş Toplamı</h4>
        <h5>
          Seçimler: <span>{`${order.totalToppingPrice} TL`}</span>
        </h5>
        <h5>
          Toplam <span>{`${order.total} TL`}</span>
        </h5>
      </div>
    </div>
  );
};
export default Done;
