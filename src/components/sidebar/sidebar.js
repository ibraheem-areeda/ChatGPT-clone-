import { useState } from "react";
import "./sidebar.css"
import ConversationCard from "../conversationCard/conversationCard";
export default function Sidebar({questionsArray,setQuestionsArray}) {

    const [conversation, setconversation] = useState([]);
    const [conversationaArray, setconversationaArray] = useState([]);




    // const [questionText, setquestionText] = useState('');
    // const [questionsArray, setQuestionsArray] = useState([]);


    const handleSave= (event) => {

        event.preventDefault()

        if (questionsArray.length != 0){
        const conversationObj={
        id :conversation.length +1,
        conversation : questionsArray,
      }
        setconversation ([...conversation, conversationObj])
        console.log(conversation);

        setconversationaArray ([...conversationaArray,conversation ])
        console.log(conversationaArray)

        setQuestionsArray([])
    }}
  



    return (
        <>
        <form onSubmit={handleSave}>
        <button >Save Conversation</button>
        <ConversationCard questionsArray={questionsArray}/>
        </form>
        </>
    );
};

