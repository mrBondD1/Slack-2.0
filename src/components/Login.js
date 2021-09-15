import React from 'react'
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";



const Login = () => {

    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }
    return (
      <LoginContainer>
        <LoginInnerContainer>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt=""
          />
          <h1>Sign In to Slack 2.0</h1>
          <Button  onClick={signIn}>
              Sign in with Google
          </Button>
        </LoginInnerContainer>
      </LoginContainer>
    );
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 12px 13px 16px -8px rgba(0, 0, 0, 0.89);
  -webkit-box-shadow: 12px 13px 16px -8px rgba(0, 0, 0, 0.89);
  -moz-box-shadow: 12px 13px 16px -8px rgba(0, 0, 0, 0.89);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > Button{
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;