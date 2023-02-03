import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import github from "./images/github.png";
import fff from "./images/fff-logo.jpg";
import hobbyspot from "./images/hobbyspot.png";
import tripsplit from "./images/trip-split.png";
import passwordgenerator from "./images/passwordgenerator.png";
import weatherdashboard from "./images/weatherdashboard.png";
import ecommercebackend from "./images/ecommerce.png";

export default function Portfolio() {
  const style = {
    row: {
      marginTop: "20px",
      marginBottom: "20px",
    },
  };
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <Container style={{ textAlign: "center" }}>
        {/* github */}
        <Row style={style.row}>
          <a href="https://github.com/csundheimjr" target="_blank">
            <img src={github} alt="Cat GITHUB logo" />
          </a>
        </Row>
        <div style={{ borderTop: "5px solid black" }}></div>
        {/* friend finder */}
        <Row style={style.row}>
          <h1>Fuzzy Friend Finder</h1>
          <a
            href="https://csundheimjr.github.io/fuzzy-friend-finder/"
            target="_blank"
          >
            <img src={fff} alt="Dog logo" />
          </a>
          <h3>Click image for deployed site.</h3>
          <Button
            href="https://github.com/csundheimjr/fuzzy-friend-finder"
            style={{ width: "50%", margin: "auto", padding: "auto" }}
            variant="outline-dark"
          >
            Github repository
          </Button>
        </Row>
        <div style={{ borderTop: "5px solid black" }}></div>
        {/* hobbyspot */}
        <Row style={style.row}>
          <h1>Hobby Spot</h1>
          <a href="https://damp-reaches-02576.herokuapp.com/" target="_blank">
            <img style={{ width: "50%" }} src={hobbyspot} alt="Webpage" />
          </a>
          <h3>Click image for deployed site.</h3>
          <Button
            href="https://github.com/csundheimjr/HobbySpot"
            style={{ width: "50%", margin: "auto", padding: "auto" }}
            variant="outline-dark"
          >
            Github repository
          </Button>
        </Row>
        <div style={{ borderTop: "5px solid black" }}></div>
        {/* trip split */}
        <Row style={style.row}>
          <h1>Trip Split</h1>
          <a href="https://carltripsplit.netlify.app/" target="_blank">
            <img style={{ width: "50%" }} src={tripsplit} alt="Trip Split" />
          </a>
          <h3>Click image for deployed site.</h3>
          <Button
            href="https://github.com/csundheimjr/trip_split"
            style={{ width: "50%", margin: "auto", padding: "auto" }}
            variant="outline-dark"
          >
            Github repository
          </Button>
        </Row>
        <div style={{ borderTop: "5px solid black" }}></div>
        {/*Password generator */}
        <Row style={style.row}>
          <h1>Password Generator</h1>
          <a
            href="https://csundheimjr.github.io/password-generator/"
            target="_blank"
          >
            <img
              style={{ width: "50%" }}
              src={passwordgenerator}
              alt="Password app"
            />
          </a>
          <h3>Click image for deployed site.</h3>
          <Button
            href="https://github.com/csundheimjr/password-generator"
            style={{ width: "50%", margin: "auto", padding: "auto" }}
            variant="outline-dark"
          >
            Github repository
          </Button>
        </Row>
        <div style={{ borderTop: "5px solid black" }}></div>
        {/*weather dashboard */}
        <Row style={style.row}>
          <h1>Weather Dashboard</h1>
          <a
            href="https://csundheimjr.github.io/weather-dashboard/"
            target="_blank"
          >
            <img
              style={{ width: "50%" }}
              src={weatherdashboard}
              alt="Weather app"
            />
          </a>
          <h3>Click image for deployed site.</h3>
          <Button
            href="https://github.com/csundheimjr/weather-dashboard"
            style={{ width: "50%", margin: "auto", padding: "auto" }}
            variant="outline-dark"
          >
            Github repository
          </Button>
        </Row>
        <div style={{ borderTop: "5px solid black" }}></div>
        {/*ecommerce backend */}
        <Row style={style.row}>
          <h1>Ecommerce Backend</h1>
          <a
            href="https://drive.google.com/file/d/1KVq7zBlIciNLE_2iBI1WDT0b0cUjdU57/view"
            target="_blank"
          >
            <img
              style={{ width: "50%" }}
              src={ecommercebackend}
              alt="Weather app"
            />
          </a>
          <h3>Click image for deployed site.</h3>
          <Button
            href="https://github.com/csundheimjr/ecommerce-backend"
            style={{ width: "50%", margin: "auto", padding: "auto" }}
            variant="outline-dark"
          >
            Github repository
          </Button>
        </Row>
        <div style={{ borderTop: "5px solid black" }}></div>
        {/* comingsoon */}
        <Row style={style.row}>
          <h1>More coming soon..</h1>
          <a href="https://csundheimjr.github.io/" target="_blank">
            <img
              style={{ width: "50%" }}
              src="https://media.istockphoto.com/vectors/coming-soon-text-drawing-vector-id1271496054?s=612x612"
              alt="Comming soon"
            />
          </a>
          <h3>Click image for deployed site.</h3>
          <Button
            href="https://github.com/csundheimjr"
            style={{ width: "50%", margin: "auto", padding: "auto" }}
            variant="outline-dark"
          >
            Github repository
          </Button>
        </Row>
      </Container>
    </div>
  );
}
