import "./SkillComponentProgress.css";
const SkillComponentProgress = ({nameLen, nameImg, level})=>
{
    const imageReq = require("./../../sources/img/skills/"+nameImg+".png");
    let heigthSkill = ["33%","66%","99%"];
    let backgroundSkill = ["red","green","blue"];

    return(
        <div className="SkillComponentProgress-class" style={{height: heigthSkill[level]}}>
            <div style={{background: backgroundSkill[level]}} >
                <p>{nameLen}</p>
            </div>
            <img src={imageReq} alt="." /> 
        </div>
    )
    
}
export default SkillComponentProgress;