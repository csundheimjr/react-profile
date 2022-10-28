import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import resume from "./images/resume.png";
import resumepdf from "./images/CarlSundheimResume.pdf";

export default function Resume() {
  const style = {
    text: {
      marginTop: "40px",
      marginBottom: "40px",
      textAlign: "center",
      justifyContent: "center",
    },
    resume: {
      marginTop: "40px",
      marginBottom: "40px",
      // textAlign: "center",
      justifyContent: "center",
      width: "75%",
    },
  };
  return (
    <div>
      <Container style={style.text} sm={3}>
        <h2>Click resume to open PDF & download..</h2>

        <a href={resumepdf} target="_blank">
          <img style={style.resume} src={resume} alt="Resume" />
        </a>
      </Container>
    </div>
  );
}
