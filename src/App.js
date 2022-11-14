import React from 'react';
import s from './App.module.css';


function App() {


  return (
    <div className={s.app}>
      <h1>Generate a secure password</h1>
      <div className={s.password}>
        <input placeholder='Generating....' />
      </div>
      <div className={s.settings}>
        <div className={s.passwordLength}>
          Password Length <div className={s.submit}><input type="number" min="1" max="25" value="1" />
          <input type='submit' value='GENERATE' className={s.submitButton} /></div>S
        </div>
        <div className={s.settingsDetail}>
          <div><input type='checkbox' /> <label>Uppercase</label></div>
          <div><input type='checkbox' /> <label>Lowercase</label></div>
          <div><input type='checkbox' /> <label>Numbers</label></div>
          <div><input type='checkbox' /> <label>Symbols</label></div>
        </div>
      </div>

    </div >
  );
}

export default App;