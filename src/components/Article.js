import React from "react";
import {
  Card,
  Container,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

import article1 from "../img/article1.png";
import cardmenu from "../img/cardmenu.svg";
import share from "../img/share.svg";
import user1 from "../img/user1.jpg";

const Article = ({
  articleimg = `${article1}`,
  title = "article",
  heading = "I am heading",
  content = "I am content",
  name = "John",
  profile = `${user1}`,
  views = "1.4k",
}) => {
  return (
    <Card className="articlecard mt-5">
      <CardImg top className="img" height="220" src={articleimg} />
      <CardBody className="text-left mt-2 ms-4">
        <CardText className="title">{title}</CardText>
        <Row>
          <Col md="11" style={{ display: "flex", alignItems: "center" }}>
            <CardTitle className="cardtitle">{heading}</CardTitle>
          </Col>
          <Col style={{ display: "flex", alignItems: "center" }}>
            <img src={cardmenu} alt="cardmenu" className="cardmenu" />
          </Col>
        </Row>

        <CardText className="secondary">{content}</CardText>
        <CardFooter className="cardfooter mt-5 mb-3 ">
          <Row>
            <Col md="9" style={{ display: "flex", alignItems: "center" }}>
              <img height="48" width="48" className=" profile" src={profile} />
              <span className="name">{name}</span>
            </Col>
            <Col md="3" style={{ display: "flex", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="views">{views} views</span>

                <img
                  src={share}
                  className="share"
                  alt="cardmenu"
                  style={{ marginLeft: "5rem" }}
                />
              </div>
            </Col>
          </Row>
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export default Article;
