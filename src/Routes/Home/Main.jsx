import { Link } from "react-router-dom";

export default function Main() {
    return(
        <section className="projects">
            <ul>
                <Link to="/retta-seguros">
                    <li id="project-rettaSeguros" >
                        <div  className="project-name" id="project-rettaSeguros-Title">
                            <h3>Retta Seguros</h3>
                            <p>Website Redesign</p>
                        </div>
                    </li>
                </Link>
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