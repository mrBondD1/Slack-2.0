import React from 'react';
import styled from "styled-components";
import { db } from '../firebase';
import firebase from "firebase/compat/app";
import { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";



const ChatInput = ({ channelName, channelId, chatRef }) => {

    const [input, setInput] = useState('');
        const [user, loading] = useAuthState(auth);


    const sendMessage = e => {
        e.preventDefault(); // prevent refresh

        if(!channelId){
            return false;
        } 

        db.collection("room").doc(channelId).collection("message").add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: user.displayName,
          userImage:user.photoURL,
        });

        setInput('');

         chatRef?.current?.scrollIntoView({
           behavior: "smooth",
         });
    };

    return (
      <ChatInputContainer>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`Message #${channelName}`}
          />
          <button type="submit" hidden onClick={sendMessage}>
            SEND
          </button>
        </form>
      </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 13px;
        padding: 20px;
        outline: none;
    } 
      > form > button{
         display: none !important;
     } 
`;