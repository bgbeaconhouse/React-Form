import { useState } from "react";

const SignUpForm = ({setToken}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(username, password)
       try { 
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: "POST",
            body: JSON.stringify({username, password})
        })
        const result = await response.json()
        
        setToken(result.token)
        
    } catch (error) {
        setError(error.message)
       }
    }
        
    return ( 
        <>
        
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
               <label>Username: 
                <input value={username} onChange={(e) => setUsername(e.target.value)}/>
               </label>
               <br />
               <label> Password: 
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
               </label>
               <br /><br />
               <button>Submit</button>
            </form>
        
            
      
        </>
     );
}
 
export default SignUpForm;