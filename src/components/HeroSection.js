import React from "react";

import heroimg from "../img/heroimg.png";
import { Container } from "reactstrap";

const HeroSection = () => {
  return (
    <Container fluid className="cont g-0">
      <Container fluid>
        <img src={heroimg} alt="heroimg" className="heroimg" />
        {/* <div className="herocontent offset-md-2">
          <h1 className=" herotxt">Computer Engineering</h1>
          <h2 className="subherotxt">142,765 Computer Engineers follow this</h2>
        </div> */}
      </Container>
    </Container>
  );
};

export default HeroSection;
