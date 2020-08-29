import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {

    const [articles,setArticles] = useState([]);

    useEffect( ()=>{
        fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=b093438169e44148aa7051053a7a930e')
        .then(response =>response.json())
        .then(data =>setArticles(data.articles));
    }, [])
    return (
        <div>
            <h1 className="bg-warning text-center py-3">Today's total headline : {articles.length}</h1>
            {
                articles.map(article =><News article={article}></News>)
            }
        </div>  
    );
};

export default TopHeadline;