export default function Home() {
    return (
        <div>

        <header id="home-header-container">
            <h1>Mariana Ribeiro Vaz</h1>
            <nav >
                <ul >
                    <li>About</li>
                    <li>Resume</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>

        <section id="home-skills">
            <h2>Hi, I am Mariana, a Product Designer based in Rio de Janeiro.
            </h2>
            <ul>
                <li>UX Research</li>
                <li>UI Design</li>
                <li>Content Production</li>
                <li>Consultancy</li>
            </ul>
        </section>

        <hr />

        <section className="home-projects">
        <ul>
            <li id="project-rettaSeguros">
                <div  className="project-name" id="project-rettaSeguros-Title">
                    <h3>Retta Seguros</h3>
                    <p>Website Redesign</p>
                </div>
            </li>
            <li>
                <div className="project-name">
                    <p>Coming Soon</p>
                </div>
            </li>
            <li>
                <div className="project-name">
                    <p>Coming Soon</p>
                </div>
            </li>
        </ul>
        </section>

        <footer id="home-footer">
            <h4>Let’s Connect! I am also available for freelance projects.</h4>
            <ul>
                <li>
                    <div>
                        <i className="fa-brands fa-linkedin"></i>
                        <p>Linkedin</p>
                    </div>
                </li>
                <li>
                    <div>
                        <i className="fa-brands fa-instagram"></i>
                        <p>Instagram</p>
                    </div>
                </li>
                <li>
                    <div>
                        <i className="fa-regular fa-file-lines"></i>
                        <p>Resume</p>
                    </div>
                </li>
                <li>
                    <div>
                        <i className="fa-regular fa-file-lines"></i>
                        <p>PDF Portfolio</p>
                    </div>
                </li>
            </ul>
        </footer>
        </div>
    )
}