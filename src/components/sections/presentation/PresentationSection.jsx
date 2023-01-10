import "./PresentationSection.css";
const PresentationSection = ({ visorRef }) => {
    const tag = "FullStack";
    const atributos = [
        {
            atrib: "name",
            value: "Cristhian"
        },
        {
            atrib: "age",
            value: ((new Date().getFullYear()) - 2004)
        },
        {
            atrib: "ocupation",
            value: "Ingeniería de Sistemas Computacionales"
        }
    ]

    return (
        <section className="presentation" id="appSection0" ref={visorRef}>
            <img src="https://scontent.ftru2-3.fna.fbcdn.net/v/t1.18169-1/20914476_109726846421187_2369818204369290765_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=108&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=yI7VEr8B-TgAX-72Brd&_nc_ht=scontent.ftru2-3.fna&oh=00_AfCRyOyF93Pcc17OZrlSKBcuNID9NrOOZ2xAAqdHMIY88Q&oe=63D51224" alt="No image" />
            <div>
                <div>
                    <p>
                        <a style={{ color: "#00ee00" }}>&lt;{tag}</a> &nbsp;
                        <a style={{ color: "#ffff00" }}>{atributos[0].atrib}</a>=
                        <a style={{ color: "#ffa911" }}>"{atributos[0].value}"</a>
                        &nbsp;
                        <a style={{ color: "#ffff00" }}>{atributos[1].atrib}</a>=
                        <a style={{ color: "#ffa911" }}>"{atributos[1].value}"</a>
                        
                        <br/>
                        <a style={{ color: "#ffff00" }}>{atributos[atributos.length - 1].atrib}</a>=
                        <a style={{ color: "#ffa911" }}>"{atributos[atributos.length - 1].value}"</a>
                        <a style={{ color: "#00ee00" }}>&nbsp;/&gt;</a> 
                    </p>
                </div>
                {/* <p>Hola</p>
                    <p>Mi nombre es Cristhian</p>
                    <p>Soy desarrollador web fullstack</p> */}
            </div>
        </section>
    )
}
export default PresentationSection;