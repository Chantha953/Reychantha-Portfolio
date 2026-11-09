import { FaTelegramPlane } from "react-icons/fa";
import { FaArrowRight, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import profile from "../assets/images/profile.png";
const Home = () => {
    return (
        <main>
            <section>
                <div className="row home">
                    <article className="col-12 col-md-6 d-flex justify-content-start align-items-center info" style={{ height: "100vh" }}>
                        <div>
                            <section>
                                <span className="fw-medium fs-5 shadow-item px-3 py-0">Hello, I'm</span>
                                <h1 className="text-uppercase my-2">Rey Chantha</h1>
                                <span className="text-primary" style={{ fontSize: "18px" }}>Full-Stack Developer</span>
                                <p className="mt-3" style={{ fontSize: "17px" }}>
                                    A passionate and motivated developer who enjoys creating innovative solutions, exploring different areas of technology,
                                    and continuously expanding my knowledge. My goal is to turn ideas into practical digital experiences while growing both personally and professionally.
                                </p>
                            </section>
                            <section className="mainSocial d-flex align-items-center gap-4 mt-4">
                                <a
                                    href="https://www.facebook.com/rey.chantha.2025"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btnSocial text-black shadow-item d-flex justify-content-center align-items-center"
                                    data-tooltip="Facebook"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF className="iconSocail" size={18} />
                                </a>

                                <a
                                    href="https://t.me/Rey_Chantha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btnSocial text-black shadow-item d-flex justify-content-center align-items-center"
                                    data-tooltip="Telegram"
                                    aria-label="Telegram"
                                >
                                    <FaTelegramPlane className="iconSocail" size={20} />
                                </a>

                                <a
                                    href="https://www.instagram.com/rey_chantha/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btnSocial text-black shadow-item d-flex justify-content-center align-items-center"
                                    data-tooltip="Instagram"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="iconSocail" size={20} />
                                </a>

                                <a
                                    href="https://github.com/Chantha953"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btnSocial text-black shadow-item d-flex justify-content-center align-items-center"
                                    data-tooltip="GitHub"
                                    aria-label="GitHub"
                                >
                                    <FiGithub className="iconSocail" size={20} />
                                </a>

                                <span
                                    style={{
                                        width: "1px",
                                        height: "30px",
                                        backgroundColor: "#d8d8d8"
                                    }}
                                />

                                <button className="btn btnHireMe px-4 py-1 shadow-item border-0 rounded-5">
                                    <span className="text d-flex justify-content-center align-items-center gap-1 text-primary">
                                        Hire Me <FaArrowRight className="icon" size={13} />
                                    </span>
                                </button>
                            </section>
                        </div>
                    </article>
                    <article className="col-12 col-md-6 d-flex justify-content-end align-items-center bg-pfp">
                        <div
                            className="profile shadow-item d-flex justify-content-center align-items-center rounded-circle overflow-hidden"
                            style={{
                                width: "100%",
                                maxWidth: "400px",
                                aspectRatio: "1 / 1",
                                flexShrink: 0
                            }}
                        >
                            <img
                                src={profile}
                                alt="Profile"
                                className="rounded-circle object-fit-cover"
                                style={{
                                    width: "96%",
                                    height: "96%"
                                }}
                            />
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}
export default Home;