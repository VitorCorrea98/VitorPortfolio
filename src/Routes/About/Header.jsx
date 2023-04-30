import { Link } from "react-router-dom";


export default function Header() {
    return(
        <header id="About-header">
            <nav >
                    <ul >
                        <li>
                            <Link to="/about" id="active">About</Link>
                        </li>
                        <li>
                            <a href="#section-resume">Resume</a>
                        </li>
                        <li>
                            <a href="#section-contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <h1><Link to="/home">Mariana Ribeiro Vaz</Link></h1>
        </header>
    )
}