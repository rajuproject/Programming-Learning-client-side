import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  
    return (
        <div className='container mb-10'>
     <Card className="text-center">
      <Card.Header><h2> JavaScript Learn</h2></Card.Header>
      <Card.Body>
        <Card.Title>Special Discount Every Course </Card.Title>
        <Card.Text>
          High Quality All Courses
        </Card.Text>
        <Link  className='no-underline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' to='/courses'> Buy Courses</Link> 
      </Card.Body>
     
    </Card>

        </div>
    );
};

export default Home;