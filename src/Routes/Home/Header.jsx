import React from "react"
import { Link} from "react-router-dom"

export default function Header() {
    return(
            <header>
                <h1><Link to="/">Mariana Ribeiro Vaz</Link></h1>
                <nav >
                    <ul >
                        <li>
                            <Link to="about">About</Link>
                        </li>
                        <li>
                            <a href="#section-resume">Resume</a>
                        </li>
                        <li>
                            <a href="#section-contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}