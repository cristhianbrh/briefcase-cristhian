import ProyectComponent from "../../proyect/ProyectComponent";
import "./ProyectsSection.css";

const ProyectsSection = ({ visorRef }) => {
    const jsonProyects = require("./ProyectsValue.json");

    return (
        <section className="proyects" id="appSection3" ref={visorRef}>
            <p>My proyects</p>
            <div>
                <div>
                    {
                        jsonProyects.Proyects.map((proyect, index) =>
                            <ProyectComponent proyect={proyect} key={proyect.Name + index}/>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
export default ProyectsSection;