import { Container } from "./styles"

export function Announcement() {
    return (
        <Container id="home">
            <span className="line"></span>
            <div className="hero-text">
                This portfolio have been migrated to a new one
            </div>
            <a className="link" href="https://cybergazv2.vercel.app/" target="_blank">Visit New Portfolio</a>
            <div>in any case the link to the portfolio is not working, visit source code and navigate from there</div>
            <a className="link" href="https://github.com/cybergaz/cybergaz.me" target="_blank">Github</a>
            <span className="line"></span>
        </Container>
    )
}
