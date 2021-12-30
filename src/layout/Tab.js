import React, { useState } from "react";
import {
  Container,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Col,
} from "reactstrap";

import facebook from "../img/facebook.svg";
import google from "../img/google.svg";
import illustration from "../img/illustration.svg";

const Tab = () => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const modalToggel = () => {
    setModal(!modal);
  };

  const modalToggel2 = () => {
    setModal2(!modal2);
  };
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
            onClick={modalToggel}
          >
            <span class="icon"></span>
            Join Group
          </Button>
        </div>
        <div className="">
          <Dropdown className="topnav-right " isOpen={false} toggle={true}>
            <DropdownToggle
              caret
              className="dropdownbtn"
              onClick={modalToggel2}
            >
              Write a Post
            </DropdownToggle>
          </Dropdown>
        </div>
      </div>
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
                      onClick: { modalToggel2 },
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

      <Modal
        id="myModal"
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable rounded-5 text-center "
        dialogClassName="border-radius-2"
        isOpen={modal2}
        fade={true}
        toggle={modalToggel2}
        // style={{ width: "40rem" }}
        centered={true}
        backdrop={"static"}
        size="lg"
        external={
          <button
            className="close btnclose "
            onClick={modalToggel2}
            style={{ position: "absolute", right: "29%", top: "20%" }}
          >
            X
          </button>
        }
        toggle={modalToggel2}
      >
        <ModalHeader
          toggle={modalToggel2}
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
        <ModalBody className="mb-2">
          <Row>
            <Col className="ps-5 p-4">
              <div className="modalheading" style={{ textAlign: "left" }}>
                Sign In
              </div>

              <Row className="mt-5">
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

              <Row className="mt-5 mb-5">
                <Button color="primary submitbtn">Sign In </Button>
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
                  <span className="footertxt"> Sign in with Facebook</span>
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
                  <span className="footertxt"> Sign in with Google </span>
                </div>
              </Row>

              <Row>
                <div className="forgettxt mt-4">Forgot Password?</div>
              </Row>
            </Col>

            <Col className="pe-5 p-4">
              <Row className="mt-3">
                <div className="illustxt" style={{ textAlign: "right" }}>
                  Don’t have an account yet?
                  <span
                    className="ms-2"
                    style={{
                      color: "#339AF0",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Create new for free!
                  </span>
                </div>
              </Row>
              <Row>
                <img src={illustration} alt="illustration" className="mt-3" />
              </Row>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default Tab;
