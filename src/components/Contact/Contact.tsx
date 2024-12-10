import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact() {

    return (
        <Container id="contato">
            <header>
                <h2>Get in touch with me</h2>
                <p>If you have seen my potential or want to talk to me, do not hesitate to send me a message.</p>
            </header>
            <div className="contacts">
                <div>
                    <img src={emailIcon} alt="Email" />
                    <a href="mailto:kkanttechy@gmail.com">kkanttechy@gmail</a>
                </div>
                <div>
                    <img src={phoneIcon} alt="Email" />
                    <a href="tel:+91 8534946840">+91 8534946840</a>
                </div>
            </div>
            <Form></Form>
        </Container>
    )
}
