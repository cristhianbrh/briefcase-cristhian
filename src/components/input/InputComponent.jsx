import "./InputComponent.css"
const InputComponent = ({textSpan, typeInput, inputPattern})=>{
    return(
        <div className="InputComponentClass">
            <input type={typeInput} className="InputComponentClass_input" required pattern={inputPattern}/>
            <span className="InputComponentClass_span">{textSpan}</span>
        </div>
    )
}
export default InputComponent;