import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

import user1 from "../img/user1.jpg";

const GroupItems = ({ followimg = `${user1}`, followname = "Name" }) => {
  const [follow, setFollow] = useState(false);

  const followed = () => {
    setFollow(!follow);
  };
  return (
    <Card className="groupcard mt-3">
      <CardBody className="text-left align-middle">
        <Row>
          <Col md="2">
            <img
              height="36"
              width="36"
              className=" profilegroup "
              src={followimg}
            />
          </Col>
          <Col
            md="6"
            className="align-middle ms-2"
            style={{ display: "flex", alignItems: "center" }}
          >
            <h1 className="grouptxt ">{followname}</h1>
          </Col>
          <Col md="3" style={{ display: "flex", alignItems: "center" }}>
            <Button
              onClick={followed}
              className={follow ? "followedbtn" : "followbtn"}
            >
              Follow
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default GroupItems;
