import Cinetrack from "../assets/cinetrack.png";
import Conference from "../assets/conf.png";
import comingsoon from "../assets/comingsoon.jpg";

export default function Home() {
    return (
        <main className="home-container container-fluid py-5">
            {/*----------------------------------------- HERO SECTION -----------------------------------------*/}
            <section className="hero-section" id="home">
                <div className="container col-xxl-12 py-4 px-4 mt-5">
                    <div className="hero-eyebrow d-flex align-items-center">
                        <span className="dot"></span>
                        Open to Opportunities
                    </div>

                    <div className="col-lg-7 col-12 hero-heading">
                        <h1 className="h1_Hero">
                            Building bridges
                            <br />
                            between <span className="highlight">developers</span>
                            <br />
                            and technology
                        </h1>

                        <p className="hero_text">
                            I bridge the gap between aesthetic design and functional code,
                            turning complex wireframes into polished, responsive interfaces.
                            My focus is on crafting high-performance, accessible web
                            experiences that users love to interact with.
                        </p>
                    </div>
                </div>

                <div className="container col-xxl-12 pb-4 px-4">
                    <a
                        className="btn-purple border-0 p-2 fs-5 text-decoration-none"
                        href="/portfolio/fatemehmanafi.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Download CV
                    </a>
                </div>
            </section>

            {/*----------------------------------------- ABOUT SECTION -----------------------------------------*/}
            <section id="pin_project" data-aos="fade-up">
                <div className="container about-container py-5 background-color-blue">
                    <div className="about-intro row gx-5">
                        <h2
                            className="h4 fw-bold text-purple"
                            data-aos="fade-up"
                            data-aos-delay="20"
                        >
                            Who I Am
                        </h2>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="30">
                            I'm <strong>Fatemeh Manafi</strong>, a Frontend Developer and
                            UI/UX Enthusiast dedicated to bridging the gap between aesthetic
                            design and functional code. I specialize in turning complex
                            wireframes into polished, responsive interfaces, helping teams and
                            clients build web experiences that are both high-performance and
                            accessible.
                        </p>
                    </div>

                    <div className="row justify-content-center about-highlights mt-5 gap-4" data-aos="fade-up">
                        <div className="col-lg-5 highlight-card p-4 border rounded shadow-sm" data-aos="fade-up" data-aos-delay="20">
                            <div className="icon mb-2">🎨</div>
                            <h4>Design-Driven</h4>
                            <p>
                                I believe code should respect design. I ensure every pixel and
                                transition aligns with the intended user experience.
                            </p>
                        </div>

                        <div className="col-lg-5 highlight-card p-4 border rounded shadow-sm">
                            <div className="icon mb-2">⚡</div>
                            <h4>Performance First</h4>
                            <p>
                                I build with speed in mind, ensuring fast load times and smooth
                                interactions across all devices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*----------------------------------------- SPECIALIZATION SECTION -----------------------------------------*/}
            <section className="py-5 mt-5">
                <div className="row justify-content-center text-center gx-5 align-items-center mx-2 gap-2" data-aos="fade-up">
                    <h2
                        className="h4 fw-bold text-purple mb-5"
                        data-aos="fade-up"
                        data-aos-delay="20"
                    >
                        Specialization
                    </h2>
                    <div className="col-lg-5 mb-5 mb-lg-0 bg-white p-4 rounded shadow-sm" data-aos="fade-up" data-aos-delay="20">
                        <div className="mb-4 text-success h1">🎨</div>

                        <h2 className="fw-bold">Designer</h2>

                        <p>
                            I value simple content structure, clean design patterns, and
                            thoughtful interactions.
                        </p>

                        <p className="list-title text-primary fw-normal mt-4">
                            Things I enjoy designing:
                        </p>

                        <p>UX, UI, Web, Apps, Videos</p>

                        <p className="list-title text-primary fw-normal mt-4">
                            Design Tools:
                        </p>

                        <ul className="list-unstyled">
                            <li>Figma</li>
                            <li>Canva</li>
                            <li>Pen &amp; Paper</li>
                            <li>Sketch</li>
                        </ul>
                    </div>

                    <div className="col-lg-5 mb-5 mb-lg-0 bg-white p-4 rounded shadow-sm" data-aos="fade-up" data-aos-delay="20">
                        <div className="mb-4 text-success h1">💻</div>

                        <h2 className="fw-bold">Frontend Developer</h2>

                        <p>
                            I like to code things from scratch, and enjoy bringing ideas to
                            life in the browser.
                        </p>

                        <p className="list-title text-primary fw-normal mt-4">
                            Languages I speak:
                        </p>

                        <p>HTML, CSS, JavaScript, React, Git</p>

                        <p className="list-title text-primary fw-normal mt-4">
                            Dev Tools:
                        </p>

                        <ul className="list-unstyled">
                            <li>React</li>
                            <li>Bootstrap / Tailwind</li>
                            <li>GitHub</li>
                            <li>VS Code</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*----------------------------------------- PROJECTS SECTION -----------------------------------------*/}
            <section className="py-5 mt-5 justify-content-center" id="projects" data-aos="fade-up">
                <h2
                    className="h4 fw-bold text-purple text-center mb-2"
                    data-aos="fade-up"
                    data-aos-delay="20"
                >
                    Projects
                </h2>
                <div className="container py-5 d-flex justify-content-center flex-wrap gap-4">

                    {/* CARD 1 */}
                    <div className="card p-3 shadow-sm" style={{ width: "22rem" }}>
                        <img
                            src={Cinetrack}
                            className="card-img-top w-100"
                            alt="Project preview"
                        />

                        <div className="card-body d-flex flex-column justify-content-between">
                            <div className="pb-2">
                                <h5 className="card-title">CineTrack</h5>
                                <p className="card-text">
                                    CineTrack is a movie discovery app where users can search titles,
                                    view details, and manage a personal watchlist.
                                </p>
                            </div>
                            <a
                                href="https://github.com/Fatak98/cinetrack"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="card p-3 shadow-sm" style={{ width: "22rem" }}>
                        <img
                            src={Conference}
                            className="card-img-top w-100"
                            alt="Project preview"
                        />

                        <div className="card-body d-flex flex-column justify-content-between">
                            <div className="pb-5">
                                <h5 className="card-title">Conference Expense Planner</h5>
                                <p className="card-text">
                                    Conference Expense Planner is a web app for calculating and managing event costs including venue, add-ons, and meals.
                                    Built with React and state management to dynamically update selections and total budget.
                                </p>
                            </div>
                            <a
                                href="https://github.com/Fatak98/Conference-Expense-Planner"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="card p-3 shadow-sm" style={{ width: "22rem" }}>
                        <img
                            src={comingsoon}
                            className="card-img-top w-100"
                            alt="Project preview"
                        />

                        <div className="card-body d-flex flex-column justify-content-between">
                            <div clssName="pb-5">
                                <h5 className="card-title">commerce web app</h5>
                                <p className="card-text">
                                    A responsive e-commerce web app built with React and Redux for efficient state management.
                                    Includes dynamic cart functionality with add, remove, and quantity updates in real time.
                                </p>
                            </div>
                            <a
                                href="#"
                                className="btn btn-primary disabled"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}