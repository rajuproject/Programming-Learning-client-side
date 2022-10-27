import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import Home from '../components/Home';
import LeftSideNav from '../components/LeftSideNav/LeftSideNav';
import NewsSummaryCard from '../components/NewsSummaryCard/NewsSummaryCard';


const Courses = () => {
    const allNews = useLoaderData();
    return (
        <div>

            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="10">
                        <div className='grid grid-cols-1 md:grid-cols-3'>

                            {
                                allNews.map(news => <NewsSummaryCard
                                    key={news._id}
                                    news={news}
                                ></NewsSummaryCard>)
                            }
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default Courses;
{/* <Container>
<Row>
    <Col lg="2" className='d-none d-lg-block'>
        <LeftSideNav></LeftSideNav>
    </Col>
    <Col lg="10">
    <div className='grid grid-cols-1 md:grid-cols-3'>
     
     {
         allNews.map(news => <NewsSummaryCard
             key={news._id}
             news={news}
         ></NewsSummaryCard>)
     }
 </div>
    </Col>
</Row> */}

// </Container>