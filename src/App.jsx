import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import SkillComponentProgress from "./components/skill/SkillComponentProgress";


const App = () => {
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
                        <SkillComponentProgress
                            nameLen="C#"
                            nameImg="c-char-Icon"
                            level={2} />
                        <SkillComponentProgress
                            nameLen="CSS3"
                            nameImg="css3-Icon"
                            level={2} />
                        <SkillComponentProgress
                            nameLen="Git"
                            nameImg="git-Icon"
                            level={1} />
                        <SkillComponentProgress
                            nameLen="HTML5"
                            nameImg="html-Icon"
                            level={2} />
                        <SkillComponentProgress
                            nameLen="Java"
                            nameImg="java-Icon"
                            level={0} />
                        <SkillComponentProgress
                            nameLen="JavasCript"
                            nameImg="js-Icon"
                            level={2} />
                        <SkillComponentProgress
                            nameLen="Node"
                            nameImg="nodejs-Icon"
                            level={2} />
                        <SkillComponentProgress
                            nameLen="Python"
                            nameImg="python-Icon"
                            level={1} />
                        <SkillComponentProgress
                            nameLen="React"
                            nameImg="react-Icon"
                            level={2} />
                        <SkillComponentProgress
                            nameLen="Sql"
                            nameImg="sql-Icon"
                            level={2} />

                    </div>
                    <div className="legend">
                        <p>Basic</p>
                        <p>Medium</p>
                        <p>Advanced</p>
                    </div>
                </div>
            </section>
            <section className="proyects">

            </section>
            <section className="contact">

            </section>
        </>
    )
}
export default App;