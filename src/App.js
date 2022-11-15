import React, { useState } from 'react';
import s from './App.module.css';
import { Password } from './Password/Password';
import { Settings } from './Settings/Settings';


function App() {

  const initialState = {
    passLength: 1,
    upperCase: false,
    lowerCase: false,
    num: false,
    symb: false
  }

  const [settings, setSettings] = useState(initialState);
  const [randomPassword, setRandomPassword] = useState('');

  const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

  const generate = () => {
    const array = []

    if (settings.upperCase) { array.push(uppercase) }
    if (settings.lowerCase) { array.push(lowercase) }
    if (settings.num) { array.push(numbers) }
    if (settings.symb) { array.push(symbols) }

let resultArray = [];
    for (let i = 0; i <= settings.passLength; i++) {
        let randomArrayIndex = Math.floor(Math.random() * (array.length - 1));
        resultArray.push(array[randomArrayIndex][Math.round(Math.random() * array[randomArrayIndex].length)]
        )
    }
    setRandomPassword(resultArray.join(''))
  }

  return (
    <div className={s.app}>
      <h1>Generate a secure password</h1>
      <Password randomPassword={randomPassword} />
      <Settings settings={settings} setSettings={setSettings} generate={generate} />
    </div >
  );
}

export default App;
