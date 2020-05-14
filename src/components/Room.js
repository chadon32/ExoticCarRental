import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/exoticcar3.jpg";
import PropTypes from "prop-types";
import { memo } from "react";
const Room = memo(({ room }) => {
  const { name, slug, images, price } = room;

  return (
    <article className="vehicle">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single car" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per Day</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Room;
