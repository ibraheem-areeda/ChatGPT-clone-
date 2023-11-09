
import "./question.css"
export default function Question({ questionsArray }) {






    return (
        <div className="chat-container">
                {questionsArray.map((item) => (
                    <div className="chat-message" key={item.id}>
                        <p className="user-question">{item.question}</p>
                        <p className="gpt-answer">{item.answer}</p>
                    </div>
                ))}
        </div>
    );
};

