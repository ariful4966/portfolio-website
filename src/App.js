import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ProjectAll from "./components/Project/ProjectAll/ProjectAll";
import BlogAll from "./components/Blog/BlogAll/BlogAll";
import PostServer from "./components/PostFakeDataOnServer/PostServer";
import NotMatch from "./components/NotMatch/NotMatch";

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          {/* <Route path="/postServer">
             <PostServer></PostServer>
          </Route> */}
          <Route path="/contact">
             <Contact></Contact>
          </Route>
          <Route path="/about">
             <About></About>
          </Route>
          <Route path="/project">
             <ProjectAll></ProjectAll>
          </Route>
          <Route path="/blog">
            <BlogAll></BlogAll>
          </Route>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="*">
             <NotMatch></NotMatch>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
