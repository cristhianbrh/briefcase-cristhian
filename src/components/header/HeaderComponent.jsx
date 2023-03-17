import "./HeaderComponent.css";
import myIcon from './../../sources/img/logo/logo.ico'
import { useState } from "react";

const HeaderComponent = ({ optionAct, locationSection, sections }) => {
    const [isActiveMore, setIsActiveMore] = useState(false);

    const styleOption = [{
        color: "#aba6a6",
        fontWeight: 500,
        transition: "all 0.5s"
    },
    {
        color: "#FFFFFF",
        fontWeight: "bold",
        transition: "all 0.5s"
    }]

    // const observerSection = new IntersectionObserver((entries)=>{
    //     entries.forEach((entry=>{
    //         if(entry.isIntersecting){
    //             console.log(entry.target.id);
    //         }
    //     }))
    // });

    const activeFunction= ()=>{
        if(!isActiveMore)
            setIsActiveMore(true)
        else
            setIsActiveMore(false)
    }

    return (
        <header className="HeaderComponent-class">
            <nav>

                <img src={myIcon} alt="Lol" />
                <svg onClick={()=>activeFunction()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
                <div className={(isActiveMore)?"navDivs__active":""}>
                    {sections.map((section, num) => {

                        return (<>
                            <a onClick={() => locationSection(num)}
                                style={(optionAct === num) ? styleOption[1] : styleOption[0]}>{section}</a>
                            {(num + 1 < sections.length) ? (<span >|</span>) : null}
                        </>)
                    }
                    )}
                </div>
            </nav>
        </header>
    )

}
export default HeaderComponent;