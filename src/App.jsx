import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import InputComponent from "./components/input/InputComponent";
import ProyectComponent from "./components/proyect/ProyectComponent";
import SkillComponentProgress from "./components/skill/SkillComponentProgress";


const App = () => {
    const skillsList = [
        ["C#", "c-char-Icon", 2],
        ["CSS3", "css3-Icon", 2],
        ["GIT", "git-Icon", 1],
        ["HTML", "html-Icon", 2],
        ["JAVA", "java-Icon", 0],
        ["JavaScript", "js-Icon", 2],
        ["Node", "nodejs-Icon", 2],
        ["Python", "python-Icon", 1],
        ["React", "react-Icon", 2],
        ["SQL", "sql-Icon", 2]
    ]
    const socialMedia_youtube = require("./sources/img/socialMedia/youtube-Icon.png");
    const socialMedia_gmail = require("./sources/img/socialMedia/gmail-Icon.png");

    return (
        <>
            <HeaderComponent />

            <section className="presentation">
                <img src="https://scontent.ftru2-3.fna.fbcdn.net/v/t1.18169-1/20914476_109726846421187_2369818204369290765_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=108&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=yI7VEr8B-TgAX-72Brd&_nc_ht=scontent.ftru2-3.fna&oh=00_AfCRyOyF93Pcc17OZrlSKBcuNID9NrOOZ2xAAqdHMIY88Q&oe=63D51224" alt="No image" />
                <div>
                    <p>Hola</p>
                    <p>Mi nombre es Cristhian</p>
                    <p>Soy desarrollador web fullstack</p>
                </div>
            </section>
            <section className="skills">
                <p>My skills</p>
                <div>
                    <div className="skills-list-progress">
                        {
                            skillsList.map((skillComp, num) =>
                                <SkillComponentProgress
                                    key={"skill" + num + "Key"}
                                    nameLen={skillComp[0]}
                                    nameImg={skillComp[1]}
                                    level={skillComp[2]} />)
                        }
                    </div>
                    <div className="legend">
                        <p>Basic</p>
                        <p>Medium</p>
                        <p>Advanced</p>
                    </div>
                </div>
            </section>
            <section className="proyects">
                <p>My proyects</p>
                <div>
                    <section>
                        <ProyectComponent />
                        <ProyectComponent />
                        <ProyectComponent />
                    </section>
                    <section>
                        <ProyectComponent />
                        <ProyectComponent />
                        <ProyectComponent />
                    </section>

                </div>
            </section>
            <section className="contact">
                <div className="sendMessage">
                    <p>Contact me</p>
                    <form>
                        {/* <input type="text" placeholder="FullName" />
                        <input type="text" placeholder="BussineName" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Telephone" />
                        <input type="text" placeholder="Message" /> */}
                        <InputComponent
                            textSpan="FullName"
                            typeInput="text" />
                        <InputComponent
                            textSpan="BussineName"
                            typeInput="text" />
                        <InputComponent
                            textSpan="Email"
                            typeInput="email" />
                        <InputComponent
                            textSpan="Telephone"
                            typeInput="text"
                            inputPattern="[0-9]{3,}" />
                        <textarea name="ll" placeholder="Message" id="" cols="30" rows="10"></textarea>
                        <button>Enviar</button>
                    </form>
                </div>
                {/* <div className="socialMedia">

                </div> */}
            </section>
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
        </>
    )
}
export default App;