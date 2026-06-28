const VerticalStepper = ({level}:{level:number}) => {
    return(
        <>
        {(()=>{
            switch(level){
                case 1: return <div><span>{level === 1 ? <img src="../../public\assets\inprogress.PNG"/> : <img src="../../public\assets\complete.PNG"/>}<h1>General Details</h1></span><p>Some basic information we need to get to know you</p></div>;
        case 2: return <h1>Physical Health status</h1>;
        case 3: return <h1>Mental well being</h1>;
        case 4: return <h1>Self-analysis</h1>;
        case 5: return <h1>Specialist preferences</h1>;
            }
        })()}
        
        </>
    )
};
export default VerticalStepper;