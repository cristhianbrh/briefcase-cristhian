import "./ProyectsSection.css";
import ProyectComponent from "../../proyect/ProyectComponent";

const ProyectsSection = ({visorRef}) => {
    return (
        <section className="proyects" id="appSection3" ref={visorRef}>
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
    )
}
export default ProyectsSection;