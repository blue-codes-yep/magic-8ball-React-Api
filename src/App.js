import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import AskAQuestion from './components/AskAQuestion';
import QuestionList from './components/QuestionList';


function App() {

  const [questions, setAnswers, answers] = useState([]);

  const handleSend = newQuestion => {
    setAnswers([newQuestion, ...questions]);
  }

  let url = `https://8ball.delegator.com/magic/JSON/"${questions}"`

  const fetchData = async () => {


    const response = await axios.get(url);
    console.log(response.data.magic.answer)

    return response;
  }
  fetchData();


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
      <h2>{questions}</h2>
    </div>
  );
}

export default App;
