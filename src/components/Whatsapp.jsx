import React from "react";
import "./Whatsapp.css";

const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=+5492234484142&text=Hola%20soy%20John%20Rolls.%20D%C3%A9jame%20tu%20mensaje%20y%20me%20comunicar%C3%A9%20a%20la%20brevedad%20posible%20con%20vos.%20%20Muchas%20gracias.%20%F0%9F%99%8F"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default Whatsapp;
