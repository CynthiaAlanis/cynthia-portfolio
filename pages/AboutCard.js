import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Link } from "react-router-dom";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Cynthia Alanis </span>
            <span className="purple"> from Orange County</span>
            <br />I'm thrilled to have this opportunity to share a bit about myself and my passion for Web Development.
            <br />
            <br />
            I find immense joy and fulfillment in creating an atmosphere that makes every occasion memorable and keeps the energy alive. Whether it's a wedding, a birthday , or  a corporate event, my primary goal is to ensure that my clients and their guests have an incredible time.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
           
            <Link
                as={Link}
                to="/project"><span className="purple">
                 Check out my Projects </span>
              </Link>
              </li>
          </ul>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;