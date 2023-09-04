import _ from 'lodash'
import './App.css';
import {useEffect, useState }from "react";
import {useFetching} from "./hooks/useFetching";
import {Question} from "./Question";

function App() {
  const [questions, setQuestions] = useState([])
  const getQuestions = async () => {
    const res = await fetch('https://alexeyvolkovspb97.pythonanywhere.com/api/questions/')
    return await res.json()
  }

  const [fetchQuestions, isQuestionsLoading, questionError] = useFetching(async () => {
    const questions = await getQuestions()
    setQuestions(questions)
  })
  const answers = {} // questions.map((q) => {return {`${q.id}`: q.question_answer.map((a) => {if (a.is_rigth) {return a.id}})}})
    useEffect(() => {
     fetchQuestions()
   }, [])



  return (
    <div>
      {questions.map(q => (
        <Question key={q.id} q={q}/>
      ))}

    </div>)

}

export default App;
