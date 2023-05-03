import { useState } from 'react'
import './App.css'
import QUESTIONS from './assets/questions.json'

QUESTIONS.sort(()=> Math.random() - 0.5)
QUESTIONS.forEach((question)=>{question.answer.sort(() => Math.random() - 0.5)})


type answers = {
  text: string;    
  isCorrect: boolean;
   
}

function App() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const question = QUESTIONS[index]
  const handleClick = (answer : answers)=>{
    if(answer.isCorrect){
   
      
      
      setScore((score)=> score +1)
    }else{
      //alert("respuesta incorrecta!")
      
    }
  setIndex((index)=> index +1)}
  
  
  const isFinished = index >= QUESTIONS.length
  return (
    <>
    
    <main className="min-h-screen grid place-items-center centrar">
    <article className='flex flex-col gap-6 bg-teal-300 p-4 rounded max-w-md w-full'>
    {isFinished ? (
      <div>
      <button className='text-center'>completado! score: {score} de 10 
        </button><button onClick={()=>{window.location='/'}} className='botonReload' >volver a jugar</button>
      </div>
    ) :(
      <> 
         <img src={question.image} alt="" className='imgQuiz text-center'  />
        <h2 className='h3'>{question.text} </h2>
              <ul className='flex flex-col gap-2' >
                {question.answer.map((answers)=>(
                  <li key={answers.text}>
                    <button onClick={()=>handleClick(answers)} className="botonAnswer bg-teal-500 w-full p-2">{answers.text}</button>
                    </li>
                ))}
              </ul>
              </>
    )}
    </article>
    </main>
  </>
  )
}

export default App
