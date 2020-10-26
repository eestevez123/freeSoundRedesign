import React from 'react';
import {HashRouter as Router, Route, Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image"

import Footer from "./components/Footer";
import './App.css';

// Pages
import HomePage from"./pages/HomePage"
import SoundPage from"./pages/SoundsPage"
import ForumPage from"./pages/ForumPage"
import PeoplePage from"./pages/PeoplePage"
import HelpPage from"./pages/HelpPage"
import SignUpPage from"./pages/SignUpPage"
import LoginPage from"./pages/LoginPage"

import freeSoundLogo from "./images/freeSoundLogo2.png"

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    title: "FreeSound",
    headerLinks: [
      {title: "Sounds", path: "/sound"},
      {title: "Forums", path: "/forum"},
      {title: "People", path: "/people"},
      {title: "Help", path: "/help"},
      {title: "Sign Up", path: "/signup"},
      {title: "Login", path: "/signup"}
    ], 
    home: {
      title: "Welcome to FreeSound!",
      subTitle: "Freesound is a collaborative database of Creative Commons Licensed sounds. Browse, download and share sounds!"
    },
    sound: {
      title: "Sounds",
      
    },
    forum: {
      title: "Forum",
    },
    people: {
      title: "People",
    },
    help: {
      title: "Help",
    },
    signUp: {
      title: "Sign Up",
    },
    loginIn: {
      title: "Login In",
  }
  }
}

render() {
  return (
    <Router>
      <Container className="p-0" fluid={true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand href="/"><Image id="freeSoundMainLogo" src={freeSoundLogo} rounded className="mx-auto" /></Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">

            <Nav className="navList">
              <Link className="nav-link normalLink" to ="/sound">Sounds</Link>
              <Link className="nav-link normalLink" to ="/forum">Forums</Link>
              <Link className="nav-link normalLink" to ="/people">People</Link>
              <Link className="nav-link normalLink" to ="/help">Help</Link>
              <Link id="signUpButton" className="nav-link" to ="/signup">Sign Up</Link>
              <Link id="LoginButton" className="nav-link" to ="/login">Login</Link>
            </Nav>

            </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}/>} />
        <Route path="/sound" render={()=> <SoundPage title={this.state.sound.title} />} />
        <Route path="/forum" render={()=> <ForumPage title={this.state.forum.title} />} />
        <Route path="/people" render={()=> <PeoplePage title={this.state.people.title} />} />
        <Route path="/help" render={()=> <HelpPage title={this.state.help.title} />} />
        <Route path="/signup" render={()=> <SignUpPage title={this.state.signUp.title} />} />
        <Route path="/login" render={()=> <LoginPage title={this.state.loginIn.title} />} />
      <Footer />

      </Container>
    </Router>
  );  
}



}
export default App;
