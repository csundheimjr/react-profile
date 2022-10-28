import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Aboutme from "./pages/aboutme";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import background from "./pages/images/circuitboard-background.png";

function App() {
  const style = {
    name: {
      textAlign: "center",
    },
    footer: {
      justifyContent: "center",
      backgroundColor: "transparent",
    },
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        overflow: "scroll",
        // filter: "blur(5px)",
      }}
    >
      <Router>
        <Container>
          <header>
            <Row>
              <h1 style={style.name}>Carl Sundheim</h1>
            </Row>
            <Row>
              <Col style={style.name} sm={3}>
                <Link to="/aboutme">About me</Link>
              </Col>
              <Col style={style.name} sm={3}>
                <Link to="/portfolio">Portfolio</Link>
              </Col>
              <Col style={style.name} sm={3}>
                <Link to="/contact">Contact</Link>
              </Col>
              <Col style={style.name} sm={3}>
                <Link to="/resume">Resume</Link>
              </Col>
            </Row>
          </header>
        </Container>
        <Route exact path="/">
          <Redirect to="/aboutme"></Redirect>
        </Route>
        <Route exact path="/aboutme">
          <Aboutme />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Router>
      <Container>
        <footer>
          <Row>
            <Col style={{ textAlign: "center" }} sm={4}>
              <a href="https://github.com/csundheimjr">GitHub</a>
            </Col>
            <Col style={{ textAlign: "center" }} sm={4}>
              <a href="https://www.linkedin.com/in/carl-sundheim-jr-b432b01b3/">
                Linkedin
              </a>
            </Col>
            <Col style={{ textAlign: "center" }} sm={4}>
              <a href="https://www.facebook.com/carl.sundheim/">FaceBook</a>
            </Col>
          </Row>
          <Row style={style.footer}>
            Carl Sundheim Portfolio created with React
          </Row>
        </footer>
      </Container>
    </div>
  );
}

export default App;
