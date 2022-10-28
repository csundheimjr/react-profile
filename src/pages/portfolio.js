import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import github from "./images/github.png";
import fff from "./images/fff-logo.jpg";

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
        <Row style={style.row}>
          <a href="https://github.com/csundheimjr" target="_blank">
            <img src={github} alt="Cat GITHUB logo" />
          </a>
        </Row>
        <div style={{ borderBottom: "5px solid black" }}></div>
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
        <div style={{ borderBottom: "5px solid black" }}></div>
        <Row style={style.row}>
          <h1>Coming soon..</h1>
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
        <div style={{ borderBottom: "5px solid black" }}></div>
      </Container>
    </div>
  );
}
