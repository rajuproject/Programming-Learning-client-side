import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../NewsSummaryCard/NewsSummaryCard';


const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div className='container'>
           
            {
                categoryNews.map(news =>
                    
                <NewsSummaryCard
                    key={news._id}
                    news={news}
                    
                ></NewsSummaryCard>
                
               )
                
            }
            
        </div>
    );
};

export default Category;