import { Component } from "react";
import "./RettaSeguros.css"
import Header from "./Header";

import Footer from "../../Components/Footer-All-Pages";
import Main from "./Main";

class RettaSeguros extends Component {
    render() {
        return (
          <div>
            <Header />

            <Main />

            <Footer />
          </div>
        );
    }
}

export default RettaSeguros