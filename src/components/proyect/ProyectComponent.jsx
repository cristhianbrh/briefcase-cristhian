import "./ProyectComponent.css";
const ProyectComponent = ({proyect}) => {
    const display = require.context("./../../sources/img/Proyects/", true); 
    const technologies = require.context("./../../sources/img/skills/", true)

    return (
        <div className="ProyectComponentClass">
            <div className="proyectsRedirectionsProyect">
                <a href={proyect.Website} target="_blank"><p>Website</p></a>
                <a href={proyect.Repository} target="_blank"><p>Repository</p></a>
            </div>
            <img  src={display("./"+proyect.Icon.NameImg+proyect.Icon.Extension)} />
            <p className="proyectsTitleProyect">{proyect.Name}</p>
            <div className="imagesProyectsDisplay">
                <img src={display("./"+proyect.ImagesDisplay.Desktop)} />
                <img src={display("./"+proyect.ImagesDisplay.Tablet)} />
                <img src={display("./"+proyect.ImagesDisplay.Mobile)} />
                
            </div>
            <p className="proyectsDescriptionProyect">{proyect.Description}</p>
            <div className="proyectsTecProyect">
                {
                    proyect.Technologies.map((tech)=>
                        <img src={technologies("./"+tech.NameImg+tech.Extension)} />
                    )
                }
            </div>
        </div>
    )
}
export default ProyectComponent;