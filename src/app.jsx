import { useState } from "react";
import Button from "./componentes/button";
import Input from "./componentes/input";
import { 
  Calculator,
  Container,
  Content,
  Row,
  Column,
} from "./style/app";

const App = () => {
  var iconBS = <span className="material-symbols-outlined">backspace</span>;
  const [valueGet, valueSet] = useState("0");

  const enterValue = (value) => {
    if (valueGet.search(/[=]/g) < 0 && valueGet.search(/^[0]$/g) < 0) {
      valueSet(prev => `${prev}${value}`);
    } else {
      valueSet(() => `${value}`);
    }
  }

  const clearValue = () => {
    valueSet(() => "0");
  }

  const backValue = () => {
    if (valueGet.search(/[=]/g) < 0 && valueGet.length > 1) {
      valueSet((prev) => prev.substring(0, (prev.length - 1)));
    } else {
      clearValue();
    }
  }

  const compute = (value) => {
    let checkCalc = value.search(/([/\-*+.]{2,})/g);
  
    if (checkCalc < 0) {
      let calc = value.replace(/(^[/\-*+.])|([/\-*+.]$)/g, "");
      let regexNumber = /([.0-9]+)/g;
      let regexSignal = /([/\-*+])/g;
      let matchNumber = calc.match(regexNumber).map((num) => parseFloat(num));
      let matchSignal = calc.match(regexSignal);
      
      let i = 0;
      let result = matchNumber.reduce((a, b) => {
        let resultReturn = 0;
        switch (matchSignal[i]) {
          case "/":
            resultReturn = a / b;
          break;
          case "*":
            resultReturn = a * b;
          break;
          case "-":
            resultReturn = a - b;
          break;
          case "+":
            resultReturn = a + b;
          break;
          default:
            resultReturn = NaN;
        }
  
        i++;
        return resultReturn;
      });
  
      valueSet(prev => `${prev} = ${result}`);
    }
  }

  return (
    <Container>
      <Content>
        <Calculator>
          <Input value={valueGet} />
          <Column>
            <Row>
              <Button onClick={() => clearValue()} title="C" size="2" />
              <Button onClick={() => backValue()} title={iconBS} size="2" />
            </Row>
            <Row>
              <Button onClick={() => enterValue("7")} title="7" />
              <Button onClick={() => enterValue("8")} title="8" />
              <Button onClick={() => enterValue("9")} title="9" />
              <Button onClick={() => enterValue("/")} title="/" />
            </Row>
            <Row>
              <Button onClick={() => enterValue("4")} title="4" />
              <Button onClick={() => enterValue("5")} title="5" />
              <Button onClick={() => enterValue("6")} title="6" />
              <Button onClick={() => enterValue("*")} title="*" />
            </Row>
            <Row>
              <Button onClick={() => enterValue("1")} title="1" />
              <Button onClick={() => enterValue("2")} title="2" />
              <Button onClick={() => enterValue("3")} title="3" />
              <Button onClick={() => enterValue("-")} title="-" />
            </Row>
            <Row>
              <Button onClick={() => enterValue(".")} title="." />
              <Button onClick={() => enterValue("0")} title="0" />
              <Button onClick={() => compute(valueGet)} title="=" bgColor="#D51F1F" />
              <Button onClick={() => enterValue("+")} title="+" />
            </Row>
          </Column>
        </Calculator>
      </Content>
    </Container>
  );
}

export default App;