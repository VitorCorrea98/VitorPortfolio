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

function Projects() {
    return(
        <section className="projects">
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
    )
}

export default function Main() {
    return(
        <>
        <Skills/>
        <hr/>
        <Projects/>
        </>
    )
}