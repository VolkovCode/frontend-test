import {useEffect, useState} from "react";
import _ from 'lodash'
import styles from './Question.module.scss'
export const Question = ({q}) => {
  const userAnswers = []
  let rightAnswers = q.question_answer.filter((a) => {if (a.is_right) {return a.id}}).map((a) => {return a.id })
  const [isAnswered, setIsAnswered] = useState(false)
  const [isRight, setIsRight] = useState(false)
  const verdict = isRight ? <p>Верно</p> : <p>Не верно</p>
  const onClick = (id) => {
    if (userAnswers.includes(id)) {
      _.pull(userAnswers, id)
    } else {
      userAnswers.push(id)
    }
  }

  const onAnswerClick = () => {
    if (_.isEqual(userAnswers.sort(), rightAnswers.sort())) {
      setIsRight(true)
    }
    setIsAnswered(true)
  }

  // useEffect(() => {
  //   rightAnswers = q.question_answer.filter((a) => {if (a.is_right) {return a.id}}).map((a) => {return a.id })
  //   console.log(rightAnswers, userAnswers)
  // }, [q])
  // const questions =
  return (
    <>
    <div>{q.question}</div>
    <ul>{_.shuffle(q.question_answer).map((a) => (<li key={a.id}>
      <input onClick={() => onClick(a.id)} type="checkbox" name={a.answer}/>
      <label className={isAnswered && rightAnswers.includes(a.id) && styles.rightAnswer} htmlFor={a.answer}>{a.answer}</label></li>))}</ul>
      <button onClick={() => onAnswerClick()}>Ответить</button>
    {isAnswered ? verdict : <p></p>}
    </>
  )
}
