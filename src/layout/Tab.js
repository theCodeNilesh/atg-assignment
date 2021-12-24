import React from "react";
import {
  Container,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const Tab = () => {
  return (
    <Container>
      <div class="topnav mt-3 ">
        <a href="#home" class="active">
          All Posts(32)
        </a>
        <a href="#news">Article</a>
        <a href="#contact">Event</a>
        <a href="#contact">Education</a>
        <a href="#contact">Job</a>

        <div>
          <Button
            className="groupbtn"
            color="primary"
            style={{
              float: "right",
              borderRadius: "0.4rem",
            }}
          >
            <span class="icon"></span>
            Join Group
          </Button>
        </div>
        <div className="">
          <Dropdown className="topnav-right " isOpen={false} toggle={true}>
            <DropdownToggle caret className="dropdownbtn">
              Write a Post
            </DropdownToggle>
          </Dropdown>
        </div>
      </div>
    </Container>
  );
};

export default Tab;
