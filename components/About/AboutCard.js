import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">DJ Cynthia Alanis </span>
            from Orange County,<span className="purple"> California</span>
            <br />I'm thrilled to have this opportunity to share a bit about myself and my passion for web design.
            <br />
          </p>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;