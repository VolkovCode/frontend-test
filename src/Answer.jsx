// import styles from "./Question.module.scss";
// import {useState} from "react";
//
// export const Answer = ({a}) => {
//   const [isCheked, setIsChecked] = useState(false)
//   return (
//     <li>
//       <input checked={isCheked} onClick={() => onClick(a.id)} type="checkbox" name={a.answer}/>
//       <label onClick={(e) => {if (e.target.htmlFor == a.answer) { setIsChecked((value) => !value)}}} className={isAnswered && rightAnswers.includes(a.id) && styles.rightAnswer} htmlFor={a.answer}>{a.answer}</label>
//     </li>
//
//   )
// }