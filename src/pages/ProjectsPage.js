import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import bibleCategoriesImage from '../assets/bible-categories-image.png';
import reviewSpotterImage from '../assets/review-spotter-image.png';
import doggoImage from '../assets/doggo-image.png';
import gymAmenitiesImage from '../assets/gym-amenities-image.png';
import jobBoardImage from '../assets/job-board-image.png';
import wnbaJobsImage from '../assets/wnba-jobs.png';
import flickBffImage from '../assets/flick-bff.png';
import trackAMealImage from '../assets/track-a-meal.png';
import WPIImage from '../assets/wpi-edu.png'

function ProjectsPage() {
  const portfolioProjects = [
    {
      title: 'Worcester Polytechnic Institute Website & Faculty Pages',
      description:
        'Worked on WPI’s university website by adding and editing modules and blocks, customizing themes, and writing PHP code for custom functionality. Also maintained WordPress faculty pages including bios, profile images, and social/email links.',
      techStack: ['Drupal', 'WordPress', 'PHP', 'BEM', 'Acquia'],
      githubLink: '',
      liveDemo: 'https://wpi.edu',
      image: WPIImage
    },
    {
      title: 'Job Board App',
      description:
        'A React.js and Next.js application that helps users find job listings based on location and skills.',
      techStack: ['React', 'Next.js', 'Tailwind CSS'],
      githubLink: 'https://github.com/ibsaajadam/job-board',
      liveDemo: 'https://updated-job-board.netlify.app/',
      image: jobBoardImage
    },
    {
      title: 'Motivational Quotes Categories App',
      description:
        'A React and TypeScript app to browse Motivational Quotes from different people.',
      techStack: ['React', 'TypeScript', 'Bootstrap', 'JSON'],
      githubLink: 'https://github.com/ibsaajadam/motivational-quotes',
      liveDemo: 'https://motivational-quotes123.netlify.app/',
      image: bibleCategoriesImage
    },
    {
      title: 'Review Spotter',
      description:
        'A React app where users can browse attractions, leave reviews, and rate attractions.',
      techStack: ['React', 'Firebase', 'Bootstrap', 'CSS'],
      githubLink: 'https://github.com/ibsaajadam/review-spotter',
      liveDemo: 'https://review-spotter.netlify.app/',
      image: reviewSpotterImage
    },
    {
      title: "That's My Doggo",
      description:
        'A PHP and MySQL project with an API that searches for different dog breeds. Uses JavaScript for dynamic interaction.',
      techStack: ['PHP', 'MySQL', 'JavaScript', 'API'],
      githubLink: 'https://github.com/ibsaajadam/hey-buddy-php-mysql',
      liveDemo: '',
      image: doggoImage
    },
    {
      title: 'Gym Amenities',
      description:
        'A Python Flask app that allows users to view gym amenities and court availability. Data is stored in SQLite and served dynamically.',
      techStack: ['Python', 'Flask', 'SQLite', 'Tailwind CSS'],
      githubLink: 'https://github.com/ibsaajadam/gym-amenities',
      image: gymAmenitiesImage
    },
    {
      title: 'WNBA Jobs Site',
      description:
        'A mock WNBA jobs site built with React.js. Users can log in using Google OAuth 2.0, add and delete job listings that are stored and retrieved from Google Firebase Firestore.',
      techStack: ['React', 'Google OAuth 2.0', 'Firebase Firestore', 'Bootstrap'],
      githubLink: 'https://github.com/ibsaajadam/React.js-WNBA',
      liveDemo: 'https://react-jobs-500ec.web.app/',
      image: wnbaJobsImage
    }
  ];

  const personalProjects = [
    {
      title: 'Flick BFF',
      description:
        'A social network for movie lovers. Users can build watchlists, connect with others based on shared movie and show preferences, and follow friends.',
      techStack: ['React.js', 'TMDb API', 'TailwindCSS', 'Firebase Storage'],
      githubLink: '',
      liveDemo: 'https://flickbff.com/',
      image: flickBffImage
    },
    {
      title: 'Track A Meal',
      description:
        'A nutrition-focused website that helps users explore nutritional info from popular fast food chains.',
      techStack: ['React.js', 'TailwindCSS', 'Firebase Storage'],
      githubLink: '',
      liveDemo: 'https://trackameal.com/',
      image: trackAMealImage
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
              <strong>Technologies:</strong> {project.techStack.join(', ')}
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

      <hr className="my-5" />

      <h2 className="mb-4">Personal Projects</h2>
      <Row>{renderProjects(personalProjects)}</Row>
    </Container>
  );
}

export default ProjectsPage;
