import { Component } from "react";
import "./Home.css"
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";


class Home extends Component {
    render() {
        return (
            <div>
            <Header/>
    
            <Skills/>
    
            <hr />
    
            <Projects/>
    
            <Footer />
            </div>
        )
    }
}

export default Home