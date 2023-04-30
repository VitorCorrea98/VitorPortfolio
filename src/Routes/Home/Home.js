import { Component } from "react";
import "./Home.css"
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

class Home extends Component {
    render() {
        return (
                <div>
                    <Header/>
            
                    <Main/>
            
                    <Footer />
                </div>
        )
    }
}

export default Home