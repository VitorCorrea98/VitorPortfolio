import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";
import RettaSeguros from "./Routes/RettaSeguros/RettaSeguros"
import ErrorPage from "./error-page";

class App extends Component {
    render() {
        return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/retta-seguros" element={<RettaSeguros />} />
            </Routes>
        </BrowserRouter>
        )
    }
}

export default App