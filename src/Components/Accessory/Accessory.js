import React from "react";
import {v4 as uuidv4} from 'uuid';
import {accessoryData} from '../../data/data'
import './Accessory.scss'

const Accessory = () => {
  return (
    <section className="accessory section bd-container" name="accessory">
      <div className="section-title">
        Nouveaux accessoires <br /> de noël
      </div>
      <div className="accessory__container bd-grid">
        {accessoryData.map((el) => {
          return (
            <div key={uuidv4()} className="accessory__content">
              <img
                src={el.image}
                alt=""
                className="accessory__img"
              />
              <h3 className="accessory__title">{el.title}</h3>
              <span className="accessory__category">Accessoires</span>
              <span className="accessory__preci">{el.price}</span>
              <a href="#" className="button accessory__button">
              <box-icon color='white' name='heart' ></box-icon>

               
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accessory;
