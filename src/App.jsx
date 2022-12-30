import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
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
                            skillsList.map((skillComp)=>
                            <SkillComponentProgress
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

            </section>
            <section className="contact">

            </section>
        </>
    )
}
export default App;