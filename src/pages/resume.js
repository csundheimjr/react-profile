import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import resume from "./images/resume.png";
import resumepdf from "./images/CarlSundheimResume.pdf";

export default function Resume() {
  const style = {
    resume: {
      marginTop: "40px",
      marginBottom: "40px",
      textAlign: "center",
    },
  };
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <Row style={style.resume}>
        <h2>Click the resume to download..</h2>
        <a href={resumepdf} target="_blank">
          <img src={resume} alt="Resume" />
        </a>
      </Row>
    </div>
  );
}
