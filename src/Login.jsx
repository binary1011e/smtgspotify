import React from 'react'
import Profile from './Profile.jsx'
import { useState } from 'react'
import { useEffect} from 'react'
function Login() {
    const [token, setToken] = useState(null);
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    const codeVerifier = localStorage.getItem("verifier");
    const getToken = async () => {
        const payload = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              client_id: '76ff0c3306a0409f9f72afa8221e1d10',
              grant_type: 'authorization_code',
              code: code,
              redirect_uri: 'http://localhost:5173/callback',
              code_verifier: codeVerifier,
            }),
          }
        
        const body = await fetch("https://accounts.spotify.com/api/token", payload);
        const response = await body.json();
        alert(JSON.stringify(response))
      setToken(response.access_token)
    }
    useEffect(() => {
        getToken()
    }, []); 
    if (token != null) {
        return (
        <>
            <p>{token}</p>
            <Profile
            token={token} />
        </>)
    }   
    return (
    <>
    <h1>no</h1>
    </>)
}

export default Login