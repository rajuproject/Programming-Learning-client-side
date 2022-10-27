import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
// import Button from 'react-bootstrap/Button';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';



// import { Image } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser, FaAccessibleIcon} from 'react-icons/fa';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
// import LeftSideNav from '../LeftSideNav/LeftSideNav';
// import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Link to='/' className='font-bold no-underline'> <FaAccessibleIcon className='w-50 fw-bold'></FaAccessibleIcon> Programming Learning</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                         <Link className='ml-5 no-underline bg-indigo-500 rounded-lg text-white p-1 ' to="/courses">Courses</Link>
                         <Link className='ml-5 no-underline bg-indigo-500 rounded-lg text-white p-1 ' to="/faq">Faq</Link>
                         <Link className='ml-5 no-underline bg-indigo-500 rounded-lg text-white p-1 ' to="/blog">Blog</Link>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'className='ml-5 no-underline bg-indigo-500 rounded-lg text-white p-1'>Login</Link>
                                        <Link to='/register' className='ml-5 no-underline bg-indigo-500 rounded-lg text-white p-1 mr-5'>Register</Link>
                                    </>
                            }


                        </>
                        <Link to="/profile">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '40px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }

                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;