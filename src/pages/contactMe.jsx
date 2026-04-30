import "../components/Components.css";
import gmailIcon from "../assets/gmail.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";

export default function ContactMe() {
    return (
        <section className="contact-section">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="contact-hero text-center">
                            <h1 className="h2_Hero">Contact <span className="Span-me">Me</span></h1>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-4">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="contact-text text-center">
                            <p>
                                Get in touch with me via social media or send me an email.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center g-4 mt-4">
                    <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                        <a
                            href="mailto:fatemeh.manafi89@gmail.com?subject=Contact%20from%20Portfolio"
                            className="contact-card"
                        >
                            <div className="contact-content">
                                <img src={gmailIcon} alt="Email" className="contact-icon" />
                                <span>Email</span>
                            </div>
                        </a>
                    </div>

                    <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                        <a
                            href="https://www.linkedin.com/in/fatemeh-manafi98/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <div className="contact-content">
                                <img src={linkedinIcon} alt="Email" className="contact-icon" />
                                <span>Linkedin</span>
                            </div>
                        </a>
                    </div>

                    <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                        <a
                            href="https://github.com/Fatak98"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <div className="contact-content">
                                <img src={githubIcon} alt="Email" className="contact-icon" />
                                <span>Github</span>
                            </div>
                        </a>
                    </div>

                    <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                        <a
                            className="download-card"
                            href="/fatemehmanafi.pdf"
                            download
                        >
                            <div className="contact-content">
                                <span>Download CV</span>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}