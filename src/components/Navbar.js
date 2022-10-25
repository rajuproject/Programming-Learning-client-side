
import { Avatar,Dropdown, Navbar } from 'flowbite-react';
// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import {AuthContext} from '../contexts/UserContext'


const Navba = () => {
  //  const {user, logout} = useContext(AuthContext)
  return (
    
    <Navbar className='container bg-sky-500'
    fluid={true}
    rounded={true}
  >
    <Link to='/'>
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Javascript Learn
      </span>
    </Link>
    <div className="flex md:order-2">
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
      >
        <Dropdown.Header>
          <span className="block text-sm">
            Bonnie Green
          </span>
          <span className="block truncate text-sm font-medium">
            name@flowbite.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
        </Dropdown.Item>
        <Dropdown.Item>
          Earnings
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>

          <button>Sign out</button>
        </Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Link to="home">
        Home
      </Link>
      <Link to="courses">
        Courses
      </Link>
      <Link to="blog">
        Blog
      </Link>
      <Link to="login">
        Login
      </Link>
      <Link to="Faq">
        FAQ
      </Link>
    </Navbar.Collapse>
  </Navbar>
  
  );
};

export default Navba;