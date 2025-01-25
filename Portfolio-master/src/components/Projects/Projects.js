import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import college from "../../Assets/Projects/College.png";
import food from "../../Assets/Projects/food.png";
import book from "../../Assets/Projects/book.png";
import uber from "../../Assets/Projects/uber.png";
import Todo from "../../Assets/Projects/Todo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uber}
              isBlog={false}
              title="UBER"
              description="A ride-hailing app built using the MERN stack (MongoDB, Express.js, React, Node.js). It features user authentication, location tracking, ride management, and real-time backend integration. The app offers a responsive and intuitive UI with optimized performance for a seamless experience."
              ghLink="https://github.com/ashwinip1503/Uber"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Delivery"
              description="Developed a feature-rich food delivery platform using the MERN stack (MongoDB, Express.js, React, Node.js). Key features include menu browsing, order placement, and real-time order tracking. Integrated Stripe for secure payment processing. Designed a responsive user interface and optimized backend performance for seamless functionality and scalability."
              ghLink="https://github.com/ashwinip1503/Food-Delivery"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="BookStore WebSite"
              description="Developed a full-stack bookstore application using the MERN stack (MongoDB, Express.js, React, Node.js). Features include book browsing, search functionality, and managing a collection of books (add, update, delete). Built a responsive and intuitive React.js frontend, integrated with a Node.js and Express.js backend for efficient CRUD operations. Data is stored in MongoDB for scalability and ease of management"
              ghLink="https://github.com/ashwinip1503/bookStoreApp-master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={college}
              isBlog={false}
              title="College Website Frontend"
              description="Developed a college website using React, featuring dynamic pages for courses, faculty, and
admissions. Implemented reusable components for scalability and enhanced user experience
through effective state management and smooth navigation."
              ghLink="https://github.com/ashwinip1503/COLLEGE-WEBSITE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="To-Do List"
              description="Created a dynamic ToDo List using HTML, CSS, and JavaScript, allowing users to add,
mark, or remove tasks. Implemented local storage for data persistence across page reloads,
utilizing DOM manipulation for real-time task management and interactivity.
"
              ghLink="https://github.com/ashwinip1503/ToDoList"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
