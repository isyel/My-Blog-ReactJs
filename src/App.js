import React from 'react';

import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div  id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage} exact/>
            <Route path="/article/:name" component={ArticlePage} exact/>
            <Route path="/articles-list" component={ArticlesListPage} exact/>
            <Route component={NotFoundPage} exact/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
