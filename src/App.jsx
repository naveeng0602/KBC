import { useEffect, useMemo, useState } from "react";
import "./app.css"
import Trivia from "./component/Trivia";
import Timer from "./component/Timer";
import Start from "./component/Start";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1); 
  const [username , setUsername] = useState(null);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(" 0 ");

  const data = [{
    id: 1,
    question: "The rolex is a comany that specializes in what type of product?",
    answers: [
      {
        text: "Phone",
        correct: false,
      },
      {
        text: "Watches",
        correct: true,
      },
      {
        text: "Food",
        correct: false,
      },
      {
        text: "Cars",
        correct: false,
      },
    ],
  },
  {
    id:2,
    question: "When didi the website 'Facebook' launch",
    answers: [

      {
        text: "2004",
        correct: true,
      },
      {
        text: "2005",
        correct: false,
      },
      {
        text: "2006",
        correct: false,
      },
      {
        text: "2007",
        correct: false,
      },
    ]



  }];

  const moneyPyramid = useMemo(() => 
    [
    {id:1, amount: "RS. 100"},
    {id:2, amount: "RS. 200"},
    {id:3, amount: "RS. 300"},
    {id:4, amount: "RS. 500"},
    {id:5, amount: "RS. 1000"},
    {id:6, amount: "RS. 2000"},
    {id:7, amount: "RS. 4000"},
    {id:8, amount: "RS. 8000"},
    {id:9, amount: "RS. 16000"},
    {id:10, amount: "RS. 32000"},
    {id:11, amount: "RS. 64000"},
    {id:12, amount: "RS. 125000"},
    {id:13, amount: "RS. 250000"},
    {id:14, amount: "RS. 500000"},
    {id:15, amount: "RS. 1000000"}

  ].reverse(),
  []) ;
    

  useEffect(() => {
    questionNumber > 1 && 
    setEarned(moneyPyramid.find((m) => m.id === questionNumber -1).amount)
  }, [moneyPyramid, questionNumber]);


  return (
    <div className="app">
      {username ? ( <> 
        <div className="main">
      {stop ? (
      <h1 className="endText">You earned : {earned}</h1>
       ) : ( 
        <>
      <div className="top">
        <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
        </div>
        <div className="bottom"><Trivia
        data={data}
        setStop ={ setStop}
        questionNumber ={questionNumber}
        setQuestionNumber = {setQuestionNumber}
        /></div>
        </>
        )}
    </div>
    <div className="pyramid">
      <div className="moneyList">
        {moneyPyramid.map((m) => (
          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span  className="moneyListItemAmount">{m.amount}</span>
            </li>
        ))}
      </div>
    </div>
      
      </>)  : <Start setUsername={setUsername}/> } 
  
    </div>
  );
}

export default App;
