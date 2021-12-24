import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/Header";
import HeroSection from "./components/HeroSection";
import Tab from "./layout/Tab";
import Article from "./components/Article";

import { Container, Row, Col } from "reactstrap";
import Groups from "./components/Groups";

import article2 from "./img/article2.png";
import article3 from "./img/article3.png";
import user2 from "./img/user2.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Tab />
      <Container className="mb-5">
        <Row>
          <Col md="9">
            <Article
              title="article"
              heading="What if famous brands had regular fonts? Meet RegulaBrands! "
              content="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…  "
              views="1.5k"
            />
            <Article
              articleimg={article2}
              title="education"
              heading="Tax Benefits for Investment under National Pension Scheme launched by Government "
              content="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
              profile={user2}
              views="1.4k"
              name="Sarah West"
            />
          </Col>
          <Col md="3">
            <Groups />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
