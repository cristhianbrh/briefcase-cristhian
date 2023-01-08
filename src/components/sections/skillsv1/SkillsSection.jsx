import "./SkillsSection.css";
import SkillComponentProgress from "../../skill/SkillComponentProgress";

const SkillsSection = ({visorRef}) => {
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
        <section className="skills" id="appSection2" ref={visorRef}>
            <p>My skills</p>
            <div >
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
    )
}
export default SkillsSection;