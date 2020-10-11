import React from 'react';
import Container from '@material-ui/core/Container';
import './Header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import SinglePost from '../SinglePost/SinglePost';

  

const Header = () => {
    return (
        <Router>
            <Container maxWidth="lr" className="nav">
                <Link to="/">  <h2>Post App</h2></Link>
            </Container>

            <div className="right-side">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <Switch>
          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/posts/:ID">
            <SinglePost></SinglePost>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>
          
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <h3>404 Error!!</h3>
          </Route>
        </Switch>
        
        </Router>
    );
};

export default Header;