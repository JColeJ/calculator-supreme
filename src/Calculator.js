
import './Calculator.css';

//TODO: Try to add additional rows to make this look like the calculator from Microsoft

function Calculator() {
  return (
      <table>
        <tr aria-colspan={4}>
            0
        </tr>

        <tr>
          <td><div>AC</div></td>
          <td><div>CE</div></td>
          <td><div>%</div></td>
          <td><div>del</div></td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>x</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>-</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>+</td>
        </tr>
        <tr>
          <td>0</td>
          <td>.</td>
          <td>=</td>
          <td></td>
        </tr>
      </table>
  );
}

export default Calculator;