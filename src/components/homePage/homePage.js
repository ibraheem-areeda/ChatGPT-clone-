import { useState } from "react";
import TextBox from "../textbox/textbox";
import Question from "../question/question";
import Sidebar from "../sidebar/sidebar";
import {replies} from "../../assets/data"
import "./homepage.css"
export default function HomePage (){

    const [questionText, setquestionText] = useState('');
    const [questionsArray, setQuestionsArray] = useState([]);


    const handleSend = () => {
    const randomNum = Math.floor(Math.random()*replies.length)

    const questionObj={
        id :questionsArray.length +1,
        question : questionText,
        answer : replies[randomNum]
      }

    
        if (questionText != ""){
        setQuestionsArray ([...questionsArray, questionObj,])
        setquestionText('');
        console.log(questionsArray);
    }}
  

return(
    <>
    <div class="QApart">
    <Question questionsArray={questionsArray}/>
    <TextBox handleSend={handleSend} textinput={setquestionText} questionText={questionText}/>
    </div>
    <div class="Sidebarpart">
    <Sidebar questionsArray={questionsArray} setQuestionsArray={setQuestionsArray} />
    </div>
    </>
)
}
