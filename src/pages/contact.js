import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import linkedin from "./images/linkedin.png";
import mail from "./images/mail.jpg";
import phone from "./images/phone.jpg";

export default function Contact() {
  const style = {
    form: {
      marginTop: "30px",
    },
    linkedin: {
      height: 100,
      margin: "30px",
    },
    mail: {
      height: 100,
      margin: "10px",
    },
    phone: {
      height: 150,
      margin: "0px",
    },
    row: {
      textAlign: "center",
    },
  };
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <Container style={style.row}>
        <p class="links">
          {/* <Row style={style.form}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Get in touch with me!</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Your name?" required />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write me a message!"
                  required
                />
              </Form.Group>
              <Button variant="outline-dark" type="submit">
                Submit
              </Button>
            </Form>
          </Row> */}
          <Row>
            <a
              href="https://www.linkedin.com/in/carl-sundheim-jr-b432b01b3/"
              target="_blank"
            >
              <img style={style.linkedin} src={linkedin} alt="LinkedIn logo" />
            </a>
          </Row>
          <Row>
            <a href="mailto:csundheim@gmail.com" target="_blank">
              <img style={style.mail} src={mail} alt="Envelope" />
            </a>
          </Row>
          <Row>
            <a href="tel:+16033002274">
              <img style={style.phone} src={phone} alt="Rotary phone" />
            </a>
          </Row>
        </p>
      </Container>
    </div>
  );
}
