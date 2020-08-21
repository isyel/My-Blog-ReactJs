import React from 'react';

import articleContent from './articles-content';
import ArticlesList from '../components/ArticlesList';


const ArticlesListPage = () => (
    
    <>
        <h2>Articles</h2>
        <ArticlesList articles={articleContent} />
    </>
)

export default ArticlesListPage;