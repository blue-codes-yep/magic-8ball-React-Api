import React from 'react';

const QuestionList = ({ data }) => {
    return (
        <ul>
            {data.map(question => <li key={question}>{question}</li>)}
        </ul>
    )
}

export default QuestionList;