import Question from "../Question";
import VerticalStepper from "../VerticalStepper";
const data:[] = [];
const QuestionForm = () => {
    return (<>
    <div style={{display:"flex",margin:"3rem"}}>
        <div >
            <h1>MindMender</h1>
            <p>Take care of your mental health</p>
            <p>Follow the 5 simple steps to fill in your information so that we can offer you the best specialist</p>
            <VerticalStepper/>
        </div>
        <div style={{backgroundColor:"#f6f1f0", padding:"2rem"}}>
            <div>
                <h1 style={{color:"#261813"}}>What is your gender?</h1>
            <input type="radio" value="Male"></input>
            <input type="radio" value="Female"></input>
            </div>
            
            <div>
                <h1 style={{color:"#261813"}}>What is your age?</h1>
                <input type="radio"></input>
                <input type="radio" value="20-30"></input>
                <input type="radio" value="30-40"></input>
                <input type="radio" value="40-50"></input>
                <input type="radio" value="50-60"></input>
                <input type="radio" value="60+"></input>
            </div>
            
        </div>

    </div>
        {/* {data.map(element=><Question key={element.id} id={element.id} question={element.question}/>)} */}
    </>)
};

export default QuestionForm;