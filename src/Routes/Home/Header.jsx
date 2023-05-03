import React from "react"
import { Link} from "react-router-dom"

function Nav() {
    return(
            <header id="Home-header">
                <h1><Link to="/home">Mariana Ribeiro Vaz</Link></h1>
                <nav >
                    <ul >
                        <li>
                            <Link to="/about">About</Link>
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

function Skills() {
    return (
        
        <section id="skills">
            <h2>Hi, I am Mariana, a Product Designer based in Rio de Janeiro.
            </h2>
            <ul>
                <li>UX Research</li>
                <li>UI Design</li>
                <li>Content Production</li>
                <li>Consultancy</li>
            </ul>
        </section>
    )
}

export default function Header() {
    return(
        <>
            <Nav />
            <Skills />
            <hr/>
        </>
    )
}