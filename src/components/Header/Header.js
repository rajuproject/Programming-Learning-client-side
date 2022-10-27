import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

import { FaUser, FaAccessibleIcon } from 'react-icons/fa';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { useState } from 'react'
import { Switch } from '@headlessui/react'


const Header = () => {
    const [enabled, setEnabled] = useState(false)
    const { user, logOut } = useContext(AuthContext);

    // logout 

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

                        <Link className=' ml-5 no-underline bg-indigo-500 rounded-lg text-white p-1 ml-6 ' to="/courses">Courses</Link>
                        <Link className='ml-5 no-underline bg-indigo-500 rounded-lg text-white p-2 ml-6 ' to="/faq">Faq</Link>
                        <Link className='ml-5 no-underline bg-indigo-500 rounded-lg text-white p-2 ml-6 mr-8 ' to="/blog">Blog</Link>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
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
                                        <Link to='/login' className='ml-5 no-underline bg-indigo-500 rounded-lg text-white p-1'>Login</Link>
                                        <Link to='/register' className='ml-5 no-underline bg-indigo-500 rounded-lg text-white p-1 mr-5'>Register</Link>
                                    </>
                            }


                        </>
                        <Link to="/profile" aria-label='Home'
                            title={user?.displayName}>

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