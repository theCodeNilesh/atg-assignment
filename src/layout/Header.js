import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
  Button,
} from "reactstrap";

import facebook from "../img/facebook.svg";
import google from "../img/google.svg";
import illustration from "../img/illustration.svg";
import { Link } from "react-router-dom";

// import { UserContext } from "../context/UserContext";

import logo from "../img/logo.svg";
import downarrow from "../img/downarrow.svg";

const Header = () => {
  //   const context = useContext(UserContext); // values in usercontext stored in context var
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const modalToggel = () => {
    setModal(!modal);
  };

  return (
    <>
      <Navbar className="justify-content-between" light expand="md">
        <NavbarBrand>
          <img src={logo} alt="logo" className="logo" />
        </NavbarBrand>
        <div class="d-flex">
          <form class="d-flex form-inline mr-auto ml-auto">
            <input
              class="form-control  search icon"
              placeholder="Search for your favorite group in ATG"
              type="text"
            />
          </form>
        </div>
        <div
          className="navtxt"
          style={{ cursor: "pointer" }}
          onClick={modalToggel}
        >
          Create account. <span className="bluetxt">It's free!</span>
          <img
            src={downarrow}
            alt="downarrow"
            style={{ marginLeft: "0.7rem" }}
          />
        </div>
      </Navbar>

      <Modal
        id="myModal"
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable rounded-5 text-center "
        dialogClassName="border-radius-2"
        isOpen={modal}
        fade={true}
        toggle={modalToggel}
        // style={{ width: "40rem" }}
        centered={true}
        backdrop={"static"}
        size="lg"
        external={
          <button
            className="close btnclose "
            onClick={modalToggel}
            style={{ position: "absolute", right: "29%", top: "15%" }}
          >
            X
          </button>
        }
        toggle={modalToggel}
      >
        <ModalHeader
          toggle={modalToggel}
          style={{
            backgoundColor: "#EFFFF4 !important",
            border: "none",
          }}
        >
          <div className="modalheader">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now{" "}
          </div>
        </ModalHeader>
        <ModalBody className="mb-5">
          <Row>
            <Col className="ps-5 p-4">
              <div className="modalheading" style={{ textAlign: "left" }}>
                Create Account
              </div>
              <Row className="g-0 mt-5">
                <Col>
                  <input
                    type="text"
                    className="firstname"
                    placeholder="First Name"
                  />
                </Col>

                <Col>
                  <input
                    type="text"
                    className="firstname"
                    placeholder="Last Name"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="text"
                    className="firstname"
                    placeholder="Email"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="password "
                    className="firstname eye"
                    placeholder="Password"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="text"
                    className="firstname"
                    placeholder="Confirm Password"
                  />
                </Col>
              </Row>
              <Row className="mt-5 mb-5">
                <Button color="primary submitbtn">Create Account</Button>
              </Row>

              <Row>
                <div
                  className="footerbtn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={facebook} alt="facebook" className="me-3" />
                  <span className="footertxt"> Sign up with Facebook</span>
                </div>
              </Row>
              <Row className="mt-4">
                <div
                  className="footerbtn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={google} alt="google" className="me-3" />
                  <span className="footertxt"> Sign up with Google </span>
                </div>
              </Row>
            </Col>

            <Col className="pe-5 p-4">
              <Row className="mt-3">
                <div className="illustxt" style={{ textAlign: "right" }}>
                  Already have an account?
                  <span
                    className="ms-2"
                    style={{
                      color: "#339AF0",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Sign In
                  </span>
                </div>
              </Row>
              <Row
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={illustration} alt="illustration" className="mt-5" />
              </Row>
              <Row className="mt-3">
                <div
                  className="illustxt"
                  style={{
                    textAlign: "center",
                    opacity: "60%",
                    fontSize: "1.1rem",
                  }}
                >
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </div>
              </Row>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Header;
