import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Exotic Cars "
          subtitle="starting at $499"
        >
          <Link to="/rooms" className="btn-primary">
            our Cars
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;
