import React from 'react'
import { useState } from 'react'
import { useEffect} from 'react'
import authCode from './"AuthCode.js"'
function Login() {
    const [token, setToken] = useState(null);
    useEffect(() => {
    setToken(authCode())
})
  return (
    <>
      <h1>hello</h1>
      <Login />
    </>
  )
}

export default Login

