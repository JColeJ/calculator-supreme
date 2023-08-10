import { useState } from "react";
import './Calculator.css';

//TODO: Try to add additional rows to make this look like the calculator from Microsoft

function Calculator() {

  var [result, setResult] = useState(0);
  var [input, setInput] = useState("");
  var [formulae, setFormulae] = useState([]);

  return (
    <table>
      <tr aria-colspan={4}>
        <td colSpan={4} style={{ textAlign: 'right' }}>{result}</td>
      </tr>

      <tr>
        <td><button onClick={() => setResult(0)}>AC</button></td>
        <td><button onClick={() => setResult(0)}>CE</button></td>
        <td><button onClick={() => setFormulae(formulae.concat(input).concat("%"))}>%</button></td>
        <td><button onClick={() => setResult(0)}>DEL</button></td>
      </tr>  
      <tr>
        <td><button onClick={() => setInput(input + "7")}>7</button></td>
        <td><button onClick={() => setInput(input + "8")}>8</button></td>
        <td><button onClick={() => setInput(input + "9")}>9</button></td>
        <td><button onClick={() => setFormulae(formulae.concat(input).concat("x"))}>x</button></td>
      </tr>
      <tr>
        <td><button onClick={() => setInput(input + "4")}>4</button></td>
        <td><button onClick={() => setInput(input + "5")}>5</button></td>
        <td><button onClick={() => setInput(input + "6")}>6</button></td>
        <td><button onClick={() => setFormulae(formulae.concat(input).concat("-"))}>-</button></td>
      </tr>
      <tr>
        <td><button onClick={() => setInput(input + "1")}>1</button></td>
        <td><button onClick={() => setInput(input + "2")}>2</button></td>
        <td><button onClick={() => setInput(input + "3")}>3</button></td>
        <td><button onClick={() => setFormulae(formulae.concat(input).concat("+"))}>+</button></td>
      </tr>
      <tr>
        <td><button onClick={() => setInput(input + "0")}>0</button></td>
        <td><button onClick={() => setFormulae(formulae.concat(input).concat("."))}>.</button></td>
        <td><button onClick={() => setFormulae(formulae.concat(input).concat("="))}>=</button></td>
        <td><button onClick={() => setFormulae(formulae.concat(input).concat("/"))}>/</button></td>
      </tr>
    </table>
  );
}

export default Calculator;