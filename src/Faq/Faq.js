import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <div>
             
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Will you provide website layout about design ?</Accordion.Header>
        <Accordion.Body>
        A website layout is the arrangement of all visual elements on a webpage. Through the intentional positioning of page elements, we can control the relationship between them to better guide the user experience
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How much does cost to design website ?</Accordion.Header>
        <Accordion.Body>
        Fortunately, we aren't just designers and developers here we are writer strategists, techs and creatives working towards the same end goal our client’s success. As a full-service digital marketing agency
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How many revisions can i make the design ?</Accordion.Header>
        <Accordion.Body>
        One to three rounds of revisions are common for graphic design projects. As rounds of revisions progress, each round should get less complicated. The scenarios below explain why you may want, or need, a certain amount of revisions from your graphic design company, and what the pros and cons are for your design team.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Can i uplode this design in my personal work?</Accordion.Header>
        <Accordion.Body>
        Uploading images to Canva needs a stable internet connection. If available, try to connect to a faster or more stable network before trying to upload your files. If you don't have a second network, try to reset your connection before uploading again.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Do you have discounts for returning customers ?</Accordion.Header>
        <Accordion.Body>
        Fortunately, we aren’t just designers and developers here we are writer strategists, techs and creatives working towards the same end goal our client’s success. As a full-service digital marketing agency.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        
    );
};

export default Faq;