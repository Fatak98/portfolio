import { Link } from "react-router-dom";
import "./Components.css";

export default function Navbar() {
    return (
        <div className="Main_container container-fluid p-0">
            {/* MOBILE MENU */}
            <div
                className="collapse d-lg-none fixed-top mobile-menu"
                id="navbarToggleExternalContent"
            >
                <div className="bg-purple-dark pt-4 pb-2 mt-5 ">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                to="/#projects"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarToggleExternalContent"
                            >
                                projects
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                to="/#pin_project"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarToggleExternalContent"
                            >
                                About me
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                to="/contact"
                            >
                                Contact me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* MAIN NAVBAR */}
            <nav className="navbar navbar-expand-lg bg-white px-5 py-3 fixed-top shadow-sm">
                <div className="container-fluid d-flex justify-content-between align-items-center p-0">
                    <Link className="text-decoration-none" to="/#home">
                        <h2 className="fs-5 m-0 p-0 logoColor">Fatemeh Manafi</h2>
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul className="nav nav-pills d-none d-lg-flex align-items-center">
                        <li className="nav-item">
                            <Link to="/#projects" className="nav-link btn btn-outline-light">
                                projects
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/#pin_project" className="nav-link btn btn-outline-light">
                                About me
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className="nav-link active btn-purple ms-3"
                            >
                                Contact me
                            </Link>
                        </li>
                    </ul>

                    {/* MOBILE BUTTON */}
                    <button
                        className="navbar-toggler custom-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    );
}