import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ResetPassword = () => {
   
    const [email,setMail] = useState("")
    const [message, setMessage] = useState({type:"",text:""}); // Message to show status

    

    return (
        <section className="container cont">
            <h2>Reset Password</h2>
            <input type="email" className="input" placeholder="Enter email" value={email} onChange={(e)=>setMail(e.target.value)}/>
           
            
             {/* Show message if exists */}
        </section>
    );
};

export default ResetPassword;
