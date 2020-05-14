import React, { Component } from "react";
import { FaCocktail, FaCar, FaShuttleVan, FaBitcoin} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Enjoy a Complimentary Glass of Dom Perignon"
      },
      {
        icon: <FaCar />,
        title: "Rare Cars",
        info:
          "You wont find these Cars anywhere else"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "We Pick you up to see our Lot"
      },
      {
        icon: <FaBitcoin />,
        title: "Bitcion",
        info:
          "Were the only company that accepts bitcoin"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
