import Question from "../Question";
import { useState } from "react";
import VerticalStepper from "../VerticalStepper";
import "./index.css";
const QuestionForm = () => {
    const [level,setLevel] = useState(1);
    return (
    <div className="form-parent">
        <div className="form-child-left">
            <div className="form-child-content">
          <h1>Mind Mender</h1>
            <h2>Take care of your mental health</h2>
            <p> Follow the 5 simple steps to fill in your information so that we can offer you the best specialist</p>
            <VerticalStepper level={level} />
            </div>
  
        </div>
        <div className="form-child-right">
            <div className="form-child-content">
<Question level={level}/>
             <button onClick={()=>{setLevel((prevState)=> ((prevState > 1 && prevState <= 5) ? prevState-1:prevState))}} value="Previous">Previous</button>
        <button onClick={()=>{setLevel((prevState)=> ((prevState >= 1 && prevState < 5) ? prevState+1:prevState))}} >Next</button>
        
            </div>
    
        </div>

    </div>
       

    )
};

export default QuestionForm;