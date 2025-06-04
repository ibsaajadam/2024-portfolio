import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';

import jobBoardImage from '../assets/job-board-image.png';
import FlickBFFImage from '../assets/flickbff.png';
import TrackAMealImage from '../assets/trackameal.png';

function ProjectsPage() {
  const portfolioProjects = [
    {
      title: 'Job Board App',
      description:
        'A React.js and Next.js application that helps users find job listings based on location and skills.',
      techStack: ['React', 'Next.js', 'Tailwind CSS'],
      githubLink: 'https://github.com/ibsaajadam/job-board',
      liveDemo: 'https://updated-job-board.netlify.app/',
      image: jobBoardImage
    }
  ];

  const personalProjects = [
    {
      title: 'Flick BFF',
      description:
        'A movie matching social network that connects users based on similar movie and TV show preferences. Built with React, uses Google Authentication, and pulls data from the TMDB API.',
      techStack: ['React', 'Google Sign-In', 'TMDB API', 'Bootstrap', 'Tailwind CSS'],
      githubLink: '',
      liveDemo: 'https://flickbff.com/',
      image: FlickBFFImage
    },
    {
      title: 'Track A Meal',
      description:
        'A calorie tracking app focused on fast food restaurants like Wendy’s and McDonald’s. Built with React and features Google Authentication.',
      techStack: ['React', 'Google Sign-In', 'Bootstrap', 'Tailwind CSS'],
      githubLink: '',
      liveDemo: 'https://trackameal.com/',
      image: TrackAMealImage
    }
  ];

  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <Col md={4} key={index} className="mb-4">
        <Card>
          {project.image && (
            <Card.Img variant="top" src={project.image} alt={`${project.title} image`} />
          )}
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Card.Text>
              <strong>Technologies:</strong>{' '}
              {project.techStack.map((tech, i) => (
                <span key={i} className="d-inline-block me-2">
                  {tech === 'Google Sign-In' ? (
                    <>
                      <FcGoogle style={{ marginBottom: '3px' }} /> {tech}
                    </>
                  ) : (
                    tech
                  )}
                  {i < project.techStack.length - 1 && ','}
                </span>
              ))}
            </Card.Text>
            {project.githubLink && (
              <Button variant="primary" href={project.githubLink} target="_blank">
                View Code
              </Button>
            )}{' '}
            {project.liveDemo && (
              <Button variant="secondary" href={project.liveDemo} target="_blank">
                Live Demo
              </Button>
            )}
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Portfolio Projects</h2>
      <Row>{renderProjects(portfolioProjects)}</Row>

      <h2 className="mb-4 mt-5">Personal Projects</h2>
      <Row>{renderProjects(personalProjects)}</Row>
    </Container>
  );
}

export default ProjectsPage;
