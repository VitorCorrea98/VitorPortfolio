function Profile() {
    return(
        <section id="About-Profile">
            <h2>Creating digital experiences with empathy and innovation. Always looking for new challenges, always learning, always creating.</h2>
            <img src="/Pictures/Mari-profile.png" alt="Profile" />
        </section>
    )
}

function Experiences() {
    return(
        <section id="About-Experiences">
            <div id="About-WhatIDo">
                <p>WHATI I DO</p>
                <ul>
                    <li>Experience Design</li>
                    <li>Content Creation</li>
                    <li>Product Strategy</li>
                    <li>Consultancy</li>
                </ul>
            </div>
            <div id="About-Tools">
                <p>TOOLS</p>
                <ul>
                    <li>Figma</li>
                    <li>Zeplin</li>
                    <li>Miro</li>
                    <li>Lookback</li>
                    <li>Protopie</li>
                    <li>Notion</li>
                    <li>Slack</li>
                </ul>
            </div>
        </section>
    )
}

function Me() {
    return (
        <main id="About-Me">
            <h3>ME</h3>
            <p id="p1">Creating amazing for people has always been a drive for me. With that my work spans different disciplines — from International Relations, Business Management to UX Design.  Studying these fields helped me to better understand and design for a wide range of users with different backgrounds and cultural contexts. as well as providing a more comprehensive understanding of the business world and the role of design within it</p>
            <p id="p2">As a UX Designer, I am dedicated to utilizing my design knowledge and user-cantered approach to create amazing experiences for users. I have experience in both qualitative and quantitative research methods and can effectively analyse data to gain insights into user behaviour. My skills and expertise in wireframing, prototyping, and visual design, combined with my passion for problem-solving and collaboration, allow me to create intuitive and functional solutions that meet user and business needs. </p>
        </main>
    )
}

export default function Main() {
    return(
        <>
            <Profile/>
            <Experiences/>
            <Me/>
        </>
    )
}