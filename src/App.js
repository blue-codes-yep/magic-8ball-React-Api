import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import AskAQuestion from './components/AskAQuestion';
import QuestionList from './components/QuestionList';


function App() {

  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([])

  let url = `https://8ball.delegator.com/magic/JSON/"${questions}"`

  const handleSend = async (newQuestion) => {
    let question = newQuestion;
    let response = await fetchData(url);
    setQuestions([question, ...questions]);
    setAnswers([response, ...answers]);

  };



  const fetchData = async (url) => {
    const response = await axios.get(url);
    // console.log(response.data.magic.answer);
    const answer = response.data.magic.answer;
    console.log(answer);
    return answer;
  };

  //   console.log()

  //   return response;
  // }
  // fetchData();


  //  fetch(url)
  //   .then(response => response.json())
  //   .then(json => {
  //     const answer = json.magic.answer;
  //   })

  return (
    <div className="App">
      <h1>Hello world</h1>
      <AskAQuestion onSend={handleSend} />
      <QuestionList data={questions} />
      <div>{answers}</div>
    </div>
  );
}

export default App;
