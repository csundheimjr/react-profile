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
        <p class="p1">
          In October of 2022 I recieved my certificate from The University of
          Denver for Full Stack Coding and Web Development.
        </p>

        <p class="p1">
          The University of Denver edX Boot Camp curriculum includes: MERN
          Stack, React, Progressive Web Applications (PWA), Model View
          Controller (MVC), Object Relational Mapping, Object Oriented
          Programing (OOP), HTML, CSS, GIT flow, JavaScript, Bootstrap, JQuery,
          API, JSON, AJAX, Node, ES6, Express, MySQL, NoSQL.
        </p>

        <div>
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="85d9494a-73b8-4231-96bf-088a473ba53b"
            data-share-badge-host="https://www.credly.com"
          ></div>
          <script
            type="text/javascript"
            async
            src="//cdn.credly.com/assets/utilities/embed.js"
          ></script>
        </div>

        <p class="p1">
          I studied Mechanical Engineering at Rochester Institute of Technology
          in upstate New York.
        </p>
        <p class="p1">
          I enjoy design, research and development of custom parts for trucks,
          skis, snowmobiles and remote control vehicles.
        </p>
        <p class="p1">
          I look forward to honing and expanding my skills in software to
          utilize in my hobbies and a rewarding career.
        </p>
      </Container>
    </div>
  );
}
