import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio() {
    return (
        <Container id="portfolio">
            <h2>Projects..</h2>

            <div className="projects">

                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <div className="project-links">
                                <a href="https://github.com/cybergaz/Hyprland_Rice" target="_blank" rel="noreferrer">
                                    <img src={githubIcon} alt="GitHub" />
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>Hyprland_Rice</h3>
                            <p> It's my personal Linux Desktop Environment setup that i update over time depending on my usage. it is based on Arch Linux and uses hyprland as the window manager.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>ArchLinux</li>
                                <li>Shell</li>
                                <li>Lua</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <div className="project-links">
                                <a href="https://github.com/cybergaz/heavens_anime" target="_blank" rel="noreferrer">
                                    <img src={githubIcon} alt="GitHub" />
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>Heavens Anime</h3>
                            <p>It's an Anime Streaming site , having appealing UI for better experience, built with React and Tailwind...
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>ReactJs</li>
                                <li>JavaScript</li>
                                <li>Tailwind</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <div className="project-links">
                                <a href="https://github.com/cybergaz/snow-vim" target="_blank" rel="noreferrer">
                                    <img src={githubIcon} alt="Visitar site" />
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>snow vim</h3>
                            <p>my neovim configuration using lazy-nvim package manager . better and faster then any ide in any terms and obviously vim's super-power makes it 3x faster while editing.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Lua</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <div className="project-links">
                                <a href="https://github.com/cybergaz/scripts" target="_blank" rel="noreferrer">
                                    <img src={githubIcon} alt="GitHub" />
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>scripts</h3>
                            <p> set of useful scripts and oneliners that i wrote to make my daily workflow a lot easier , and much more ...
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Shell</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <div className="project-links">
                                <a href="https://github.com/cybergaz/rusty_chat" target="_blank" rel="noreferrer">
                                    <img src={githubIcon} alt="Visitar site" />
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>Rusty-Chat</h3>
                            <p> chat application writtein in RUST and HTMX
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Rust</li>
                                <li>HTMX</li>
                                <li>Askama</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <div className="project-links">
                                <a href="https://github.com/cybergaz/waybar_now_playing" target="_blank" rel="noreferrer">
                                    <img src={githubIcon} alt="GitHub" />
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>waybar-Now-Playing</h3>
                            <p> current track/song/media visualization on waybar written in rust which provide near zero performance cost
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Rust</li>
                                <li>Waybar</li>
                                <li>Linux</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>


                <div className="explore">Explore All Repository, <a className="github" href="https://github.com/cybergaz" target="_blank">Visit My Github</a></div>
            </div>
        </Container>
    );
}
