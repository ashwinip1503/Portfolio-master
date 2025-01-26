import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashwini Padwal </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently pursuing my Master's in Computer Applications.
            <br />
            With expertise in front-end technologies like HTML, CSS, JavaScript, React, and the MERN stack (MongoDB, Express.js, Node.js), I enjoy creating web applications that make a difference.
            <br />
          </p>
         

          <p style={{ color: "rgb(155 126 172)" }}>
            "Feel free to connect with me—I love collaborating on innovative ideas! 💻🚀"{" "}
          </p>
          <footer className="blockquote-footer">Ashwini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
