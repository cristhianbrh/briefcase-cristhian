import "./SkillsSection.css";
import { useEffect, useState } from "react";

const SkillsSection = ({ visorRef }) => {
    const [selection, setSelection] = new useState(0);
    const jsonTabs = require("./TabsValue.json");
    const [selectionSkill, setSelectionSkill] =  new useState(jsonTabs.Tabs[selection]);

    const skillsPath = require.context("./../../../sources/img/skills" ,true);

    const styleOption = { // Active
        background: "rgba(69, 73, 113, 0.8)"
    }
    
    const tabChanged=(num)=>{
        setSelection(num);
        setSelectionSkill(jsonTabs.Tabs[num]);
        console.log("click")
    }   

    return (
        <section className="skills" id="appSection2" ref={visorRef}>

            <p>My Skills</p>
            <div>
                <div className="tabs">
                    {jsonTabs.Tabs.map((tab, num) => {
                        return (<>
                            <a onClick={()=>tabChanged(num)} style={(selection === num) ? styleOption : null}>{tab.Name}</a>
                            {(num + 1 < jsonTabs.Tabs.length) ? (<span >|</span>) : null}
                        </>)
                    })}
                </div>
                <div className="contentSkills">
                    <p>{selectionSkill.Text}</p>
                    <div>
                        {selectionSkill.Skills.map((skill)=>{
                            //  const strrr = (jsonTabs.RuteGlobal + skill.NameImg + skill.Extension).toString();
                            return <img src={skillsPath(`./${skill.NameImg + skill.Extension}`)} alt={"aa"} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SkillsSection;