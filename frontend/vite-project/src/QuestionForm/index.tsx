import Question from "../Question";
import { useState } from "react";
import VerticalStepper from "../VerticalStepper";
import "./index.css";
const QuestionForm = () => {
    const [level,setLevel] = useState(1);
    return (
    <div className="form-parent" style={{display:"flex",margin:"auto"}}>
        <div >
            <h1 style={{fontSize:"30rem"}}>Mind Mender</h1>
            <p style={{fontSize:"10rem"}}>Take care of your mental health <br/> Follow the 5 simple steps to fill in your information so that we can offer you the best specialist</p>
            <VerticalStepper level={level} />
        </div>
        <div style={{backgroundColor:"#f6f1f0", padding:"2rem"}}>
            <Question level={level}/>
             <button onClick={()=>{setLevel((prevState)=> ((prevState > 1 && prevState <= 5) ? prevState-1:prevState))}} value="Previous">Previous</button>
        <button onClick={()=>{setLevel((prevState)=> ((prevState >= 1 && prevState < 5) ? prevState+1:prevState))}} >Next</button>
        </div>

    </div>
       

    )
};

export default QuestionForm;