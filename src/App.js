import React from 'react';
import s from './App.module.css';
import { Password } from './Settings/Password/Password';
import { Settings } from './Settings/Settings';


function App() {
  return (
    <div className={s.app}>
      <h1>Generate a secure password</h1>
      <Password />
      <Settings />
    </div >
  );
}

export default App;
