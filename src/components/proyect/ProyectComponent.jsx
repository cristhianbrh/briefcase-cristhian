import "./ProyectComponent.css";
const ProyectComponent = () => {
    const img2 = require("./../../sources/img/skills/git-Icon.png");
    const img1 = require("./../../sources/img/background-presentation.jpg");
    return (
        <div className="ProyectComponentClass">
            <img src={img2} alt="logo" />
            <div className="conten">
                <p>Titulo</p>
                <img src={img1} alt="Img" />
                <div>
                    <img src={img2} alt="lenguaje" />
                    <img src={img2} alt="lenguaje" />
                    <img src={img2} alt="lenguaje" />
                </div>
            </div>
            <div className="shadow">
                <p>lol</p>
                <div>
                    <img src={img2} alt="logo" />
                    <img src={img2} alt="logo" />
                </div>
            </div>
        </div>
    )
}
export default ProyectComponent;