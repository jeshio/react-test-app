import { useState } from 'react';
import './App.css';

function App() {
  // const moneyState = useState(200)
  // const currentMoney = moneyState[0]
  // const setCurrentMoney = moneyState[1]

  const [money, setMoney] = useState(200)
  const [name, setName] = useState("Без имени")

  function moneyUp() {
    setMoney(money + 10)
    setName("Богатей")
  }

  function askName() {
    const userName = prompt()
    setName(userName)
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <p>
        Текст
        <button onClick={moneyUp}>Поднять денег</button>
        <button onClick={askName}>Указать имя</button>
      </p>
      <div>
        Сколько денег? {money} Р
      </div>
    </div>
  );
}

export default App;
