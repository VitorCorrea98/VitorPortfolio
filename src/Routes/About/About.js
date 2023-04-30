import { Component } from "react";
import "./About.css"
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class About extends Component {
    render() {
        return (
          <div>
            <Header/>
  
            <hr/>

            <Main/>

            <Footer/>
          </div>
        );
    }
}

export default About