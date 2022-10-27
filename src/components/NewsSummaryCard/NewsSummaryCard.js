import React from 'react';
import Pdf from "react-to-pdf";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';


const ref = React.createRef();

const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, details, image_url} = news;

    return (
        <div className="ml-5 h-100" ref={ref}>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                            roundedCircle
                            className='me-2'
                            src={author?.img}
                            style={{ height: '60px' }}
                        ></Image>
                        <div>
                            <p className='mb-0'>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </>
                                :
                                details
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">

                    <div>
                        <Link to='/premium' className='bg-blue-300'>Get Premium</Link>
                    </div>
                    <div>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button className='' onClick={toPdf}>Download</button>}
                        </Pdf>

                    </div>
                    <div>
                        <Link to="/courses">All Courses</Link>
                    </div>
                    <div>
                        <Link to={`/news/${_id}`}>Details</Link>
                    </div>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;