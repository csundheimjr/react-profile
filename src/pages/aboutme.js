import React from "react";
import { Container } from "react-bootstrap";
import carl from "./images/profile-pic.jpg";
import background from "./images/circuitboard-background.jpg";

export default function Aboutme() {
  const style = {
    backgroundImage: {},
    aboutme: {
      textAlign: "center",
    },
    carl: {
      textAlign: "center",
    },
    image: {
      width: "25%",
      borderRadius: "20%",
      margin: "25px",
    },
  };
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <Container style={style.carl}>
        <img
          style={style.image}
          src={carl}
          alt="Formal picture of Carl"
          class="profile-pic"
        />
      </Container>
      <Container style={style.aboutme}>
        <p class="p1">I was born in Derry, New Hampshire.</p>
        <p class="p1">
          I studied Mechanical Engineering and currently study Full-Stack
          programing.
        </p>
        <p class="p1">
          I enjoy R&D on custom parts for trucks, skis, snowmobiles and RC
          vehicles.
        </p>
      </Container>
    </div>
  );
}
