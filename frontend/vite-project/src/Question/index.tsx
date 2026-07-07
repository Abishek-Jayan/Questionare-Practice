const Question = ({level}:{level:number}) => {
    return (<>
    {(()=>{
        switch(level) {
            case 1: return <div>
                <div>
                <h1 style={{color:"#261813",fontSize:"20rem"}}><b>What is your gender?</b></h1>
            <input type="radio" value="Male"></input>
            <input type="radio" value="Female"></input>
            </div>
            
            <div>
                <h1 style={{color:"#261813",fontSize:"20rem"}}><b>What is your age?</b></h1>
                <input type="radio"></input>
                <input type="radio" value="20-30"></input>
                <input type="radio" value="30-40"></input>
                <input type="radio" value="40-50"></input>
                <input type="radio" value="50-60"></input>
                <input type="radio" value="60+"></input>
            </div>
            </div>
            case 2: <div></div>
        }
    })()}
    
    </>)
};
export default Question;