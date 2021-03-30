import React from "react";
import "./style.css";
import App from "./App.js"

<App />


    function Card (props) {
        const [employeeState, setemployeeState] = useState([])

        useEffect(function(){
        API.search().then((result) => {
            console.log(result.data.results)
            setemployeeState(result.data.results)
        }
        )
        },[]) 
            
        return (
            employeeState.map(props => (
                <div className="card">
                    <div className="img-container">
                        <img alt={props.firstname} src={props.picture} />
                    </div>
                    <p>{props.firstname}</p>
                    <p>{props.email}</p>
                </div>
             ))
           
        )} 

export default Card;