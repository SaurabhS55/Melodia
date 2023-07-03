import React from 'react'
import classes from './Login.module.css'
import logo from '../assets/melodia.png'
const Login = () => {
    const CLIENT_ID="ac5f90f54eb1480db2fbc146981507b7"
    const REDIRECT_URI="http://localhost:3000/"
    const AUTH_ENDPOINT="https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE="token"
    const SCOPE="user-read-private user-read-email"
    const loginHandler=()=>{
        window.location.href=`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}`
    }
  return (
    <div className={classes.login}>
        <button className={classes.button} onClick={loginHandler}>Login</button>
    </div>
  )
}

export default Login