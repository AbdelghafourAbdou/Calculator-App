import { useState, useEffect } from 'react'
import './App.css'


function App() {

  const [formula, setFormula] = useState([]) 
  const [result, setResult] = useState(0)
  const [finalResult, setFinalResult] = useState(0)

  function handleButton(key){
    let lastElem = formula.length - 1;
    if (key === 0 && formula.length == 1 && formula[lastElem] === 0) {
      return
    } else if (formula[lastElem] === '.' && key === '.') {
      return 
    } else if (!isNumber(formula[lastElem]) && !isNumber(formula[lastElem-1]) && formula[lastElem] !== '-' ) {
      let tempFormula = formula.toSpliced(lastElem-1, 1);
      setFormula(tempFormula);
    }
    setFormula(f => [...f, key])
  }

  function handleAC(){
    setFormula([]);
    setResult(0);
    setFinalResult(0);
  }

  function isNumber(char){
    return !isNaN(Number(char))
  }

  useEffect(() => {
    let newFormula = formula.join("");
    let lastElem = formula.length - 1;
  
    if (isNumber(formula[lastElem]) && formula.length != 0) {
      let tempRes = eval(newFormula);
      setResult(tempRes);
    } else setResult("Error: Invalid formula");

  }, [formula])
  
  function handleEqual(){
    setFinalResult(result);
    setFormula([]);
    setResult(0);
  }

  return (
    <div className="parent">
      <div className='calculation'>{formula}</div>
      <div className="result">{finalResult}</div>
      <button onClick={handleAC} className="AC button">AC</button>
      <button onClick={() => handleButton("/")} className="divide button">/</button>
      <button onClick={() => handleButton("*")} className="multiply button">*</button>
      <button onClick={handleEqual} className="equals">=</button>
      <button onClick={() => handleButton(7)} className="seven number">7</button>
      <button onClick={() => handleButton(8)} className="eight number">8</button>
      <button onClick={() => handleButton(9)} className="nine number">9</button>
      <button onClick={() => handleButton("-")} className="minus button">-</button>
      <button onClick={() => handleButton(4)} className="four number">4</button>
      <button onClick={() => handleButton(5)} className="five number">5</button>
      <button onClick={() => handleButton(6)} className="six number">6</button>
      <button onClick={() => handleButton("+")} className="plus button">+</button>
      <button onClick={() => handleButton(1)} className="one number">1</button>
      <button onClick={() => handleButton(2)} className="two number">2</button>
      <button onClick={() => handleButton(3)} className="three number">3</button>
      <button onClick={() => handleButton(".")} className="period number">.</button>
      <button onClick={() => handleButton(0)} className="zero number">0</button>
    </div>
  )
}

export default App
