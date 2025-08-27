import { useState } from "react"  
import { Navigate } from "react-router-dom"

export default function About () {
    const [user, setUser] = useState('mario')
    
if(!user) {
    return <Navigate to="/" replace={true}/>
} 

    return (
        <div>
            <h2>About Us</h2>
            <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}