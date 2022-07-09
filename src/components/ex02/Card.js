import React, { Component } from "react";
import "./style.css";

class Card extends Component {
  state = {
    products: [
      {
        name: "Luxurious Granite Ball",
        description:
          "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        price: "480.00",
        id: "1",
      },
      {
        name: "Small Fresh Gloves",
        description:
          "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        price: "533.00",
        id: "2",
      },
      {
        name: "Intelligent Rubber Hat",
        description:
          "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        price: "342.00",
        id: "3",
      },
      {
        name: "Licensed Cotton Chair",
        description:
          "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        price: "503.00",
        id: "4",
      },
      {
        name: "Incredible Wooden Tuna",
        description:
          "The Football Is Good For Training And Recreational Purposes",
        price: "466.00",
        id: "5",
      },
      {
        name: "Gorgeous Metal Bacon",
        description:
          "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        price: "275.00",
        id: "6",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <div className='card__container'>
          {this.state.products.map((product) => {
            const { name, description, price, id } = product;
            return (
              <div className="card" key={id}>
                <div className="card__content">
                  <div className="card__title">{name}</div>
                    <ul className="card__description">
                      <li>{price} $</li>
                      <li>{description}</li>
                    </ul>
                    <div className="control__button">
                      <button class="card__button">Read now</button>
                    </div>
                    
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Card;
