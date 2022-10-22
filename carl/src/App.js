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

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Row>
            <Col sm={3}>
              <Link to="/aboutme">About me</Link>
            </Col>
            <Col sm={3}>
              <Link to="/portfolio">Portfolio</Link>
            </Col>
            <Col sm={3}>
              <Link to="/contact">Contact</Link>
            </Col>
            <Col sm={3}>
              <Link to="/resume">Resume</Link>
            </Col>
          </Row>
        </Container>
        <Route exact path="/">
          <Redirect to="/portfolio"></Redirect>
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
    </div>
  );
}

export default App;
