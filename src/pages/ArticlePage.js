import React, { useState, useEffect } from 'react';

import articleContent from './articles-content'
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = ({ match }) => {
    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});
    
    const name = match.params.name

    useEffect( () => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    const article = articleContent.find(article => article.name === name)
    
    if(!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name)

    return (
        <>
            <h2>{article.title}</h2>
            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
            {article.content.map ((paragraph, key) =>  (
                <p key={key}>{paragraph}</p>
            ))}

            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <CommentsList comments={articleInfo.comments} />

            <h3>Other Posts</h3>
            <ArticlesList  articles={otherArticles} />
        </>
    )
}

export default ArticlePage;