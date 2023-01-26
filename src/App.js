import "./App.css";
import { useState } from "react";
import React from "react";
import CalculatorButton from "./components/CalculatorButton";

function App() {
  const [outputStr, setoutputStr] = useState("0");

  function isOperand(char) {
    if (char === "+" || char === "-" || char === "*" || char === "/") {
      return true;
    } else {
      return false;
    }
  }

  function addToOutputStr(event) {
    if (outputStr.length > 18) {
      alert("Error: too big input");
      return;
    }

    var tempStr =
      outputStr === "0" || outputStr === "Error"
        ? event.target.value
        : outputStr + event.target.value;
    if (isOperand(outputStr.slice(-1)) && isOperand(tempStr.slice(-1))) {
      return;
    } else {
      setoutputStr(tempStr);
    }
  }

  function clearOutputStr(event) {
    setoutputStr("");
  }

  function calculate(event) {
    var tempCalculation = outputStr;
    var numbersInHexa = outputStr.split(/[+-/*]+/);
    var numbersInDecimal = [];

    for (let i = 0; i < numbersInHexa.length; i++) {
      numbersInDecimal.push(parseInt(numbersInHexa[i], 16));
    }

    for (let i = 0; i < numbersInHexa.length; i++) {
      tempCalculation = tempCalculation.replace(
        numbersInHexa[i],
        numbersInDecimal[i]
      );
    }

    let result = eval(tempCalculation).toString(16).toUpperCase();
    setoutputStr(result);

    if (result.length > 18) {
      alert("Error: too big result");
      setoutputStr("Error");
    }

    if (result.startsWith("INFINITY")) {
      alert("Error: illegal arithmetic operation");
      setoutputStr("Error");
    }
  }
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center "
        style={{ minHeight: "100vh" }}
      >
        <div className="calculator col-md-4 bg-light p-0 ">
          <div className="result">
            <span className="">{outputStr}</span>
          </div>
          <div className="d-flex flex-row justify-content-around">
            <CalculatorButton
              addToOutputStr={addToOutputStr}
              width="8"
              value="0"
            ></CalculatorButton>
            <button
              className="col-2 btn btn-light my-2"
              onClick={clearOutputStr}
            >
              CA
            </button>
          </div>
          <div className="d-flex flex-row justify-content-around">
            <div className="col-8 d-flex flex-row justify-content-around">
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="1"
              ></CalculatorButton>{" "}
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="2"
              ></CalculatorButton>{" "}
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="3"
              ></CalculatorButton>
            </div>
            <CalculatorButton
              addToOutputStr={addToOutputStr}
              width="2"
              value="+"
            ></CalculatorButton>
          </div>
          <div className="d-flex flex-row justify-content-around">
            <div className="col-8 d-flex flex-row justify-content-around">
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="4"
              ></CalculatorButton>
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="5"
              ></CalculatorButton>
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="6"
              ></CalculatorButton>
            </div>
            <CalculatorButton
              addToOutputStr={addToOutputStr}
              width="2"
              value="-"
            ></CalculatorButton>{" "}
          </div>
          <div className="d-flex flex-row justify-content-around">
            <div className="col-8 d-flex flex-row justify-content-around">
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="7"
              ></CalculatorButton>{" "}
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="8"
              ></CalculatorButton>{" "}
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="9"
              ></CalculatorButton>
            </div>
            <CalculatorButton
              addToOutputStr={addToOutputStr}
              width="2"
              value="/"
            ></CalculatorButton>{" "}
          </div>
          <div className="d-flex flex-row justify-content-around">
            <div className="col-8 d-flex flex-row justify-content-around">
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="A"
              ></CalculatorButton>{" "}
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="B"
              ></CalculatorButton>{" "}
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="C"
              ></CalculatorButton>
            </div>
            <CalculatorButton
              addToOutputStr={addToOutputStr}
              width="2"
              value="*"
            ></CalculatorButton>{" "}
          </div>
          <div className="d-flex flex-row justify-content-around">
            <div className="col-8 d-flex flex-row justify-content-around">
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="D"
              ></CalculatorButton>{" "}
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="E"
              ></CalculatorButton>{" "}
              <CalculatorButton
                addToOutputStr={addToOutputStr}
                width="3"
                value="F"
              ></CalculatorButton>
            </div>
            <button className="col-2 btn btn-light my-2" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
