import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://book-server-mu.vercel.app/news-categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
   


    return (
        <div>
            <h4 className='bg-red-100'>All catagories </h4>
            
            <div >
                {
                    categories.map(category => <p key={category.id}>
                        <Link className='no-underline border-2 border-indigo-600' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;