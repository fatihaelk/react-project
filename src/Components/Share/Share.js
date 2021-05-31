import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import gift from "../../img/shared.png";
import "./Share.scss";

const Share = () => {
  return (
<section className="share section bd-container" name="share">
      <div className="share__container bd-grid">
        <div className="share__img">
          <img src={gift} alt="sharing gift" />
        </div>
        <div className="share__data">
        <h2 className="section-title-center">
               
               Le partage est le meilleur cadeau <br /> que vous puissez donner
             </h2>
             <p className="share__description">
               Partager les vacances est le plus beau cadeau que vous ayez
               offert, offrez un cadeau ou partagez votre amour avec les
               personnes que vous aimez le plus et célébrez avec beaucoup de
               joie.
             </p>
          <Button link={'#'} children={'Send a Gift'} />
        </div>
      </div>
    </section>
  );
};

export default Share;
