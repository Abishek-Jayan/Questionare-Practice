import "./index.css";
const VerticalStepper = ({level}:{level:number}) => {
    const data = [
        {
            "curlevel":1,
            "title": "General Details",
            "detail": "Some basic information we need to get to know you"
        },
        {
            "curlevel":2,
            "title": "Physical Health status",
            "detail": "Your health condition that is important to consider"
        },
        {
            "curlevel":3,
            "title": "Mental well being",
            "detail": "Your health condition that is important to consider"
        },
        {
            "curlevel":4,
            "title": "Self-analysis",
            "detail":"Your experience in psychology and cooperation with psychologists"
        },
        {
            "curlevel":5,
            "title":"Specialist preferences",
            "detail":"Find comfort and personality with a specialist you trust"
        }
    ]
    return(
        <>
        <div>
            {
                data.map((element)=>(<div className="verticalsteppermain">
                { element.curlevel < level ? <img src="../../public\assets\complete.PNG"/>: <img src="../../public\assets\inprogress.PNG"/>}
                
                <div>
                    <h1>{element.title}</h1>
                    <p>{element.detail}</p>
                </div>
            </div>))
            }
            
            </div>
        
        </>
    )
};
export default VerticalStepper;