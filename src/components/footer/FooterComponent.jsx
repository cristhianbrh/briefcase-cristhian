import "./FooterComponent.css";
const FooterComponent = () => {
    const socialMedia_youtube = require("./../../sources/img/socialMedia/youtube-Icon.png");
    const socialMedia_gmail = require("./../../sources/img/socialMedia/gmail-Icon.png");
    return (
        <footer>
            <div>
                <p>Redes sociales:</p>
                <img src={socialMedia_youtube} alt="YouTube" />
            </div>
            <div>
                <p>@cristhianBautista</p>
            </div>
            <div>
                <p>Contáctame:</p>
                <img src={socialMedia_gmail} alt="Gmail" />
            </div>
        </footer>
    )
}
export default FooterComponent;